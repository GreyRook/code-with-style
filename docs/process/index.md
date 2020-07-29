# Scrum

The aim of the agile approach of Scrum is transparency regarding the issues that need to be done in a certain time frame. 
Thus, a Sprint (2 weeks) is planned with an amount of issues that the Development Team is certain to accomplish.
The issues follow a strict workflow in Jira, so that the Development Team and the Product Owner see at any moment of the Sprint the status of an issue.

At *Grey Rook* we implemented the simple rule that a developer can only work on one issue at a time i.e. can only have one issue with the status "WIP".
There can be reasons that hinder the developer to complete an issue. If such a case happens, the developer is obliged to move the ticket to "ToDo", delegate the ticket to another developer and write a comment into the issue to explain the current status to the other developer. 
Only if there is a comment, the developer can choose a new issue to work on. 

## Scrum Roles

The Scrum Team is self-organizing (choose how to best do their work), cross-functional (has all competencies to accomplish work without depending on others) and is optimized for flexibility, creativity and productivity. 
The Scrum Team includes the Development Team (Dev Team), the Product Owner (PO) and the Scrum Master (SM):

* The Development Team (3-9 people) creates the increment at the end of the Sprint. It is a self-organizing, cross-functional team, while Scrum does not recognize any titles and sub-teams within it.
* The Product Owner is one person whose job it is to maximize and optimize value of development work. The PO organizes the Product Backlog (or delegates it, but is still accountable) and makes sure that the Dev Team understands the Product Backlog items and knows what to work on next. Thus, the Product Backlog should be visible, transparent and clear. The PO is responsible for ordering the items to best achieve the goals and missions. 
* The Scrum Master does not decide, the SM is a servant leader with the task to maximize value. The SM helps to understand and promotes the Scrum theory/practices/rules and values and supports Scrum. 

## Sprint 

* A Sprint is a time-box during which a “Done”, useable, and potentially releasable product increment is created. 
* The Sprint is a container for all other Sprint Events with a consistent duration throughout a development effort. The duration should be one month or less. At *Grey Rook* it is 2 weeks, starting on Monday and ending on Friday the following week.
* A new Sprint starts immediately after the conclusion of the previous Sprint.

During the Sprint:

* No changes are made to the Sprint that would endanger the Sprint goal
* Quality goals do not decrease
* The scope may be clarified and negotiated between the PO and the Dev Team as more is learned. At *Grey Rook* we aim not to change the scope but to exchange issues if needed.

### Sprint Goal
The Sprint Goal is the objective that can be met through implementation of the Product Backlog. It is a guidance of why the Dev Team is building the increment. The Sprint Goal offers some flexibility regarding the implemented functionality while ensuring that the Product Backlog items deliver one coherent function.

* What can be delivered in the increment?
The Dev Team forecasts functionality while the task of the PO is to discuss the objetive and Product Backlog items needed for the Sprint Goal. 

At *Grey Rook* we aim to plan the Sprint so that no issues need to be changed. However, as it is an agile 
process, there are always circumstances that demand for a quick change. That can be 
hotfixes and breaking bugs as well as presentations for clients that need adjustments 
in the code. Issues can be exchanged at any point in the Sprint process given the 
following conditions:

* It is feasible to complete the new issue within the Sprint
* The new issue has the same amount of Story Points (given that issues can only replace
issues and bugs only bugs)
* It is discussed with at least one of the members of the Dev Team
* The PO is informed about the change and agrees

## Scrum Events

The *Daily Scrum* is not a status meeting but a time-boxed (15 minutes) meeting at the same time and date to inspect on the progress towards the Sprint Goal. The Dev Team is responsible while the SM may guide. 
* What did I do yesterday to meet the Sprint Goal?
* What will I do today to meet the Sprint Goal?
* What are impediments to meet the Sprint Goal?

### Sprint Planning

The work to be performed in the Sprint is planned at the *Sprint Planning*.
This plan is created by the collaborative work of the entire Scrum Team, thus the PO, the Dev Team and the SM take part.
The Sprint Planning is time-boxed to a maximum of eight hours for a one month Sprint.
The SM ensures that the event takes place and that the attendants understand its purpose.
The SM teaches the Scrum Team to keep it within the time-box.

Sprint Planning answers the following:

* What can be delivered in the increment resulting from the upcoming Sprint?
* How will the work needed to deliver the increment be achieved?

### Sprint Review

