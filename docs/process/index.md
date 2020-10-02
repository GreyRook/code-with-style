# Scrum

Scrum is a framework to address complex adaptive problems while productively and creatively delivering products of the highest possible value.

The aim of the agile approach of Scrum is transparency regarding the issues that need to be done in a certain time frame, which opens up the opportunity to easily inspect the work that has been done and to quickly adapt to changed conditions or requirements.
Thus, a Sprint (2 weeks) is planned with an amount of issues that the Development Team is certain to accomplish.
The issues follow a strict workflow in Jira, so that the Development Team and the Product Owner see at any moment of the Sprint the status of an issue.
That gives the Development Team and the Product Owner the chance to identify and react to risks that endanger the Sprint Goal.

At *Grey Rook* we implemented the simple rule that a developer can only work on one issue at a time i.e. can only have one issue with the status "WIP".
There can be reasons that hinder the developer to complete an issue. If such a case happens, the developer is obliged to move the ticket back to "ToDo".
If the developer is sure he will not be able to finish the ticket at a later time in the Sprint, he should remove him- or herself from the ticket as an assignee so that another developer can pick up the work.
He should also put a comment into the issue to explain the current status (including the name of the branch with the unfinished work), so that whoever continues working on the ticket can easily do so.
To be sure someone else will continue the ticket, the original developer should also inform the team in the daily meeting or via other communication channels that the ticket is to be reassigned.
Only if there is a comment, the developer can choose a new issue to work on. 

## Scrum Roles

Scrum does not recognize any titles and sub-teams within it, but there are three roles within a team.
The Scrum Team is made up of the Development Team (Dev Team), the Product Owner (PO) and the Scrum Master (SM):

* The Development Team (3-9 people) creates the increment during the Sprint. It is a self-organizing (choose how to best do their work), cross-functional team (has all competencies to accomplish work without depending on others) that is optimized for flexibility, creativity and productivity.  
* The Product Owner is one person whose job it is to maximize and optimize value of development work. The PO organizes the Product Backlog (or delegates it, but is still accountable) and makes sure that the Dev Team understands the Product Backlog items and knows what to work on next. Thus, the Product Backlog should be visible, transparent and clear. The PO is responsible for ordering the items to best achieve the product vision. 
* The Scrum Master does not decide, the SM is a servant leader. The SM helps to understand and promotes the Scrum values theory, practices and rules  and supports Scrum. 


## Scrum Events

### Timboxes
The Scrum Guide gives clear rules on the timbox of the Scrum Events.
These are listed below with the following format:<br>
Scrum Guide Timebox / What we aim for at **Grey Rook**.
* Sprint: 4 weeks / 2 weeks
* Daily Scrum: 15 minutes / 15 minutes
* Sprint Planning: 8 hours / 2 hours
* Sprint Review: 4 hours / 2 hours
* Sprint Retrospective: 3 hours / 1½ hours

### Sprint 

* A Sprint is a time-box during which a “Done”, useable, and potentially releasable product increment is created. 
* The Sprint is a container for all other Sprint Events with a consistent duration throughout a development effort. The duration should be one month or less. At *Grey Rook* it is 2 weeks, starting on Monday and ending on Friday the following week.
* A new Sprint starts immediately after the conclusion of the previous Sprint.

During the Sprint:

* No changes are made to the Sprint that would endanger the Sprint goal
* Quality goals do not decrease
* The scope may be clarified and negotiated between the PO and the Dev Team as the sprint progresses and more is learned. At *Grey Rook* we aim not to change the commited story points but to exchange issues if needed.

#### Sprint Goal
The Sprint Goal is the objective that can be met through implementation of the Sprint Backlog. 
It is a guidance of why the Dev Team is building the increment. 
The Sprint Goal offers some flexibility regarding the implemented functionality while ensuring that the Product Backlog items deliver one coherent function.

* What can be delivered in the increment?
The Dev Team forecasts functionality while the task of the PO is to discuss the objective and Product Backlog items needed for the Sprint Goal. 

At *Grey Rook* we aim to plan the Sprint so that no issues need to be changed. 
However, as it is an agile process, there are always circumstances that demand for a quick change. 
For example hotfixes and breaking bugs as well as presentations for clients that need adjustments in the code. 
Issues can be exchanged at any point in the Sprint process given the following conditions:

* It is feasible to complete the new issue within the Sprint
* The new issue has the same amount of Story Points (given that issues can only replace
issues and bugs can only replace bugs)
* It is discussed with at least one of the members of the Dev Team
* The PO is informed about the change and agrees

### Daily Scrum

The *Daily Scrum* is not a status meeting but a daily, time-boxed (15 minutes) meeting at the same time of the day to inspect on the progress towards the Sprint Goal. 
The Dev Team is responsible while the SM may guide its facilitation.
Typical questions to be discussed during the Daily Scrum are:
* What did I do yesterday to meet the Sprint Goal?
* What will I do today to meet the Sprint Goal?
* What are impediments to meet the Sprint Goal?
The outcome of the Daily Scrum should be optimized collaboration and a list of impediments.

### Sprint Planning

The work to be performed in the Sprint is planned at the *Sprint Planning*.
This plan is created by the collaborative work of the entire Scrum Team, thus the PO, the Dev Team and the SM take part.
The Sprint Planning is time-boxed to a maximum of eight hours for a one month Sprint.
The SM ensures that the event takes place and that the attendants understand its purpose.
The SM teaches the Scrum Team to keep it within the time-box.

