# Pre-commit Hooks

Git Hook is a script that runs automatically on commit, to make sure that changes comply with the style guide before they are committed.

This will save the reviewer some time as he/she will not be wasting time on trivial style nitpicks such as forgetting to run linters, trailing whitespaces, and debug statements and focus on the architecture and functionality of the merge request.

For that we use a [pre-commit](https://pre-commit.com/), a framework for managing and maintaining multi-language pre-commit hooks.

# HOWTO: add pre-commit to a project

* install pre-commit with `pip install pre-commit`
* navigate to the project where the hooks wanted to be used
* create a file named `.pre-commit-config.yaml`
* add the hooks into the yaml file
    
    Example:
    ```yaml
    repos:
    -   repo: url of the hook's repository
        rev: version or commit SHA
        hooks:
        -   id: id of the hook
        -   id: ...
    ```
* run `pre-commit install`
* run `pre-commit run --all-files` to apply the hooks on the existing files (optional)

Now the hooks will run on the staged files every time we try to commit changes.

Note: these steps need to be done only once. If more hooks are needed repeat point 4 (add the new hook to `.pre-commit-config.yaml` file).

# HOWTO: create a new hook

There is a lot of predefined hooks available [available-hooks](https://pre-commit.com/hooks.html). However, we can create our own hooks, to do so follow these steps:

* create a file named `.pre-commit-hooks.yaml` in the git repo that will contain the hook.
* define the hook in the yaml file 
    
    Example:
    ```yaml
    -   id: trailing-whitespace
        name: Trim Trailing Whitespace
        description: This hook trims trailing whitespace.
        entry: trailing-whitespace-fixer
        language: python
        types: [text]
        stages: [commit, push]
    ```
* make sure that hook repository is installable (e.g. contains by either `setup.py` or `pyproject.toml` for python)
* add the script name (entry) either to `console_scripts` in `setup.py` or `[tool.poetry.scripts]` in `pyproject.toml`

    Example
    ```python
    entry_points={
        "console_scripts": [
            "trailing-whitespace-fixer=pre_commit_hooks.trailing_whitespace_fixer:main",
        ]
    },
    ```

### Developing hooks interactively

For testing a developed hook locally without pushing the code to a remote repo, run this command from the repo that uses the hook and contains `.pre-commit-config.yaml` file

`pre-commit try-repo /path/to/hook's/repo hook-name --verbose --all-files`

### Stages

When creating a new hook we can confine at which stage it should be run. It would be helpful that quick hooks such as linters could be run on commit and time-consuming hooks e.g. unit tests could run just before pushing.

Stages can be defined as a list when defining the hook in `.pre-commit-config.yaml` (default is all stages).