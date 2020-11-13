# Pipenv Poetry Comparison

## Overview

While Pipenv is used for dependency management only, Poetry also offers building `sdlist`s and `wheel`s and publishing them on PyPI or other repositories.
In terms of dependency management, there are two core features, Poetry offers in contrast to pipenv.

1. Pipenv uses `Pipfile` and `Pipfile.lock` for configuring dependency.
   However, if you create a python module, you still need to specify the requirements in `setup.py`, which is more complex than just adding dependencies to a toml file.

   Poetry just uses `pyproject.toml` and `poetry.lock`.
   There is no need for `setup.py`
2. Poetry lets you use multiple virtual environments per project.
   You can use them to run your project with different python versions.

## Pipenv vs. Poetry Feature Comparison

| feature                                                                                   | pipenv             | poetry             |
| ----------------------------------------------------------------------------------------- | :----------------: | :----------------: |
| **Project setup**                                                                         |                    |                    |
| dependency configuration a in single file                                                 | :x:                | :white_check_mark: |
| automatic project setup                                                                   | :white_check_mark: | :white_check_mark: |
| interactive project setup                                                                 | :x:                | :white_check_mark: |
| define scripts in config file                                                             | :white_check_mark: | :white_check_mark: |
| project specific configuration                                                            |  1                 | :white_check_mark: |
| other python distributions                                                                | :white_check_mark: |                    |
| automatic installation of required python version                                         | :white_check_mark: |                    |
| **Virtual environment**                                                                   |                    |                    |
| multiple virtual environments per project (e.g. for using with multiple python versions)  | :white_check_mark: | :white_check_mark: |
| pass environmentvariables from a file to virtual environment                              | :white_check_mark: |                    |
| use user-built virtual environment                                                        | :white_check_mark: |                    |
| virtual environment can be placed in project folder                                       | :white_check_mark: | :white_check_mark: |
| custom virtual environment location                                                       | :white_check_mark: | :white_check_mark: |
| **Project build**                                                                         |                    |                    |
| build project (wheel and sdlist)                                                          | :x:                | :white_check_mark: |
| publish project on PyPI etc.                                                              | :x:                | :white_check_mark: |
| **Dependencies**                                                                          |                    |                    |
| lock dependencies (with hashes)                                                           | :white_check_mark: | :white_check_mark: |
| dev-packages                                                                              | :white_check_mark: | :white_check_mark: |
| extra-packages (packages that are not required bud enhance project)                       | :x:                | :white_check_mark: |
| update dependencies within range specified in config file                                 | :white_check_mark: | :white_check_mark: |
| install from url/path                                                                     | :white_check_mark: | :white_check_mark: |
| install packages from custom repos (git with https, ssh), install editable                | :white_check_mark: | :white_check_mark: |
| install packages from other VC software than git                                          | :white_check_mark: | :x:                |
| list installed packages and sub-dependencies                                              | :white_check_mark: | :white_check_mark: |
| remove packages                                                                           | :white_check_mark: | :white_check_mark: |
| export to requirements.txt                                                                | :white_check_mark: | :white_check_mark: |
| exprot to requirements.txt with hashes                                                    | :white_check_mark: | :white_check_mark: |
| importing from requirements.txt                                                           | :white_check_mark: | :x:                |
| multiple constraints dependencies                                                         | :white_check_mark: | :white_check_mark: |
| specify versions of packages                                                              | :white_check_mark: | :white_check_mark: |
| specify versions of python                                                                | :white_check_mark: | :white_check_mark: |
| sequential installation to be as deterministic as possible                                | :white_check_mark: | 2                  |
| use site-packages                                                                         | :white_check_mark: |                    |
| install packages automatically discovered from import statements in code                  | :white_check_mark: |                    |
| allow pre-releases                                                                        | :white_check_mark: |                    |
| **Interface**                                                                             |                    |                    |
| run command                                                                               | :white_check_mark: | :white_check_mark: |
| spawn interactive shell                                                                   | :white_check_mark: | :white_check_mark: |
| dry-run on some commands                                                                  | :white_check_mark: | :white_check_mark: |
| check project structure                                                                   | :x:                | :white_check_mark: |
| search modules available on PiPI etc.                                                     | :x:                | :white_check_mark: |
| settings via environment variables                                                        | :white_check_mark: | :white_check_mark: |
| plugins                                                                                   | :white_check_mark: | :white_check_mark: |
| abort installation/warn if lock file is out-of-date                                       | :white_check_mark: | :white_check_mark: |
| fancy shell mode                                                                          | :white_check_mark: |                    |
| expand environment variables in configuration file                                        | :white_check_mark: |                    |
| Install dependencies from configuration file into parent system                           | :white_check_mark: |                    |
| scan dependencies for known security vulnerabilities                                      | :white_check_mark: | 3                  |
| shortcut for opening a module in editor                                                   | :white_check_mark: |                    |
| search for configuration file in parent directories                                       | :white_check_mark: | :white_check_mark: |
| override PyPI mirror url / set alternative repository                                     | :white_check_mark: | :white_check_mark: |
| tox                                                                                       | :white_check_mark: | :white_check_mark: |
| shell completion                                                                          | :white_check_mark: | :white_check_mark: |
| show dependencies potentially unused in code                                              | :white_check_mark: |                    |
| show dependency graph                                                                     | :white_check_mark: | :white_check_mark: |
| list outdated dependencies                                                                | :white_check_mark: | :white_check_mark: |

