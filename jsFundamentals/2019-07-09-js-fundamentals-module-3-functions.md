---
categories: [frontend]
tags: [js]
title: "JS Fundamentals Module 3: Functions"
source: [juno]
---

## Intro to Functions

Functions allow you to reuse bits of code by **calling** the function.

## Defining and Calling Functions

### Defining functions

There are 3 ways to define a function.

**Function declaration (using keyword)**:
```js
function nameOfFunction() {
    // block of statements to execute
}
```

**Function expression (using variable)**:
```js
const helloWorld = function() {
    console.log("Hello there");
};
```
**ES6 arrow functions**:
```js
const add = () => { // arrow replaces function keyword
    return 4 + 5;
};

const add = () => 4 + 5; // shorter version with implied return
```

### Calling functions

To call a function, simply type its name with **parentheses**.

```js
helloWorld();
```

### Parameters

Parameters are placeholders for values that you can use wehn defining a function. When a function with parameters is called, you can pass in **arguments** that replace the parameters in the function.

### Return

When you want to store a value created/manipulated by a function, you can **return** that value in the function. That value can then be used in other places.

```js
const add = (a,b) => a + b;

const sum = add(1,2);
```

## Parameters and Arguments

### Definitions

Parameters are in the definition of the function. Arguments are what is passed in place of parameters when calling the function.

### Multiple parameters

When passing in multiple arguments into multiple parameters, **order matters**. You have to pass in arguments in the order that the function expects. The function doesn't read intent.

```js
const sayHello = (firstName, lastName, age, home) => {
	alert(`Hello ${firstName} ${lastName}. You are ${age} years old and live in ${home}`);
}
```
### Default parameters

Default parameters allow you to set an argument if one isn't provided by the user.

You can do this manually...

```js
const sayHello = (firstName, lastName, age, home) => {
    if (home === undefined) {
        home = 'Toronto';
    }
	console.log(`Hello ${firstName} ${lastName}. You are ${age} years old and live in ${home}`);
}
```

Or use the ES6 way...

```js
const logPet = (petName, petType = 'dog', petBreed) => {
	console.log(`${petName} is a ${petType} of the breed ${petBreed}.`);
}
```

Note that order still matters here. If you want to use a default parameter, it's a good practice to place your default parameters at the end.

If, however, you want to keep a default parameter in the middle, you will have to pass `undefined` for the function to use the default value.

```js
logPet("Coco", undefined, "Yorkshire"); // this works
```

## Scope

### Global vs. local

Variables declared outside of a function are part of the **global** scope. Variables declared inside a function have a **local** scope.

```js
let dog = "Prudence"; // global scope

function walkDog() {
    let doggo = "Parry"; // local scope
}
```
Functions can still access and update global variables though.

```js
let dog = "Prudence"; // global scope

function walkDog() {
    dog = "Parry"; // changes global variable
    console.log(dog); // accesses global variable
}
```

Local variables, when defined with the same name, can over-write global variables *within local scope*. However, outside of the local scope, the global variable still applies.

```js
let planet = "Earth";

function whereAmI(){
  let planet = "Mars";
  console.log(planet);
}

whereAmI(); // logs "Mars"
console.log(planet); // logs "Earth"
```

**Best practice**: Generally, try to avoid naming variables with different scopes with the same name. This will just confuse people.

### Nested scope

Sometimes you will nest functions. Child functions have access to variables declared in parent functions--but not vice versa.

## Built-in Functions

JavaScript comes with some functions right out of the box. Here's a few you know and a few new ones:

```js
alert("Here's an alert!");
console.log("I'm logging something!");
prompt("Give me something!");

"hello".toUpperCase(); // returns "HELLO"
"HELLO".toLowerCase(); // returns "hello"
"hello".includes("hell"); // returns true

parseInt("10"); // returns number 10

Math.random(); // and other Math methods

setTimeout(function() {}, 2500);
// runs function after 2500 milliseconds

setInterval(function() {}, 2500);
// runs function every 2500 milliseconds
```