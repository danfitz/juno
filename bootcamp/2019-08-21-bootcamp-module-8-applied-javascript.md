---
categories: [frontend]
tags: [js]
title: "Bootcamp Module 8: Applied JavaScript"
source: [juno]
---

## How to Organize Your JavaScript

### Scope

A variable declared *outside* of a function is part of the **global scope**. This means that it is accessible from *anywhere* in your code.

A variable declared *inside* a function has a **local scope**. This means that it is only accessible from *within* the function.

Example of global scope:

```js
const greeting = "hello";

const sayHello = function() {
  console.log(greeting);
}

sayHello(); // logs "hello"
```

Example of local scope:

```js
const greeting = "hello";

const sayHello = function() {
  const greeting = "hi";
  console.log(greeting);
}

sayHello(); // logs "hi"
console.log(greeting); // throws undeclared error
```

### Organizing code with an object

In order to avoid scope issues, we want to hold all our application code inside of an object. This scopes all your variables and values to the object and is known as **namespacing**.

1. Start with an empty object.

```js
const myApp = {};
```

2. Store all your app actions/functions and properties in the object.

```js
myApp.twitterhandle = "_danielfitz";
myApp.displayHandle = function() { console.log(this.twitterHandle) };
```

### The init method

Most apps have an `init` method where you place all the things you want to run on page load. You then call this method to begin the app.

```js
// init with jQuery
$("document").ready(function() {
  myApp.init();
});
```

## Advanced Array Methods

### What is a callback function?

A **callback function** is a function that is passed into another function to be used by that function. It comes from the world of **functional programming**, a style of programming where everything is made into functions.

We can literally create our own callback function + function that accepts it:

```js
const doChores = function(chore, reward){
	console.log(`I finished ${chore}.`);
	reward();
}
const getDollars = function(){
	console.log(`You earned $1.`);
}
doChores('sweeping floor', getDollars);
//outputs 
//"I finished sweeping the floor."
//"You earned $1."
```

### forEach()

### map()

### filter()

### reduce()

`.reduce()` accepts a callback function that takes two arguments: **accumulator** or running total and **current value**.

By default, the first item in the array is skipped and made into the accumulator for the second item. However, you can override this by providing an **initial value** argument.

## Regular Expressions

A regular expression, or **regex**, is a sequence of characters, prescribing rules that defines a search pattern. The most common usage of regexes is for **form validation**.

### Creating regex

You can create a regex **literal**:

```js
const regex = /abc/;
```

Or you can create an object instance:

```js
const regex = new RegExp("abc");
```

### How to test a string with a regex

You can use the `.test()` method to return `true` or `false`:

```js
const regex = /oo/;
regex.test("boom");
// returns true
```

You can use the `.exec()` method to return a result array:

```js
const regex = /abc/;
regex.exec("hello") // returns null
regex.exec("abc, it's easy as 123") // returns ["abc"]
```

You can use the `String.replace()` method to replace text that matches your regex:

```js
const name = "HackerYou";
const newName = name.replace(/You/, "U");
```

### More complex regex patterns

You can use **special characters** to search for multiple possible value matches at a given position:

```js
const name = "HackerYou";
const website = "hackeryou.com";
const hyPattern  /[Hh]acker[Yy]ou/;
hyPattern.test(website); // returns true
```

You can use **flags** to modify the behaviour of your pattern matching. `/g`, the **global search flag**, matches the pattern everywhere in the string, not just once. `/i`, the **case insensitive flag**, ignores case sensitivity of letters.

