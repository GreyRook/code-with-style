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