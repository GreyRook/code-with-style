# Kubernetes and Deployment

This chapter defines best practices for how to build software that will run on kubernetes.

## Images

The base of every service running on Kubernetes is an OCI / docker image.

 * Docker images MUST NOT define the default user as root (id=0)


## Naming of images

 * The image name is based on the git repository. Given a repo `$git-server/group/subgroup/project`, naming is as follows:
    * `$image-repo/group/subgroup/project` — if there is only one image build for the project
    * `$image-repo/group/subgroup/project/$subproject` — if the repository is a mono-repo and contains multiple subprojects. The `$subproject` part of the image name MUST match the name of the project folder inside the mono-repo.
    * `$image-repo/group/subgroup/project-$image_type` or `$image-repo/group/subgroup/project/$subproject-$image_type` — if a project or subproject produces more than one image the must separated by a `-`
    * `$image-repo/group/subgroup/project-static` — If the image contains only static files (for k8ssco) the `$image_type` part of the name must be `-static`


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