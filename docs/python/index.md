# Python Coding Guide

* Prefer Python Version: 3.7
* Prefer `pipenv + Pipfile` over `pip + requirements.txt`
* [PEP 8](https://www.python.org/dev/peps/pep-0008/).

## Project Setup

* Make Type annotations, be as specific as possible but it's okay to use `Any` or `dict` (without being more specific)
* All libraries needed for development and running tests belong into `[dev-packages]`, debug packages must not be installed in production
* `Pipfile.lock`
  + is to be committed to git
* `Pipfile`
  + Versioning: should specify version range, for example: `pytest = ">=4.6.0,<5"`
    - Specify minimum version according to features needed and security fixes
    - Avoid next major version
  + Must not include the package itself (including no `package-name = {editable = true,path = "."}`)
  + Must not include `[requires] python_version = "3.6"` since we want to test the code with multiple python versions.  [Pipenv does not support multiple versions of python](https://github.com/pypa/pipenv/issues/1050).
* use [bump2version](https://github.com/c4urself/bump2version) to manage releases

## linting

Preferred linters:

| Linter        | Use Case        | Configuration | Reasoning |
| ------------- | --------------- | ------------- | --------- |
| black --check | code formatting | default       |           |
| pylint        |                 |               |           |
| mypy          | Type checking   |               |           |
|               |                 |               |           |

## black: Formatting

[Black](https://github.com/python/black) is for code-formatting exclusively.
Other linters should disable any style checks to avoid disagreement between linters.

Line-length: 88 ([blacks default](https://black.readthedocs.io/en/stable/the_black_code_style.html#line-length))


### Reasoning

Why not allow longer lines?

a) It reminds everyone that long lines are hard to read and splitting up code into multiple steps with temp variables makes them more readable in most cases.

b) If the length is needed because of indentation, the problem is not the line limit but the code. As the Linux developer manual puts it:

    The answer to that is that if you need more than 3 levels of indentation, you’re screwed anyway, and should fix your program.

c) Some people like to open two files next to each other while having all the UI overhead of `$ide`.


### To ignore blocks of code for formatting mark them with

```python
# fmt: off
# your code
# fmt: on
```


## imports

Based on [Google's python style guide](http://google.github.io/styleguide/pyguide.html#31912-imports-for-typing):

Use `import` statements for packages and modules only, not for individual
classes or functions. Note that there is an explicit exemption for imports from
the [typing module](#typing-imports).

### import order

`isort` to sort imports

```sh
pip install isort
isort -c -rc [folder]  # to check for wrong import order
isort -rc [folder]  # to fix wring import order
```

### from imports

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

### Names have context

Expect your names to be used in context. Do not repeat module names in class names or
class names in method names.

Bad:

```python
# building.py

def build_building():
    pass


class HouseBuilding:
    def building_house_ring_bell(self):
```

Good:

```python
# building.py

def build():
    pass

class House:
    def ring_bell(self):
```

When inside the `building` module, it would be clear that `build` refers to buildings. While from outside the module, expect the function to be called like `building.build()`.

### Names to Avoid

Avoid single character names and abbreviations with the following exceptions:

* `i,j` - iterators (must be integers)
* `x,y,z` - coordinates
* `e` - exceptions in `except Foo as e`
* `f` - file
* `t` - time
* `td` - time delta / duration
* `db` - database
* `fn` - function
* `fs` - filesystem
* `cfg` - configuration
* `cli` - command line interface

Protocol names are generally okay to use:

* `ws` - websocket
* `ftp` - websocket

Important: Those names MUST NOT be used for other meanings.

Also avoid `__double_leading_and_trailing_underscore__` names (reserved by Python)

### Naming Conventions

* Place related classes and top-level functions together in a module.
  Unlike Java, there is no need to limit yourself to one class per module.

### Naming Unit tests

* Name unit test files like the module they test, `test_<module>.py`

* In *unittest* method names may not conform with usual naming guidelines since they should contain the name of what they test, even if those components use CapWords.
  The following schema is preferred: `test_<what_you_test>`.
  Where `<what_you_test>` might be a function, class or method name, for example: `test_HTTPConnection_set_tunnel`.

### File Naming

Python filenames must comply with the following regex: `[a-z][a-z0-9_]+\.py`.
This allows them to be imported and unittested. If you want an executable to be
accessible without the extension use `entry_points.console_scripts` in `setup.py`.

### Double underscore

"Internal" means internal to a module, or protected or private within a class.

Prepending a single underscore (`_`) has some support for protecting module
variables and functions (not included with `from module import *`). While
prepending a double underscore (`__` aka "dunder") to an instance variable
or method effectively makes the variable or method private to its class
(using name mangling) we discourage its use as it impacts readability and
testability and isn't *really* private. Prefer the use of a single underscore.
They are easier to type, read, and to access from small unittests.

<!---
TODO
Add: Lint warnings take care of invalid access to protected members.
TODO Currently this is not the case as we had too many false positives with it.

-->

## Logging

Log messages empower you to comprehend erroneous or suspicious application behavior in deployment environments.
That is, without access to a debugger or controlling the application's data flow.
Since log message get classified by levels, like error, warning, or info, the rate of error/warning messages also provides a sense on the application's quality of service.

Therefore, it is paramount that we write good messages and use log levels correctly.
The next sections outline how to do this.

### Log levels
Each log message gets classified by a log level.
This log level either indicates the status of an execution request (like a method or API invocation) within the application and/or which kind of data the log message provides.

In higher deployment environments, like production environments with a lot of load and real end-users, messages get dropped/filtered by log level.
This allows for reducing the amount of 'noise', i.e. a flood of non-actionable log messages and leaking sensitive data.

The following list summarizes each level's properties:

- ***Debug***
    - Status: unspecified.
    - Information: any data. Usually a very detailed message with extra data for debugging application behavior in-depth.
    - Limitations: minimal. Messages are allowed to contain user information (like names or email addresses) but never unencrypted credentials, tokens, or other secrets.
    - Availability: local and development environments.

- ***Info***
    - Status: successful(!) execution of a request.
    - Information: what the application has done/reacted to successfully.
    - Limitations: low. Messages are allowed to contain pseudonymized user data, e.g. a user id, transaction id, or session id. This is due to data privacy regulations. Note that e-mail addresses are not pseudonymized.
    - Availability: local, development, and test environments.

- ***Warning***
    - Status: error occurred but final impact on external consumer(s) is not known yet.
    - Information: something went wrong internally but it may be recoverable and/or does not necessarily have an impact on end users/external service consumers. Alternatively, the consumer provided invalid input. If there is an impact (error level log message) later on, this may be the cause.
    - Limitations: medium. Messages must adhere to the log message rules. Messages are allowed to contain pseudonymized user data. 
    - Availability: all environments.

- ***Error***
    - Status: error occurred and it impacts an external consumer.
    - Information: a request from an end user or invocation by an external service consumer, e.g. via an API, failed. The request remains unfulfilled. 
    - Limitations: high. Messages must adhere to the log message rules. Messages should to contain (transaction and/or session) ids. Never internal information or personal user information. 
    - Availability: all environments.

- ***Fatal***
    - Status: application-wide error(s) crashed the application and/or rendered it inoperational. Many external consumers are impacted.
    - Information: errors are not restricted to individual requests but application-wide. For example if storage is full or the database is not reachable. All or most requests remain unfulfilled. 
    - Limitations: high. Messages must adhere to the log message rules. Messages must specify the cause. Must never contain pseudomized user data. 
    - Availability: all environments.

### Log Messages Rules
Log messages with levels warning, error, and fatal must provide context, i.e. include answers to the following questions:

- What was expected to happen?
- What happened instead?
- Why is it relevant?
- What was the state of the application?
    - Include the exception message.
- Remediation information?
  - What will/might/should happen next?
  - If cause/workaround/fix known/suspected - add a hint!

For example:
- “Mongodb command failed.” vs “CID Failed to create new user 'demo' in database. Duplicate Key Error [...]. Aborting creating user account.”
<!-- Improvement idea: not an ideal example yet, look for a real one -->

### Best practices
Getting the log level and messages right can be tricky. Apart from the level and message rules above, the following practices support you:

1. Whenever an external request execution fails, then log a corresponding message. \
    For example, if the application offers an RESTful API and were to return a 5xx or 4xx status code, then the application must log a corresponding message. 
2. Use the error log level only when an external request cannot be fulfilled due to internal errors. \
    This means internal functions and libraries must never log errors but warnings. Only consumer-facing interfaces use the error log level because they are able to differentiate whether a external request has been be fulfilled in the end (e.g. via fallbacks) and whether the error cause is internal or due to the consumer. For RESTful applications this implies only 5xx responses cause a error-level log entry (for 4xx see next section). If internal health and/or configuration checks fail, then use the fatal log level.
3. Use the warning log level when an external request cannot be fulfilled due to invalid input or authorization by the external consumer. \
    For RESTful applications this implies all 4xx responses cause a warning-level log entry.
4. Bubble up exceptions. \
    Raising exceptions in internal functions/methods facilitate tracking a failure to its source as included stack traces contain meta-information. Combine raising an exception with a warning log message for maximizing traceability.
5. Hand-over transaction IDs, if available. \
    If external requests provide a (transaction) ID, then pass them on as parameters to internal functions/methods. If you include those transaction IDs in log messages, then it is easier to correlate log messages, to reconstruct the failing data flow, and to investigate cascading errors across multiple services.

## Testing

```toml
[dev-packages]
pytest = "*"
pytest-cov = "*"
pytest-testmon = "*"
pytest-watch = "*"
```

Additions for aiohttp based projects:

```toml
pytest-asyncio = "*"
pytest-aiohttp = "*"
```

## Type annotations

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

Use cookiecutter and our custom template as described below.

### Install Grey Rook cookiecutter template

```sh
sudo pip3 install cookiecutter
mkdir ~/.cookiecutters
git clone https://github.com/FlorianLudwig/cookiecutter-py3.git ~/.cookiecutters/py3
cp -r ~/.cookiecutters/py3 ~/.cookiecutters/py3-aiohttp
cd ~/.cookiecutters/py3-aiohttp
git checkout aiohttp
```

### Create new Project
In the parent folder of the new project, run:

Plain Python 3 project: ```cookiecutter ~/.cookiecutters/py3```

Python 3 project with aiohttp: ```cookiecutter ~/.cookiecutters/py3-aiohttp```

# Documentation guideline

Document code in-line using comments and docstrings.
Most important: **Comments document 'why'** - not 'what' or 'how'.
**Docstrings document 'usage'**.

Your fellow developers comprehend the 'what' and 'how' as it is documented by the code itself. Therefore, documenting 'what' and 'how' is inefficient. <br>
However, the code does not reveal critical reasons like architectural, constraint, or performance decisions.
Code may also 'hide' relationships or side-effects. By documenting 'why', you make your own and your fellow developer's life (extending, maintenance, ...) much easier and also provides a great starting point for learning and reviewing.

## Docstrings
Docstrings document class, module, function, method, or variable definitions. 
They facilitate your life as they are accessible from the doc attribute (__doc__) of any of the Python objects, are accessible with the built-in help() function, and IDE's display them when the corresponding definition is being used.

Always try to avoid having to write long docstrings. Starting points:
- if a function/class/attribute... names do not intuitively express what the underlying code shall be used for, then consider renaming it.
- use type hints whenever possible
- if an attribute/variable (dict) has nested required fields, consider using [pydantic](https://pydantic-docs.helpmanual.io/) or dataclasses.

But add docstrings if:
- function/method raises exceptions that are expected to get handled by the invoker.
- function/class/attribute... names might be misleading or still not intuitively express the code's purpose. <br>
    For example, if the name refers to uncommon domain language/terms, term(s) are used in various domains differently or could be confused with other functionality.
- type hints are not sufficient for understanding the required structure or content of parameters, attributes, and alike. <br>
    For example, if a function requires a specific structure in a dict parameter, then specify the structure in the docstring.


For writing docstrings, we use Google Style Python Docstrings. 
Simple example for a function:

```python
def function_with_pep484_type_annotations(param1: int, param2: str) -> bool:
    """Example function with PEP 484 type annotations.

    Args:
        param1: The first parameter.
        param2: The second parameter.

    Returns:
        The return value. True for success, False otherwise.

    Raises:
        ValueError: If `param2` is equal to `param1`
    """
```

Instead of documenting attributes and variables in a class's or function's docstring, you can also add docstring in-line like this:

```python
class ExampleClass():
  attr1: str = 1
  """Attribute of class ExampleClass"""
```

You can check out [further examples here](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html).


# Security guidelines

* logging of sensitive user input (e.g. plaintext passwords) is never allowed
* logging of sensitive data (keys, tokens, etc.) is only allowed if:
  * the data is not valid indefinitely
  * the TTL is max. 7 days
  * it is only logged on debug level
  + the data is not valid indefinitely
  + the TTL is max. 7 days
  + it is only logged on debug level


# Preferable ways

There are often multiple options to get things working.
In some cases, one option is preferred over another.
This list is to be continued.

* prefer `isinstance(foo, int)` over `type(foo) == int`
  * Rationale: Using `isinstance` matches all classes inheriting from the expected type. Using `type` returns the class type of an object, which can lead to unexpected results when subclasses or superclasses are passed.