# TypeScript / JavaScript

## Coding Stack Description

### Angular
##### Reasons
    - easy to keep updated
    - easy to structure
    - easy to scale
Angular Guide: [angular/README.md](angular/README.md)

### Yarn
##### Reasons
    - Our standard package manager
    - faster due to better caching than npm

### TypeScript
##### Reasons
    - default with Angular CLI
    - we want types
    - future proof
    - large and growing community
    - high typedef availability for packages

### SCSS
##### Reasons
    - Our standard CSS Extension Language
##### Best Practices
    - Use rem a lot (or at least Saschas rem-mixin)

### TSLint
##### Reasons
    - default with Angular CLI

### Prettier
##### Reasons
    - Our personal standard for coding style
##### Best Practices
Config: [.prettierrc](.prettierrc)

### Jasmine (unit testing)
##### Reasons
    - default with Angular CLI

### Protractor (E2E testing)
##### Reasons
    - default with Angular CLI
Example: [gr-admin/e2e/](https://git.r0k.de/s.blaettgen/gr-admin/tree/master/e2e)

### Sentry
##### Reasons
    - Automatic error tracking
Frontend documentation: [docs.sentry.io/platforms/javascript/react/](https://docs.sentry.io/platforms/javascript/react/)
Self-hosting documentation: [docs.sentry.io/server/](https://docs.sentry.io/server/)

### Compodoc (documentation)
##### Reasons
    - Angular support (modules, components, routing...)
    - interactive visualizations
    - documentation coverage report
Documentation: https://compodoc.app/guides/getting-started.html


### Packages
    - HammerJS // Touch and gestures
      https://www.npmjs.com/package/hammerjs

## How to write comments

When writing comments always keep in mind:
"The best comment is the code explaining itself." - loosely cited from Clean Code

When your code is unreadable you failed writing it in [a clean way](http://principles-wiki.net/resources:clean_code).

"A comment worth writing is worth writing well. If you are going to write a comment, take the time to make sure it is the best comment you can write. Choose your words carefully. Use correct grammar and punctuation. Don't ramble. Don't state the obvious. Be brief." - Uncle Bob

## Helpful CI tools

### license-checker
a [npm module](https://github.com/davglass/license-checker) can be used to check for copy left licenses used throughout the npm module graph in the project

By using a command like
```bash
npx license-checker --production --failOn $DISALLOWED_LICENSES
```
with $DISALLOWED_LICENSES being a semicolon-separated list of forbidden licenses, the CI fails when any of those is used.

### Prettier
With a command like e.g.
```bash
npx prettier --config ./example/.prettierrc.js --list-different './example/src/**/{*.ts,*.tsx}'
```
the CI can check, against the fulfillment of code style guidelines.
