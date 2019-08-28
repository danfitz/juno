---
categories: [frontend]
tags: [js]
title: "JS Fundamentals Module 2: Basic JavaScript"
source: [juno]
---

## prompt

You can use the `prompt` function, which opens a popup input for the user. When declared in a variable, the value that the user inputs is what is stored in the variable!

```javascript
const name = prompt("What is your name?");
// If the user types "Dan", name = "Dan"
```

## console.log

`console.log` is a super useful function/method that can help you see exactly what's going on under the hood.

**Note**: When you run console.log, it returns `undefined` because it's a function that doesn't return anything.

## Types

Here are your main data types:
* Integers (e.g. 10)
* Floats (e.g. 10.001)
* Strings (e.g. "10")
    * Syntax: '' or "" or ``
* Booleans (e.g. true)
* Undefined (=I don't have a value)
* Null (=I have a value of nothing)
    * `typeof(null)` returns an `object`!
* Objects

**Pro tip:** You can use the `typeof(value)` function to check the type of a value whenever you're **troubleshooting**.

*Question: What's the difference between undefined and null?*

## Variables

Variables are like **containers** for your values. They allow you to store those values and quickly retrieve them whenever you want using names.

Syntax:
```javascript
var favCat;
```

ES6 variables declarations:
```javascript
let favCat;
const favCat;
```

**Note**: As of ES6, `let` and `const` have now replaced `var` because they solve issues with `var` by giving you more control over the data that your variable accepts. For example, `const` doesn't allow you to update the variable value, while `let` does.

To reassign a value, simply remove the declaration keyword:

```javascript
let favCat = "Wilfred Warrior";
favCat = "G.I. Joe";
// This re-assigns the variable

const pizzaTime = 60;
pizzaTime = 50;
// This throws an error because const locks in your value
```

**When to use const:** Useful for when you want to lock down a variable to prevent you from stepping over your own foot.

**Best practice:** It's always better to use `const` unless you know *FOR SURE* that the value is going to change.

### Expressions vs. statements

Statements are instructions you give to a computer that *doesn't always* give you back a value.

Expressions are the same thing but *always* give you back a value.

```javascript
let pizzaTime = 60;
// returns undefined
// statement
pizzaTime = 50;
// returns 50
// expression
```

### Variable naming conventions

Rules of a variable:
* Can't contain spaces
* Can't start with number
* Case sensitive

Best practices:
* Use camelCase to separate words (common practice in JavaScript)
* Give a descriptive name for readability (e.g. `name` instead of `n`)

### Using variables as values

Example:
```javascript
const years = 25;
const days = years * 365;
```

In the example above, you're using `years` as a value in an operation whose result is stored in `days`.

**Side note:**
```javascript
let years;
let days = years * 365;
```

Since you tried to evaluate a number with no value, the above code will store`NaN` in `days`, which is a number with no value.

### Updating a variable using current value

Example:
```javascript
let numOfCakes = 1;
numOfCakes = numOfCakes + 3;
numOfCakes += 3; // same as above
numOfCakes++; // adds 1
```

Updating the current value of a variable is very useful for incrementing or decrementing.

## Expressions and Values

An expression is a set of instructions for the computer that returns a **value** based on the operations of that expression.

## Template Literals and Concatenation

### Concatenation

The `+` operator can do more than add numbers together; it can also **join** strings together.

```javascript
"cup" + "cakes";
// Returns the string "cupcakes"
```

### Unique behaviours of concatenation

```javascript
"HackerYou" * 6;
// returns NaN

"HackerYou" + 6;
// returns "HackerYou6"

"HackerYou" * "Class";
// returns NaN
```

### Strings declarations

Even though there are 3 ways to declare strings (single quotes, double quotes, or backticks), it's best to pick **ONE** and stick with it for consistency's sake.

### Template literals

Template literals, using backticks, allow you to insert variables *inside* of your strings. This is a new ES6 feature.

```javascript
const name = "Sam";
const job = "Instructor";
const sentence = `${name} works at HackerYou as an ${job}`;
```

### Multi-line strings

```javascript
const multiQuote = "This is a \nnew line.";
// OR
const multiTick = `This is a
new line`;
```

Notice how template literals can naturally create new lines. If you add a line break to a string quote, it will always throw an error.

### Evaluating expressions in template literals

Look at what you can do in a template literal!

```javascript
const math = `What is 1 + 1?
Well, it's ${1 + 1}.`;
```

### Template literals support

Note that template literals are not available on some older browsers like IE 11, so be cautious of its use depending on your project needs.

**Pro tip:** Compilers like Babel allow you to compile your newer code to older versions, so you can use them with older browsers.

## Operators

You can perform basic arithmetic using **arithmetic operators**. These arithmetic operators evaluate in the order of **BEDMAS**.

## Control Flow

Computers process your instructions or statements in the **order in which they're written**.

**Control flow** changes the flow of statements executed based on whether some condition is `true` or `false`

### Control flow oeprators

To evaluate a condition as being `true` or `false`, you need to make use of **comparison operators** and **logical operators**:


Comparison Operator     |  Description  
------------ | -------------
==	 | is equal to
===	 | is exactly equal to (value and type)
!=	| is not equal to
!==	| is strictly not equal to
>	| greater than
<	| less than
>=	| greater than or equal to
<=	| less than or equal to

**Best practice** Use `===` and `!==` over `==` and `!=` most of the time

Logical Operator |  Description  
------------ | -------------
&&	| true only if A and B are true
||	| false only if A and B are false
!	| negates booleans

### Truthy and falsy values

`0`, `null`, `undefined` all evaluate to false when placed in a control flow statement. This is known as a **falsy** value.

Any string or any number higher than 0 will evaluate to true. These are known as **truthy** statements.

### Conditional statements

```javascript
if (condition) {
    // run block statement
} else {
    // run block statement
}
```

**Note**: `else` is a catch-all, where you run that block of code if every condition before it evaluated to false.

### For statements

```javascript
for (initialExpresion; condition; incrementExpression) {
    // run block statement
}
```

`initialExpression` is often used to set a variable at the beginning of the loop.

`condition` checks some condition right *before* each loop iteration. If the condition is true, the loop iterates. If not, it moves on to the next loop iteration.

`incrementExpression` is evaluated at the *end* of each loop iteration. Commonly used to update or increment the `initialExpression`.