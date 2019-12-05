# Python Coding Guide

* Prefer Python Version: 3.7
* Prefer `pipenv + Pipfile` over `pip + requirements.txt`
* [PEP 8](https://www.python.org/dev/peps/pep-0008/).

## Project Setup

* Make Type annotations, be as specific as possible but it's okay to use `Any` or `dict` (without being more specific)
* All libraries needed for development and running tests belong into `[dev-packages]`, debug packages must not be installed in production
* `Pipfile.lock`
  * is to be commited to git
* `Pipfile`
  * Versioning: should specify version range, for example: `pytest = ">=4.6.0,<5"`
    * Specify minimum version acording to features needed and security fixes
    * Avoid next major version
  * Must not include the package itself (including no `package-name = {editable = true,path = "."}`)
* use [bump2version](https://github.com/c4urself/bump2version) to manage releases

## linting

| Linter        | Use Case        | Configuration | Reasoning |
| ------------- | --------------- | ------------- | --------- |
| black --check | pep8 compliance | default       |           |
| pylint        |                 |               |           |
| mypy          | Type checking   |               |           |
|               |                 |               |           |

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


<a id="imports"></a>

## imports

Based on [Google's python style guide](http://google.github.io/styleguide/pyguide.html#31912-imports-for-typing):

Use `import` statements for packages and modules only, not for individual
classes or functions. Note that there is an explicit exemption for imports from
the [typing module](#typing-imports).

Bad:

```python
from datetime import datetime
```

To the reader of the code it is unclear if `datetime` is the module `datetime` or the class `datetime.datetime`.

### import as

Do not rename modules on import:

Bad:

```python
import plotly as py
```

Good:

```python
import plotly
```


<a id="typing-imports"></a>

### Imports For Typing

For classes from the `typing` module, always import the class itself. You are
explicitly allowed to import multiple specific classes on one line from the
`typing` module. Ex:

```python
from typing import Any, Dict, Optional
```

Given that this way of importing from `typing` adds items to the local
namespace, any names in `typing` should be treated similarly to keywords, and
not be defined in your Python code, typed or not. If there is a collision
between a type and an existing name in a module, import it using
`import x as y`.

```python
from typing import Any as AnyType
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

| Library | Use Case           |
| ------- | ------------------ |
| Pillow  | Image manipulation |

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

* logging of sensitive user input (e.g. plaintext passwords) is never allowed
* logging of sensitive data (keys, tokens, etc.) is only allowed if:
  * the data is not valid indefinitely
  * the TTL is max. 7 days
  * it is only logged on debug level
