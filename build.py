import os
import shutil
import sys


def clear_build_folder():
    # check if build folder exists
    if not os.path.exists("./build"):
        os.makedirs("./build")
    else:
        # clear build folder use shutil and check if folder is not empty
        if os.listdir("./build"):   
            shutil.rmtree("./build")


def copy_astarte_mw2_smallicon():
    # copy astarte, mw2, smallicon to build folder using shutil
    shutil.copytree("./astarte2", "./build/astarte2")
    shutil.copytree("./mw3", "./build/mw3")
    shutil.copytree("./smallicon", "./build/smallicon")


if __name__ == "__main__":
    # clear_build_folder()
    # copy_astarte_mw2_smallicon()
    # check arg
    if len(sys.argv) > 1:
        if sys.argv[1] == "clear":
            clear_build_folder()
        elif sys.argv[1] == "copy":
            copy_astarte_mw2_smallicon()
