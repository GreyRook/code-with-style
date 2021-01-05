import subprocess
import json
import os


def added_files():
    cmd = ["git", "diff", "--staged", "--name-only"]
    added_files = subprocess.run(cmd, stdout=subprocess.PIPE, text=True)
    return set(added_files.stdout.splitlines())


def check_lfs_files(file_types):
    staged_files = added_files()

    cmd = ["git", "lfs", "status", "--json"]
    lfs_files = subprocess.run(cmd, stdout=subprocess.PIPE, text=True)
    files_names = set(json.loads(lfs_files.stdout)["files"])

    for complete_name in staged_files:
        _, file_extension = os.path.splitext(complete_name)

        if file_extension not in file_types:
            continue

        if complete_name not in files_names:
            print(
                f"Extension {file_extension} should be tracked by lfs, however {complete_name} is not."
            )
            return 1
    return 0


def main():
    return check_lfs_files([".png"])


if __name__ == "__main__":
    exit(main())
