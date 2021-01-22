# Pipenv Poetry Comparison

## Overview

While Pipenv is used for dependency management only, Poetry also offers building `sdlist`s and `wheel`s and publishing them on PyPI or other repositories.
In terms of dependency management, there are two core features, Poetry offers in contrast to pipenv.

1. Pipenv uses `Pipfile` and `Pipfile.lock` for configuring dependency.
   However, if you create a python module, you still need to specify the requirements in `setup.py`.
   So you have to deal with two dependency lists.

   Poetry just uses `pyproject.toml` and `poetry.lock`.
   There is no need for `setup.py`.
2. Poetry lets you use multiple virtual environments per project.
   You can use them to run your project with different python versions.

## Pipenv vs. Poetry Feature Comparison

| feature                                                                              | pipenv | poetry |
| ------------------------------------------------------------------------------------ | :----: | :----: |
| **Project setup**                                                                         |    |    |
| dependency configuration a in single file                                                 | ✗ | ✓ |
| automatic project setup                                                                   | ✓ | ✓ |
| interactive project setup                                                                 | ✗ | ✓ |
| define scripts in config file                                                             | ✓ | ✓ |
| project specific configuration of Pipenv/Poetry                                           |  1 | ✓ |
| other python distributions (Anaconda etc.)                                                | ✓ |    |
| automatic installation of required python version                                         | ✓ |    |
| **Virtual environment**                                                                   |    |    |
| multiple virtual environments per project (e.g. for using with multiple python versions)  | ✓ | ✓ |
| pass environment variables from a file to virtual environment                             | ✓ |    |
| use user-built virtual environment                                                        | ✓ |    |
| virtual environment can be placed in project folder                                       | ✓ | ✓ |
| custom virtual environment location                                                       | ✓ | ✓ |
| **Project build**                                                                         |    |    |
| build project (wheel and sdlist)                                                          | ✗ | ✓ |
| publish project on PyPI etc.                                                              | ✗ | ✓ |
| **Dependencies**                                                                          |    |    |
| automatic version pinning in configuration file when manually installing dependency       | `"*"` | `"^2.0.3"` etc. |
| lock dependencies (with hashes)                                                           | ✓ | ✓ |
| hashes are verified whith lock file during dependency installation                        | ✓ | ✗, 2 |
| dev-packages                                                                              | ✓ | ✓ |
| extra-packages (packages that are not required bud enhance project)                       | ✗ | ✓ |
| update dependencies within range specified in config file                                 | ✓ | ✓ |
| install from url/path                                                                     | ✓ | ✓ |
| install packages from custom repos (git with https, ssh), install editable                | ✓ | ✓ |
| install packages from other VC software than git                                          | ✓ | ✗ |
| list installed packages and sub-dependencies                                              | ✓ | ✓ |
| remove packages                                                                           | ✓ | ✓ |
| export to requirements.txt                                                                | ✓ | ✓ |
| export to requirements.txt with hashes                                                    | ✓ | ✓ |
| importing from requirements.txt                                                           | ✓ | ✗ |
| multiple constraints dependencies                                                         | ✓ | ✓ |
| specify versions of packages                                                              | ✓ | ✓ |
| specify versions of python                                                                | ✓ | ✓ |
| sequential installation to be as deterministic as possible                                | ✓ | 3  |
| use site-packages                                                                         | ✓ |    |
| install packages automatically discovered from import statements in code                  | ✓ |    |
| allow pre-releases                                                                        | ✓ | ✓ |
| **Interface**                                                                             |    |    |
| run command                                                                               | ✓ | ✓ |
| spawn interactive shell                                                                   | ✓ | ✓ |
| dry-run on some commands                                                                  | ✓ | ✓ |
| check project structure                                                                   | ✗ | ✓ |
| search modules available on PyPI etc.                                                     | ✗ | ✓ |
| Pipenv/Poetry configuration via environment variables (e.g. for CI usage)                 | ✓ | ✓ |
| plugins                                                                                   | ✓ | ✓ |
| abort installation/warn if lock file is out-of-date                                       | ✓ | ✓ |
| [fancy shell mode](https://pipenv.pypa.io/en/latest/basics/#about-shell-configuration)    | ✓      |
| expand environment variables in configuration file                                        | ✓      |
| Install dependencies from configuration file into parent system                           | ✓      |
| scan dependencies for known security vulnerabilities                                      | ✓ | 4  |
| shortcut for opening a module in editor                                                   | ✓ |    |
| search for configuration file in parent directories                                       | ✓ | ✓ |
| override PyPI mirror url / set alternative repository                                     | ✓ | ✓ |
| tox                                                                                       | ✓ | ✓ |
| shell completion                                                                          | ✓ | ✓ |
| show dependencies potentially unused in code                                              | ✓ |    |
| show dependency graph                                                                     | ✓ | ✓ |
| list outdated dependencies                                                                | ✓ | ✓ |

* configuration file: pipfile/pyproject.toml
* [1] possible when setting up per-project enviroment variables with direnv
* [2] see bug report: <https://github.com/python-poetry/poetry/issues/2422>
* [3] poetry automatically installs deepest dependencies first
* [4] pipenv uses safety package for this purpuse. Although it is not directly integrated, it can be used with poetry too.

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

### Corrupted hashes in lock file

#### Pipenv

I installed the `cowsay` module with `pipenv install cowsay`.
I then modified the two checksums (from `wheel` and `tar.gz`) in the `Pipenv.lock` file.
After removing `cowsay` without locking using the `pipenv uninstall cowsay --skip-lock` command and reinstalling from lockfile using the `pipenv sync` or `pipenv install --ignore-pipfile` command, the following error was thrown:

```plaintext
Installing dependencies from Pipfile.lock (ca0ac4)…
An error occurred while installing cowsay==2.0.3 --hash=sha256:debde99bae664bd91487613223c1cb291832d8703bf7d524c3a4877ad37b4dad --hash=sha256:7ec3ec1bb085cbb788b0de1e76291524469faf41c6cdbec08a7ac072a7d1d6eb! Will try again.
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 1/1 — 00:00:01
Installing initially failed dependencies…
[pipenv.exceptions.InstallError]: Collecting cowsay==2.0.3
[pipenv.exceptions.InstallError]:   Using cached cowsay-2.0.3-py2.py3-none-any.whl (6.9 kB)
[pipenv.exceptions.InstallError]: ERROR: THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE. If you have updated the package versions, please update the hashes. Otherwise, examine the package contents carefully; someone may have tampered with them.
[pipenv.exceptions.InstallError]:     cowsay==2.0.3 from https://files.pythonhosted.org/packages/d4/68/af23fbf90493044fc2ea83cd62923b9952c2d38eeeab83e0c016706bfbc8/cowsay-2.0.3-py2.py3-none-any.whl#sha256=7ec3ec1bb085cbb788b0de1e762941b4469faf41c6cdbec08a7ac072a7d1d6eb (from -r /tmp/pipenv-l6fviwig-requirements/pipenv-cfcbsin2-requirement.txt (line 1)):
[pipenv.exceptions.InstallError]:         Expected sha256 debde99bae664bd91487613223c1cb291832d8703bf7d524c3a4877ad37b4dad
[pipenv.exceptions.InstallError]:         Expected     or 7ec3ec1bb085cbb788b0de1e76291524469faf41c6cdbec08a7ac072a7d1d6eb
[pipenv.exceptions.InstallError]:              Got        7ec3ec1bb085cbb788b0de1e762941b4469faf41c6cdbec08a7ac072a7d1d6eb
ERROR: Couldn't install package: cowsay
 Package installation failed...
  ☤  ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 0/1 — 00:00:01
```

If you just use `pipenv install`, Pipenv does not install anything, because there are no dependencies to install in the `Pipfile`.
If you re-install cowsay manually using `pipenv install cowsay`, it installs `cowsay` and updates the `Pipfile.lock` without throwing an error (just prints `Pipfile.lock out of date, updating...`).
Instead, if you saved the Pipfile before uninstalling `cowsay` and replace the new one with the saved one, Pipenv throws the same error as above.
If you delete the virtual environment (`.venv`) and re-install it using `pipenv install`, pipenv throws the same error as above.

#### Poetry

I installed the `cowsay` module with `poetry add cowsay`.
I then modified the two checksums in the `poetry.lock` file.
When saving the `poetry.lock` file, removing the `cowsay` module, replacing the new generated `poetry.lock` file with the saved one and then running `poetry install`, a warning is shown, that `poetry.lock` is not up to date with `pyproject.toml`.
When installing cowsay again, the warning is shown too, but cowsay is installed anyway.
There is no warning that the hashsums from the lock files differ from the actual ones.
When instead installing `cowsay`, modify the checksums in `poetry.lock`, removing the virtual environment (`.venv`) and installing it again using `poetry install` there is no error thrown, the dependencies are installed and the `poetry.lock` file remains unmodified.
Even when installing in a brand new docker/podman where cowsay was never installed before, there is no error thrown.

Thre is a bug report for this behaviour: <https://github.com/python-poetry/poetry/issues/2422>

# Notes

- [Pipenv is faster for full installs -> good for CI/CD, Poetry for everything else -> good for development](https://johnfraney.ca/posts/2019/11/19/pipenv-poetry-benchmarks-ergonomics-2/)
- [black formatter's configuration is handeled in pyproject.toml too](https://ahmed-nafies.medium.com/pip-pipenv-poetry-or-conda-7d2398adbac9)
