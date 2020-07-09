# Editing the developer guide

There are two ways to get changes into the developer guide:

1. *Working Contract* -> Merge Request -> Dev Guide + ChangeLog
2. *GitLab Issue* -> Merge Request -> Dev Guide + ChangeLog

Regardless of how the change was initiated, applying the actual change is always done using a merge request that includes an addendum in the change log.
Merge requests need to be approved by more than 50% of the affected team members changes relating to their workflows. Project management changes need to be approved by at least more than half of the whole team.


## Working Contracts

Working contracts are general working agreements that are regularly revisited and should be used to develop best practices in the field before converting them to a fixed rule in the developer guide. They never concern code styling and usually affect all developers and project managers.
See: [Code review discipline and working contracts](https://www.youtube.com/watch?v=iGBWyhiqBsk&feature=youtu.be&t=64)

Contracts can generally be divided into two non-exclusive groups:

- Internal developer rules
- External Customer-Relationship-Management 


## GitLab Issues

GitLab issues can be used to internally track and discuss any change requests before working on the corresponding merge request or working contract.

A language specific style change only affects the developers using said language for their projects and is always initiated with a GitLab issue or merge request. 
In order to allow the easy categorization of issues and merge requests, GitLab contains labels corresponding to the different languages and frameworks used:

- Frontend Devs => TypeScript, CSS/SCSS, HTML
- Backend Devs => Python, MongoDB, Rest
- Embedded Devs => C, C++



