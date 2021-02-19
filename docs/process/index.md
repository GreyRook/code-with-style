# Scrum

Scrum is a framework to address complex adaptive problems while productively and creatively delivering products of the highest possible value.

The aim of the agile approach of Scrum is transparency regarding the issues that need to be done in a certain time frame, which opens up the opportunity to easily inspect the work that has been done and to quickly adapt to changed conditions or requirements.
Thus, a Sprint (2 weeks) is planned with an amount of issues that the Development Team is certain to accomplish.
The issues follow a strict workflow in Jira, so that the Development Team and the Product Owner see at any moment of the Sprint the status of an issue.
That gives the Development Team and the Product Owner the chance to identify and react to risks that endanger the Sprint Goal.

At *Grey Rook* we implemented the simple rule that a developer can only work on one issue at a time i.e. can only have one issue with the status "WIP".
There can be reasons that hinder the developer to complete an issue.
If such a case happens, the developer is obliged to move the ticket either back to "ToDo" or, if information is missing that is needed to complete the ticket, to "Information needed".
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
The meeting is time-boxed for 4 hours for a one month Sprint and shorter for shorter Sprints, respectively.
At *Grey Rook* we usually have two week Sprints, so the Sprint Review is time boxed to 2 hours.
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

In the context of the *Sprint Planning* tickets and subtasks must get tagged with BE (backend) or FE (frontend) if applicable, to better understand which part of the team can handle which task.

### Story Points

*Summary:* A Story Point is a relative unit of measure, decided upon and used by individual Scrum teams, to provide relative estimates of effort for completing requirements.

A measure of team output:
	* Describes the complexity, risk involved and uncertainty of a requirement
	* Correlated to but not necessarily the same as effort
	* Measured relative to a known “reference” story. At *Grey Rook* we grow accustomed over time to how complex one Story Point is
	* Not necessarily comparable across teams
	* Consistent over time for the same team

These are given to each individual Story Ticket - and depending on the project, Bug Ticket - in the planning phase of a Sprint in a process called 'Planning Poker'.

To propose a Story Point value for a ticket, the developer in the Planning Poker meeting needs to have good understanding of the feature, problem, bug etc. that is discussed. 
They have to have an idea of what work is to be done to complete the ticket that is estimated.
When that is the case, the developer has to decide on a number that reflects the complexity of the ticket.
Those numbers are to be presented to the Scrum Master at the same time to prevent influencing other peoples guesses.

At *Grey Rook* the developer may choose one of the numbers 1, 2, 3, 5, 8 and 13 for their estimate. 
If there is uncertainty they may choose the questionmark "?".
These numbers are based on the Fibonacci Sequence, a sequence of numbers where the next number in the sequence is the sum of the previous two numbers.
That means it is continued "21, 34, 55, ...", but for reasons described below we cap the sequence after the 13.

It is effective in estimation because the sum of the quantities of the larger number is equal to the ratio of the larger number to the smaller one.
It is almost impossible to precisely estimate a ticket that has a high complexity, i.e. decide if a ticket deserves 7 or 8 Story Points.
In this respect, the fibonacci sequence offers a reasonable gradation.

Tickets that are not doable in one sprint (as indicated by the opinion of most of the developers or a number of story points equal to or greater than 13 after estimating) are to be rejected and to be split up into smaller tickets.

The final amount of story points for the ticket is decided on by calculating the average of the estimates of all developers. 
When the result is a fraction we usually round up, but that can be influenced by general opinion or specific reasons.
Due to the nature of the process tickets can end up with a number of Story Points that is not actually from the Fibonacci Sequence.

Moreover, in order to reach consensus when the estimates are very different, the developer with the highest and the lowest estimate may have to explain their reasons for their estimate.
All members of the Development Team have the right to change their original estimate after this discussion.

Given this process there should not be any story ticket inside a Sprint without an estimation. 
User stories without an estimation are not allowed to be worked on. 

Depending on the project or customer, bug tickets may or may not get story points.
In some cases it is impossible to estimate the complexity of bug tickets, as most of the time it is unclear why a bug occurs and how to fix it.
Not estimating bug tickets takes that into account.
Still, there are good reasons for estimating bug tickets.
For example, planning a Sprint that can be successfully completed is easier if we know the amount of time it might take to resolve the contained bug tickets.
It may be preferable to complete all tickets in a Sprint in time and to add more tickets later on than to have a maxed out Sprint with a lot of bug tickets that do not count into the overall complexity and be unable to complete the Sprint in time.

When estimating bug tickets, we assume the worst case scenario.
That way we minimize the risk of underestimating the complexity of the work needed to fix the bug and to complete the ticket.

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

If a ticket has no description or is missing information, the developer tackling the ticket has to either fix the description or contact the person who can fix it, e.g. the ticket author, before starting to work on it.

# Working on Tickets
The Development Team is a self-organized entity as per the Scrum rules, therefore it is up to the members of this team how to best complete the set of tickets in a Sprint.

This means the team as a whole decides which tickets to work on in which order and who will work on which ticket.
That decision has to take into account dependencies between the tickets, so progress on one ticket does not hinder progress on other ones.

Most of the time, based on this decision, the individual team member can just grab a ticket that fits their capabilities from the stack of a Sprint's tickets and start working.

To prevent spending development time on a problematic approach, it is always advisable to discuss the planned approach with other members of the development team, especially when the developer is not certain about how to approach a given problem.
Consulting with other devs is **mandatory** for tickets with 5 or more Story Points.

# Definition of "Done"

## About the Definition of "Done"

A Sprint can only be successfully completed if all the work done in it conforms to a shared Definition of "Done" (DoD).

For everyone who takes part in developing a product (including the Product Owner) to have a shared understanding of what it means to be "done" with the work in a Sprint, the Scrum Team needs to define what "Done" means.
Otherwise different definitions of what "done" means would lead to dissent about if a Sprint is successfully finished, i.e. if work on the Product Increment is complete.
Another goal of this DoD is to make sure the increment is something the Scrum Team is sure it can confidently put in front of the customer or the end users of the product.

To reach these goals, the Scrum Team defines the DoD as a checklist of things that has to be completed for every ticket in the Sprint for a Product Increment to be potentially shippable. 
The DoD describes a final state that is to be reached, so it will be formulated in statements of conclusion ("Code is checked in"), not in the future tense ("Code will be checked in").
This final state has to be reachable.
If the final state could not be reached while working on the Sprint, the Scrum Master works together with the Dev Team to remove the impediments that prevented it from reaching the final state.

The DoD may be subject to optimization or modification as soon as good reasons pop up.
Changes to the DoD should be discussed with the whole Scrum Team, including Scrum Master and Product Owner.

As a shared understanding of the DoD is important for everyone on the team, it should always be visible to everyone.
That means it is good pratice to e.g. put up a poster in the office (or the home office of the individual team member) with the recent DoD on it.

## The Definition of "Done" at **Grey Rook**

Each ticket must comply with every item on the following checklist to meet our DoD:

- The acceptance criteria of the ticket are met (i.e. the described functionality is fully implemented)
- The functionality was tested on all target platforms
- The code is maintainable (i.e. understandable and sufficiently documented)
- The coding guidelines as stated in [this guide](../index.md) or in the project readme are met
- There are either Unit Tests for the code and they pass, or a very good excuse why there are none
- There are either E2E Tests for the code and they pass, or a very good excuse why there are none
- The code has been reviewed by at least one other developer
- The security best pratices are met (i.e. code does not contain obvious security holes)
- The code is performant and scalable as required for its use case
