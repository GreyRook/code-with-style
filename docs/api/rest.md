# REST API Guidelines

REST stands for Representational State Transfer, and is an architectural approach to designing web services.
It is designed around _resources_, which are made available to clients.
Each resource has its own route or endpoint by which it can be accessed.

## Naming conventions for resources

 * plural
 * all lowercase
 * no underscores, use dashes instead (i.e. `car-tires` instead of `car_tires`)
 * only nouns, no verbs (i.e. `/cars` instead of `/get-all-cars`)


## Endpoints conventions

We use the basic CRUD operations:

 * POST to (C)reate
 * GET to (R)ead
 * PATCH to (U)pdate
 * DELETE to (D)elete


And follow these conventions:

 * All GET endpoints should not alter the state of the data! With exemption for metadata like the last access_time or write a log entry on access.
 * API base urls MUST be versioned, e.g. `/api/v1/`
 * The `version` is a single number and is only increased on back ward incompatible changes
 * The following pattern should be followed for public services: `/api/{service_name}/v{version}/{ressource}`
    * API base urls for public APIs SHOULD start with `/api/`
    * The `service_name` part is per service, making the internal routing transparent   
    * The url path from the outside and on the service iteslf must be exactly the same. For example a service that is called from outside as `/api/sandwichmaker/v1/power` the service MUST also use `/api/sandwichmaker/v1/power` without requiring ingress or api gateways to remap any path. 
 * API base urls for private (between services) MUST start with`/interal/`. Internal APIs therefore should follow: `/internal/api/{service_name}/v{version}/{ressource}`
 * Every REST API should have it's openapi v3 definition