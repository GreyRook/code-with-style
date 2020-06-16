# Editing the developer guide

There are two ways to get changes into the developer guide:

1. *Working Contract* -> Merge Request -> Dev Guide + ChangeLog
2. *GitLab Issue* -> Merge Request -> Dev Guide + ChangeLog

Regardless of how the change was initiated, applying the actual change is always done using a merge request that includes an addendum in the change log.

Merge requests need to be approved by more than 50% of the affected team members changes relating to their workflows.
Project management changes need to be approved by at least more than half of the whole team.


## Working Contracts

Working contracts are general working agreements that are regularly revisited and should be used to develop best practices in the field before converting them to a fixed rule in the developer guide.
They never concern code styling and usually affect all developers and project managers.

See: [Code review discipline and working contracts](https://www.youtube.com/watch?v=iGBWyhiqBsk&feature=youtu.be&t=64)

Contracts can generally be divided into two non-exclusive groups:

- Internal developer rules
- External Customer-Relationship-Management 


### Working Contract process

The ultimate goal of a Working Contract is to add a rule into this guide that improves the process of working on projects for the individual team member and as a team and optimize communication with the customer.

For a Working Contract to be added to the guide it has to go through the following phases, each represented by a tag in the [code-with-style guide issue board](https://git.r0k.de/gr/code-with-style/guide/-/boards/62):
1. WoCo proposition
2. WoCo active
   - WoCo double-down
3. WoCo move-to-guide and merge request

#### 1. WoCo proposition
Working Contracts can be proposed by anyone at any time by creating a new issue in this guides [repository](https://git.r0k.de/gr/code-with-style/guide) and flagging it with the 'WoCo proposition' tag.
As the essence of a Working Contract needs to be easily accessible by any team member it should consist of a short, simple and precise sentence.
If absolutely neccessary, clarification can be added in the issues description.

#### 2. WoCo active
In a regular Working Contract meeting it is decided whether the proposed Working Contract will be put into action and thus be flagged with the 'WoCo active' flag.
For that to happen it needs full support of all team members.
To reach consensus team members can discuss their concerns or propose modifications to the Working Contract.

An active Working Contract will be tried out in the field until the next Working Contract meeting.
Everybody should try to follow the Working Contract to the best of their abilities until then and only break the contract with very good reasons.

In subsequent Working Contract meetings everybody will then be asked if they were able to comply with the Working Contract and if not, how and why that happened.

If there were problems in complying with the Working Contract but everybody still agrees the Working Contract should be followed, the 'WoCo double-down' tag can be applied, reasons for breaking the Working Contract can be discussed and addressed and everybody should double down in their ambitions of complying with the Working Contract.

#### 3. WoCo move-to-guide
If everybody agrees they were able to comply with the Working Contract for multiple subsequent Working Contract meetings, it is time for the Working Contract to become part of the code-with-style guide.
It gets labelled 'WoCo move-to-guide' and assigned to a team member that creates a merge request that adds its essence to the guide.

As usual, the merge request can only be merged if more than half of the affected team members give their thumbs up.
As the Working Contracts should not cover the styling of specific programming languages and instead address general working processes, they should always affect everyone on the dev team and most of the time even the dev ops and project management team.


## GitLab Issues and Merge Requests

GitLab issues can be used to internally track and discuss any change requests before working on the corresponding merge request or working contract.

A language specific style change only affects the developers using said language for their projects and is always initiated with a GitLab issue or merge request.

In order to allow the easy categorization of issues and merge requests, GitLab contains labels corresponding to the different languages and frameworks used:

- Frontend Devs => TypeScript, CSS/SCSS, HTML
- Backend Devs => Python, MongoDB, Rest
- Embedded Devs => C, C++

To avoid "feature creep" in merge requests, merge requests must not be declined for being "too small".
If the scope of a MR is changed it needs to be reviewed again by everyone involved, so it is better to create an additional MR in case a "we should also define/regulate/include X"-situation comes up while reviewing.

# Attribution

When using other open guides as a base for what you are writing follow the following steps:

* Make sure the license of the guide you are copying allows that
* Copy the part verbatim you are interested in
* Add an entry to the `attribution.md` file
* Commit both together with a commit message including an attribution, license and source URL. Example:

```
copy eng-practices from Google

Source: https://github.com/google/eng-practices
Rev: 5761c2c63024a1b9292b891643616286a2fff6ca
License: CC-By 3.0
```

* Make any changes to the copied text afterwards in separate commits.


# Adding diagrams and other graphics

The preferred software to create diagrams and other graphics for the guide is [draw.io](https://github.com/jgraph/drawio-desktop).
The source file of any graphic must be added to the guide's git repo.
A png version for easier online-viewing must also be provided.
The png version must be size-optimized and stored in LFS.

Example:

```bash
# Export drawio file to png
drawio -f png --export docs/git/issue-mr-commit.drawio
# optimize the png's size before adding to git
optipng -o 7 docs/git/issue-mr-commit.png
```
