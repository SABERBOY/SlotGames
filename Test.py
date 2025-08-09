import requests
import os
import subprocess
import urllib.parse
import json
import argparse
from urllib.parse import quote
from pathlib import Path
import glob
import subprocess


game_name = ""
project_root = Path.cwd()
for root, dirs, files in os.walk(project_root):
    if "index.html" in files:
        game_name = Path(root).name
        break
print(f"找到游戏目录: {game_name}")

# 使用示例
download_folder_path = f"{game_name}/assets"  # 替换为你的本地文件夹路径
download_base_url = f"https://casino-wbgame.tadagaming.com/{game_name}/assets/"


def find_and_download_bin_files(folder_path, base_url):
    # 确保文件夹存在
    if not os.path.exists(folder_path):
        print(f"文件夹 {folder_path} 不存在")
        return

    # 遍历文件夹及其子文件夹
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".bin") or file.endswith(".cconb"):
                # 获取文件相对于 folder_path 的路径
                rel_path = os.path.relpath(os.path.join(root, file), folder_path)
                # 将路径中的反斜杠替换为正斜杠以符合 URL 格式
                rel_path = rel_path.replace(os.sep, "/")
                # 编码路径以处理特殊字符
                encoded_path = quote(rel_path)
                # 拼接完整 URL
                file_url = base_url + encoded_path

                print(f"正在处理文件: {rel_path}")
                print(f"下载 URL: {file_url}")

                try:
                    # 发送 HTTP 请求下载文件
                    response = requests.get(file_url, stream=True)
                    # 检查请求是否成功
                    if response.status_code == 200:
                        # 确保目标文件夹存在
                        os.makedirs(
                            os.path.dirname(os.path.join(folder_path, rel_path)),
                            exist_ok=True,
                        )
                        # 临时文件路径
                        temp_file = os.path.join(folder_path, rel_path + ".tmp")
                        # 下载并保存到临时文件
                        with open(temp_file, "wb") as f:
                            for chunk in response.iter_content(chunk_size=8192):
                                if chunk:
                                    f.write(chunk)
                        print(f"文件下载成功: {rel_path}")

                        # 替换原文件
                        original_file = os.path.join(folder_path, rel_path)
                        os.replace(temp_file, original_file)
                        print(f"已替换文件: {original_file}")
                    else:
                        print(
                            f"下载失败，状态码: {response.status_code}，URL: {file_url}"
                        )
                except Exception as e:
                    print(f"处理文件 {rel_path} 时出错: {str(e)}")


# find_and_download_bin_files(download_folder_path, download_base_url)


import os
import subprocess
from PIL import Image


def convert_webp_to_png(webp_file, png_file):
    """
    将 .webp 文件转换为 .png 文件
    """
    try:
        img = Image.open(webp_file)
        img.save(png_file, "PNG")
        print(f"已将 {webp_file} 转换为 {png_file}")
        return True
    except Exception as e:
        print(f"转换 {webp_file} 到 PNG 失败: {str(e)}")
        return False


def convert_webp_to_astc(folder_path, astcenc_path="astcenc-avx2"):
    """
    查找文件夹中的所有 .webp 文件，转换为 .png 后再转换为 .astc 文件
    参数:
        folder_path: 本地文件夹路径
        astcenc_path: astcenc 工具的路径或命令
    """
    # 确保文件夹存在
    if not os.path.exists(folder_path):
        print(f"文件夹 {folder_path} 不存在")
        return

    # 遍历文件夹及其子文件夹
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".webp"):
                # 获取文件的完整路径
                webp_file = os.path.join(root, file)
                # 生成中间 .png 文件路径
                png_file = os.path.splitext(webp_file)[0] + ".png"
                # 生成输出 .astc 文件路径
                astc_file = os.path.splitext(webp_file)[0] + ".astc"

                print(f"正在处理文件: {webp_file}")

                # Step 1: 将 .webp 转换为 .png
                if not convert_webp_to_png(webp_file, png_file):
                    continue  # 如果转换失败，跳过此文件

                # Step 2: 使用 astcenc 将 .png 转换为 .astc
                try:
                    # 运行 astcenc 命令
                    # 示例: astcenc-avx2 -cl input.png output.astc 4x4 -fast
                    cmd = [
                        astcenc_path,
                        "-cl",  # 压缩模式
                        png_file,  # 输入文件（PNG）
                        astc_file,  # 输出文件（ASTC）
                        "6x6",  # 块大小
                        "-medium",  # 压缩质量（快速模式）
                    ]
                    result = subprocess.run(
                        cmd, capture_output=True, text=True, check=True
                    )
                    print(f"成功转换: {webp_file} -> {astc_file}")

                    # 可选：删除中间生成的 .png 文件
                    try:
                        os.remove(png_file)
                        print(f"已删除中间文件: {png_file}")
                    except Exception as e:
                        print(f"删除中间文件 {png_file} 失败: {str(e)}")

                except subprocess.CalledProcessError as e:
                    print(f"转换文件 {png_file} 到 ASTC 失败: {e.stderr}")
                except FileNotFoundError:
                    print(f"astcenc 工具未找到，请确保 {astcenc_path} 已安装并配置正确")
                    return
                except Exception as e:
                    print(f"处理文件 {webp_file} 时出错: {str(e)}")


