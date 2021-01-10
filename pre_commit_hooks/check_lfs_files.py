import subprocess
import json
import os
from typing import Set, List
import pkg_resources
import sys

import yaml


def run(cmd: List[str]) -> str:
    try:
        result = subprocess.run(cmd, stdout=subprocess.PIPE, text=True, check=True)
        return result.stdout
    except subprocess.CalledProcessError:
        print(f"Something went wrong executing command {' '.join(cmd)}")
        sys.exit(1)


def get_lfs_extensions() -> List[str]:
    resource_package = __package__
    cfg_file = pkg_resources.resource_filename(resource_package, "cfg.yaml")
    with open(cfg_file, "r") as f:
        cfg = yaml.safe_load(f)
    extensions = cfg.get("extensions")
    # remove the astrik at the beginning of extension
    extensions = [ext[1:] for ext in extensions]
    return extensions


def added_files() -> Set[str]:
    cmd = ["git", "diff", "--staged", "--name-only"]
    added_files = run(cmd)
    return set(added_files.splitlines())


def check_lfs_files(file_types: List[str]) -> int:
    staged_files = added_files()

    cmd = ["git", "lfs", "status", "--json"]
    lfs_files = run(cmd)
    files_names = set(json.loads(lfs_files)["files"])

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


def main() -> int:
    extensions = get_lfs_extensions()
    return check_lfs_files(extensions)


if __name__ == "__main__":
    sys.exit(main())
