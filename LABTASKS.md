# Lab Tasks <!-- omit in toc -->

- [Overview](#overview)
- [Exploring the client](#exploring-the-client)
- [Workflow and Continuous Integration](#workflow-and-continuous-integration)
- [The coding part of this lab](#the-coding-part-of-this-lab)
  - [Writing (and testing) a beautiful client side application](#writing-and-testing-a-beautiful-client-side-application)
  - [Writing todos to the Database](#writing-todos-to-the-database)
  - [Display todos](#display-todos)
  - [Remember to test](#remember-to-test)
- [Questions](#questions)

## Overview

Questions that you need to answer (as a team!) are indicated with question
mark symbols (:question:). Write up your answers to these questions in a Google Doc and turn that in via Canvas on the assignment for this lab. _Make sure that everyone in your group has edit privileges on the document. Make sure that the link you turn in gives the TA(s) and professor(s) at least comment privileges._

- [ ] 1. Start by exploring the newly introduced `client` folder and its contents
- [ ] 2. Familiarize yourself with the expectations about your workflow and process
- [ ] 3. Set up your project on [GitHub Projects](./GITHUB_PROJECTS.md) with your stories and estimates
- [ ] 4. Work through the coding part of the lab
- [ ] 5. Turn in the URL of your Google Doc with answers to the questions when your team has completed the lab and you are ready for us to grade it.

Definitely ask if you're ever confused about what you need to do for a given task.

## Exploring the client

This lab introduces the client side of our project. The client-side interface uses Angular to handle most of the creation
of the elements of the user interface. Angular's template syntax extends HTML and JavaScript.
The testing is handled in two new places:

- Angular spec files (e.g., `user-list.component.spec.ts`) for unit
  testing in Angular. These use Jasmine and Karma. This is also sometimes called _component_ testing.
- E2E (end-to-end) tests in `client/e2e`. These use Cypress.

![Screenshot of the location of testing code in VSCode](https://github.com/UMM-CSci-3601/3601-lab3_angular-javalin/blob/1f74b681e6ee51f5f3d7a469c94385e97be5cb05/images/location_of_testing_code.png?raw=true)

The starting code includes several
ways of using Angular components to display user data.
It includes two ways of organizing the `user-list` information:
a grid-like arrangement of cards and a list.
The grid approach to organizing the `user-list` information
leverages a `user-card` component.
The `user-card` component is also used (in a slightly different way) in the `user-profile` component.
Karma tests for each component are named
almost the same as the component but include `.cy` before the `.ts`,
and Cypress E2E tests for user-list
are located in `client/cypress/e2e`. There are supporting files for the E2E tests (called
page objects) in `client/cypress/support`. The page objects are named similarly to the Cypress E2E tests, but also have `.po` before the `.ts`. The purpose of the page objects files is to help separate aspects of accessing elements on a page (like exactly what kind of component you are using) separate from the tests. That way, when you decide to use a simple button with a custom button (for example), your test will still just find the button. Specific information goes in the page object.

:question: Answer questions 1 through 4 in [QUESTIONS](#questions) below.

## Workflow and Continuous Integration

You should organize your work into features, where each feature is a (small) story in GitHub Projects. Each feature should "slice the cake", including server implementation and testing, Angular implementation and testing, and end-to-end testing.

:warning: Keep the features as small and focussed as
possible. Otherwise things like code reviews become a huge burden,
and pull requests become far less useful.

To maximize your learning, we strongly encourage you to implement features in Angular one at a time instead of copying over
entire components from the previous lab that presumably support numerous features.

Make sure you do frequent commits with [useful commit messages](https://cbea.ms/git-commit/).
If you're pair programming (which we definitely recommend!) make
sure include [a co-authorship line in the commit message](https://docs.github.com/en/github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors) so the
person you're working with gets credit. These have the form:

```text
 Co-authored-by: Connie Stewart <conniestewart@ohmnet.com>
```

where you replace the name ("Connie Stewart") and email
(`conniestewart@ohmnet.com`) with the name and email of the
person you're pairing with.

- As you work, create a branch for each new feature.
  - Write tests for the server actions for the feature you added. Run
    them to make sure they fail. Then write the server code that
    makes those tests pass.
  - Write new end-to-end tests for the new views
    using Cypress. Run these to make sure they fail.
  - Write unit tests for the new Angular components you are adding
    using Karma. Run them to make sure they also fail. Then write the
    Angular code that makes those unit and integration/e2e tests pass.
  - Address failing builds.
- Perform code reviews, especially if you're not pair programming.
  _Ask (your partner, the class, the instructor) about things you don't understand!_
- Use pull requests to
  merge things into `main` when a feature is working
  and is tested (with passing tests and decent coverage).
- Move the tasks and issues through the [GitHub Projects](./GITHUB_PROJECTS.md) board to help you with your planning.

## The coding part of this lab

### Writing (and testing) a beautiful client side application

Now that we have a reliable way to request todo data from our server,
we should write a nice client-side application to help us request and view
this data.

- Use Angular to build a nice client-side interface which allows the user to:
  - [ ] Filter todos by status
  - [ ] Filter todos by owner
  - [ ] Filter todos by contents of the body
  - [ ] Filter todos by category
  - [ ] Apply combinations of filters
  - [ ] Sort by a todo field (status, owner, body contents, or category)
  - [ ] Limit the number of todos returned
  - [ ] Add new todos. This requires:
    - [ ] An Angular form/page that allows the user to enter the information for a new todo with reasonable controls and validation.
    - [ ] A new endpoint on the server that allows clients to add new todos.
    - [ ] Logic in the server to add that new todo to the database and return the new ID.
  - [ ] Testing of all of the above.
- Your new functionality should be contained in a 'todos' view,
  with a 'todo-list' component and probably a service.
  > Note: You do NOT need to have multiple views of your todos like we provided you for users, and you should feel free to try out a different kind of component that you think would work well to display todos. Think about what information you would want to actually _see_ about the todo to help you manage your tasks.
  - [ ] Display the todos in a reasonable way using at least two nifty Angular Material features from [here](https://material.angular.io/components/categories)!
- You should make some decisions about when to request data from the API,
  and when to simply use Angular's filtering tools to change how
  the data is displayed.
  - You have to use Angular's filtering at least once
  - You have to use the server's filtering at least once
  - You have to be able to use combinations of filters (implement and test this)
  - :question: Make note of why you choose to do each of those two things the way you did

:question: Answer Question 5 about your filtering in [QUESTIONS](#questions)

### Writing todos to the Database

- We have included an example of writing to the database with `addUser` functionality. Add
  functionality to both the front-end and back-end to make it possible to add todos so that
  they appear both in your list and in the database.

### Display todos

You should use Angular to display todos in attractive, readable, and useful ways that are helpful for understanding the nature of a todo.

- [ ] Use the Angular Material Design tools you've learned about to build a nice interface for
  accessing these APIs:
  - [ ] You must use at least two nifty Angular Material features from [here](https://material.angular.io/components/categories)!
  - There are many interesting tools - we encourage you to try several.
  - Feel free to borrow ideas and (preferably small bits of) code from the previous labs, but make
    sure you understand it. Also feel free to use this as an opportunity to improve the UI, perhaps
    taking advantages of ideas you had earlier but weren't able to implement then.

### Remember to test

Your project should have tests
that help you meaningfully practice using continuous integration. You should expand on these tests as
appropriate so that your GitHub Actions checks are telling you valuable things
about the health of your project.

- As you work, create a branch for a new feature,
  move the story from the `icebox` (or `backlog` or `new`) to `in-progress` in GitHub Projects, write unit tests (Karma) for the new Angular components and services you are adding and using,
  write new end-to-end tests (Cypress) for the new views,
  and address failing tests.
- Use pull requests to review code and
  merge things into `main` when a feature is working
  and is tested (with passing tests and decent coverage). Move your story to `done`.

In general you'll want to write unit tests (using Karma) for small, focused
bits of logic, often in an Angular service, but sometimes in a component.

E2E tests, on the other hand, are typically used to capture the desired
_functional_ behavior of specific features or stories.

:question: Answer Questions 6 and 7 about your Karma and E2E tests in [QUESTIONS](#questions)

## Questions

1. :question: How does the navigation menu (with Home and Users) work in this project? Compare `server/src/main/java/umm3601/Server.java`
   and `client/src/app/app-routing.module.ts`. Both do a kind of routing that maps
   a "path" to something that "handles" that path.
   - What are the "paths" in each case? (Be specific.)
   - Trace through an example of a path being handled by both Angular and Javalin.
     - Where does the "path" come from? As a user, how might I enter or trigger a particular path?
     - What kinds of things do Angular and Javalin map their paths _to_? (Be specific.)
     - What do those targets "do" with that path?
2. :question: What does the `user.service.ts` do? Why is it not just done in
   the `user-list.component.ts`?
3. Look over the the test for calling `getUsers()` with an `age` parameters in `client/src/app/users/user.service.spec.ts`.
   1. :question: Where do we tell the service that we want only users with age 25?
   1. :question: Where do we tell the mock HTTP system how many requests to expect and what
      parameters those requests should have?
   1. :question: Where do we specify the expected HTTP request type (PUT or GET or DELETE or whatever)?
   1. :question: Where do we specify what value the mock HTTP system should return in response
      to the expected request.
4. Look over the E2E test for testing the age filtering in `client/cypress/e2e/user-list.cy.ts`.
   1. :question: What is the `page` object? Where is that defined?
   1. :question: Where do we enter the value 27 in the age field?
      1. :question: How does Cypress find the age field?
      1. :question: How does Cypress update the value in the age field?
   1. :question: How does Cypress get all the cards on this page? (Hint: Look at the definition of `getUserCards()` in `client/cypress/support/user-list.po.ts`.)
   1. How does Cypress extract the user's names from the cards?
5. You need to use filtering in Angular and filtering on the server each at least one time. Our example filters users by _company_ on the client side in Angular and filters users by _role_ on the server side in Java. There is not just one right answer here, so think about the _why_.
   1. :question: What is one thing you filtered in Angular and why did that approach make sense for that filter?
   2. :question: What is one thing you filtered using the server and why did that approach make sense for that filter?
6. :question: What's _one_ piece of "internal" functionality that you chose to
   write a unit test (with Karma) for?
   1. :question: Why did you choose to test that piece of functionality?
   2. :question: What is the "it" for that test, i.e., what Angular tool/method are you testing?
7. :question: List the behaviors you tested via your E2E tests. For each behavior:
   1. :question: Why did you test that particular behavior?
   2. :question: What is the "it" for that test, i.e., what part of the web app are you
      testing? (You don't need to tell us how the test _works_ since your code will do that.)
