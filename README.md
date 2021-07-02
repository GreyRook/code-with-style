![](https://i.creativecommons.org/l/by/4.0/80x15.png)

# Code with Style

An opinionated guide on how [we](https://www.greyrook.com) like our code and how we like to write it.

The HTML version can be found publicly on [gitlab.com pages](https://greyrook.gitlab.io/code-with-style/).

This work is licensed under a [Creative Commons Attribution 4.0 Generic License](http://creativecommons.org/licenses/by/4.0/).


## Note to Grey Rook employees

Please keep in mind that the internal git repository is regularly synced with the public ones at [gitlab.com](https://gitlab.com/GreyRook/code-with-style) and [github.com](https://github.com/GreyRook/code-with-style).  Do not include internal information in the guide.


## Building HTML

The docs are generated with [mkdocs](https://www.mkdocs.org/).
Install the dependencies:

```bash
poetry install
```

Run a local development server with watch and autoreload:

```bash
poetry run mkdocs serve
```

Build docs as html:

```bash
poetry run mkdocs build
```
