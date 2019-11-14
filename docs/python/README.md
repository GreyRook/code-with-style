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
  * Must not include `[requires] python_version = "3.6"` since we want to test the code with multiple python versions.  [Pipenv does not support multiple versions of python](https://github.com/pypa/pipenv/issues/1050).
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

## Naming

The naming chapters are based on [Google's python style guide](http://google.github.io/styleguide/pyguide.html#s3.16-naming).

General naming is based on [PEP 8](https://www.python.org/dev/peps/pep-0008/):

`module_name`, `package_name`, `ClassName`, `method_name`, `ExceptionName`,
`function_name`, `GLOBAL_CONSTANT_NAME`, `global_var_name`, `instance_var_name`,
`function_parameter_name`, `local_var_name`.


Function names, variable names, and filenames should be descriptive; eschew
abbreviation. In particular, do not use abbreviations that are ambiguous or
unfamiliar to readers outside your project, and do not abbreviate by deleting
letters within a word.

Always use a `.py` filename extension. Never use dashes.

<a id="s3.16.1-names-to-avoid"></a>
<a id="3161-names-to-avoid"></a>

<a id="names-to-avoid"></a>
#### 3.16.1 Names to Avoid

-   single character names except for counters or iterators. You may use "e" as
    an exception identifier in try/except statements.
-   dashes (`-`) in any package/module name
-   `__double_leading_and_trailing_underscore__` names (reserved by Python)


<a id="naming-conventions"></a>

#### 3.16.2 Naming Conventions

-   "Internal" means internal to a module, or protected or private within a
    class.

-   Prepending a single underscore (`_`) has some support for protecting module
    variables and functions (not included with `from module import *`). While
    prepending a double underscore (`__` aka "dunder") to an instance variable
    or method effectively makes the variable or method private to its class
    (using name mangling) we discourage its use as it impacts readability and
    testability and isn't *really* private.

-   Place related classes and top-level functions together in a
    module.
    Unlike Java, there is no need to limit yourself to one class per module.

-   Use CapWords for class names, but lower\_with\_under.py for module names.
    Although there are some old modules named CapWords.py, this is now
    discouraged because it's confusing when the module happens to be named after
    a class. ("wait -- did I write `import StringIO` or `from StringIO import
    StringIO`?")

-   Underscores may appear in *unittest* method names starting with `test` to
    separate logical components of the name, even if those components use
    CapWords. One possible pattern is `test<MethodUnderTest>_<state>`; for
    example `testPop_EmptyStack` is okay. There is no One Correct Way to name
    test methods.


<a id="file-naming"></a>

### File Naming

Python filenames must have a `.py` extension and must not contain dashes (`-`).
This allows them to be imported and unittested. If you want an executable to be
accessible without the extension use `entry_points.console_scripts` in `setup.py`.


### Double underscore

While Python supports making things private by using a leading double underscore
`__` (aka. "dunder") prefix on a name, this is discouraged. Prefer the use of a
single underscore. They are easier to type, read, and to access from small
unittests. Lint warnings take care of invalid access to protected members.

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
