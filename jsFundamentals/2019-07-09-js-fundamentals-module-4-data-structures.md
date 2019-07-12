---
categories: [frontend]
tags: [js]
title: "JS Fundamentals Module 4: Data Structures"
source: [juno]
---

## Intro to Data Structures

### Objects

Sometimes we need to keep track of data more complex than our primitive data types (numbers, strings, booleans, null, undefined). This is why we create **objects**.

Objects consist of **properties** and corresponding **values**.

```js
const apple = {
    color: "red",
    size : "medium",
    sugar : 25
}
```

*Note: The above way of creating objects is the **object literal** method. There are other methods.*

### Arrays

Technically, arrays are objects where the key for each value is an **index**. This is useful for cases where **order matters**.

You could create an "array" like this:

```js
const musicObject = {
    "0": "do",
    "1": "re",
    "2": "mi",
    "3": "fa",
    "4": "sol",
    "5": "la",
    "6": "ti",
    "7": "do"
}
```

But in JavaScript, we can create arrays with some **syntactic sugar**.

```js
const musicArray = [ "do", "re", "mi", "fa", "sol", "la", "ti", "do" ];
```

**Pro tip**: Even if you declare an array with `const`, you can still update its values because technically the object hasn't changed--only one of its properties.

## Object Properties

### Retrieving & updating values

To retrieve or update values in an object, you can use **dot notation** or **bracket notation**.

```js
myObject.propertyName; // dot notation
myObject["propertyName"]; // bracket notation
```

### Destructuring

Sometimes you want to pull out multiple properties in an object. This can get tedious when done manually.

```js
console.log(`The student ${student.name} (ID: ${student.id}) is ${student.age} years old. He has a GPA of ${student.GPA} and is from ${student.highSchool}`);
```

**Destructuring** allows you to pull out what you want from an object and assign the values to variables in bulk.

```js
const { name, id, age, GPA, highSchool } = myObject

console.log(`The student ${name} (ID: ${id}) is ${age} years old. He has a GPA of ${GPA} and is from ${highSchool}`);
```

**Pro tip**: Destructuring is really useful for when you only need some properties or methods from an object and want to ignore the rest.

**Pro tip again**: Your parameters can use destructuring to pull out select properties/methods from object arguments you pass too!

```js
function printStudentName({ name }) {
	console.log(name);
}

printStudentName(myStudent);  // returns "Jon Snow"
```

**Last pro tip**: You can customize your variable names when destructuring.

```js
const { name: myName, course: myCourse } = myStudent;
// sets myStudent properties to myName and myCourse
```

## What is a Method?

Objects can also hold functions! Those functions, assigned to keys, are called **methods**.

```js
const myObject = {
	propertyName: value,
	propertyName: value,
	methodName: function() {
		// do something
	}
}
```

### Namespace objects

To help break down your code into modular components (and thus avoid conflicts), it's best practice to **namespace** your variables and functions into objects. These objects are called **namespace objects**.

For example, suppose you're building a todo app.

```js
const toDoApp = {};

toDoApp.listName = "My To Do List"

toDoApp.changeListName = function(){
	toDoApp.listName = "Trip Planning To Do List"
}

toDoApp.printToDo = function(todo){
    console.log(todo);
}
```

By scoping your variables and functions to the namespace `toDoApp`, all references to those variables and functions must be prepended with `toDoApp`, helping to prevent conflicts.

### Init

Another best practice is to create an `init` method, which is a naming convention for all the code you want to run when the app loads.

```js
const toDoApp = {
    listName: "My To Do List"
};

toDoApp.init = function(){
  toDoApp.printToDo('Clean Room');
}

toDoApp.init();
```

## This

The `this` keyword changes depending on **where** you use it.

For the most part, these rules apply... 

Inside an object, `this` refers to the object itself. In the global scope, `this` refers to the `Window` object--the entire window of the browser.

```js
const myObject = {
	name: "My Object",
	getMyObjThis: function() {
		console.log("getMyObjThis 'this':", this); // references myObject
	},
	myNestedObject: {
		name: "My Nested Object",
		getMyNestedObjectThis: function() {
		  console.log("getMyNestedObjectThis 'this':", this); // references myNestedObject
		}
	}
}

console.log(this); // references Window
```

**Pro tip**: The `this` keyword is useful because it's **dynamic**. If you were to explicitly reference the object `myObject`, you would have to update its value if the variable name ever changes!

### Note on arrow functions

One exception to the rules to `this` is arrow functions. When you use an arrow function for a method, `this` will end up referring to `Window` instead.

**Best practice**: Don't use arrow functions for methods!


## Value vs. Reference

Primitive data types are **passed by value**.

```js
let string = "hi!"
let stringCopy = string;

string // returns "hi!"
stringCopy // returns "hi!"

string === stringCopy; // returns true because both variables contain the same value ("hi!")

stringCopy = "hello!";

string // returns "hi!"
stringCopy // returns "hello!"

string === stringCopy; // returns false because the variables now contain different values
```

Objects are **passed by reference**. In other words, passing in an object gives its **memory address**.

```js
let obj = { name: "Drake" }
let objCopy = obj;

obj // returns { name: "Drake" }
objCopy // returns { name: "Drake" }

obj === objCopy // returns true because both variables still reference the same original object 

objCopy.name = "Beyonce";

obj  // returns { name: "Beyonce" } 
objCopy  // returns { name: "Beyonce" }

obj === objCopy // returns true because both variables still reference the same original object 
```

