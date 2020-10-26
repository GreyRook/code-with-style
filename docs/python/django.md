# Django Guidelines

## Project strucutre

* Project specific apps should be inside the project folder inside an `apps` folder

```
project-name/
  apps/               # project-specific applications
    about/
    __init__.py
    ...
  settings/           # settings for different environments, see below
    __init__.py
    production.py
    development.py
    ...
  static/             # site-specific static files
  templates/          # site-specific templates
  __init__.py
  urls.py
  wsgi.py

tests/
manage.py
```

## Linting

In addition to the [common python linting] rules also run

* `pipenv run python manage.py check --deploy --fail-level WARNING`
