# Markdown

This chapter is dedicated to best practices writing markdown (`.md`) documents. Markdown does not have one coherent specification. The goal of the following rules is to have a consistent way of writing documentation in markdown and make sure they are interpreted correctly in parsers we care about, which are:

* [Python-Markdown](https://github.com/Python-Markdown/markdown)
* GitLab, based on [kramdown](https://kramdown.gettalong.org/)
* [GitHub](https://github.github.com/gfm/)

## Headings


### Heading Style
Prefer ATX-style headers, without closing hash:

```markdown
# H1 heading
```

### Heading Structure

Heading levels must not be skipped, for example:

```markdown

# H1 Heading

### H3 Heading
```

Is not allowed as level 2 was skipped.


## Code blocks

Use triple backtick code blocks, like github-flavored Markdown:

````markdown

```python

 your code
```
````

## Unordered Lists

Top level items must use `*`:

```markdown
* Item 1
* Item 2
```

For second level you may use `+` and third level `-`:

```markdown
* Item 1
    + Item 2
        - Item 3
    + Item 4
* Item 5
    + Item 6
```

For second and third level `*` may be used instead if `+` and `-` might be confused in the particular context as positive or negative signs. Mixing styles must be avoided.

Indent lists with four spaces.

### Rationale

Rationale: We use MkDocs for building documentations.
MkDocs builds on Python-Markdown, which requires at least 4 spaces for indentation, see [Documentation](https://python-markdown.github.io/#differences).

## Inline HTML

Avoid, when possible.

## Tabs

Must not be used.

## Line Breaks

### Introductory information
Line breaks are special in Markdown.

Adding a single `/n` (i.e. Return) at the end of a line will *not* result in an actual line break in the compiled document.
Text following the single `/n` will just continue in the same line.

Adding two `/n` on the other hand will start a new paragraph which will be seperated from the previous one by a blank line in the compiled document.

There are ways to start a new line *within* a paragraph in Markdown (see below), but they are discouraged in this guide for reasons of maintainability.

For this guide, we made some rules to optimize both editability and readability of Markdown files and the resulting compiled docs.

### Line break rules for this guide
* There is no line length limit.
* Add one line break (`\n`) after each sentence.
* No line breaks within a sentence.
* Except within lists - there you are allowed to put multiple sentences within one line. But try to avoid to do so as it means you are not actually making a list but paragraphs with dots in front of them.
* Between paragraphs have a single empty line. (`\n\n`)

### Line Breaks within paragraphs

* Generally avoid line breaks in paragraphs.
* Do not use two spaces at the end of a line to indicate a line break within a paragraph.
* If really necessary - e.g. for readability - use `<br>`.

### Rationale

* Most if not all tools are able to do proper word-wrapping. Not many editors provide automatic wrapping by adding actual line breaks into the document. This makes editing text more cumbersome, especially in long paragraphs.
* Diffs (and therefore merge requests) get smaller and easier to read if every sentence is on its own line.
<<<<<<< HEAD
* Tools for analyzing grammar, like [languagetool](https://languagetool.org/), are confused by the extra line breaks.

## Internal Links

You can link to chapters within your document or to chapters within another document by using the following syntax:

`Jump to the [Heading Style Chapter](index.md#heading-style)`

### Note

* Linked chapters must be prefixed with the filename, even if they are located in the same file.
* Links must be all lowercase.
* Spaces must be replaced with hyphens `-`.

=======
 * Tools for analyzing grammar, like [languagetool](https://languagetool.org/), are confused by the extra line breaks.

 ## Linting

 Use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) for linting.
 There is a configuration file available to fit our styleguide.
 To use it, the `.markdownlint.yml` file, located in the root of the `guide` repository, must be present at the current directory or any parent directory.
 Alternatively, the `--config` argument can be used to specify a config file.
 
 Tip: `markdownlint-cli` can automatically fix minor issues, see [Fixing errors](https://github.com/igorshubovych/markdownlint-cli#fixing-errors).

 Note: There exist [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) and [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2).
 Prefer `markdownlint-cli` over `markdownlint-cli2`.
 The first one is a traditional command-line interface, the second one is configuration-based.
 They both use the same [markdownlint](https://github.com/DavidAnson/markdownlint) library, see: [markdownlint-cli2 overview](https://github.com/DavidAnson/markdownlint-cli2#overview).
>>>>>>> 6effe82... added linting section to python styleguide
