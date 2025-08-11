import os
import shutil
import glob
import re
import subprocess
from pathlib import Path

# Step 1: 下载缺失资源

def step1_download_resources():
    print("[Step 1] 执行 make build 下载缺失资源...")
    try:
        subprocess.run(["make", "build"], check=True)
        print("资源下载完成.")
    except Exception as e:
        print(f"make build 执行失败: {e}")

# Step 2: 替换 JS 原文件

def step2_replace_js():
    print("[Step 2] 替换 index.js 文件...")
    # tada file
    src_tada_js = Path("tools/indexjs/tada/index.eaa70.js")
    # jili file
    src_jili_js = Path("tools/indexjs/jili/index.jili.js")
    if not src_tada_js.exists():
        print(f"未找到源文件: {src_tada_js}")
        return
    if not src_jili_js.exists():
        print(f"未找到源文件: {src_jili_js}")
        return
    project_root = Path.cwd()
    # 查找所有包含3.6子文件夹的路径
    for root, dirs, files in os.walk(project_root):
        if "3.6" in dirs:
            path_36 = Path(root) / "3.6"
            web_mobile = path_36 / "web-mobile" / "assets" / "other"
            src_js = src_tada_js if "tada" in root else src_jili_js
            if web_mobile.exists():
                for jsfile in web_mobile.glob("index*.js"):
                    print(f"替换: {jsfile}")
                    shutil.copy(src_js, jsfile)
    print("index.js 替换完成.")

# Step 3: 修改 index.html

def step3_patch_index_html():
    print("[Step 3] 修改 index.html ...")
    project_root = Path.cwd()
    for root, dirs, files in os.walk(project_root):
        if "index.html" in files:
            html_path = Path(root) / "index.html"
            with open(html_path, "r", encoding="utf-8") as f:
                content = f.read()
            # 注释掉 gtag.js script 标签
            content = re.sub(r'(<script[^>]*src="https://www.googletagmanager.com/gtag/js[^"]*"[^>]*></script>)', r'<!-- \1 -->', content, flags=re.MULTILINE)
            # 删除/注释掉 gtag 初始化代码块
            content = re.sub(r'<script>.*?gtag\([\s\S]*?\).*?</script>', '<script>\n// gtag 代码已注释\n</script>', content, flags=re.DOTALL)
            # 插入全局变量代码
            parent_folder = Path(root).name
            global_js = f'''
<script>
      const queryStringTest = window.location.search;
      const urlParamsTest = new URLSearchParams(queryStringTest);
      const urlParams_getTest = function(name) {{
        return urlParamsTest.get(name) || '';
      }}
      window["TEST"] = urlParams_getTest('demo') == 'true';
      window["DW_GAME"] = "{parent_folder}";
      window["DW_URL_HTTP"] = "https://ws-dadaslot.schemefun.com";
      // window["DW_URL_HTTP"] = "https://127.0.0.1:8000";
      window["DW_URL_WS"] = "wss://ws-dadaslot.schemefun.com/lifeservice/ws2";
      // window["DW_URL_WS"] = "wss://127.0.0.1:8000/lifeservice/ws2";
</script>
'''
            # 简单插入到</body>前
            if "DW_GAME" not in content:
                content = re.sub(r'(</body>)', global_js + r'\1', content, flags=re.IGNORECASE)
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"已修改: {html_path}")
    print("index.html 修改完成.")

# Step 4: 添加上传游戏记录接口