Sprint Planning answers the following questions:

* What can be delivered in the increment resulting from the current Sprint?
* How will the work which is needed to deliver the increment be achieved?
* What Sprint Goal does the current Sprint have?

### Sprint Review

The Sprint Review is a collaborative working session at the end of the Sprint, not a demonstration.
The PO, the Dev Team and the SM take part as well as the stakeholder that are invited by the PO.
The meeting is time-boxed for 4 hours for a one month Sprint.
The goal is to inspect the increment and to adapt the *Product Backlog*, thus giving input to the *Sprint Planning*.
The SM ensures that the meeting takes place and facilitates discussion.

### Sprint Retrospective

The Retrospective (Retro) is a time-boxed (3 hours for a one month Sprint and 1.5 hours for a two week Sprint) meeting that takes place after the *Sprint Review* and prior to the *Sprint Planning*.

The aim ot the Retro is to improve the work processes defined by the Dev Team and adapt the *Definition of Done (DoD)*.
It is a formal opportunity to focus on inspection and adaption regarding people/relationships/processes/tools.
The Scrum Team is advised to identify and order major items that went well and point out potential improvements.

The whole Scrum Team takes part, while the SM ensures that the meeting is productive.
The SM participates as peer team member.

The *Scrum Master* ensures that at least one high priority process improvement, identified in the *Sprint Retrospective*, is worked on during the upcoming sprint. 

### Sprint Refinement
The Refinement is not an official Scrum Event, more an ongoing process where the Dev Team and the PO add detail, estimates and order to the Product Backlog. 
The Scrum Teams decides when the refinement is done but it should consume no more than 10% of DEV capacity.
It also gives the Dev Team an insight into what is currently planned for the next Sprints.

In the context of the *Sprint Planning* tickets and subtasks should get tagged with BE (backend) or FE (frontend) to better understand which part of the team can handle which task.

### Story Points

*Summary:* A Story Point is a relative unit of measure, decided upon and used by individual Scrum teams, to provide relative estimates of effort for completing requirements.

A measure of team output:
	* Describes the complexity, risk involved and uncertainty of a requirement
	* Correlated to but not necessarily the same as effort
	* Measured relative to a known “reference” story. At *Grey Rook* we grow accustomed over time to how complex one Story Point is
	* Not necessarily comparable across teams
	* Consistent over time for the same team

These are given to each individual Story Ticket - and depending on the project, Bug Ticket - in the planning phase of a Sprint in a process called 'Planning Poker'.

Every developer in the Planning Poker meeting needs to have an understanding of what work is to be done to complete the ticket that is to be estimated.
When that is the case, the developer has to decide on a number that reflects the complexity of the ticket.
Those numbers are to be presented to the Scrum Master at the same time to prevent influencing other peoples guesses.

At **Grey Rook** the developer may choose one of the numbers 0, 1, 2, 3, 5, 8 and 13 plus ? for their estimate.
These are based on the Fibonacci Sequence, a sequence of numbers where the next number in the sequence is the sum of the previous two numbers.
That means it is continued "21, 34, 55, ...", but for reasons described below we cap the sequence after the 13.

Humans have millennia of experience with it, because it is ubiquitous in natural systems.
It is effective in estimation because the sum of the quantities of the larger number is equal to the ratio of the larger number to the smaller one.
It is almost impossible to precisely estimate a ticket that has a high complexity, i.e. decide if a ticket deserves 7 or 8 Story Points.
In this respect, the fibonacci sequence offers a reasonable gradation.

If a developer thinks it takes more time to discuss a ticket than to actually resolve it, he should give the ticket a 0.
If a developer is uncertain about the complexity, risk involved and uncertainty they may choose to put down a ?.

Tickets that are not doable in one sprint (as indicated by the opinion of most of the developers or a number of story points equal to or greater than 13 after estimating) are to be rejected and to be split up into smaller tickets.

The final amount of story points for the Ticket is decided on by calculating the average of the estimates of all developers. 
When the result is a fraction we usually round up, but that can be influenced by general opinion or specific reasons.
Due to the nature of the process Tickets can end up with a number of Story Points that is not actually from the Fibonacci Sequence.

Moreover, in order to reach consensus when the estimates are very different, the developer with the highest and the lowest estimate may have to explain their reasons for their estimate.
All members of the Development Team have the right to change their original estimate after this discussion.

Given this process there should not be any Story or Bug Ticket inside a sprint without an estimation.
Tickets without an estimation are not allowed to be worked on.

# Ticket description
Tickets need to have a detailed description explaining the following aspects:

- Story tickets
	- *Purpose*: Why is the feature added?
	- *Scope*: What needs to be done to finish the story and what is out of scope?
	- *Value*: What is the value for the user?
	- *Implementation* (optional): How can the story be implemented?
- Bug tickets
	- *Problem*: What is the problem and how can it be reproduced? Details may include but are not limited to: OS, browser, component, functionality/feature, etc. Optimally provide a short video that shows how the problem can be reproduced
	- *Expectation*: What is the expected behavior?
	- *Implementation* (optional): How can the bug be fixed?

If a ticket has no description or is missing information, the developer tackling the ticket has to gather additional information for example by contacting the ticket author, before starting to work on it.
