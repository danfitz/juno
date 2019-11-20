---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 6: Intro to Testing"
source: [juno]
---

## What is Testing?

**Testing** is the process of identifying the degree of **correctness, completeness, and quality** of your code. It's the intention to **find errors and correct them before release to users**.

### What should I test?

Just use the 80/20 rule: identify the highest risks first.

## Types of Testing

### Smoke testing

**Smoke testing** is **at-a-glance testing**. It's low effort but low insights.

### Unit testing

**Unit testing** is testing very small pieces of code in **isolation** from each other--like functions. The goal is to check that inputs lead to expected outputs.

The downside is that isolation doesn't test if the pieces break when put *together*.

### Integration testing

**Integration testing** is the process of making sure that the different pieces of an application flow together. For example, it's checking that adding a new todo shows up in a todo list.

### End-to-end testing

**End-to-end testing** replicates the entire user behaviour. You identify the **critical path** that the user takes. For Trello, for example, this might be logging in, going to dashboard, viewing board, adding lists, adding cards, deleting cards, etc.

An example of an end-to-end testing tool is [Cypress](https://cypress.io), which imitates a user of your application in real-time super fast.

## Writing Tests

### How to write unit tests

One of the first libraries built for unit testing was the `assert` function. It abstracts away the task of communicating to the user that the test passed or failed. All you have to do is provide the input and output.

```js
const assert = (testName, assertion) => {
  if (assertion) {
    console.log(`${testName}: passed`);
  } else {
    console.log(`${testName}: failed`);
  };
};

const add = (a, b) => a + b;

assert("add(5,2) outputs 7", add(5,2) === 7); // Logs "add(5,2) outputs 7: passed"
assert("add(5,'5') outputs 10", add(5,"5") === 10); // Logs "add(5,'5') outputs 10: failed"
```

Code like `assert` are known as **test runners**. [Jest](https://jestjs.io/) is a famous example of a test runner.

### Using jest

1. `npm init` and `npm install --save-dev jest`.
  * **Note**: You use the `--save-dev` flag because you don't need jest in production.

2. Create `add.js` file containing the unit of code you want to test, e.g., the `add` function.
  * Assign `add` function to `module.exports`, so other Node.js modules can reference them via `require`.

3. By convention, create `add.test.js` that imports `add` via `const add = require("./add.js");`. Use jest to write the following function:

```js
test("Adds 1 and 2 to equal 3", () => {
  const output = add(1, 2);
  expect(output).toBe(3);
});
```

### How to write snapshot tests

??

## Test-driven Development

**Test-driven development** is a style of coding where you write your tests *before* you write your code. Then, one test at a time, you write the least possible code to make each test pass.

The core idea behind TDD is that you define your code by its **requirements** as opposed to its **implementation**.

```js
// `describe` is a test suite
describe("fizzbuzz", () => {
  // `it` is a unit test
  it("should return an output", () => {
    const output = fizzbuzz(1);
    expect(output).toBe(1);
  });
  
  it("should return fizz if the number is a multiple of 3", () => {
    const output = fizzbuzz(3);
    expect(output).toBe("fizz");
    const output2 = fizzbuzz(6);
    expect(output2).toBe("fizz");
  });
  
  it("should return buzz if the number is a multiple of 5", () => {
    // ...
  });
  it("should return fizzbuzz if the number is a multiple of 3 AND 5", () => {
    // ...
  });
});
```

**Note**: The more tests that you have to pass simultaneously, the more carefully you'll have to think about your code!

```js
const fizzbuzz1 = val => val; // passes test 1
const fizzbuzz2 = val => "fizz"; // passes test 2
const fizzbuzz1and2 = val => val % 3 === 0 ? "fizz": val; // passes tests 1 and 2 but is more complex
```

**Bonus**: The tests you create end up becoming the living documentation for your code. They tell future developers the shape of the application.