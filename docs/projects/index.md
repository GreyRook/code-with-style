# Project

 * every project is a gitlab group
 * every project has a "project" git repository


## Project git

 * `.cde.yml` for all git repos
 * `docker-compose.yml` for *development*
   * TODO define best practices for those
   * start scripts (`dev_start.sh`) for every sub project
   * use cde-* images with hashes
   * do not use network-mode: host (does not work on windows or mac)


## deployment

 * Code is only deployed as docker images
 * Docker images must be build on the CI, never locally by a developer
 * Promoting code from a QA to a PROD environment must be done without rebuilding a docker image


## Versioning

 * Libraries (in this context any software that is primarily used by other software) MUST use semantic versioning
 * Applications (in this context any software that is primarily used by humans) SHOULD use semantic or date-based versioning

### Semantic versioning

[Semantic Versioning 2.0.0](https://semver.org/) is a formal specification on how to do versioning.

The following amendments MUST be followed:

#### Pre-release

Pre-releases MUST follow the following scheme: `x.y.z-{prerelease-type}.{prerelease}`

 - `prerelease-type` MUST be on of: "adev", "alpha", "beta", "rc"
 - `prerelease` MUST be numeric
 - Releases that are made automatically (e.g. nightly or on every commit or merge) MUST use `dev` identifier
 - `dev` releases must follow `x.y.z-dev.{DATE}`, where date is time of the commit with the following format: `YYYYMMDDHHMM`. It MUST NOT be the build time.
 - 

??? Reasoning

    Semantic versioning (and npm, yarn) use lexical comparisions.
    The selected release types ensure that the versions preceedens is as expected: `"adev" < "alpha" < "beta" < "rc"`.

Reminders:

 * `0.y.z` are development releases and do not guarantee backwards compatibility


#### Semantic versioning and python setuptools

The [versioning of python](https://www.python.org/dev/peps/pep-0440/) and semver are not compatible.
For example the notation for alpha releases in pep-044 is `X.Y.ZaN` - which is not allowed in semver.
In semver the patch (`Z`) version must be separated by `.` or `-` from the pre-release version.
The python versioning scheme does allow such separators, so that the described format is correctly handled and interpreted by both, semver and python.

!!! Note "setuptools does normalize versions"
    
    So if you specify `1.2.3-alpha.1` in your `setup.py` / `pyproject.toml` the release will be `1.2.3a1`.

    You can use `packaging.version.parse` to test the normalization:

    ```
    >>> packaging.version.parse("1.2.3-alpha.1")
    <Version('1.2.3a1')>
    ```

### date-based versioning

Date based versioning SHOULD stick to a 3 part version: `YY.MM.patch`

### git tagging

Any release, including "alpha", "beta", and "rc" pre-releases, MUST be tagged in git.
The tag must follow `v{version}` scheme.