def step4_patch_game_js():
    print("[Step 4] Patch game/main js 脚本...")
    project_root = Path.cwd()
    send_func_code = '''\
const SendTestSpinInfo = function (data,trueData) {
    const gameData = {
        userId: 123,
        gameId: parseInt(GetLinkParameterByName("gameId")), // mc game
        betAmount: trueData.RealBet,
        baseBet: trueData.BaseBet,
        gameData: data
    };
    const init = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body:  JSON.stringify(gameData),
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        referrer: "about:client",
        integrity: "",
        duplex: 'half'  // 仅在 body 存在时设置 duplex
    };
    let newUrl=DW_URL_HTTP+"/save-game-data.api"+"?tag="+GetLinkParameterByName("gameTag")+"&gameId="+GetLinkParameterByName("gameId");
    const request= new Request(newUrl, init);
    // 使用 fetch API 发送请求 如果 TEST 为 true 不用請求接口
    if(TEST){
        fetch(request);
    }
};
'''
    for root, dirs, files in os.walk(project_root):
        if "index.html" in files:
            assets_dir = Path(root) / "assets"
            for sub in ["game", "main"]:
                subdir = assets_dir / sub
                if subdir.exists():
                    for jsfile in subdir.glob("index*.js"):
                        print(f"处理: {jsfile}")
                        with open(jsfile, "r", encoding="utf-8") as f:
                            code = f.read()
                        backup_path = jsfile.with_suffix(jsfile.suffix + ".bak")
                        shutil.copy(jsfile, backup_path)
                        # 1. 匹配OnCommand方法（兼容解密后无括号形式以及有括号形式）
                        # 示例1: _0x26d398.OnCommand = function (a,b) { ... }
                        # 示例2: (_0x26d398.OnCommand = function (a,b) { ... })
                        pattern_oncmd = r'(?P<head>(?P<paren>\()?\s*(?P<obj>[A-Za-z_$][\w$]*)\.OnCommand\s*=\s*function\s*\((?P<params>[^)]*)\)\s*\{)'
                        m = re.search(pattern_oncmd, code)
                        if not m:
                            print(f"未找到OnCommand方法: {jsfile}")
                            if backup_path.exists():
                                backup_path.unlink()
                            continue
                        obj = m.group('obj')
                        params = m.group('params')
                        # 2. 增加data参数（若不存在）
                        param_list = [p.strip() for p in params.split(',') if p.strip() != '']
                        if 'data' not in param_list:
                            new_params = (', '.join(param_list + ['data'])) if param_list else 'data'
                            # 构造新的方法头，保留可选的前置括号
                            paren = m.group('paren') or ''
                            new_head = f"{paren}{obj}.OnCommand = function({new_params}) {{"
                            head_start, head_end = m.span('head')
                            code = code[:head_start] + new_head + code[head_end:]
                        # 4. 找switch-case，插入SendTestSpinInfo调用
                        def insert_send_func(code):
                            # 模糊查找 AckType.spin 和 AckType.lastSpin 语句
                            pattern = r'(case\s+[^:]+\.AckType\.(?:spin|lastSpin):[\s\S]*?)(break;)'
                            def repl_case(match):
                                case_block = match.group(1)
                                # 模糊查找变量赋值，支持多种格式
                                spinack_var = None
                                
                                # 尝试多种匹配模式
                                patterns_to_try = [
                                    # 标准格式: var r = SpinAck.decode(...)
                                    r'(var|let|const)?\s*([a-zA-Z_$][\w$]*)\s*=\s*[^;]*?SpinAck\.decode\([^)]*\)',
                                    # 简化格式: r = SpinAck.decode(...)
                                    r'([a-zA-Z_$][\w$]*)\s*=\s*[^;]*?SpinAck\.decode\([^)]*\)',
                                    # 括号格式: (r = SpinAck.decode(...))
                                    r'\(\s*([a-zA-Z_$][\w$]*)\s*=\s*[^)]*?SpinAck\.decode\([^)]*\)\s*\)',
                                    # 更宽松的匹配: 任何包含 SpinAck.decode 的赋值
                                    r'([a-zA-Z_$][\w$]*)\s*[=:]\s*[^;]*?SpinAck\.decode',
                                    # 查找任何变量赋值，然后检查是否在 SpinAck.decode 附近
                                    r'(var|let|const)?\s*([a-zA-Z_$][\w$]*)\s*='
                                ]
                                
                                for pattern in patterns_to_try:
                                    m2 = re.search(pattern, case_block)
                                    if m2:
                                        if len(m2.groups()) >= 2 and m2.group(2):
                                            spinack_var = m2.group(2)
                                        else:
                                            spinack_var = m2.group(1)
                                        # 验证这个变量确实在 SpinAck.decode 附近
                                        if 'SpinAck.decode' in case_block:
                                            break
                                        else:
                                            spinack_var = None
                                
                                if spinack_var:
                                    # 在break之前插入SendTestSpinInfo调用
                                    insert_code = f'\n            SendTestSpinInfo({spinack_var}, data);\n'
                                    return case_block + insert_code + match.group(2)
                                else:
                                    return match.group(0)
                            return re.sub(pattern, repl_case, code)
                        code = insert_send_func(code)
                        # 3. 添加SendTestSpinInfo方法到OnCommand方法体最开头（如果没有）
                        if 'SendTestSpinInfo' in code:
                            # 找OnCommand方法体开始位置
                            oncmd_start = code.find(f'{obj}.OnCommand')
                            if oncmd_start != -1:
                                # 找到方法体开始的 {
                                brace_start = code.find('{', oncmd_start)
                                if brace_start != -1:
                                    # 在方法体最开头插入SendTestSpinInfo
                                    code = code[:brace_start+1] + '\n' + send_func_code + code[brace_start+1:]
                        with open(jsfile, "w", encoding="utf-8") as f:
                            f.write(code)
                        print(f"已自动插入SendTestSpinInfo: {jsfile}")
                        # remove backup file
                        if backup_path.exists():
                            backup_path.unlink()
    print("game/main js patch自动化完成.")


def main():
    step1_download_resources()
    step2_replace_js()
    step3_patch_index_html()
    step4_patch_game_js()

if __name__ == "__main__":
    main() 