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
import platform

# 使用示例
download_folder_path = "fg3/assets"  # 替换为你的本地文件夹路径
download_base_url = "https://casino-wbgame.tadagaming.com/fg3/assets/"
download_origin_url = "https://casino-wbgame.tadagaming.com/"


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


def download_asset_files(folder_path, download_base_url):
    """
    Windows: 遍历webp，下载远程astc。
    Mac: 遍历astc，下载远程webp。
    """
    sys_platform = platform.system().lower()
    if sys_platform.startswith("win"):
        # Windows: webp -> astc
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                if file.endswith(".webp"):
                    webp_file = os.path.join(root, file)
                    rel_path = os.path.relpath(webp_file, folder_path)
                    astc_rel_path = rel_path[:-5] + ".astc"
                    astc_url = download_base_url + astc_rel_path.replace(os.sep, "/")
                    local_astc_file = os.path.join(root, os.path.splitext(file)[0] + ".astc")
                    print(f"[Windows] 正在下载: {astc_url} -> {local_astc_file}")
                    try:
                        response = requests.get(astc_url, stream=True)
                        if response.status_code == 200:
                            with open(local_astc_file, "wb") as f:
                                for chunk in response.iter_content(chunk_size=8192):
                                    if chunk:
                                        f.write(chunk)
                            print(f"下载成功: {local_astc_file}")
                        else:
                            print(f"下载失败，状态码: {response.status_code}，URL: {astc_url}")
                    except Exception as e:
                        print(f"下载 {astc_url} 时出错: {str(e)}")
    elif sys_platform == "darwin":
        # Mac: astc -> webp
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                if file.endswith(".astc"):
                    astc_file = os.path.join(root, file)
                    rel_path = os.path.relpath(astc_file, folder_path)
                    webp_rel_path = rel_path[:-5] + ".webp"
                    webp_url = download_base_url + webp_rel_path.replace(os.sep, "/")
                    local_webp_file = os.path.join(root, os.path.splitext(file)[0] + ".webp")
                    print(f"[Mac] 正在下载: {webp_url} -> {local_webp_file}")
                    try:
                        response = requests.get(webp_url, stream=True)
                        if response.status_code == 200:
                            with open(local_webp_file, "wb") as f:
                                for chunk in response.iter_content(chunk_size=8192):
                                    if chunk:
                                        f.write(chunk)
                            print(f"下载成功: {local_webp_file}")
                        else:
                            print(f"下载失败，状态码: {response.status_code}，URL: {webp_url}")
                    except Exception as e:
                        print(f"下载 {webp_url} 时出错: {str(e)}")
    else:
        print(f"不支持的平台: {sys_platform}")


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
    # input_dir = os.path.join("astarte2", "3.6", "web-mobile", "assets", "other")
    # pattern = os.path.join(input_dir, "index*.js")
    # files = glob.glob(pattern)
    # for input_js in files:
    #     base, ext = os.path.splitext(input_js)
    #     output_js = f"{base}_decoded{ext}"
    #     run_decode_js(os.path.abspath(input_js), os.path.abspath(output_js))

    """
    在所有根目录的文件夹中模糊查找是否有"3.6"的文件夹，
    如果有就继续查找该文件夹中是否有"web-mobile"文件夹，
    最终查找 assets/other 目录下以 index 开头的 js 文件并处理。
    """
    project_root = os.getcwd()
    for root, dirs, files in os.walk(project_root):
        # 查找名为"3.6"的文件夹
        if "3.6" in dirs:
            path_36 = os.path.join(root, "3.6")
            # 查找"3.6"下的"web-mobile"
            web_mobile_path = os.path.join(path_36, "web-mobile")
            if os.path.isdir(web_mobile_path):
                # assets/other 路径
                other_path = os.path.join(web_mobile_path, "assets", "other")
                if os.path.isdir(other_path):
                    pattern = os.path.join(other_path, "index*.js")
                    files = glob.glob(pattern)
                    # 只獲取第一個文件
                    files = files[:1]
                    for input_js in files:
                        base, ext = os.path.splitext(input_js)
                        output_js = f"{base}_decoded{ext}"
                        run_decode_js(
                            os.path.abspath(input_js), os.path.abspath(output_js)
                        )


def build_all():
    # 在这里实现构建所有的逻辑
    # 下載缺失的文件
    find_and_download_bin_files(download_folder_path, download_base_url)
    # 添加並轉換文件(png->astc)
    download_asset_files(convert_folder_path, download_origin_url)
    # 解码 JavaScript 文件
    #     decode_index_js_files()
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
        download_asset_files(convert_folder_path, download_origin_url)
    if args.decode:
        decode_index_js_files()
