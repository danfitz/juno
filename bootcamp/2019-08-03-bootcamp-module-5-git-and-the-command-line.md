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