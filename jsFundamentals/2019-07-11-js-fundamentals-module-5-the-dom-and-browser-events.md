---
categories: [frontend]
tags: [js]
title: "JS Fundamentals Module 5: The DOM & Browser Events"
source: [juno]
---

## What is the DOM?

DOM stands for **document object model**. It is an object representation of all your HTML elements structured like a tree, where each element is a **node**.

You can access the DOM using the variable name `document`.

`document` comes with some built-in methods like `.getElementById("myId")`.

## Intro to jQuery

jQuery is essentially one huge object with a ton of methods that allow you to do a lot more with a lot less text in your code. In other words, it's a **library**.

### Why learn jQuery? Why not stick to vanilla JS?

When using any form of JavaScript (vanilla or library), you will be working with 3 major concepts:

1. Selecting elements
2. Listening for events
3. Performing actions when those events are fired

Here's all the reasons jQuery is better for these tasks:

* jQuery makes these tasks easier, which makes learning JavaScript come with less hiccups.
* jQuery shortcuts a lot of the common tasks you'll encounter.
* jQuery irons out a lot of the cross-browser inconsistencies you would normally have to deal with.

### Loading and accessing jQuery

Loading jQuery just means inserting this `script src`:

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

To access the jQuery object, you just use `jQuery(selector)` or the shorthand `$(selector)`, where `selector` is the node (i.e. HTML element) you want to find.

**Note**: If there is more than one node with your `selector`, it will return an **array** of objects with that `selector`.

### Built-in methods

The whole power of jQuery is all its built-in methods. These allow you to manipulate the DOM very quickly.

* `.text()`
* `.addClass()`
* `.removeClass()`
* `.toggleClass()`
* Etc.

To learn all the methods, use the [jQuery API](https://api.jquery.com/) for reference.

## jQuery Best Practices

### $(document).ready

It's best practice to always load your JavaScript *after* all HTML loads because you don't want your code to try to find parts of the DOM when they haven't loaded yet.

```js
$(document).ready(function() {
    // your code here
});

// and this is the shorthand version...
$(function() {
	// your code here
});
```

*Note: All that's happening above is jQuery runs the function and the code inside it after the DOM loads.*

### Cache your selectors

The inefficient way of referencing a DOM node would be to select it every time.

```js
$('.box').addClass('square');
$('.box').css('color', 'green');
$('.box').html('<p>This is a box.</p>');
```

The below code is better because jQuery only has to search for your selector *once* and then just caches it.

```js
//find all elements with a class of box and cache them
const $boxes = $('.box');

$boxes.addClass('square');
$boxes.css('color', 'green');
$boxes.html('<p>This is a box.</p>');
```

### Chain your methods

```js
$('#widget').addClass('active').text('It was a dark and stormy night').css('background', 'grey');
```

is better than...

```js
$('#widget').addClass('active');
$('#widget').text('It was a dark and stormy night');
$('#widget').css('background', 'grey');
```

**Note**: Chaining also caches your selection!

## DOM Manipulation

### Getters and setters

You can either **get** a selector, or **set** a selector.

```js
// get it
document.querySelector("h2").textContent;
// or set it
document.querySelector("h2").textContent = "New text!";
```

### Ease of jQuery

When manipulating the DOM, it takes a lot more lines of code with vanilla JavaScript than with jQuery.

```js
// vanilla JS
const pList = document.querySelectorAll('p');
pList.forEach((p) => {
    p.style.color = 'darkcyan';
});

// jQuery code that does the same thing
$('p').css('color', 'darkcyan');
```

## Browser Events

### Event listeners

Here's a comparison of vanilla JavaScript and jQuery for event listeners. Watch again for the difference in code.

Here's a [full list of event listeners](https://developer.mozilla.org/en-US/docs/Web/Events).

```js
// vanilla JS
document.querySelector('selector').addEventListener(event, () => {
	// run this code when event is triggered
});

// jQuery version
$('selector').on(event, () => {
    // run this code when event is triggered
});
```

The process for creating an event listener has 3 steps:
1. **Event binding**: Bind a listener to a jQuery object with the `on()` method.
2. **Specify event**: Write the type of event as the first argument o `on()` (e.g. "click").
3. **Provide callback function**: Add an anonymous function as the second argument of `on()` that runs when the event occurs.

### Useful tips and tricks

When you're working with a form, a good event listener type is `submit`.

```js
$("form").on("submit", () => {
    // your code here
})
```

By default, forms *refresh* the page, which prevents our code from doing its work. In order to stop this default behaviour, we use the `preventDefault()` method.

```js
$("form").on("submit", (event) => {
    event.preventDefault();
})
```

**Note**: You'll notice there's an `event` parameter. This is inserted when the callback function is called, i.e., the event occurs. And it provides you with an `event` object with properties and methods for that event.

## Event Delegation

Suppose you add `h1` element via jQuery using `.html()`. This isn't technically in the actual HTML but is in the DOM. The issue is that you won't be able to add an event listener in the traditional way.

The solution: **event delegation**. Whenever an event occurs on an element, it **bubbles up** or **propogates** to every parent element above it, so every parent element also knows about it.

The trick here is to add an event listener to a **parent element** but have that parent listen for the child element you're interested in.

```js
$(parentElement).on(event, childElement, function(){
	// do something
});
```

## Event listeners and this

When you create an event listener, you actually have access to `this`. In most cases, `this` refers to the DOM node you've targeted!

```js
// this refers to the li element you've selected via event delegation (see above)
$("ul").on("click", "li", function() {
    $(this).html("I'm an li element!");
});
```

**Note**: Arrow functions actually were created because `this` means something different for them! Keep in mind the ways that different function syntax can define `this`.

**Pro tip**: In jQuery, you actually have to write `this` as `$(this)`!