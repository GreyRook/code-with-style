# React Style Guide

### Create React App
##### Reasons
    - easy to keep updated

### React with Hooks
##### Reasons
    - better reusability
    - separation of concerns, atomic design
    - scope independence
    - custom hook library possible

### ESLint (linter)
##### Reasons
    - default with CRA
    - TSLint will be deprecated in 2019

### Jest (unit testing)
##### Reasons
    - default with CRA

### NightwatchJS (E2E testing)
Example: [react-example/e2e/](react-example/e2e/README.md)

### Packages
    - classNames // easy conditional CSS Classes
      https://www.npmjs.com/package/classnames
    - HammerJS // Touch and gestures
      https://www.npmjs.com/package/hammerjs
    - AnimeJS // Animation Library
      https://www.npmjs.com/package/animejs

## TypeDoc (documentation)

[TypeDoc](https://typedoc.org) is used for the generation of inline documentation. Possible annotation can be looked up [here](https://typedoc.org/guides/doccomments/)

```bash
cd example
npx typedoc --out doc src
```

When writing comments always keep in mind:
"The best comment is the code explaining itself." - loosely cited from Clean Code

When your code is unreadable you failed writing it in [a clean way](http://principles-wiki.net/resources:clean_code).

"A comment worth writing is worth writing well. If you are going to write a comment, take the time to make sure it is the best comment you can write. Choose your words carefully. Use correct grammar and punctuation. Don't ramble. Don't state the obvious. Be brief." - Uncle Bob

### Architecture

The architecture documentation can be found in the [architecture folder](react-example/architecture) of the example project.
A description of the files is written in the [ARCHITECTURE.md](react-example/architecture/ARCHITECTURE.md).

Every component, property and function is required to have a doc comment describing its functionality. Keep in mind you describe the component's interface and DO NOT describe what exactly the component is doing inside.
A TypeDoc component example can be found [here](react-example/src/TypeDocExample.tsx)
