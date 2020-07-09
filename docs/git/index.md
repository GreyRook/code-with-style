# Git Guidelines

## Branch naming

We always branch from master and create a branch with the naming pattern:

```
<PROJECT-HANDLE>-<TICKET-NUMBER>-<DASH-SEPERATED-SHORT-DESCRIPTION-OF-BRANCH-CONTENT>
```
e.g.
```
STUD-42-the-answer-to-everything
```

There should always be at least one branch per ticket (Story / Bug Report / Subtask) added with this naming structure. Branches which build on each other should have the same project handle and ticket number in the branch name.
The description part can vary, as it should describe the changes made in this branch.

In the case of a subtask when only one task is involved use the ticket number of this task. Otherwise, you should use the main tickets' number and inform inside the merge request's description which subtasks will be affected by the merge. 