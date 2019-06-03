# Python Coding Guide


 * Prefer Python Version: 3.7
 * Prefer `pipenv + Pipefile` over `pip + requirements.txt`
 * [PEP 8](https://www.python.org/dev/peps/pep-0008/).


## Project Setup

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
