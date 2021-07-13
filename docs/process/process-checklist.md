# Process checklist

A list of what to do and some best practices when executing certain processes.

## Creating a new feature branch
- <input type="checkbox"> `git checkout master` (or, if your branch should be merged to another branch, `git checkout {TARGET-BRANCH}`)
- <input type="checkbox"> `git pull` so you branch off of the most recent master / target branch
- <input type="checkbox"> `git checkout -b {TICKET-HANDLE}-{SHORT-DESCRIPTION}`
    - e.g. `git checkout -b ART-123-implement-feature`

## Creating a merge request (MR)
- <input type="checkbox"> Make sure you are on your feature branch
- <input type="checkbox"> Rebase onto target branch
    - <input type="checkbox"> `git fetch`
    - <input type="checkbox"> `git rebase origin/master` (or `git rebase {TARGET-BRANCH}`, if the MR is supposed to be merged to some other branch)
    - Resolve conflicts, if applicable
        - <input type="checkbox"> Resolve conflicts in files while making sure we don't lose or break needed code, save the files
        - <input type="checkbox"> Stage the files (`git add {PATH-TO-CHANGED-FILE}`) or click 'Stage Changes' button in VS Code)
        - <input type="checkbox"> `git rebase --continue`
        - <input type="checkbox"> Repeat until no more conflicts turn up
    - <input type="checkbox"> `git push -f`
- <input type="checkbox"> Find your branch in project's GitLab → Repository → Branches and click 'Merge Request'
- <input type="checkbox"> Make the title of the MR `{TICKET-HANDLE} {SHORT-DESCRIPTION}`
    - e.g. `ART-123 implement feature`
- <input type="checkbox"> Add a comprehensible description (and, if necessary, explanation) of what you did in the description field
- <input type="checkbox"> Assign a possible Reviewer as Assignee and Reviewer
- <input type="checkbox"> Add `FE`, `BE` or `CI` label
- <input type="checkbox"> Click 'Create merge request'

## Reviewing and re-reviewing a MR
This is applicable to the initial review of a MR and also to re-reviewing a MR after the author made additional changes after a previous review.

- <input type="checkbox"> Check the code in the 'Changes' tab on the MR's GitLab page for problems.  
If the changes in the MR are too complex to easily understand by just checking the changes, check out the branch locally and run the code to check the functionality of the implemented feature (or fixed bug) to find other problems.  
With complex MR's it also helps to check the 'Commits' tab on the MR's GitLab page and to go through the commits one by one.
- You found problems?
    - For every problem found, do the following:
        - <input type="checkbox"> If the problem is assignable to a specific part of the code, use the 'Changes' tab to add comments and (if applicable) suggestions to the respective line in the diff.
        Usage of the 'Start a review' button (and subsequent usage of the 'Submit review' button) is encouraged, as it combines your comments into one review, preventing your team members from being flooded by emails.
        - <input type="checkbox"> If it's a general problem or something you can't assign to a specific part of the code, add a thread in the 'Overview' tab.
        While doing so, make sure to start a thread and not just add a comment, because the latter will not show up as an 'unresolved thread'.
        If you used 'Start a review' before, your thread in 'Overview' can also be added to the review and will be combined with other threads into one email (don't forget to 'Submit review' when you're done).
    - <input type="checkbox"> Add the `needs-work` label to the MR
    - <input type="checkbox"> Change the Assignee to the MR author
    - <input type="checkbox"> If substantial changes are necessary, put the ticket back to 'In Progress' in the project's Kanban board (Jira / GitLab board)
- The MR is fine?
    - The MR is either ready to be merged (as indicated by a blue 'Merge' button on the MR's GitLab page) or can be automatically rebased before it is ready to be merged (as indicated by a green 'Rebase' button)?
        - <input type="checkbox"> Approve the MR by clicking 'Approve'
        - <input type="checkbox"> Assign Marge Bot as the Assignee
    - The MR has to be manually rebased?
        - <input type="checkbox"> Approve the MR by clicking 'Approve'
        - Rebase locally (or ask the MR author to do so)
            - <input type="checkbox"> Make sure you are on the respective branch (`git branch`) and if not, check it out (`git checkout {BRANCH-NAME}`)
            - <input type="checkbox"> `git fetch`
            - <input type="checkbox"> `git rebase origin/master` (or `git rebase {TARGET-BRANCH}`, if the MR is supposed to be merged to some other branch)
                - Resolve conflicts:
                    - <input type="checkbox"> Resolve conflicts in files while making sure we don't lose or break needed code, save the files
                    - <input type="checkbox"> Stage the files (`git add {PATH-TO-CHANGED-FILE}`) or click 'Stage Changes' button for the respective file in your IDE)
                    - <input type="checkbox"> `git rebase --continue`
                    - <input type="checkbox"> Repeat until no more conflicts turn up
              - <input type="checkbox"> `git push -f`
      - <input type="checkbox"> Assign Marge Bot as the Assignee

## Handling reviews as the MR author
- <input type="checkbox"> Check all threads the reviewer created in the MR's GitLab page and resolve them by applying suggestions or changing the code locally and pushing commits
- <input type="checkbox"> Remove the `needs-work` label
- <input type="checkbox"> Re-assign the reviewer.
- <input type="checkbox"> If the ticket was put back into 'In Progess', put it into 'In Review' again