The Sprint Review is a collaborative working session at the end of the Sprint, not a demonstration. The PO, the Dev Team and the SM take part as well as the stakeholder that are invited by the PO. The meeting is time-boxed for 4 hours for a one month Sprint. The goal is to inspect the increment and to adapt the *Product Backlog*, thus giving input to the *Sprint Planning*. The SM ensures that the meeting takes place. 

### Sprint Retrospective

The Retrospective (Retro) is a time-boxed (3 hours for a one month Sprint and 1.5 hours for a two week Sprint) meeting that takes place after the *Sprint Review* and prior to the *Sprint Planning*.  
The aim ot the Retro is to improve the work processes defined by the Dev Team and adapt the *Definition of Done (DoD)*. It is a formal opportunity to focus on inspection and adaption regarding people/relationships/processes/tools. The Scrum Team is advised to identify and order major items that went well and potential improvements.  
The whole Scrum Teams takes part, while the SM ensures that the meeting is productive. The SM participates as peer team member.  
The *Sprint backlog* includes at least one high priority process improvement identified in the *Sprint Retro*. 

## Sprint Refinement
The Refinement is not an official Scrum Event, more an ongoing process where the Dev Team and the PO add detail, estimates and order to the Product Backlog. The Scrum Teams decides when the refinement is done but it should consume no more than 10% of DEV capacity. 

In the context of the *Sprint Planning* tickets and subtasks should get tagged with
BE (backend) or FE (frontend) to better understand which part of the team can handle 
which task.
# Story Points
1. A measure of team output
* Correlated to but not necessarily the same as effort
* Describes the complexity of a requirement
2. A relative measure 
* Measured relative to a known “reference” story
* Consistent over time for the same team
* Not necessarily comparable across teams
* Deliberately abstracted from common units of measurement 
(hours, meters, kilograms, etc.)
* Physical measures come with emotional baggage
* Quick to use, once you have established a reference story 
3. Based on the Fibonacci Sequence 
* That is a pattern where the next number in the sequence is the sum 
of the previous two
* i.e. 0, 1, 2, 3, 5, 8, 13, 21, 34, 55…
* Ubiquitous in natural systems, so humans have millennia of experience with it
* The sequence is effective in estimation because the sum of the quantities of the larger number is equal to the ratio of the larger number to the smaller one

The complexity of tickets is estimated using Story Points. These are given to each individual Story Ticket in the planning phase of a Sprint in a process called 'Planning Poker'.

Every developer in the Planning Poker meeting needs to have an understanding of what work is to be done to complete the ticket that is to be estimated. When that is the case, the developer has to decide on a number that reflects the complexity of the ticket. Those numbers are to be presented to the Scrum Master at the same time to prevent influencing other peoples guesses.
At **Grey Rook** we use the numbers 0, 1, 2, 3, 5, 8, 13 for estimating.
If a developer thinks it takes more time to discuss a ticket than to actually resolve it, he should give the ticket a 0.

Tickets that are not doable in one sprint (as indicated by the opinion of most of the developers or a number of story points equal to or greater than 13 after estimating) are to be rejected and to be split up into smaller tickets.

The final amount of story points for the Ticket is decided on by the Scrum Master by calculating the average of the estimates of all developers. When the result is a fraction we usually round up, but that can be influenced by general opinion or specific reasons. Due to the nature of the process Tickets can end up with 4,6,7 or 10 Story Points, even though those numbers are not part of the Fibonacci numbers. 

Moreover, in order to reach consensus when the estimates are very different, the developer with the highest and the lowest estimate have to explain their reasons for their estimate. All members of the Development Team have the right to change their original estimate after this discussion.

Given this process there should not be any story ticket inside a sprint without an estimation. User stories without an estimation are not allowed to be worked on. 

Bug tickets on the other hand do not get story points.

**Summary:** *A Story Point is a relative unit of measure, decided upon and used by individual Scrum teams, to provide relative estimates of effort for completing requirements*

# Ticket description
Tickets need to have a detailed description explaining the following aspect:

- Story tickets
	- *Purpose*: Why is the feature added?
	- *Scope*: What needs to be done to finish the story?
	- *Value*: What is the value for the user?
	- *Implementation* (optional): How can the story be implemented?
- Bug tickets
	- *Problem*: What is the problem and how can it be reproduced? What OS and browser was used? Optimally provide a short video that shows how the problem can be reproduced
	- *Expectation*: What is the expected behavior?
	- *Implementation* (optional): How can the bug be fixed?

If a ticket has no description or is missing information, the developer tackling the ticket has to either fix the description or contact the person who can fix it, e.g. the ticket author, before starting to work on it.
