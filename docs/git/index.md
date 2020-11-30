# Git Guidelines


## Tickets, Merge Requests and Commits


 * Ticket (or issue or user story) - Description from a user point of view for a requested change to the code base.
 * Merge Request (short MR) - Solves one ticket or is a stepping stone towards a solution.
 * Commit - Smallest unit of work. Atomic commits are preferred - as small as possible while staying consistent.


![cardinality: Ticket -1--n- MR -1--n- commit](issue-mr-commit.png)

 * One merge request can (and sometimes should) have muliple commits.
 * One ticket can (and sometimes should) have multiple merge requests.
 * But one merge request should only have one ticket. There might be cases where one MR solves multiple related issues that share a root cause.


## Examples & Best Practices

 * Automated changes to files that do not change the meaning (e.g. reformatting) MUST be a separate commit with the tools used clearly stated in the commit message
 * Often before doing the change you actually want to do, there is some refactoring involved

   Move refactoring into its own commit.
   A refactoring should keep the same end result of the software, while changing the code.
   Having a refactoring separated into a separate commit from other changes keeps them comprehensible and reviewable.

Lets consider two commits within one MR:

 * "Added file x"
 * "Deleted file x, accidently added"

A file that was accidently commited should be removed entirely from the git history before code review.
This can be done by squashing (using `git rebase -i`) the commit deleting the file into the one adding it.


### Commit Message

<!-- 
 Chris Beams blog content is cc-by-sa which is not compatible with the current license of the guide
 Therefore it is not included here.
-->
We generally follow [Chris Beams's recommendation on his blog](https://chris.beams.io/posts/git-commit/) for how to write a good commit message.


## Gitlab "squash commits" function

The use of "squash commits" is discouraged.

Reasoning:

 * The commit message is written by the person merging the merge request - not the author
 * The commit message is not being reviewed since it is written after the review


## Branch naming

We always branch from master and create a branch with the naming pattern:

```
<PROJECT-HANDLE>-<TICKET-NUMBER>-<DASH-SEPERATED-SHORT-DESCRIPTION-OF-BRANCH-CONTENT>
```
e.g.
```
STUD-42-the-answer-to-everything
```

There should always be at least one branch per ticket (Story / Bug Report / Subtask) added with this naming structure. 
Branches which build on each other should have the same project handle and ticket number in the branch name.
The description part can vary, as it should describe the changes made in this branch.

In the case of a subtask when only one task is involved use the ticket number of this task.
Otherwise, you should use the main tickets' number and inform inside the merge request's description which subtasks will be affected by the merge. 


## Git LFS

Binary files MUST be placed in [git LFS](https://git-lfs.github.com/) unless smaller than 1kb.
Big non-binary files MIGHT be placed into LFS as well.

An example `.gitattributes` can be found inside the guide's repo.
