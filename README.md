# Python Coding Guide


 * Prefer Python Version: 3.7
 * Prefer `pipenv + Pipefile` over `pip + requirements.txt`
 * [PEP 8](https://www.python.org/dev/peps/pep-0008/).


## Project Setup

 * Make Type annotations, it's okay to use `Any` or `dict` (without being more specific)
 *  All libraries needed to run tests belong into `[dev-packages]`
 * `Pipefile.lock` is to be commited to git
 * `Pilefile` should specify version range, for example: `pytest = ">=4.6.0,<5"`
   * Specify minimum version acording to features needed and security fixes
   * Avoid next major version


## linting

| Linter      | Use Case        | Configuration | Reasoning |
|-------------|-----------------|---------------|-----------|
| pycodestyle | pep8 compliance | default       |           |
| pylint      |                 |               |           |
| mypy        | Type checking   |               |           |
|             |                 |               |           |


## formatting

Black for code-formatting
https://github.com/python/black

```
pip install black
black [folder]
```

To ignore blocks of code for formatting mark them with
```python
# fmt: off
# your code
# fmt: on
```

NOTE: not necessary all linting errors are fixed by black, so check your linter before committing.


isort to sort imports

```
pip install isort
isort -c -rc [folder]  # to check for wrong import order
isort -rc [folder]  # to fix wring import order
```


## testing

```
[dev-packages]
pytest = "*"
pytest-cov = "*"
pytest-testmon = "*"
pytest-watch = "*"
```

Addtions for aiohttp based projects:
```
pytest-asyncio = "*"
pytest-aiohttp = "*"
```

## type annotations


Use
```python
from __future__ import annotations
```

Docs:

 * [Cheat sheet](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html)

## Preferred libraries


Library | Use Case
--------|--------------------
Pillow  | Image manipulation


## creating a new project

  Use cookiecutter: ``

```
sudo pip3 install cookiecutter
mkdir ~/.cookiecutters
git clone https://github.com/FlorianLudwig/cookiecutter-py3.git ~/.cookiecutters/py3
cp -r ~/.cookiecutters/py3 ~/.cookiecutters/py3-aiohttp
cd ~/.cookiecutters/py3-aiohttp
git checkout aiohttp
```

# Security guidelines

 * logging of sensative user input (e.g. plaintext passwords) is never allowed
 * logging of sensitive data (keys, tokens, etc.) is only allowed if:
   * the data is not valid indefinitely
   * the TTL is max. 7 days
   * it is only logged on debug level
