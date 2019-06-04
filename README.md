## Coding Stack Description
### Create React App
    - easy to keep updated
### React with Hooks
    - better reusability
    - separation of concerns, atomic design
    - scope independence
    - custom hook library possible
### YARN
    - Our standard Package Manager
### Typescript
    - we want types
    - future proof
    - large and growing community
    - high typedef availability for packages
### SCSS
    - Our standard CSS Extension Language
### ESLint
    - comes with CRA
    - TSLint will be deprecated in 2019
### Prettier
    - Our personal standard for coding style
### Jest
    - Unit Test
### NightwatchJS
    - Integration Test

### Packages
    - classNames // easy conditional CSS Classes
      https://www.npmjs.com/package/classnames

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