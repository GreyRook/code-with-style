# Kubernetes and Deployment

This chapter defines best practices for how to build software that will run on kubernetes.

## Images

The base of every service running on Kubernetes is an OCI / docker image.

 * Docker images MUST NOT define the default user as root (id=0)


## Naming of images

The image name is based on:

  * The applications git repository location on our git server (`${git-server}/${repo-path}`)
  * In case of a repository containing multiple projects, the path within the git repository (`${project-path}`)
  * Type of image

The name is to be constructed following the following pattern: `${basename}/${project-path}/${image-type}`

 * `${basename}` shall be `${repo-path}` with all `/` replaced with `--`
 * If `$project-path` is empty two following slashes MUST NOT be produces
 * `${image-type}` MUST NOT be empty


### Image Types

Applications may produce multiple images.
There are a few predefined `image-type`s which SHOULD be used.
The predefined types MUST only be unsed for designated purpose: 

* `run`: final application image for deployment in Kubernetes. Typically small and without dev-dependencies 
* `dev`: larger application image with installed dev-dependencies and dev-tools. Usefull for CI pipelines and local development/testing.
* `statics`: contains only static files and are not actually runnable


### Examples

 * Mono Repo
     * `repo-path`: `gr-clients/mrx/plan`
     * `project-path`: `/frontend/angular`
     * `image-type`: `dev`
     * `image-name`: `gr-clients--mrx--plan/frontend/angular/dev`

 * Simple project with only a single software package inside repo
     * `repo-path`: `gr/somegroup/project-awesome`
     * `project-path`: `/`
     * `image-type`: `run-http`
     * `image-name`: `gr--somegroup--project-awesome/run-http`


### Reasoning

#### Easy tracing the origin of image's origin

The source code location allows for identifying corresponding code, configurations, and CI pipelines.

#### Name uniquness

Usage of packages names (e.g. as definied in pyproject.toml or package.json) might lead to clashes in image names as packages across languages might use the same name for a package.
E.g. a HTML/CSS/JS-based frontend and the corresponding python backend implementations.


#### Permissions

Slaches `/` denote groups in image repositories and permissions are bound on those.
Therefore having the `repo-path` as the first part of the image name ensures that permissions in the image repository map to the git server structure.
This requires to replace the `/` in `repo-path`.
`--` was choosen to make it easier to read for names already including `-`.

## Naming of image tags

 * Use git hash as tag
 * Avoid providing a tag called `latest`
 * Version tags (`v$X.$Y.$Z`) MUST never be re-uploaded / overwritten


## Terminology

 * daemon — a process proving some kind of service
 * interface — a point to interface with a daemon. In this context not an "ip interface" as in networking
 * http endpoint — HTTP Path (e.g. `/foo`)

### HTTP daemons

Most if not all of our services expose some HTTP server.
We distinguish between three types of interface provided by one daemon:

 * internal interface: Is meant to be called from other services inside the same Kubernetes cluster
 * external interface: Is meant to be called from outside the Kubernetes cluster, usually named "public" - as everything outside the cluster is treated as untrusted
 * monitoring interface: For checking the daemon, Prometheus.

These different interfaces to the software should adhere to different 

 * external interface:
    * MUST use port `8000`
    * HTTP path MUST match the exposed interface. If a service is called from outside as `/api/v1/sandwichmaker/power` the `sadwichmaker` service must also use `/api/v1/sandwichmaker/power` without requiring ingress or api gateways to remap any path. 
 * Internal interface:
    * SHOULD share port with external interface: `8000`
    * All endpoints MUST start with `/internal/`
 * Monitoring interface
    * MUST use port: `8001`
    * Prometheus MUST use `/metrics`
    * Readiness probe SHOULD use `:8001/readyz`
    * Liveness probe SHOULD use `:8001/livez`