**Pro tip**: A great learning resource is [Regexone](http://regexone.com/).

## Working with Asynchronous Events

Sometimes you want to run multiple API requests. The trouble with that is that API requests are asynchronous. Sometimes you need API call 2 to run only after API call 1. Sometimes you want to run all API calls at once and only run your next function when all the API calls are returned.

The messy solution here is to nest your API calls, which leads to **callback hell**.

```js
$.ajax({
  url: 'https://www.weather.com/toronto',
  type: 'GET',
  dataType: 'jsonp'
}).then((weatherConditions) => {
  $.ajax({
    url: 'https://api.recipes.com/'+ weatherConditions,
    type: 'GET',
    dataType: 'jsonp'
  }).then((data) => {
    // do something
  });
});
```

### Promises

The solution: **promises**. A promise is an object that represents the eventual completion or failure of an asynchronous event. Promises can be either **fulfilled** or **rejected**.

Syntax:

```js
// Create promise object
const myPromise = newPromise(function(fulfill, reject) {
  fulfill("success!"); // runs if promise fulfilled
  reject("fail!"); // runs if promise rejected
});
```

Once you have your `Promise` object, you can now invoke built-in methods that receive the values in `fulfill()` and `reject()`.

```js
myPromise.then(function(success) {
  console.log(success); // logs "success!"
}).catch(function(fail) {
  console.log(fail); // logs "fail!"
});
```

### Promises in API calls

The jQuery library returns a `Promise` object when you store `$.ajax()` in a variable.

```js
// getPokemon is a Promise object
const getPokemon = $.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/1/",
  method: "GET",
  dataType: "json"
});

getPokemon.then(function(caughtPokemon) {
  console.log(caughtPokemon);
});
```

Notice that you're calling the `.then()` method! That's because `getPokemon` is a jQuery `Promise` object!

### Listening for success and failure

For jQuery `Promise` objects, `.then()` actually takes two parameters. The first is a callback function that runs if the API call succeeds. The second is a callback function that runs if the API call *fails*.

```js
getPokemon.then( successFunction, function(error) {
  console.log(error);
});
```

OR you can use `.catch()` with vanilla JavaScript or `.fail()` with jQuery.

```js
getPokemon.then(successFunction)
  .fail(function(error) {
    console.log(error);
  });
```

### Working with multiple promises

Suppose we want to run code *only* when multiple promises are fulfilled. To do this, jQuery provides the `.when()` method.

```js
// create a variable to hold the first promise
const pokemonOne = $.ajax({
  url : 'https://pokeapi.co/api/v2/pokemon/1/',
  dataType : 'json',
  method: 'GET'
});

// create a variable to hold the second promise
cosnt pokemonTwo = $.ajax({
  url : 'https://pokeapi.co/api/v2/pokemon/2/',
  dataType : 'json',
  method: 'GET'
});

// The magic happens here!
$.when(pokemonOne, pokemonTwo)
  .then(function(result1, result2) {
    console.log(result1, result2);
  })
  .fail(function(error1, error2) {
    console.log(error1, error2);
  });
```

**Note**: `.when()`, for each `result1` and `result2`, returns an array of data: `[dataObject, status, originalPromiseObject]`!

**Pro tip**: To organize tons of promises, simply `.push()` each promise into an array. Question though: how do we use an array of promises in a `$.when()` method? That's why we'll learn about rest parameters and spread operators.

### Rest parameters

**Rest parameters** give us the power to take all the arguments in a function call and store them all as an array.

Before rest parameters, we had to do this:

```js
const myFunction = function() {
  console.log(arguments);
  return Array.prototype.slice.call(arguments);
}

// Logs an Arguments object that is array-like
// Returns [1,2,3]
myFunction(1,2,3);
```

Rest parameters make it this much easier:

```js
const myFunction = function(...numbers) {
  return numbers;
}

// Returns [1,2,3]
myFunction(1,2,3);
```

**Note**: Arrow functions don't have an `arguments` object!

Applied to API calls, we can do this:

```js
$.when(arrayOfPromises)
  .then(function(...results) {
    console.log(results);
  });
```
`...results` nicely packages our results from our promises into an ordered array.

However, the above code provides an *array* of promises in the `.when()` method, but it expects comma-separated arguments of promises!

### Spread operator

The **spread operator** allows us to pass every element in an array as a separate argument in a function call.

This solves our `.when()` issue above:

```js
$.when(...arrayOfPromises)
  .then(function(...results) {
    console.log(results);
  });
```

### Syntactic sugar: async and await

A super shorthand introduced in ES6 is `async` and `await`.

Simply tack `async` in front of a function and place `await` in front of your API calls.

```js
async function getData() {
  // will return the DATA, not the promise
  const firstApiCallData = await getApiOne();
  // will only run this AFTER the first is done
  const secondApiCallData = await getApiTwo();
}
```

## Intro to Firebase

Firebase is a web application by Google that allows us to use **client-side** JavaScript to store information in a database. We then can interact with this data using an API (just like what we already know)!

The first steps for creating your Firebase app are:
1. Create app in [Firebase console](https://firebase.google.com).
2. Create web app.
3. Copy+paste script tags and config.

## Data structures

Firebase structures data like one large JSON object with associated keys. Just like SASS, although you can nest up to 32 levels deep, it's best practice to keep things as flat as possible.

**Note**: When you query a key in the JSON object, the results bring all child nodes too!

## Adding data

We need to create a reference to our Firebase database. Simply add this after your Firebase import code:

```js
// all data
const dbRef = firebase.database().ref();
// all users in users node
const users = firebase.database().ref("user");
// single user
const singleUser = firebase.database().ref(`users/${userId}`)
```

Then we have access to methods to manipulate data. Here's our 3 main ones we're interested in: `push()`, `set()`, `update()`.

`push()` adds a brand new node and returns its Firebase-generated key.

`set()` writes data at a specific reference point that you choose. If data is already at the reference point, it *overwrites* it--including all children!

**Note**: `set()` will return a promise, which takes a callback function that runs when the database has been updated.

`update()` writes to specific nodes (just like `set()`) *without overwriting* what's already there. `update()` will overwrite values for keys though!

**Pro tip**: `set()` is better for deleting and replacing. `update()` is safer.

### Grabbing data

To retrieve data and execute on it, we have access to the `.on()` method.

The `.on()` method executes any time there is new data in the database! THIS is the place to write the code that displays your data. That way any time you `push()`, `set()`, or `update()` your database, the changes will be instantly reflected on the page.

## Class-based Programming

Object-oriented programming is that idea that you use objects for everything in your applications. Objects are the primary player in your code.

In object-oriented programming, sometimes our objects share many properties and methods in common. It would be tedious to manually write the same properties and methods for every single object we create!

What we need is something called **prototypal inheritance**. That's why developers created **classes**: blueprints or *prototypes* that allow us to recreate objects with initial starting properties and methods.

Syntax:

```js
// Class declaration
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.location = {
      x: 0,
      y: 0
    }
  }

  walk(walkingStatement) {
    console.log(walkingStatement);
    this.location.x += 1;
  }
}

// Object instantiation
const raccoon = new Character("Billy");
```

**Note**: You can think of the `constructor()` function as a little builder that gets called when an object is instantiated.

### Extends

You can  build upon classes to create more classes! So a class can be a blueprint to another class!

```js
class Bowser extends Character {
  constructor() {
    super(); // calls constructor of parent class
    this.name = "Bowser"; // overrides health property from parent constructor
  }
}
```

**Pro tip**: `super()` actually just calls the constructor of the parent class, giving the extends class the same properties. That means that technically you could just call `super("Bowser")` to give `Bowser` objects the name `"Bowser"`.

## Lexical Scope and Execution Context

Having an awareness of *what's* going on behind the scenes of JavaScript gives you an awareness of why things are done the way they are.

All browsers have a **JavaScript engine** that reads and runs JavaScript code.

The step between reading and running is called **compilation**: converting our JavaScript into machine-readable instructions. During this compilation stage, that's where the engine sets up an **execution context**: an inventory of all our variables and functions.

The set of all these variables and functions is known as the **scope**. In particular, JavaScript has a **lexical scope**: meaning *where* you declare your variables and functions determine its availability (e.g. inside or outside a function).

### Global execution context

When a script first starts, it always starts in the **global execution context**, which is available to every level of the script! This gives you access to:

1. The global object
2. The `this` keyword, which refers to the `window` object when in a browser

Take this example:

```js
let name = "Verna";
let age = "72";
function phoneCall(number, person){
  console.log("Calling " + number + "for " + person)
}

function callGrandma() {
  let phoneNumber = "416-555-4321"; 
  phoneCall(phoneNumber, name);
}

callGrandma();
```

At the global execution context, the engine only acknowledge `name`, `age`, `phoneCall`, and `callGrandma`.

### Function context

When the engine starts *running* through the code, if it hits a function, it creates a new execution context or **private scope** and runs through the process all over again to the lines *inside* the function.

**Note**: The function context has access to the global execution context! Whenever it can't find any variables or functions inside the function, it looks back to the global execution context!

Example:

```js
function phoneCall(number, person){
  console.log("Calling " + number + "for " + person)
}

function callGrandma() {
  let phoneNumber = "416-555-4321"; 
  phoneCall(phoneNumber, name);
}
```

The functions above reads their own unique variables like `phoneNumber` for `callGrandma` and `number` for `phoneCall`.

**Pro tip**: The execution context of a function is determined by where it's *defined*, not where it's called. In the example above, the execution context of `phoneCall` *is not* part of `callGrandma` even though it's called inside.

**Another pro tip**: The difference between **scope** and **execution context** is that scope is *part* of the execution context. The scope refers to the variables and functions available to an execution context. The execution context is the scope PLUS the other scopes available. Also, the execution context is responsible for dynamically defining the `this` keyword.

### Revisiting this

The `this` keyword dynamically references different objects depending on the execution context you're in.

In the global execution context, `this` refers to `window`.

Inside a declared function's private scope, `this` refers to `window` still.

**Pro tip**: 90% of the time, `this` will refer to the `window` object!

### Object and this

When used inside objects, `this` will normally refer to the object.

Example:

```js
const character = {
  introduction: function() {
    console.log(this);
    console.log("HI!");
  }
}

character.introduction(); // returns character object
```

However, say that we create a new variable that stores the references to the `introduction` method.

```js
const intro = character.introduction;

intro(); // returns window object
```

The `intro` function, even though it references the *same* function, will have a different execution context that defines `this` differently!

**Note**: The same issue will occur if you define a function *inside* an object method.

### Arrow functions revisited

Arrow functions solve the problems above! Essentially, arrow functions **never get their own definition** of `this`. It will instead get the definition of `this` from the execution context where it was defined!

HOWEVER, an edge case is when you use arrow functions *during* the creation of an object.

```js
const obj = {
  prop: "hello",
  method: () => {
    console.log(this); // logs window object
  }
}
```

Because the engine is in the process of *creating* the object, `this` hasn't been updated to reference `obj` yet. It will reference `window`.

## Make Our Code More Modular

Just like how SASS has partials, we can break up our JavaScript into **modules**.

To create a module, we have to:

1. Define our primary script as `type="module"` in HTML.

```js
<script type="module" src="scripts/scripts.js"></script>
```

2. **Export** code from secondary scripts.

```js
const add = function(a, b) {
  return a + b;
}

export default add;
```

3. **Import** code into primary script at the top.

```js
import add from "./add.js";
```

**Note**: If you use `export default`, the `default` specifier allows you to name the default export into *anything* you want in the import file. For example, `add` could be renamed to `addo`.

**Pro tip**: You *must* have an `export default` for your modules to work.

For all other exports, you just tack `export` at the start of any declaration. Then you *destructure* in your import.

```js
// In export file
export const bankAccount = 1000;

// In import file
import { bankAccount } from "./file.js"; // destructured
```

### How we'll use modules in the future

NPM or the Node Package Manager is basically a database full of modules!

## Destructuring

**Destructuring** is syntactic sugar in JavaScript that allows us to efficiently store values in objects and arrays into variables, improving readability.

In order to destructure an **object**, do this:

```js
const obj = { name: "Dan", age: 27 };

const { name, age } = obj;
```

**Note**: `name` and `age` can't be just any variable names. They have to be the actual object keys. Otherwise, it doesn't work.

In order to destructure an **array**, do this:

```js
const arr = ["Dan", 27, "Human"];

const [ name, age ] = arr; // ignores value "Human"
```

**Note**: For arrays, destructuring follows the order of the arrays.

**Pro tip**: You can destructure nested objects and nested arrays!

```js
const obj = { name: "Dan", child: { name: "Bobby" } };

// Pulls out the name key-value pair from the nested object
const { child: { name }} = obj;
```

**Note**: Nested destructuring works because it utilizes the fact that you can rename the variables in your destructure. So `{ child: newName }` destructures the `child` object into the variable `newName`.