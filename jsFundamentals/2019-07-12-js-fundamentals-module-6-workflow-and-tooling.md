---
categories: [frontend]
tags: [js]
title: "JS Fundamentals Module 6: Workflow & Tooling"
source: [juno]
---

## Command Line

The reason you want to learn the command line is it gives you **full and unrestricted control** over your system.

## Git and GitHub

### When to commit

Commit early and often! Even if you're not done a feature, it's best practice to be generous with your commits, as that means more backup copies to roll back to.

You can just make your commit message `"saving work"` if you don't know what to call the commit.

### Origin and upstream

Your remote `origin` is usually your personal work independent of the project, and remote `upstream` is the final place you want your code to go

That's why it's best practice to add `git remote upstream <remote git url>` to your repository as well!

### Forking

**Forking** creates a duplicate repository with *no link* to the original.

**Pro tip**: Forking or cloning a repository means that when the original gets new commits, your version will be behind. That's part of the risk of forking or cloning.

### Branches, merging, and pull requests

**Branches** are most commonly used to work on features outside of **master** without affecting master.

When you've tested and run your feature enough and feel confident it works, you **merge** your branch into master via a **pull request**, so the feature becomes *live*.

The process for this is as follows:

1. `git checkout -b <newBranch>` creates a new branch. (`git checkout <branchname>` toggles branches.)
2. Start tweaking and adding things, staging and committing as much as you want.
3. When you feel confident in your code, you can merge in one of two ways:

```
git push origin <newBranch>

// Use GitHub or another interface to compare & pull request into another branch
```

or...

```
git checkout master
git merge <newBranch>
git push origin master
```