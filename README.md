## Coding Stack Description

### Create React App
##### Reasons
    - easy to keep updated

### React with Hooks
##### Reasons
    - better reusability
    - separation of concerns, atomic design
    - scope independence
    - custom hook library possible

### YARN
##### Reasons
    - Our standard Package Manager

### Typescript
##### Reasons
    - we want types
    - future proof
    - large and growing community
    - high typedef availability for packages

### SCSS
##### Reasons
    - Our standard CSS Extension Language
##### Best Practices
    - Mirror jsx/html hierarchy in SCSS
    - Use rem a lot (or at least Saschas rem-mixin)

### ESLint
##### Reasons
    - comes with CRA
    - TSLint will be deprecated in 2019

### Prettier
##### Reasons
    - Our personal standard for coding style
##### Best Practices
    - See config in example/prettierrc.js

### Jest
##### Reasons
    - Unit Test

### NightwatchJS
##### Reasons
    - Integration Test (s. `example/integration-tests/README.md`)

### Packages
    - classNames // easy conditional CSS Classes
      https://www.npmjs.com/package/classnames
    - HammerJS // Touch and gestures
      https://www.npmjs.com/package/hammerjs
    - AnimeJS // Animation Library
      https://www.npmjs.com/package/animejs

## How to Doc

[TypeDoc](https://typedoc.org) is used for the generation of inline documentation. Possible annotation can be looked up [here](https://typedoc.org/guides/doccomments/)

```bash
cd example
npx typedoc --out doc src
```

## Helpful CI tools

### license-checker
a [npm module](https://github.com/davglass/license-checker) can be used to check for copy left licenses used throughout the npm module graph in the project

By using a command like
```bash
npx license-checker --producation --failOn $DISALLOWED_LICENSES
```
with $DISALLOWED_LICENSES being a semicolon-separated list of forbidden licenses, the CI fails when any of those is used.

### prettier
With a command like e.g.
```bash
npx prettier --config ./example/.prettierrc.js --list-different './example/src/**/{*.ts,*.tsx}'
```
the CI can check, against the fulfillment of code style guidelines.