# 使用示例
convert_folder_path = "./"  # 替换为你的本地文件夹路径
convert_astcenc_path = (
    "./tools/astcenc/windows/bin/astcenc-avx2.exe"  # 替换为你的 astcenc 工具路径
)
# convert_webp_to_astc(convert_folder_path, convert_astcenc_path)


def run_decode_js(input_js, output_js):
    """
    进入 tools/decode-js/ 目录并执行 node src/main.js -t obfuscator -i 输入js -o 输出js
    输入输出路径为相对于项目根目录的相对路径
    """
    print(f"正在解码: {input_js} -> {output_js}")
    project_root = os.getcwd()
    decode_js_dir = os.path.join(project_root, "tools", "decode-js")
    # 保持输入输出路径为相对于项目根目录的路径
    cmd = ["node", "src/main.js", "-t", "obfuscator", "-i", input_js, "-o", output_js]
    print(f"执行命令: {' '.join(cmd)}")
    subprocess.run(cmd, cwd=decode_js_dir, check=True)


def decode_index_js_files():
    """
    查找 astarte2/3.6/web-mobile/assets/other/ 目录下以 index 开头的 js 文件，
    并调用 run_decode_js 进行处理，输出文件放在输入文件夹中，文件名为原名加 _decoded.js
    """
    # 新逻辑：
    # 1) 在项目根目录递归查找包含 index.html 的文件夹
    # 2) 若该文件夹存在 assets 子目录，则在 assets/game 与 assets/main 目录下
    #    查找以 index 开头的 .js 文件
    # 3) 使用 run_decode_js 进行解密，输出到同目录，文件名追加 _decoded

    project_root = os.getcwd()
    total_decoded = 0
    for root, dirs, files in os.walk(project_root):
        if "index.html" in files and "assets" in dirs:
            assets_dir = os.path.join(root, "assets")
            for sub in ("game", "main"):
                target_dir = os.path.join(assets_dir, sub)
                if os.path.isdir(target_dir):
                    pattern = os.path.join(target_dir, "index*.js")
                    js_files = glob.glob(pattern)
                    for input_js in js_files:
                        # 直接替换原始文件：写入同目录的临时文件后原子替换
                        input_abs = os.path.abspath(input_js)
                        tmp_out = input_abs + ".tmp"
                        try:
                            run_decode_js(input_abs, tmp_out)
                            os.replace(tmp_out, input_abs)
                            total_decoded += 1
                        except subprocess.CalledProcessError as e:
                            print(f"解码失败: {input_abs}\n{e}")
                            if os.path.exists(tmp_out):
                                try:
                                    os.remove(tmp_out)
                                except Exception:
                                    pass
                        except Exception as e:
                            print(f"处理文件出错: {input_abs} -> {e}")
                            if os.path.exists(tmp_out):
                                try:
                                    os.remove(tmp_out)
                                except Exception:
                                    pass

    print(f"decode_index_js_files 完成，共处理 {total_decoded} 个文件")


def build_all():
    # 在这里实现构建所有的逻辑
    # 下載缺失的文件
    find_and_download_bin_files(download_folder_path, download_base_url)
    # 添加並轉換文件(png->astc)
    convert_webp_to_astc(convert_folder_path, convert_astcenc_path)
    # 解码 JavaScript 文件
    decode_index_js_files()
    pass


# main
if __name__ == "__main__":
    #     通過參數來執行命令
    parser = argparse.ArgumentParser(
        description="Build and compile Protocol Buffers files."
    )
    parser.add_argument("--build", action="store_true", help="Compile all .proto files")
    parser.add_argument(
        "--download", action="store_true", help="Download missing files"
    )
    parser.add_argument(
        "--convert", action="store_true", help="Convert images to ASTC format"
    )
    parser.add_argument(
        "--decode", action="store_true", help="Decode obfuscated JavaScript files"
    )

    args = parser.parse_args()

    if args.build:
        build_all()
    if args.download:
        find_and_download_bin_files(download_folder_path, download_base_url)
    if args.convert:
        convert_webp_to_astc(convert_folder_path, convert_astcenc_path)
    if args.decode:
        decode_index_js_files()
