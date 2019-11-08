---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 4: The Compiler"
source: [juno]
---

## Async/Await

`async/await` is syntactic sugar for promises.

When you prefix a function with the `async` keyword, whatever `return` value provided in the function will get wrapped in a promise.

```js
async function greet() {
  return "Hello";
};

// syntactic sugar for...

function greet() {
  return new Promise((resolve) => {
    resolve("Hello");
  });
};
```

When you prefix a promise with the `await` keyword, your code *after* the promise will only run *after* the promise settles.

**Pro tip**: Technically, `await` reads everything below your promise, but it throws it in a callback that runs *after* the promise settles.

```js
async function cook() {
  const boil = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

  await boil;
  console.log("DONE!!"); // runs after 2 seconds
};

cook();
```

Additionally, `await` unwraps the data from the promise and returns the actual response.

```js
const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
```

### The problem of blocking

Sometimes the fact that `await` halts all code below it is bad. Sometimes you want your code to run below, especially if it's another API call!

The solution is to use `Promise.all`.

## The Call Stack, Event Loop, and Task Queue

### The call stack

The call stack is just a record of where we are in the program, especially with regard to functions. Once a function returns, it will **pop off** the call stack.

### Event loop and task queue

When you call `setTimeout`, the callback function gets added to the **task queue**. Once the call stack is clear, the event loop will push the callback function into the call stack.