* configuration file: pipfile/pyproject.toml
* [1] possible when setting up per-project enviroment variables with direnv
* [2] poetry automatically installs deepest dependencies first
* [3] pipenv uses safety package for this purpuse. Although it is not directly integrated, it can be used with poetry too.

### notes
* in pipenv, `Pipfile` and `install_requires` section in `setup.py` may be used alongside

## Pipenv vs. Poetry Tests

### dependency test

Two modules named dependency01 and dependency02 were created.
They only contained a `setup.py` script, which specified different version ranges of cowsay as sub-dependency:

#### Preparation

`setup.py` of dependency01:

```python
from setuptools import setup

setup(
        name='dependency01',
        version='0.1',
        install_requires=['cowsay>=2.0'],
)
```

`setup.py` of dependency02:

```python
from setuptools import setup

setup(
        name='dependency02',
        version='0.1',
        install_requires=['cowsay<=2.0.2'],
)
```

#### Test

They were then both installed one after another with pipenv and poetry respectively.
Desired behaviour is, that `cowsay 2.0.3` (which is the latest version at the time) is installed with `dependency01`.
When installing `dependency02`, cowsay should be updated to version `2.0.2`, because this is the only version that matches the requirement of both dependencies.

##### Pipenv

```plaintext
$ pipenv install ../dependency01
...
$ pipenv graph
dependency01==0.1
  - cowsay [required: >=2.0, installed: 2.0.3]
$ pipenv install ../dependency02
...
$ pipenv graph
dependency01==0.1
  - cowsay [required: >=2.0, installed: 2.0.2]
dependency02==0.1
  - cowsay [required: <=2.0.2, installed: 2.0.2]
```

##### Poetry

```plaintext
$ poetry add ../dependency01

Updating dependencies
Resolving dependencies... (0.1s)

Writing lock file

Package operations: 2 installs, 0 updates, 0 removals

  • Installing cowsay (2.0.3)
  • Installing dependency01 (0.1 /home/jm/dependency-test-pipenv/dependency01)
$ poetry add ../dependency02

Updating dependencies
Resolving dependencies... (0.1s)

Writing lock file

Package operations: 1 install, 1 update, 0 removals

  • Updating cowsay (2.0.3 -> 2.0.2)
  • Installing dependency02 (0.1 /home/jm/dependency-test-pipenv/dependency02)

```

#### Conclusion

In this case Pipenv and Poetry handled dependency management as desired.

