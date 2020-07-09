# Code with Style

An opinionated guide on how [we](https://www.greyrook.com) like our code.

The HTML version can be found publicly on [gitlab.com pages](https://greyrook.gitlab.io/code-with-style/).

## Note to Grey Rook employees

Please keep in mind that the internal git repository is regularly synced with the public ones at [gitlab.com](https://gitlab.com/GreyRook/code-with-style) and [github.com](https://github.com/GreyRook/code-with-style).  Do not include internal information in the guide.


## Building HTML and PDF locally

Using `podman` it can be build locally using:

```
export IMAGE=greyrook/cde-texlive:32ea33a8b61ae09318f80e6648b131fcb0c82a6c
alias pod_run="podman run --security-opt label=disable --userns=keep-id --group-add wheel -ti -v /home:/home -e HOME=$HOME -w $(pwd) $IMAGE"

pod_run pipenv --python 3
pod_run pipenv install --dev
pod_run sh -c "cd docs; pipenv run make html latexpdf"
```