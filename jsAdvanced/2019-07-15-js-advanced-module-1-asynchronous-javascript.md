---
categories: [frontend]
tags: [js]
title: "JS Advanced Module 1: Asynchronous JavaScript"
source: [juno]
---

## Async JavaScript

Asynchronous JavaScript allows you to do something, and then move on to something else while you're waiting for the first thing to finish. Metaphor: it's like serving a second customer at a grocery line while you're waiting for a price check for the first customer.

Most common use for us will be with **APIs**. We can send an API request and then do someting else while we wait for the API to send a response back.

### Async example

```js
const asyncFunc = () => {
	let x;

	setTimeout(() => {	
		x = "hi"
		console.log(`"x" after one second: ${x}`);
        // this line runs second and logs "hi"
	}, 1000)

	console.log(`"x" when asyncFunc is called: ${x}`);
    // this line runs first and logs undefined
}
```

### Ways to create async requests to get data from external APIs

1. Use built-in `XMLHttpRequest` object, but this is really low-level in usefulness.
2. Use **Fetch API**, a built-in browser method (not all browsers) for async requests.
3. Use jQuery `$.ajax` method.

## Intro to APIs

### What's an API?

It's just a means to access or manipulate data using an **intermediary** set of methods and functions. This is much more secure and lightweight than providing all the data at once.

*Note: We use jQuery's API to access the large jQuery object!*

### Analogies

`You => API => Data`
`You => Server => Chef`
`You => Hotels.com => Hotel Companies`

### RESTful APIs

Many APIs conform to a set of standards called **REST**.

REST stands for **Representational State Transfer**, a format for how to build APIs, especially useful for web apps.

Some of the REST API standards:
* Data lives at a URL called an **endpoint**, e.g., `https://api.cupcakes.com/flavours`.
* We then interact with that data by sending HTTP requests to the URL: **GET**, **POST**, **PUT**, **DELETE**.

### GET requests

With our API endpoint, we can send additional **parameters** consisting of `key=value` pairs.

