---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 2: Higher Order Functions"
source: [juno]
---

## Closure

Closure is where you store a variable *inside* a higher order function. This is useful when you want to perform a complex calculation *one time* and then store it in a function for continual use.

```js
const sum = (numOne) => {
  return function(numTwo) {
    console.log(numOne + numTwo);
  };
};

const result = sum(41); // this is a function with 41 CLOSED IN
```

## Scope

A **block** refers to any code written inside curly brackets `{}` (with the exception of objects).

The scope of variables declared are determined by **where** they're declared: in a block or not.

```js
const age = 30; // global scope

if (true) {
  const name = "Dan"; // scoped to if statement
};
```

**Note**: When you assign a variable *without* a declaration keyword, it will look up the call stack. If it doesn't find the variable anywhere, it will **create** a new variable on the **global scope**.

```js
function foo() {
  for (i = 0; i < 10; i++) {
    console.log(i);
  };
};

console.log(i); // logs 10!
```

### Var and scope

Originally, JavaScript variables were *only* function scoped. That means block scoping doesn't work.

```js
if (true) var name = "Dan";
console.log(name); // logs "Dan"
```

As of ES6, JavaScript added `const` and `let` for block scoping.

```js
if (true) const name = "Dan";
console.log(name); // throws error
```

## Functions as First Class Citizens

A function is considered **first class** (or **lambdas**) because:
* Can pass it in an argument
* Return it from a function
* Assign it to a variable

### Functional composition

Functional programming promotes what's called **functional composition**. You're basically building small functions that pass tasks from function to function.

**Pro tip**: Functional composition promotes **easy testing**. They usually have a low arity (ideally 0 or 1 parameter), and they have a predictable output. This makes it easy to test the input/output.

**Aside on testing**:
* Testing individual bits of code (like small functions) is known as **unit testing**
* Testing those individual bits together is known as **integration testing**
* Testing the entire application from start to finish is known as **end-to-end testing** (*this is very expensive*)

## Callbacks

Callbacks are functions that get called *later*.

There are generally 2 uses for callbacks:

* **Asynchronous** behaviour like event listeners
* **Reusability** of shared logic alongside **customization** of specific logic--like `map`

**Note**: Callbacks give you the customization, while the higher order function that *takes* the callback gives you the reusability.

### Callbacks are usually anonymous

When you use `map` like `arr.map(() => {});`, you're usually passing an anonymous function--a function without a name, i.e., *NOT* a function declaration.

The reason we can pass an anonymous function is that the higher order function like `map` will store the function in the **parameter** name! So it's not technically nameless.