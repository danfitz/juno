---
categories: [frontend]
tags: [js]
title: "Beyond Bootcamp Module 3: Asynchronous JavaScript"
source: [juno]
---

## Promises

A **promise** is an object with a friendly API that helps you deal with asynchronous data.

Here's the structural components of a promise:

1. To use a promise, you simply instantiate it from the `Promise` class.
2. Then you pass a callback function with a `resolve` and `reject` parameter.
3. When `resolve` is invoked, the callback function inside the `then` method gets called!

```js
const delay = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SUCCESS!");
    }, milliseconds);
  });
};

delay(5000).then(function(result) {
  console.log(result); // logs "SUCCESS!"
});
```

**Note**: You can pass values into `resolve` or `reject`, and the callback functions inside `then` and `catch` will receive those values!

### Settling promises

The callback function inside the invoked `Promise` object is called the **resolver function**. It gets invoked immediately and will have the asynchronous code *inside* it.

The resolver function is specifically passed in a `resolve` and `reject` function. When invoked, they **settle** the promise.

### Responding to settled promises

A settled promise has 3 methods you can call that mirror the `try, catch, finally` statement.

```js
myPromise
  .then(() => {}) // runs callback if resolved
  .catch(() => {}) // runs callback if rejected
  .finally(() => {}) // runs no matter what
```

### Chaining promises

Callback hell sucks.

Here's a structure for promises using **chainable** `then` methods. It uses a **flattened** structure that avoids nested callback hell.

```js
getUserByEmail("dan@danfitz.com")
  .then(user => {
    return getFavouriteBooks(user.id);
  })
  .then(favouriteBooks => {
    console.log(favouriteBooks);
  });
```

How promise chaining works:

```js
myPromise
  .then(val => {
    // When you return a value in the callback in `then`,
    // the `then` method returns a promise containing the value 1
    return 1;
  })
  .then(nextVal => { // 1 gets passed as the resolved value to the next `then`
    return nextVal + 1;
  })
  .then(finalVal => { // then 2 gets passed
    return "DONE";
  });
```

**Important**: When your callback in `then` returns a *promise*, the resolved value passed into the next `then` is the resolved value of *that returned promise*.

### HTTP requests with promises

To create your own HTTP requests using promises like `axios` or `fetch` or `$.get`, you're using a structure like this:

```js
const get = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // creates instance of XML request
    
    // Open request
    xhr.open("GET", url);

    // If the request resolves, run this function
    xhr.onload = function() {
      const jsonResponse = JSON.parse(this.responseText); // convert JSON string to object
      resolve(jsonResponse);
    };

    // If the request gets rejected, run this function
    xhr.onerror = function() {
      reject();
    };

    // Send request
    xhr.send();
  });
};
```

## Error Handling

When new users touch our applications, they don't know how to use it. As a result, they'll use it in ways that are unexpected to you, leading them to break it. (You're less likely to break your app because you know how to use it.)

This is why we need **defensive programming**: anticipating all the risks and dangers around your application and writing code that accounts for it.

### What is an error?

Essentially, an **error** is just a piece of code that the JavaScript engine doesn't understand or know how to deal with.

Distinction between **compiling** and **interpreting**:
* When code is compiling, it won't finish compiling for executable use *until* all errors are resolved.
* When code is interpreted, it's reading each line of code and running it immediately. This means errors occur *as the code is running*.

JavaScript is an **interpreted language**. When JavaScript runs into an error, it will stop everything and **throw** an error, sending you a message about what went wrong.

Types of errors:
* Syntax errors
* Reference errors
* Type errors
* More

### What happens when an error is thrown?

1. JavaScript throws an error.
2. The exception stops the current call stack that's running.
3. If there are any stack frames below it, they're also ignored.
4. The exception travels all the way down to the bottom of the stack, *terminating the program*.

**Note**: `catch` will literally catch a thrown error and lock it into its block scope, preventing the error from travelling down the stack and terminating the program.

### More on defensive programming

99% of the time, errors are caused by bad inputs. **Garbage in, garbage out** is an idea in computer science that says your outputs are only as good as your inputs.

Here are some basic ways of responding to errors *gracefully*:

* Return a **neutral** or **default** value
  * If we get a bad input, fall back on a default value.
* Return the **last valid** value
  * If a thermometer measures the temperature 100 times a second and fails the 47th time, it will return the 46th measurement.
* **Try again**
  * Give the user the chance to try the input again.
* **Log a warning message** to a file
  * You can then read this log file to learn how users are messing up.
* Return an **error code**
  * Sometimes, especially for large applications, you send an error code up to a distinct error handler that deals with the error *for you*. You don't handle the error yourself.
* Display an **error message*
  * Something like "You just ran into an error..."
* **Shut down**
  * Some applications are so high risk that the application needs to shut down to minimize damage. Examples: software for hospitals, banks, etc.

## Handling Errors

1. You can codify your errors into an object for easy reference:

```js
const errors = {
  NETWORK_ERROR = "Network Error",
  NOT_FOUND = "Not Found"
};
```

2. Instead of handling your error in your `catch` method (which is tightly coupled with your promise), you can detach by creating a generalized `handleError` function.

```js
// In React
const handleError = error => {
  this.setState({ error: error.message });
};

myPromise.catch(this.handleError);
```