### Remove dependency test

#### Preparation

A third module - `dependency03` is added, which needs `markdown` as submodule. It is installed and then removed in Pipenv and Poetry respectively. Desired behaviour would be, that the `markdown` submodule is removed along with `dependency03` because it is no longer needed.

#### Test

##### Pipenv

```plaintext
$ pipenv install ../dependency03
...
$ pipenv remove dependency03
...
$ pipenv run pip freeze
cowsay==2.0.2
dependency01 @ file:///home/jm/dependency-test-pipenv/dependency01
dependency02 @ file:///home/jm/dependency-test-pipenv/dependency02
Markdown==3.3.3
```

Pipenv does not uninstall the `markdown` module, although there is no module left that needs that subdependency. However, `pipenv clean` does the job here:

```plaintext
$ pipenv clean
Uninstalling markdown…
```

##### Poetry

```plaintext
$ poetry add ../dependency03
...
$ poetry remove dependency03
...
$ poetry show
attrs          20.3.0              Classes Without Boilerplate
cowsay         2.0.2               The famous cowsay for GNU/Linux is now available for python
dependency01   0.1 ../dependency01 
dependency02   0.1 ../dependency02 
more-itertools 8.6.0               More routines for operating on iterables, beyond itertools
packaging      20.4                Core utilities for Python packages
pluggy         0.13.1              plugin and hook calling mechanisms for python
py             1.9.0               library with cross-python path, ini-parsing, io, code, log facilities
pyparsing      2.4.7               Python parsing module
pytest         5.4.3               pytest: simple powerful testing with Python
six            1.15.0              Python 2 and 3 compatibility utilities
wcwidth        0.2.5               Measures the displayed width of unicode strings in a terminal
```

Poetry removed `dependency03` and `markdown`.

### updating

When removing `dependency02`, there is no need anymore to use version `2.0.2` of `cowsay` instead of version `2.0.3`.

#### Pipenv

Pipenv does not update `cowsay` automatically when uninstalling `dependency03`.

```plaintext
$ pipenv uninstall dependency02
...
$ pipenv run pip freeze
cowsay==2.0.2
dependency01 @ file:///home/jm/dependency-test-pipenv/dependency01
```

you need to run the `pipenv update` command, to update cowsay.

```plaintext
$ pipenv update
...
$ pipenv run pip freeze
cowsay==2.0.3
dependency01 @ file:///home/jm/dependency-test-pipenv/dependency01
```

#### Poetry

Poetry does not update `cowsay` automatically when removing `dependency02`.

```plaintext
$ poetry remove dependency02
...
$ poetry show
attrs          20.3.0              Classes Without Boilerplate
cowsay         2.0.2               The famous cowsay for GNU/Linux is now a...
dependency01   0.1 ../dependency01 
more-itertools 8.6.0               More routines for operating on iterables...
packaging      20.4                Core utilities for Python packages
pluggy         0.13.1              plugin and hook calling mechanisms for p...
py             1.9.0               library with cross-python path, ini-pars...
pyparsing      2.4.7               Python parsing module
pytest         5.4.3               pytest: simple powerful testing with Python
six            1.15.0              Python 2 and 3 compatibility utilities
wcwidth        0.2.5               Measures the displayed width of unicode ...
```

you need to run the `poetry update` command, to update cowsay.

```plaintext
$ poetry update
Updating dependencies
Resolving dependencies... (1.6s)

Writing lock file

Package operations: 0 installs, 1 update, 0 removals

  • Updating cowsay (2.0.2 -> 2.0.3)
```


# Notes

- [Pipenv is faster for full installs -> good for CI/CD, Poetry for everything else -> good for development](https://johnfraney.ca/posts/2019/11/19/pipenv-poetry-benchmarks-ergonomics-2/)
- [black formatter's configuration is handeled in pyproject.toml too](https://ahmed-nafies.medium.com/pip-pipenv-poetry-or-conda-7d2398adbac9)
