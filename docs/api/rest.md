# REST API Guidelines

REST stands for Representational State Transfer, and is an architectural approach to designing web services.
It is designed around _resources_, which are made available to clients.
Each resource has its own route or endpoint by which it can be accessed.

## Naming conventions for resources

 * plural
 * all lowercase
 * no underscores, use dashes instead (i.e. `car-tires` instead of `car_tires`)
 * only nouns, no verbs (i.e. `/cars` instead of `/get-all-cars`)


## HTTP Verb usage

Use the correct HTTP verb for your calls:

 * POST to create new resources
 * GET to read (only) operations
 * PUT to update a resource, providing the full resource
 * PATCH for partial updates
 * DELETE to delete a resource or resources

## URL Endpoint naming

And follow these conventions:

 * All GET endpoints should not alter the state of the data! With exemption for metadata like the last access_time or write a log entry on access.
 * API base urls MUST be versioned, e.g. `/api/v1/`
 * The `version` is a single number and is only increased on back ward incompatible changes
 * The following pattern MUST be followed for public services: `/api/{service_name}/v{version}/{resource}`
    * The `service_name` part is per service, making the internal routing transparent   
    * The url path from the outside and on the service itself must be exactly the same. For example a service that is called from outside as `/api/sandwichmaker/v1/power` the service MUST also use `/api/sandwichmaker/v1/power` without requiring ingress or api gateways to remap any path.
    * The only exception for not following the pattern is beeing for compatibility with third party software.
 * API base urls for private (between services) MUST start with`/internal/`. Internal APIs therefore should follow: `/internal/api/{service_name}/v{version}/{resource}`
 * Every REST API should have it's openapi v3 definition