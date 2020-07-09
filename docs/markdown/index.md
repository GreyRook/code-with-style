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

Indent lists with two spaces.

### Rational

Rationale: Indenting by 2 spaces allows the content of a nested item marker to be in line with the start of the content of the parent item, for example:

```markdown
* List item
  * Nested list item indented by 2 spaces
```

## Inline HTML

Avoid, when possible.

## Tabs

Must not be used.

## Line Breaks

 * Do not add line breaks within paragraphs. There is no line length limit.
 * Between paragraphs have a single empty line.

### Rational

 * Most if not all tools are able to do proper word-wrapping. Not many editors provide automatic wrapping by adding actual line breaks into the document. This makes editing text more cumbersome, especially in long paragraphs.
 * Diffs get bigger since every change that changes the number of characters moves around the line breaks in the rest of the paragraph.
 * Tools for analyzing grammar, like [languagetool](https://languagetool.org/), are confused by the extra line breaks.