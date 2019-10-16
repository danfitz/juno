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