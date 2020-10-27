# HOWTO: git rebase

`git rebase -i` is a powerful tool which can accomplish different task:

1. rebasing 
2. linearizing the history
3. changing history (squash, reorder, delete or alter commits)

Only do one of those at a time!
Usually, if a `git rebase -i` goes wrong it is because multiple of these things were done at the same time - without the user realizing it.
To avoid this always:

1. Take a good look at your git history before using `rebase`
2. Be sure what you want to accomplish
3. Never use `git rebase -i TARGET` without specifying a target


## rebasing

1. Make sure there are no merge commits in your current branch
2. Do not use `-i` at all

## linearizing the history

1. Find a commit before the branches diverged
2. `git rebase -i COMMIT`
3. If any commits were on both branches, delete one of them
4. Ensure the order of your commits is as expected

## changing history

Ensure:

1. No merge commits in the history you are about to change
2. You are not actually rebasing

One easy way to figure out if you are doing any of those two things is to run your `git rebase -i TARGET` command without specifying any changes.
If a conflict arises, you were actually rebasing or had a merge in the history.