**Pro tip**: Passing by reference is usually better practice for objects because it would be expensive to copy all the values in an object, as objects can get very large. (Think large libraries.)

## Built-in Object Methods

### Object.assign()

`Object.assign(targetObject, sourceObject)` allows us to create a **shallow copy** of an object. That means it copies the values of properties, but if any property has *nested* objects or arrays, it will copy by *reference*.

```js
const student = {
  school: "HackerYou",
  program: "JavaScript",
  location: "Toronto"
};

const newStudent = Object.assign({name: "Joe", age: 25}, student);
// ADDS the properties from student object to target object
```

**Notes**:
* To copy 1:1, pass an empty object `{}`
* If your source object and target object have the same property name, the source object's property value overrides the target object's property value

**Pro tip**: If you want a *deep copy* of an object, a handy library is [Lodash](https://lodash.com/docs/#cloneDeep).

### Object.entries()

`Object.entries(targetObject)` returns an array of arrays, each containing a key/value pair.

```js
const puppy = {
	cute: true,
	months: 3
}

Object.entries(puppy);
// returns [["cute", true], ["months", 3]]
```

### Object.keys()

`Object.entries(targetObject)` returns an array of each of the keys in an object.

```js
Object.keys(puppy);
// returns ["cute", "months"]
```

### Object.values()

`Object.values(targetObject)` returns an array of each of the values in an object.

```js
Object.values(puppy);
// returns [true, 3]
```

## Enumeration

You can use a **for-in** loop to iterate over the properties of an object and, for each property, execute a block of statements.

```js
for (propName in object) {
	// code block here
}
```

## Built-in Array Methods

Suppose you have an array. Here's all the things you can do to it.

```js
const myArray = [1, 3, 4];
```

### .push() and .unshift()

`.push()` adds a value to the end of your array.

```js
myArray.push(5);
// [1, 3, 4, 5]
```

`.unshift()` adds a value to the beginning of your array.

```js
myArray.unshift(5);
// [5, 1, 3, 4]
```

### .pop() and .shift()

`.pop()` and `.shift()` respectively removes last and first values of an array and returns them.

```js
myArray.pop();
// returns 4

myArray.shift();
// returns 1
```

## Array Loops

### Looping through arrays

We can use a **for loop** to iterate through each item in an array.

```js
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i]); // logs value at index i
}
```

We can also use the `.forEach()` method to iterate through an array. It takes in a callback function, which in turn can take in 2 arguments, the *value* and the *index* of each iterated item.

```js
myArray.forEach((value, index) => { console.log(index, value) });
```

### .map()

`.map()` returns a new array with each item **modified** given a callback function.

```js
const myArray = [1, 100];
const mappedArray = myArray.map((value, index) => { return value * 2; });
// This returns [2, 200]
```

*Note: It's often useful to assign the new array that `.map()` returns to a variable, so you can store and use it.*

**Pro tip**: You can add control flow statements to selectively control which values to modify.

```js
const myArray = [1, 100];
const mappedArray = myArray.map((value, index) => {
	if (value >= 100) {
		return value / 2;
	} else {
		return value;
	} 
});
// This returns [1, 50]
```

### .filter()

`.filter()` returns a **subset** of an array containing only the values that meet a condition you provide in your callback function.

```js
const myArray = [true, false];
const subsetArray = myArray.filter((value, index) => { return !value; });
// This returns [false]
```

## JavaScript Classes

Sometimes you want to create multiple objects, but you notice they all have some of the same properties and methods. It would suck to have to write each object's properties one by one. That's why you can create a **blueprint** for creating objects. This blueprint is called a **prototype** or **class**.

```js
class Character {
	constructor(name="Willy") {
		this.name = name;
		this.equipment = "stick";
		this.level = 1;
		this.health = 100;
	}
}

const playerOne = new Character("Dan"); // player is named Dan
const playerTwo = new Character(); // player is named Willy by default
```

Four things to note:
* By convention and best practice, classes are capitalized.
* There are no commas between methods or properties.
* Constructors are a special feature that allow you to set properties and methods that all **initialized** or **instantiated** objects will receive.
* Constructors allow you to add parameters, which gives you the ability to decide the values of properties/methods for your object instantiation. If you opt out of using a parameter or provide a default parameter value, the object instantiation receives what you give it.

### Extends

Suppose you want to create a boss. The boss shares many of the same properties and methods as the `Character` class, but it also has some of its own unique properties and methods. This is where you can use **extend** to inherit from the `Character` class *and* add your own stuff too.

```js
class Dragon extends Character {
	constructor() {
		super();
		this.health = 1000; // health value that overrides default Character health value of 100
	}
	breatheFire() {
		// unique method that steps beyond Character class
	}
}
```

### super()

By default, `extends` classes don't have awareness of their parent class, which means two things:
* The `this` keyword is not defined
* All properties and methods from the parent class aren't known.

Adding `super()` at the top of the `constructor()` *includes* `this` and the parent class's properties and methods. This is essential in order to utilize the full functionality of `extends` classes.

**Note**: When using `super()` in your `extends` class's `constructor()`, if your parent class's `constructor()` has parameters, you need to add those parameters into both `constructor()` and `super()` too.

```js
class Dragon extends Character {
	constructor(name="Willy") {
		super(name);
	}
}
```

**Pro tip**: If you `console.log(super())`, you'll see that all `super()` is is an instantiation of your parent class for reference by your `extends` class.