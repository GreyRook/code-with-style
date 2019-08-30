## How to ingeration-tests

For integration-testing Nightwatch is used. A special docker-image is run for testing the
test suite against the code in the branch you commit your code to. The folder `integration-tests` contains all files relevant for the integration-test.
(ref. cde-dev-greywatch repository for reference to the docker image)

A test consists of fields containing a function with the browser API as a parameter (ref. e.g. `tests/app.ts`).

Make yourself comfortable with CSS selectors and XPATH notation for selecting DOM elements. You will need it for query elements you interact with or that you check for a state change.

For writing basic nightwatchjs.org tests ref. to the https://nightwatchjs.org/guide.

We write tests in TypeScript but it is also possible to write them in plain JavaScript. Having the advantage of a type system (as in TypeScript) can be a benefit when checking statically for inconsistent use of wrong types. So use TypeScript when you can.

Structure your code in (page Objects)[https://nightwatchjs.org/guide#working-with-page-objects] (s, e.g. `pages/main.ts`)

Assertions are used for testing special condition after some interaction with the front end. You can write your custom nightwatch assertions into the folder `assertions`. A example assertion file can be found in `assertions\elementCount.ts`.

Interactions can be structured in custom commands. (s. e.g. `commands\addButton.ts`).

Bar in mind that your code is running in the testing server and not actually in the browser scope. Use `this.api.execute` to run javascript code expicitly in the browser the frontend tested is running.