# Contribution Guidelines

## Inhaltsverzeichnis

- [Workflow](#workflow)
- [Bounties](#bounty)
  - [Work on Bounty](#work-on-bounty)
- [Project structure](#project-structure)

### Workflow

The project follows [Git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow for the codebase maintenance and release lifecycle. 

1. Fork and clone the repository

   ```sh
   git clone git@github.com:YOUR-USERNAME/OPENSOURCE_REPONAME.git
   ```

1. Create a branch in the fork

   The branch should be based on the `develop` branch in the master repository. Prepend the correct [type](#type) to your branch.

   ```sh
   git checkout -b TYPE/my-feature-or-bugfix master
   ```

1. Commit changes on your branch

   Commit changes to your branch, following the commit message format.

   ```sh
   git commit -m "properly formatted SET statements."
   ```

1. Push the changes to your fork

   ```sh
   git push -u myfork TYPE/my-feature-or-bugfix
   ```

1. Create a Pull Request

   In the Github UI of your fork, create always a Pull Request to the backend or frontend `develop` branch of the master repository. Pull requests to the `master` branch will be closed.

   If the branch has merge conflicts or has been outdated, please do a rebase against the backend or frontend `develop` branch.

1. Review a Pull Request

   The application development team will review the pull request by going through the single commits. If the pull request is acceptable, they merge the pull request in the codebase.

### <a name="commit"></a> Commit message guidelines

Commit messages should follow the [commit message convention](https://conventionalcommits.org/).

#### <a name="type"></a> Type

Should be one of the following:

- **feat:** A new feature
- **fix:** A bug fix
- **chore:** Changes to build and dev processes/tools
- **docs:** Changes to documentation
- **style:** Changes to code style formatting (white space, commas etc)

#### Scope

The `<scope>` of the commit is optional and can be omitted. When used though, it should describe the place or part of the project, e.g. `docs(examples)`, `feat(data)` etc.

## Bounty

Bounty is a reward for completing a properly defined Action or Project. For simplicity, we will may call such Actions or Projects themselves a Bounties from now on.

Properly defined bounty must specify the following attributes

### Title

Succinct name for the bounty.

### Scope

A list of specific things which should be done to deliver the bounty. These could be seen as requirements to verify/review the bounty against.

### Deliverables

Artifacts produced as the result of this bounty. Something that could be verified/reviewed. Some examples: updated code, deployment made, blog post published, public event conducted etc

### Bounty owner/gardener

The person responsible for the bounty.

### Priority

Priority defines the importance of a bounty in relation to the other bounties. Additionally it helps to the users to determine which bounties should be completed first.

- Blocker: This task will block progress
- High: Serious task that could block progress
- Medium: Has the potential to affect progress
- Low: Minor problem

### Size

Size of the bounty.

We use t-shirt sizes:

- size-XXS: 2h
- size-XS: 3h
- size-S: 5h
- size-M: 8h

## How to create a new bounty

1. Create a Github issue with properly defined bounty description (see above) in an appropriate repository.
2. If the bounty spans across multiple repositories, consider splitting it in a smaller per-repo bounties if possible
3. Add the bounty to the [bounties board]()

## Work on Bounty

### Gardener

Gardener is the one who creates the bounty and is responsible for it's completion.

Gardener is expected to:

- find a Worker for the Bounty.
- help the Worker to understand the scope of the Bounty.
- find a Reviewer for the Bounty.

### Worker

Worker is the one who actually implements the Bounty.

Worker is expected to:

- create WIP Pull Request within 4 days from the start of the bounty (if applicable)
- actively work on the Bounty according to it's Scope, don't linger (see "Challenging bounties" section below)
- stay accountable by publishing WIP updates at least every 2 working days:
  - for coding bounties, the Worker is expected to push commits in WIP Pull Request.
  - for writeups, the Worker is expected to share a draft Hackmd document he is working at.
- request a review once the work is done.

### Reviewer

Reviewer is the person who reviews the Bounty's deliverables.

Reviewer is expected to:

- do review in timely manner
- ensure all the deliverables are provided
- ensure all the Scope items are addressed
- for coding bounties:
  - make sure the code is compiling/building correctly
  - review the code for logical correctness, inefficiencies and style (TBD)
  - ensure unit tests are passing
  - ensure code coverage is not reduced
  - ensure integration tests are passing for the PR branch
- for public writeups
  - do fact check
  - check readability
  - correct grammar and punctuation
  - check social network preview e.g. twitter card (if applicable)
- forward all the issues found publicly to the Worker (e.g. as comments on Github)
- approve the PR once the review is complete successfuly (if applicable)

## Challenging bounties

Gardener/Worker/Reviewer roles may be taken over by other people in a certain situations (see below). Each takeover must be stated in written form in corresponding Github issue including new assignee and the reason for takeover.

### Challenging worker and reviewer

If worker or reviewer are not publishing any updates for the bounty for 2 working days, then anyone can challenge him and take over the worker role. Updates for worker role can be in any form, most notably: commits to WIP Pull Request, updates on product artifact (hackmd, presentation, diagram etc), review comments or updates in form of github comments.

## Project structure

We identify 4 separate applications that will have their release lifecycle independently of each other. These applications are:

- Frontend: User facing application. It might be a web application or a mobile native application.
- Backend: Server side application storing and managing user data and main business logic.
- Project website: Webpage with project foundation and design details.
- gh-pages: contains the compiled website that is going to be used by GitHub pages.

These applications will leverage Continuous Integration and Continuous Deployment capabilities available from GitHub Actions. Each application will have its tech stack and therefore its build, test, and release processes. We recognize then the need for enabling the applications to be extended and enhanced without conflicting with the independent development lifecycles and versioning of the other components. To achieve this we then created 4 orphan main branches.

- **frontend/master**, for frontend development
- **backend/master**, for backend development
- **website/master**, for project website development
- **gh-pages**, for the project website

These branches will behave as a regular master branch, protected from direct changes on the branch, and only updated when a pull request is approved by a reviewer. Additionally, we can configure separate CI/CD pipelines based on the branch name simplifying maintenance.
The master branches will contain the latest production versions of each one of the applications and therefore the team should aim to keep the codebase of this branch stable and clean. 
From theses branches we created the development branches for frontend and backend applications:

- **frontend/develop**
- **backend/develop**

These branches will serve as an integration branch of multiple feature branches and will contain the development version of the applications, meaning probably unstable and available for quality assurance. Every feature branch should be eventually merged to develop and when a stable version is reached develop will be merged to master, triggering the release of a new application version.
All of the features branches should maintain the application name as its prefix. For example:

- backend/feat/login: this branch is for the development of the login feature for the backend application.
- frontend/fix/style: this branch is for a fix on the style for the frontend application.
- website/chore/readme-update: this branch is for a chore on the readme file for the website application.

The goal is to apply the git-flow workflow to our development lifecycle and to simplify the maintenance of each application that belongs to this project.
