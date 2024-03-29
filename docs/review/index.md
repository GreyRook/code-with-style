# Code Review Developer Guide

## Introduction {#intro}

A code review is a process where someone other than the author(s) of a piece of
code examines that code.

Google uses code review to maintain the quality of the code and products.

This documentation is the canonical description of Google's code review
processes and policies adapted by Grey Rook to fit our needs. 
The original documentation can be found here: 
[Code Review Developer Guide](https://github.com/google/eng-practices/blob/master/review/index.md)



This page is an overview of our code review process. There are two other large
documents that are a part of this guide:

-   **[How To Do A Code Review](reviewer/)**: A detailed guide for code
    reviewers.
-   **[The CL Author's Guide](developer/)**: A detailed guide for developers
    whose CLs are going through review.

## What Do Code Reviewers Look For? {#look_for}

Code reviews should look at:

-   **Design**: Is the code well-designed and appropriate for your system?
-   **Functionality**: Does the code behave as the author likely intended? Is
    the way the code behaves good for its users?
-   **Complexity**: Could the code be made simpler? Would another developer be
    able to easily understand and use this code when they come across it in the
    future?
-   **Tests**: Does the code have correct and well-designed automated tests?
-   **Naming**: Did the developer choose clear names for variables, classes,
    methods, etc.?
-   **Comments**: Are the comments clear and useful?
-   **Style**: Does the code follow the
    [style guides](http://google.github.io/styleguide/)?
-   **Documentation**: Did the developer also update relevant documentation?

See **[How To Do A Code Review](reviewer/)** for more information.

### Picking the Best Reviewers {#best_reviewers}

In general, you want to find the *best* reviewers you can who are capable of
responding to your review within a reasonable period of time.

The best reviewer is the person who will be able to give you the most thorough
and correct review for the piece of code you are writing. This usually means the
owner(s) of the code, who may or may not be the people in the OWNERS file.
Sometimes this means asking different people to review different parts of the
CL.

If you find an ideal reviewer but they are not available, you should at least CC
them on your change.

*Adjustment Grey Rook:*
*This is optional due to our company size, time contraints and fixed deadlines.* 
*Despite these limitations, we aim to pick the best reviewer.*
*TBD: process of code owners and picking the best reviewer.*

### Assigning Reviewers {#assigning_reviewers}

Assigning reviewers to your merge requests makes it easy to delegate responsibilities.

There are two different responsibilities when working with assignments:
- **Assignee**: The person which is currently expected to work on, or review the merge request
- **Reviewer**: The person best suited and responsible to review the merge request

Merge requests can be in one of the following valid states:
- *Reviewer* and *Assignee* not set: The creator of the merge request is unsure who is the best fit for a review, reviewers can assign themselves to claim the responsibility
- *Reviewer* assigned, but *Assignee* is not the reviewer: The merge request needs work from the assigned person before the next review
- *Assignee* is **Bot-Marge**: Merge request was reviewed, approved and is ready for automatic merge

### In-Person Reviews {#in_person}

If you pair-programmed a piece of code with somebody who was qualified to do a
good code review on it, then that code is considered reviewed.

*Adjustment Grey Rook:*
*ToDo: There is not yet a guidline how to do pair-programming at Grey Rook.* 
*This needs to be implemented before in-person reviews can take place* 

You can also do in-person code reviews where the reviewer asks questions and the
developer of the change speaks only when spoken to.

*Adjustment Grey Rook:*
*The developer presents the reviewer his piece of code.* 

### When to do Code Reviews?

It’s encouraged to do code reviews every day, and it’s up to the developer when to do so.

However, you have take a look at the available MRs and review some (if applicable) at least once before starting a new ticket.

This way we reduce the number of tasks that are almost finished by merging them, or pass them back to the developer to work on the review comments.

### MR labels

For every MR the developer who opened it should add the appropriate label to it whether it's a Backend (BE) or Frontend (FE), so it's easier for reviewers to have an overview of which MRs that are suitable for them to review.

## See Also {#seealso}

-   [How To Do A Code Review](reviewer/): A detailed guide for code reviewers.
-   [The CL Author's Guide](developer/): A detailed guide for developers whose
    CLs are going through review.
-   [Process checklist's Reviewing part](../process/process-checklist.md#reviewing-and-re-reviewing-a-mr): A checklist of stuff to remember when doing code reviews.