---
categories: [frontend]
tags: [js]
title: "Bootcamp Module 7: jQuery"
source: [juno]
---

## Intro to jQuery

jQuery is known as the "write less, do more" library. It consists of a ton of pre-written methods and properties that give you easy control over the DOM and CSSOM.

Values include:
1. Shortcuts common tasks.
2. Irons out cross-browser inconsistencies.
3. Lots of additional plugins.

### Terminology review

jQuery accesses the DOM or Document Object Model. You access the DOM using the `document` keyword.

## jQuery Best Practices

### Cache your selectors

If you're working with the same elements over and over, it's actually more efficient to store them in a variable. Otherwise, jQuery will have to query for the elements through a selector every time it needs to find it.

```js
const $boxes = $(".box");
```

### Chain your methods

```js
$('#widget')
    .addClass('active')
    .text('It was a dark and stormy night')
    .css('background', 'grey');
```

**Note**: It's key that the `;` appears at the end. This tells JavaScript that all of the code is part of the same line.

## Events

### Event delegation

Event listeners are attached to elements in the DOM when it initially loads. Therefore, you can't directly listen for elements that were dynamically added by jQuery *after page load*.

To get around this problem, we need to utilize **event delegation** or **event bubbling**.

```html
<ul>
  <li>
    <a href=""> 
      <img src="" alt="" />
    </a>
  </li>
</ul>
```

Whenever an element has an event, the event bubbles up to every parent element above it. For example, if you click `img`, it **bubbles** up to `a`, `li`, and `ul`!

The syntax for utilizing event delegation when listening for events is:

```js
$(parentElement).on(eventType, targetElement, function() { /* CODE */ })
```