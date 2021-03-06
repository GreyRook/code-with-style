## How to E2E-tests

For E2E-testing Nightwatch is used. A special docker-image is run for testing the
test suite against the code in the branch you commit your code to. The folder `e2e` contains all files relevant for the E2E-test.
(ref. cde-dev-greywatch repository for reference to the docker image)

A test consists of fields containing a function with the browser API as a parameter (ref. e.g. `tests/app.ts`).

Make yourself comfortable with CSS selectors and XPATH notation for selecting DOM elements. You will need it for querying elements you want to interact with or check for a state change.

For writing basic Nightwatch tests refer to the [Nightwatch guide](https://nightwatchjs.org/guide).

We write tests in TypeScript but it is also possible to write them in plain JavaScript. Having the advantage of a type system (as in TypeScript) can be a benefit when checking statically for inconsistent use of wrong types. So use TypeScript when you can.

Structure your code in (page Objects)[https://nightwatchjs.org/guide#working-with-page-objects] (s, e.g. `pages/main.ts`)

Assertions are used for testing special conditions after some interaction with the front end. Assertions not related to a single page's inner workings should be collected in a shared module and imported into every page object. This allows all general assertions to use a page object's elements, compared to global assertions that do not have access to the page object's scope.
Page specific assertions can directly be added as commands in the page object.

Interactions can be structured in custom commands. (s. e.g. `commands\addButton.ts`).



Bear in mind that your code is running on the testing server and not in the browser scope. Use `this.api.execute` to explicitly run JavaScript code in the browser running the frontend code.
