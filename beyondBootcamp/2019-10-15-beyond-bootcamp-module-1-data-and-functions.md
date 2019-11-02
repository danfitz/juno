---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 1: Data and Functions"
source: [juno]
---

## Values and Types

### Data and types

According to Simon, everything is either **data** or **instructions**.

Data is essentially 0s and 1s that, when abstracted, make up sequences of symbols containing information. That could be a username, money in your bank account, temperature outside, etc.

Data is often given a **type** to better organize and understand data.

JavaScript uses **dynamic typing**, where the data type is inferred by the JavaScript engine based on what the data *looks like*.

**Note**: JavaScript is also **loosely typed**: you can *change* the data type in a variable.

### More on dynamic typing

Dynamic typing can be *dangerous* because it can easily lead to bugs. (A solution to this is TypeScript.)

### The data types

There are many data types represented with **literals**. (A literal is a fixed value that is written *exactly* the way it was meant to be interpreted. So `"string"` is a string.)

* boolean (primitive)
* null (primitive)
* undefined (primitive)
* number (primitive)
* string (primitive)
* symbol (primitive)
* object (NOT primitive; it's an object)
* array (NOT primitive; it's an object)
* function (NOT primitive; it's an object)

**Note**: Objects are the *only* data type that is not primitive.

### Primitives vs. non-primitives

When you reference variables containing primitives, it points directly to the *value itself*. That's why **pass by value** works with primitives.

```js
let a = 1;
let b = a;
a = 2;
console.log(b); // still logs 1
```

The result of this is that primitives are **immutable**.

```js
let a = "hello";
a.toUppercase(); // "HELLO"
a; // still "hello"
```

When you do the same thing for non-primitives, you get **pass by reference** because the variable doesn't point to the object itself. Instead, it points to *another* address in the **heap**. The data in the heap is **shared**. The result of this is that primitives are **mutable**.

```js
let a = {};
let b = a;
a.name = "Dan";
b.name; // "Dan"

// SAME HEAP ADDRESS!
```

### Primitive wrapper objects

Technically, primitives don't have properties. Yet you can do `"hello".toUpperCase();`. The reason you can do this is that JavaScript will *very quickly* convert `"hello"` to a `String` object, which has methods, and then convert it back to a primitive string. These are known as **primitive wrapper objects**.

## Expressions and Statements

**Expressions** evaluate to a single **value** (with the exception of ternary operators). These include:

* Literals
* Variables
* Operators
* Molecular expressions that are combinations of the above

There are TWO (2) types of expressions:
1. Expressions that **assign a value to a variable** like `name = "Dan"`
2. Expressions that **have a value** like `1 + 1`

**Statements** perform actions. They're like instructions to give to a computer. These include:

* `if...else`
* `function`
* and other keywords!

**Note**: In assignment, `const name = "Dan"` is a **statement**, but `name = "Dan"` is an **expression**. Weird, right?

**Note 2**: You can replace statements with expressions (but not vice versa).

```js
const name = "Dan";
name; // expression success!

if (true) {};
if (function test() {}) {}; // statement failure!
```

## Parameters and Arguments

Technically, a function call always passes in at least TWO (2) arguments:
* `this`
* `arguments`

A **parameter** is basically a **local variable** that's equivalent to this:

```js
function foo() {
  let bar = 1;
};
```

**Note**: A function take up to **255 parameters**.

### Note on this

When you call a method with `this` inside its code block, `this` is determined by the **call site**, which is just what shows up **before** the `.` member access operator.

```js
const obj = {
  bar: function() {
    console.log(this);
  };
};

obj.bar(); // logs obj!

const foo = obj.bar;

foo(); // logs window b/c this just means window.foo()!
```

### Default params

There are two ways to create default parameters:

```js
// 1. The short circuit trick using ||
function foo(bar) {
  bar = bar || "default";
};

// 2. Default params
function foo(bar = "default") {
  // ...
};
```

**Question**: Is `bar = "default"` an expression? Is that why it works?

## Return Keyword

### Exiting functions

The `return` keyword, aside from giving back a value, can actually **exit a function**.

```js
function countdown() {
  console.log(3);
  console.log(2);
  console.log(1);
  return;
  console.log("BLAST OFF!"); // This will NEVER run!
};
```

The fact that `return` exits a function is great to solve **cyclomatic complexity**, which is when you have too many branches that it's hard to manage everything (e.g. 9 `else if` statements).

By using `return` as an **early exit**, you can do the same thing that your branches do:

```js
function checkStatus(item) {
  if (item.isAlive) return true;

  return false;
};
```

In the example above, you remove `else` because you don't need it!

### Returning values

Functions can return *any* kind of value: primitives *and* objects.

Functions can even return *other functions*. These are known as **higher order functions**.