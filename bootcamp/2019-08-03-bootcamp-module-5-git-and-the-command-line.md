---
categories: [tools]
tags: [git]
title: "Bootcamp Module 5: Git and the Command Line"
source: [juno]
---

## Git Collaboration

Treat `master` as your final source of truth. It needs to be **protected**.

When you want to tinker with a project by adding some new feature or wild idea, you want to use **branches**.

### Branch workflow setup

Often called `feature` branches, branches are copies of your repository's files. They're a safe place to change code without fundamentally breaking the live project.

When `feature` branches are ready to go, they're **merged** into `master`.

**Note**: Some companies will have an intermediary `test` branch where features are tested *before* being merged into `master`.

### Working with branches

1. Create a new branch with `git checkout -b feature/featureName`.

2. Push to `origin master` but create a new remote branch with `git push origin feature/featureName`.

3. When you're ready to merge the change into `origin master`, go to GitHub directly and open a **pull request**. Inside the pull request, you can write a summary of the changes.

4. Your team will review your pull request and provide feedback if necessary.

5. Your team will now **merge** your pull request into `origin master`.

6. Locally, return to `master` with `git checkout master`.

7. While on `master` locally, pull the merged changes from `origin master` with `git pull origin master`.

8. Now that you're done with `feature/featureName`, you can delete it with `git branch -d feature/featureName`. (You can't be in the branch when you delete it.)

**Pro tip**: If you want to locally merge and not go through the GitHub workflow, simply `git checkout master` to get into `master` and type `git merge feature/featureName`.

**Another pro tip**: If you locally deleted a branch but not the remote one, because local and remote are connected, you can delete your remote branch from the command line with `git push origin :feature/featureName`. (Key syntax is `:`.)

### Git stash

Suppose you're writing some code, but your manager decides to drop it or hold off on it. A way to hold onto your code without actually committing it is to use `git stash`. This works for files that haven't been staged!

`git stash` will store the changes into git but remove them from the working branch.

Finally, when you want to reapply the changes, simply type `git stash apply`.

## Git Branching, Pull Requests, and Collaboration

### The solo git workflow

1. `git clone https://gitUrl.com/project.git` or `git init` to start your project.

2. `git pull origin branchName` to get the most up-to-date information from your `origin`.

3. `git checkout branchName` to go to the branch you're interested in.

4. `git checkout -b newBranch` to start working on something new *without* affecting the app in production.

5. `git add -A` to stage *all* your changes.

6. `git commit -m "description of changes"` to commit changes that are stages.

7. `git push origin branchName` to push to `origin`.

8. `git checkout master` to return to master branch.

9. `git merge branchName` to merge new branch *into* master.

10. `git push origin master` to push to production.

11. `git push origin :branchName` to delete branch from `origin` and `git branch -d branchName` to delete branch locally.

What causes merge conflicts is usually when there are two branches testing new features. If one branch gets merged into master, the other branch might be working based on where master was *before* the merge. This can lead to merge conflicts.

### The collaboration GitHub workflow

1. `npx create-react-app your-react-app` to start your project.

2. Create new repository on GitHub.

3. `git remote add origin https://githubUrl.com/project.git` to add GitHub repository to project.

4. `git push -u origin master` to push project to GitHub.

5. Every other team member then uses `git clone https://githubUrl.com/project.git` to get a local version of the project.

6. Every other team member then installs the npm package dependencies using `npm install`.

7. `git checkout -b newBranch` to start working on a new feature.

8. Make the changes you want.

9. `git add -A`, `git commit -m "message"`, and `git push origin newBranch` to stage, commit, and push to GitHub.

10. Other team members then create a new pull request and compare `master` to `newBranch`, checking to make sure there are no merge conflicts. Submit pull request.

11. If no merge conflicts, other team members then perform a code review. If there are issues, team members will make request for changes, which means returning to step 8.

12. When changes are accepted by team members, merge (with verbose description) into `origin master`.

13. Delete GitHub's `newBranch` and local `newBranch`. Other team members `git pull origin master` to stay up to date.

### How to deal with concurrent work and merge conflicts

When you run into merge conflicts in the collaboration workflow, this most likely means that you're working off of an **outdated** master branch.

Here's the workflow to fix this:

1. You `git push origin newBranch` and create a pull request. In this pull request, you find out there's a merge conflict.

2. In your terminal, `git pull origin master` to get the most up-to-date `master` branch.

3. `git checkout newBranch` and `git merge master` to merge `master` *into* `newBranch`.

4. Review merge conflicts and *pick* which changes to accept and deny. (You'll be reviewing **current changes**, which are your changes, and **incoming changes**, which are changes in `master`.)

5. `git add -A`, `git commit -m "description of conflict resolution"`, and `git push origin newBranch`. Then create your pull request again!

**Pro tip**: This is actually the workflow you need to start with when you first get onto your computer to work on your group project. Ideally, you should hit **no merge conflicts**.

**Note**: An alternative to this workflow is using `git rebase` to resolve merge conflicts.

### Communication to avoid merge conflicts

Ways you can avoid merge conflicts include:

* Don't have more than 2 people working on a file at once.
* Start a Slack channel and keep each other in the loop.
* Do daily stand-ups to coordinate tasks.