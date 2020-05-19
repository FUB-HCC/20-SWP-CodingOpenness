# Contribution Guidelines

## Inhaltsverzeichnis

- [Workflow](#workflow)
- [Bounties](#bounty)
  - [Work on Bounty](#work-on-bounty)

### Workflow

1. Fork and clone the repository

   ```sh
   git clone git@github.com:YOUR-USERNAME/OPENSOURCE_REPONAME.git
   ```

1. Create a branch in the fork

   The branch should be based on the `master` branch in the master repository. Prepend the correct [type](#type) to your branch.

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

   In the Github UI of your fork, create a Pull Request to the `master` branch of the master repository.

   If the branch has merge conflicts or has been outdated, please do a rebase against the `master` branch.

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

- size-XS: 3h
- size-S: 5h
- size-M: 8h
- size-L: 13h

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
