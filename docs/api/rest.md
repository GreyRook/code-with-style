# REST API Guidelines

REST stands for Representational State Transfer, and is an architectural approach to designing web services.
It is designed around _resources_, which are made available to clients.
Each resource has its own route or endpoint by which it can be accessed.

## Naming conventions for resources

Resource names MUST be:

 * Plural
 * All lowercase
 * No underscores, use dashes instead (i.e. `car-tires` instead of `car_tires`)
 * Only nouns, no verbs (i.e. `/cars` instead of `/get-all-cars`)


## HTTP Verb usage

Use the correct HTTP verb for your calls:

 * POST to create new resources
 * GET to read (only) operations
 * PUT to update a resource, providing the full resource
 * PATCH for partial updates
 * DELETE to delete a resource or resources


## URL Endpoint naming

And follow these conventions:

 * All GET endpoints SHOULD not alter data! With exemption for metadata like the last access_time or write a log entry on access.
 * API base urls MUST be versioned, e.g. `/v1/`, `/v2/`
 * The `version` is a single number and is only increased on back ward incompatible changes
 * The following pattern MUST be followed for public services: `/api/{service_name}/v{version}/{resource}`
    * The `service_name` part is per service, making the internal routing transparent   
    * The url path from the outside and on the service itself must be exactly the same. For example a service that is called from outside as `/api/sandwichmaker/v1/power` the service MUST also use `/api/sandwichmaker/v1/power` without requiring ingress or api gateways to remap any path.
    * The only exception for not following the pattern is being for compatibility with third party software.
 * API base urls for private (between services) MUST start with`/internal/`. Internal APIs therefore should follow: `/internal/api/{service_name}/v{version}/{resource}`
 * Every REST API should have it's openapi v3 definition


## JSON Payloads

The preferred payload serialization is JSON.
If JSON is used in REST APIs the [JSON:API spec](https://jsonapi.org/) SHOULD be followed. 

### Key name restrictions

 * Key names SHOULD be `camelCase`, key names MAY be `snake_case` but MUST NOT be `kebab-case` or `PascalCase`
 * Key names MUST contain only ASCII alphanumeric characters (`a-zA-Z0-9`)
 * Key names MUST NOT start with a number. Exception: In non-root-level objects where all keys are numbers (i.e. `{"someThing": {"0": ..., "1": ...}}`).

??? info "Reasoning"

    The decision between **camelCase** and snake_case is a tough one.
    Both are used in common APIs and style guides.
    Our most used languages styles are incompatible: python and c use snake_case, while JavaScript/TypeScript uses camelCase.

    Deciding reasons for camelCase:

      * JSON-API, which we lean towards to, does recommend camelCase
      * It is easier to map in python (with pydantic alias) than on the TypeScript side

    **Names starting with a number** are an issue when generating code.
    Variable, class members and function names must start with a character.

## Static resource endpoint naming

If the service also provides/is linked to static resources, e.g. HTML/CSS/JS front-ends for using the API as human user, then the static resource endpoint must follow these conventions:

 * One of the following URL pattern MUST be followed:
     * `/static/{service_name}/{resource}`
     * `domain-dedicated-to-serving-static.resource.only/{service_name}/{resource}`
   * The url path from the outside and on the service itself must be exactly the same.
 * Static resource should get build such that their names or a parent directory contains a hash, e.g. `./admin/css/base.css` becomes `./admin/css/base.27e20196a850.css` or `./70de0fa16470/admin/css/base.css`.


??? Reasoning
    
      * k8ssco (statics operator) for reusing existing functionality and providing transition periods for hashed static resources out-of-the-box
      * Consistent URL pattern for reducing required sync regarding location of static resources between BE/FE-Devs and DevOps/Ops