![GET Request Image](https://camo.githubusercontent.com/a5ed325161c419a7288d056af303093670f85f3d/687474703a2f2f636c2e6c792f696d6167652f3039335332643030313831312f6170692d71756572792e706e67)

### API keys and authentication

API keys identify us to the app, authorizing us for use. Most of the time, these are free but limited in number of requests.

Alternatively, OAuth or a username and password are other forms of authentication.

### APIs and JSON

It's a good idea to request data in **JSON** (JavaScript Object Notation) format, as these closely resemble JavaScript object syntax and structure.

```json
{
  "login": "HackerYou",
  "id": 2479724,
  "avatar_url": "https://avatars.githubusercontent.com/u/2479724?",
  "gravatar_id": "adcc01adbba244c5eb41968040c6741e",
  "url": "https://api.github.com/users/HackerYou",
  "blog": "http://www.hackeryou.com",
  "location": "Toronto",
  "email": "info@hackeryou.com"
}
```

**Note**: JSON can include strings, numbers, booleans, nested arrays, and objects! it can't include functions though.

## AJAX

**AJAX** (Asynchronous JavaScript and XML) is a tool that allows us to asynchronously interact with APIs using methods.

We will be using the jQuery `$.ajax()` method in particular.

```js
// Syntax
$.ajax({
    url: "https://api.cupcakes.com/flavours",
    method: "GET",
    dataType: "json"
});
// This accepts an object with key:value pairs
```

### Request parameters

Request parameters in the query string of your URL allow you to filter and massage data sent back from the API.

`https://api.spacexdata.com/v3/launches?rocket_id=falconheavy&launch_year=2018`

can be done with `$.ajax()` with...

```js
$.ajax({
    url: "https://api.spacexdata.com/v3/launches",
    method: "GET",
    dataType: "json",
    data: {
        rocket_id: "falconheavy",
        launch_year: 2018
    }
});
```

### AJAX and security

It will be common when sending an AJAX request that you run into **cross-site origin** issues. In particular, many servers will reject your AJAX request because the HTTP request is not originating from a domain that is different than the one in the endpoint URL (also called **cross-site HTTP requests**).

What jQuery can do to get around cross-site origin issues is called `jsonp` or **JSON with padding**. Essentially, jQuery will temporarily add a `<script>` tag pointing to the server you're requesting data from. Then the server wraps the JSON data in a JavaScript function. This function then becomes avaialble to us, gets executed, and returns our data. Finally, the `<script>` tag is removed.

Other solutions:
* **CORS**: The server can choose to opt out of the same origin policy defined by the browser, allowing for cross-site origin requests
* **Proxy servers**: Server to server communication is usually more open and free than browser to server communication, so using a proxy server can sometimes get around these issues.

### .then()

Chaining `.then()` after your AJAX request is what gives you asynchronous functionality in your API request. `.then()` only runs when the API request is successfully completed.

```js
$.ajax({
    url: "https://api.spacexdata.com/v3/launches",
    method: "GET",
    dataType: "json",
    data: {
        rocket_id: "falconheavy",
        launch_year: 2018
    }
}).then(function(data) {
    console.log(data);
})
```

`data` is (usually) the JSON you get back.

## Promises

Because we're working with async requests, it can get quite messy...
* Requests might come out of order
* We might nest too many requests

High-level, we can utilize what's called a **promise** to solve this problem. When I make a promise, I can define what will happen *if* something else happens.

In the context of JavaScript, a **promise** is an object in JavaScript that gives us a promise result. That object can have the following states:
* Pending
* Resolved
* Rejected

### Native promise objects

```js
const promise = new Promise(function(resolve, reject) {
  const value = goGetMeAsyncStuff();
  if (value) {
  	resolve(value);
      // provided function for resolve state
  } else {
  	reject(new Error("Something went wrong"));
      // provided function for reject state
  }
});
```

### Handling promise results

```js
// By chaining .then()...
// Our first function argument runs if promise is resolved
// Our second function argument runs if promise is rejected
promise.then(function(result){
  console.log(`The onFulfilled promise handler got called with a value of ${result}`);
}, function(error){
  console.log(`The onRejected promise handler got called with a value of ${error}`);
});
```
### Fetch API

`fetch()` is a function that also returns a promise object.

```js
const gitHubPromise = fetch('https://api.github.com/users/karleymacdonald') // returns a promise
```

**Pro tip**: `fetch()` requires you to add the `json()` method to your promise to get your data.

### jQuery

It turns out that `$.ajax()` actually uses promises under the hood!

That's what `.then()` is--a promise method!

Here's some useful promise-related methods:

* `promise.done()`
* `promise.fail()`
* `promise.then()`
* `$.when(promise1, promise2)`

### Async & await

`async` is a keyword for denoting to the browser and developers that some function performs some kind of asynchronous action and will return a promise.

```js
async function getColour() {
    // do some async task(s)
}
```

Inside of this `async` function, you can now add `await` on a function. `await` will only allow the next line to run when the promise has been resolved.

```js
async function getColour(colourName) {
  const colourApiResponse = await $.ajax(`https://fun-fun-colors.herokuapp.com/colorcheck?q=${colourName}`);
  // runs first
  console.log(colourApiResponse);
  // runs second
}
```

### Handling rejected promises

It's best practice to use a `try...catch` block within your `async` function.

```js
async function getColour(colourName) {
  try {
    const response = await $.ajax('https://fun-fun-colors.herokuapp.com/color');
    console.log(response);
  } catch(err) {
    console.log(err); 
  }
}
```

### Handling multiple promises

You can use the `$.when()` method (jQuery method).

```js
$.when(pokePromise1, pokePromise2).done(function(pokemon1, pokemon2){
  // Do whatever you need to do with your new pokemon data
})
```

You can also use the `Promise.all()` method (vanilla JS method).

```js
const results = await Promise.all([
    fetch('https://api.spacexdata.com/v3/launches'),
    fetch('https://api.spacexdata.com/v3/launches/past')
]);
```
