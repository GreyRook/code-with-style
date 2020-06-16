# Sass Style Guide

At Grey Rook we use the SCSS syntax, not the original 'indented syntax'. That means, use code blocks with braces.

## Best practices
### Use a hierarchy similar to the one of the HTML
#### Explanation
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

#### Reason
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

### Use rem instead of px as a unit for size whenever possible
#### Explanation
`rem` refers to `root em`, where `em` refers to the font size. That means one `rem` is the font size given to the root element (`<html>`), so when the `<html>` element has a font size of 16px, one `rem` will be 16px in every child element. While the problem with using `em` is that it is relative to the font size of the element in which it is used (so an element with a width of `10em` may be of different absolute width depending on the current font size), `rem` never changes in the context of an html document.  
#### Reasons
- accessibility – layout can adjust to user font size settings
- responsive web design – we can easily switch general website size based on media queries