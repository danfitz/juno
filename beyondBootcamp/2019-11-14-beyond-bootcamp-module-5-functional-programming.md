---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 5: Functional Programming"
source: [juno]
---

## Core Tenets of Functional Programming

* Declarative programming (as opposed to imperative)
* Functional purity
* Avoiding side effects
* Functional composition
* Immutability

## Declarative vs. Imperative

**Declarative programming** is focused on **WHAT**. That means:
* It's easier to understand because it's more abstract and closer to human English

**Imperative programming** is focused on **HOW**. That means:
* It's focused more on the step-by-step process

## Functional Purity

## Avoiding Side Effects

## Functional Composition

**Functional composition** is the idea that a function should do **one thing and do it well**. When all these functions are combined, it creates a beautiful harmony. That's functional composition.

**Pro tip**: Don't overcomplicate. Err on the side of simplicity as much as possible.

## Immutability

**Immutability** is a property described about data that can't be changed.

A perfect example of immutability is **primitives**. Numbers, strings, booleans, etc. *never* change. You can only re-assign them.

```js
let myNum = 10;
myNum = 5;
```

`10` never *became* `5`. It was *replaced* with `5`.

In contrast