# Sass Style Guide

At Grey Rook we use the SCSS syntax, not the original 'indented syntax'. That means, use code blocks with braces.

## Use a hierarchy similar to the one of the HTML
### Explanation
Sass supports nesting of elements, so we don't have to use complex chains of css selectors to explicitly style elements.

This
``` css
div {
  background: hotpink;
}

div a {
  color: green;
}
```

becomes this
``` scss
div {
  background: hotpink;

  a {
    color: green;
  }
}
```

### Reason
By having a similar hierarchy in our scss and html files (or the browser DOM, respectively), it is easier to keep track of elements and their styles.  

This also prevents unintentionally selecting elements and applying styles that aren't meant for them. Compare this
``` css
.sidebar {
  width: 42rem;
}

.generically-named-element {
  background: hotpink;
}
```

to this
``` scss
.sidebar {
  width: 42rem;

  .generically-named-element {
    background: hotpink;
  }
}
```

If another developer creates an element at another position in the DOM which also has the class `.generically-named-element`, in the first case it will get the `hotpink` color, but in the second case it will not, because `hotpink` will only be applied to elements in the `.sidebar` element.

## Use rem instead of px as a unit for size whenever possible
### Explanation
`rem` refers to `root em`, where `em` refers to the font size. That means one `rem` is the font size given to the root element (`<html>`), so when the `<html>` element has a font size of 16px, one `rem` will be 16px in every child element. While the problem with using `em` is that it is relative to the font size of the element in which it is used (so an element with a width of `10em` may be of different absolute width depending on the current font size), `rem` never changes in the context of an html document.  
### Reasons
- accessibility – layout can adjust to user font size settings
- responsive web design – we can easily switch general website size based on media queries

## Web font best practices
While it is of course preferable to use system fonts in a project due to the fact that those do not have to be downloaded and they thus save bandwidth and lead to shorter loading times, most of the time the design specifications require the use of web fonts, as the font face specified in the design is not available on most machines.

### Font file hosting
To prevent unnecessary requests to third party servers, we generally do not want to use services like Google Fonts for embedding web fonts into websites and web apps.
Instead, the respective font files should be downloaded, made part of the project's repository and later hosted as static content.

This has the disadvantage that a website might download a used font file that is already in the browser cache because of a previous visit to another site that uses the same font.
Still, to protect the user's privacy as best as we can, we prefer self hosted fonts.

### Font loading
Use CSS `@font-face` to embed fonts into the website / web app:
```SCSS
@font-face {
  font-family: 'MyWebFont';
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
```

Usage:
```SCSS
some-element {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

### Font file browser compatibility
In most cases, we can get away with supplying only `WOFF` and `WOFF2` formats.
This provides compatibility for all modern browsers and even IE 9+.

When support of older browser is necessary, `TTF` might be added to the supplied formats.

For deepest possible support, add `SVG` and `EOT`.

Comprehensive compatibility tables for different sets of supplied fonts can be found at [CSS Tricks](https://css-tricks.com/snippets/css/using-font-face/).