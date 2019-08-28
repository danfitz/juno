---
categories: [frontend]
tags: [css]
title: "Bootcamp Module 3: Advanced CSS"
source: [juno]
---

## Emmet

**Emmet* is a way of writing a shorthand version of some code, pressing `tab`, and having the full code expand. It comes pre-installed in VS Code.

### Emmet and HTML

`elem + tab`
=> for element
`<elem></elem>`

`elem.class + tab`
=> for element with class
`<elem class="class"></elem>`

`elem#id + tab`
=> for element with id
`<elem id="id"></elem>`

`elem>childElem + tab`
=> for element and child element
`<elem><childElem></childElem></elem>`

`elem$*2 + tab`
=> for multiple elements
`<elem1></elem1><elem2></elem2>`

**Note**: `$` combined with `*` increments a number at that character location starting from 1!

`elem1+elem2 + tab`
=> for sibling elements
`<elem1></elem1><elem2></elem2>`

`elem[attr="attr"] + tab`
=> for attributes
`<elem attr="attr"></elem>`

`elem{Hey there!} + tab`
=> for content
`<elem>Hey there!</elem>`

**Pro tip**: You can stack all of these operations! In fact, by grouping elements with `()`, you can affect how operators like `*` evaluate.

### Emmet and CSS

## Icons

### Favicon

To add a favicon to your browser tab, just include the following line in your `head` tag:

```html
<link type="image/png" href="images/favicon.png" rel="icon">
```

**Requirements**:
* Must be `png` or `ico` file format
* Keep file size under 128x128, but 32x32 and 48x48 are the best choices

### Apple Touch icon

Apple needs its own icon, although the process is very similar.

```html
<link rel="apple-touch-icon" href="images/my-logo.png" />
```

**Requirements**:
* Apple recommends up to 144x144
* Provide sized-down versions for each device

```html
<!-- Standard iPhone -->
<link rel="apple-touch-icon" sizes="57x57" href="touch-icon-iphone-57.png" />
<!-- Retina iPhone -->
<link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone-114.png" />
<!-- Standard iPad -->
<link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad-72.png" />
<!-- Retina iPad -->
<link rel="apple-touch-icon" sizes="144x144" href="touch-icon-ipad-144.png" />
```

### Font Awesome

Font Awesome gives you the ability to add 1000s of custom icons to your site all using their **CDN**.

1. Add Font Awesome CDN script to end of `body` tag.
2. Search [Font Awesome](https://fontawesome.com) for your icon.
3. Copy+paste HTML provided for icon.
4. To style, target the class of that specific icon (e.g. `fa-bars`).

### Accessibility and icons

Screen readers read icons by default.

If our icon doesn't have semantic value, we can just hide it by doing this:

```html
<i class="fas fa-bars" aria-hidden="true"></i>
```

If it does have semantic value, we have 2 options for adding accessibility:

We can append a `span` with the `sr-only` class. (`sr-only` is loaded in automatically from Font Awesome.)

```html
<i class="fas fa-walking" aria-hidden="true"></i>
<span class="sr-only">Time by walking:</span>
```

Or we can add the `aria-label="Content for screen reader"` attribute.

```html
<a href="https://www.instagram.com/thisishackeryou" aria-label="Go to HackerYou's Instagram page">
  <i aria-hidden class="fab fa-instagram"></i>
</a>
```

## Advanced Layouts

When using floats to lay out a page, we need to make sure that the sum of the widths of floated elements isn't larger than the width of the parent container. Otherwise, child elements will get pushed to the next line.

### Percentage-based layout

To make a set of floated elements on the same line more responsive, we can give them `%` widths. This means stretch or shrinking the screen width will stretch or shrink the elements!

### Wrapper class

It's best practice to create a `.wrapper` class that sets behaviour of multiple parent containers in your web page. This allows us to constrain the contents of these parents *while* keeping the `body` full width.

Commonly, the CSS properties include:

```css
.wrapper {
  width: 80%;
  max-width: 1280px; /* This is a common stopping point */
  margin: 0 auto;
}
```

**Pro tip**: It's best practice to use pixel values for your `.wrapper` and `%` for your floated child elements.

### Mixing pixels with percentages

When working with floats, we have to factor in margins by subtracting it from the widths of the elements.

This is harder when we use `width: 50%` and `margin: 10px` though!

Solution: `calc()`!

```css
div {
  margin: 10px;
  width: calc(50% - 20px);
}
```

### Using viewport to size content

The **viewport** is the size of the window in which you view content in your browser.

`vh` is a relative measurement unit based on height of viewport. `vw` is a relative measurement unit based on width of viewport.

## Responsive Design

In the past, websites would just create an `https://m.website.com` version of their site and direct mobile users to it. This is tedious because it requires maintenance of 2 independent sites!

The reality of webdev today is that we are developing for an **unknown** number of screen sizes.

### Viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` tells the browser to make the site's width the same as the device's width. `initial-scale=1.0` tells the browser to not zoom in or out.

**Bonus**:
* `user-scaable=no` makes a site unzoomable.
* `minimum-scale` and `maximum-scale` limits how much a user can zoom in or out.

### Media queries

The `@media` keyword combined with `min-width` and/or `max-width` gives you the power to **conditionally** evaluate CSS rules only within the confined widths defined.

`min-width: 900px` means *everything 900px and up*. `max-width: 900px` means *everything up to 900px*.

The basic syntax for `@media` queries is:

```css
@media (min-width: 768px) and (max-width: 940px) {
  /* CSS rules here */
}
```

**Pro tip**: If you're going to go **mobile-first**, meaning build for a smaller device and then think about larger screen sizes afterwards, you're going to want to use `min-width`.

### Less common media queries

There is `max-height` and `min-height` too. You will rarely use this. The most powerful use case is when your text overflows your container on small screens. By adding `height: auto` for devices with small heights, you're stretching the container to fit the text!

You also have access to `orientation: portrait` and `orientation: landscape`. You won't need these most of the time too, but it's good to know.

### How to use breakpoints effectively

The best way to find your breakpoints is to move around the screen width, and when the site starts breaking, that's a breakpoint!

However, the most common breakpoints are usually the following (unless your project demands something else):

```css
/* Portrait tablet and small desktops */
@media (max-width: 940px) {
}

/* Landscape phone to portrait tablet */
@media (max-width: 768px) {
}

/* Landscape phones and down */
@media (max-width: 480px) {
}
```

**Pro tip**: Always test your site all the way down to `320px` because that's the smallest device width you'll probably have to account for (e.g. iPhone 5).

### Emulating devices

In Firefox dev tools, just click the devices icon at the top right!

## Pseudo-elements

`::before` and `::after` use CSS to create **pseudo-elements** which appear as the first or last children of the element you apply them to.

Example use: smart quotes!

**Accessibility tip**: Because pseudo-elements aren't universally supported by screen readers, **do not insert content** through your pseudo-elements.

Requirements of pseudo-elements:
* It **must** have a `content` property. You can leave it empty though like `content: "";`.
* Self-closing elements (e.g. `img`) can't have pseudo-elements because they can't be parents.
* Always use `::` in your syntax. This is the official syntax.

**Pro knowledge**:
* Pseudo-elements can't be selected using a CSS selector because they are **rendered** every time on the page. You can't select something that doesn't exist.
* Also, pseudo-elements can't be selected via jQuery or JavaScript because they aren't actually part of the DOM!

## Navigations

Almost all navigations are unordered lists because that makes the most semantic sense.

The steps for building navigations are:

1. Remove default margin and padding.

```css
ul {
  margin: 0;
  padding: 0;
}
```

2. Either use `inline-block` or `float`.

```css
/* This creates whitespace between li */
/* That's because inline-block is WHITESPACE DEPENDENT */
ul li {
  display: inline-block;
}

/* Cleaner way that avoids whitespace dependency */
ul li {
  float: left;
  list-style-type: none;
}
```

3. If you use `float`, make sure to add `clearfix` to `ul`.

4. Now you can start styling you `li` elements!

### Accessibility and navigations

Allowing your users to get to the main content really easily is essential. A great solution to this is called a **skip link**. It's a free-floating link at the front of the page that only appears on `:focus` that takes you to the main content.

```css
.skip-link {
  position: absolute;
  left: -1000px;
  top: 5px;
  z-index: 999;
  background: white;
  color: black;
}

.skip-link:focus {
  left: 0;
}
```

The above code is applied to an `a` tag that links to `href="#main-content"`.

### Mobile navigations

When building a mobile hamburger menu, make sure to put your menu element *inside* your actual `nav`.

```html
<nav>
  <button>MENU Toggle</button>
  <ul>
    <li>Menu Item</li>
  </ul>
</nav>
```

### Dropdown navigations

### Using lists and positioning together

**Pro tip**: When using `position: absolute;` alongside a `position: relative;` parent element, you can make the child element stretch the full width and height of the parent by applying this:

```css
.child-elem {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* top, bottom, left, and right stretch the element! */
}
```

**Another pro tip**: You can apply a pseudo-selector to one element (like `:hover`) but have the CSS rule apply to another element!

```css
img {
  display: none;
}

li:hover img {
  display: block;
}
/* This displays the image when you hover over li */
```

## Forms

Forms are used *everywhere* around the internet. *Anything* that takes information from a user uses forms, even if you don't realize it. For example, even games use forms!

There are 4 major parts to forms:

* `input` accepts information from users; includes `password`, `email`, `text`, `number`, `checkbox`, `range`, `radio` and more!
* `label` labels an input, so users know what it's for
* `fieldset` groups parts of forms together when they're semantically related
* `form` is the container for everything!

### Client-server communication with forms

1. Suppose you submit a login form.
2. Form submissions send information to the website's server.
3. The server determines if this information is correct.
4. If it is correct, the server sends back a message that allows the browser to display the dashboard of the gated website.

The functionality happening on the server (like login validation) is an example of **server-side technology**. The submission form itself in the browser is an example of **client-side technology**.

### Input types

`<input type="text">` is the most basic: it just takes text!

`<input type="email">` takes text but then validates if it conforms to the syntax of `email@domain.com`. If validation fails, it throws an error.


`<input type="password">` is just like a `text` input but hides the text.

`<input type="search">` is like a text input, but it provides an icon to clear the search box.

`<input type="color">` creates a colour picker! [This isn't supported everywhere though](https://caniuse.com/#feat=input-color).

`<input type="submit">` and `<button type="submit"></button>`* create a button that, when clicked, performs the form submission! Additionally, form submission will *reload* the page by default.

**Using `button` is better for when you need extra content like images inside your button!*

`<button type="reset"></button>` will clear all content inside form inputs within the associated form.

`<input type="file">` allows a user to select a file from their computer. Additionally, you can pass `multiple="true"`!

`<input type="range">` creates a slider for select a range of numerical values.

`<input type="hidden">` adds content in the form that is hidden from the user. This is most often used to store **metadata** on the page.


**Pro tip**: [WebAIM](https://webaim.org/) is an amazing resource for accessibility.

### Input attributes

`name` is an attribute that all inputs should have. `name` is used to say what the input is for, which is useful for the user. `name` is also shared by multiple inputs when they're grouped together, which helps the server work through information.

**Pro tip**: Always use `fieldset` to group inputs *and* give them a common `name`.

`placeholder` places default text that clears when the user starts typing into the input. A `placeholder` is *not* read by screen readers.

`maxlength` sets a limit on number of characters an input can take.

`required` stops the form from being submitted *unless* the input has been filled in.

`disabled` makes the form element visible on the page, but they can't input anything, and it's not submitted in the form.

### The label element

It is **strongly** recommended to use `label` for all inputs!

The syntax to connect a `label` with an `input` requires you to have the same value for `for` and `id`:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

**Note**: By adding a `for` attribute for a `radio` input, an awesome benefit is that you can click the label to select the radio.

**Pro tip**: Never replace `placeholder` with `label` because this doesn't work for accessibility. Also, it makes for a bad experience because users won't know what the input is for when it's been filled in.

If you *must* remove a label from the page, you can create a `visuallyHidden` class and apply it to the label class. This will hide it but make it accessible to screen readers.

### A word about attributes

This looks repetitive, but it's not:

```html
<label for="address">Address</label>
<input type="text" name="address" class="address" id="address">
```

`name` is for the server. `class` is styling. `for` and `id` are for creating the association.

### The fieldset element

The `fieldset` element semantically groups inputs.

Additionally, it gives you the ability to access a `legend` element, which is like a label but for *all* of the inputs together.

```html
<fieldset>
  <legend>Tell us about you!</legend>
  <input>
  <input>
</fieldset>
```

### More input types

`<input type="radio">` allows you to select just one thing from a list of options. The only way it works is if you give the same `name` value for every `radio` input.

**Pro tip**: You can create a default select by adding the `checked` attribute to one of the radio options.

`<input type="checkbox">` works the same as `radio` but allows you to select multiple options. 

`<textarea>` is an `input` tag that allows for multiple lines.

`<select><option></select>` is a dropdown list. What gets sent to the server is set in `option` as an attribute called `value`.

### The form element

The `form` tags has a bunch of attributes that specify information and actions for the form.

```html
<form action="sendEmail.php" method="POST" class="applicationForm" autocomplete="off" name="applicationForm">
  <!-- inputs go here -->
</form>
```

`action` takes a URL that goes to a server-side file that will handle the information sent to it.

`method` is usually `POST` or `GET` and defines what kind of HTTP request is made.

`autocomplete` toggles whether the form allows autocompletion. `autocorrect` and `autocapitalize` are great to toggle off for mobile!

`name` creates a reference for the form just like any other use of `name`.

### Writing CSS for forms

We can target inputs in CSS using the **attribute selector**.

```css
/* You could use class... */
input.email { color: red; }

/* But this is better */
input[type="email"] { color: red; }
```

### Styling select elements

When you want to override default styling for `select` elements, you'll need to apply this browser-prefixed CSS.

```css
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
```

**Note**: This will remove *everything*, so make sure to reapply them (including `:active` and `:focus`).

## Flexbox

Flexbox is an elegant alternative to `float`. The good news is it is widely supported across browsers. However, you will have to add **vendor prefixes** to account for older version of Chrome, Safari, and Firefox.

To implement flexbox, just add the following to the parent container of the elements you want to affect:

```css
.parent {
  display: flex;
  flex-direction: row;
  /* or column, row-reverse, column-reverse */
  justify-content: flex-end;
  /* affects main axis, the same direction as flex-direction */
  align-items: flex-end;
  /* affects cross axis, the other axis relative to flex-direction */
}
```

Possible values for `justify` and `align` include:
* `flex-start`
* `flex-end`
* `center`
* `space-between` - first and last child are at the edges of parent container with equal space between them
* `space-around` - there's full units of space between children and a half unit around the first and last child
* `space-evenly` - there's equal units of space between and around children

### Adjusting whitespace

When sibling elements in a flexbox container have a total width higher than the viewport width, flexbox automatically shrinks the width of each element in order to fit them on the same line. **Flexbox doesn't push elements to a new line**.

To add new lines, you need to include `flex-wrap: wrap;` in your parent container.

Additionally, when you have `flex-wrap: wrap;` and thus there are multiple lines of content due to wrapping, you can use `align-content` to define whitespace between those **lines**. (This is different from `align-items`, which defines whitespace for elements within a line.)

By default `align-content` is set to `stretch`, which stretches each line to fill the container.

### Order

All flex element have a default `order: 0;`, which means they all appear in the order they were written. To push something to the front, you just need to make order *lower than 0*. If you want to push something to the back, you need to make order *higher than 0*.

**Pro tip**: `order` doesn't change how screen readers read things!

### Flex fluidity

`flex-grow` defines how to stretch child elements when their total size is **less** than the parent container, and so there's extra room. It defines how to divvy up that extra space to the child elements.

`flex-shrink` defines how to shrink child elements when their total size is **greater** than the parent container. It defines how much to shrink the size of child elements, so they can fit.

Finally, `flex-basis` defines the starting size *before* `flex-grow` and `flex-shrink` apply. By default, it's set to `auto`, which keeps the child element at its current behaviour.

**Pro tip**: `flex-basis` overwrites `width` and `height`, but `max-width` and `max-height` overwrite `flex-basis`.

The way that you calculate `flex-grow` and `flex-shrink` is with the following formula:

`size in question / total flex allotted * flex allotted to child = size change amount for child`

```html
<p>Item 1</p>
<p>Item 2</p>
<p>Item 3</p>
```

```css
p {
  flex-grow: 1;
}
p:last-child {
  flex-grow: 2;
}
```

In the example above, for all space remaining, the last `p` element will get 2/4 of the space, and the other two `p` elements will get 1/4.

## Advanced CSS Selectors

The **adjacent selector** `div + p` selects the `p` tags that appear directly after an `div` tag as a sibling.

The **direct child selector** `div > p` selects the `p` tags that are a **direct** child of `div` tags.

The **following selector** `div ~ p` selects every `p` tag that appears after `div`. (This could be multiple unlike adjacent selectors.)

### Attribute selectors

The **exact match attribute selector** `a[href="/about.html"]` will only select the `a` tags where `href` is exactly `/about.html`.

The **contains attribute selector** `a[href*="about"]` selects `a` tags where `href` contains the text `about` somewhere.

The **starts with attribute selector** `a[href^="about"]` selects `a` tags where `href` starts with the text `about`.

The **ends with attribute selector** `a[href$="about"]` does the same thing but searches the end of `href` for `about`.

### More pseudo-selectors

`input[type="checkbox"]:checked` will only apply the CSS rule when a checkbox is checked.

`::first-letter` styles the first letter of the content of the element(s) targeted.

`::first-line` styles the first line. It will always be the first line, regardless of screen size.

## CSS Preprocessors

**CSS preprocessors** just basically add more syntax and functionality to make CSS more maintainable, readable, and powerful.

**Note**: Browsers can't read CSS preprocessor syntax. It has to be **compiled** into CSS first.

### SCSS variables

You can store values in easy-to-remember variable names. Common practice is to place it at the top of your `.scss` file.

```scss
$primaryColor: orange;
body { background: $primaryColor; }
```

**Pro tip**: This is the most useful when you reuse a value a lot.

### Nested SCSS

Sass allows us to mimic the nested structure of HTML elements.

So this:

```scss
$primary : #B3EB95;

ul.nav {
  background:red;
  width:100%;
    li {
    border-right:1px solid $primary;
      a {
        background:$primary;
        padding:10px;
        
        &:hover {
          background: yellow;
        }
    }
  }
}
```

...compiles to this:

```css
ul.nav {
  background: red;
  width: 100%;
}
ul.nav li {
  border-right: 1px solid #B3EB95;
}
ul.nav li a {
  background: #B3EB95;
  padding: 10px;
}
ul.nav li a:hover {
  background: yellow;
}
```

**Pro tip**: You will create a headache for yourself if you nest more than **3 levels deep** because it will create such deep specificity that it may be difficult to override. This is known as the [sass inception rule](http://thesassway.com/beginner/the-inception-rule).

### SCSS partials

**Partials** are small `.scss` files that help you **modularize** your code. Good candidates for partials are styles that are different from the rest of your site design. Other good candidates are styles that serve a specific purpose like a `setup` or `@media` queries.

To create a partial, follow these actions:
1. Prepend your filename with `_` like `_nav.scss`.
2. `@import "nav";` in your catch-all `styles.scss` file.

### SCSS functions

**Functions** allow you to perform some of the hard work for you. Here's a ton of [functions in the documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html).

An example is `lighten()`.

```scss
$primaryColor: red;
a:hover {
  color: lighten($primaryColor, 10)
  // 10% lighter than $primaryColor
}
```

### SCSS mixins

**Mixins** are snippets of code with parameters that allow us to customize the snippet.

The process for using a mixin is the following:

1. Define your `@mixin` with parameter(s)
2. `@include` mixin with argument(s) provided.

```scss
@mixin fontSize($sizeValue) {
  font-size: $sizeValue;
  color: blue;
}

h1 {
  @include fontSize(100px);
}
```

**Pro tip**: You can create **inline media queries** using mixins!

```scss
@mixin mq-tablet {
  @media (min-width: 768px) {
    @content;
    // This tells sass to allow you to write whatever you want during your @include
  }
}
body {
  background: blue;
  @include mq-tablet {
    background: red;
    // Inline media query!
  }
}
```

**Another pro tip**: Sass gives you the ability to use **arithmetic**!!

### Paths in SCSS

Remember that when sass compiles, any paths you create in a `.scss` file are relative to the **final compiled file**

```
- projectOne
    index.html
    - styles 
        style.css
        - partials
            header.scss
    - images
        logo.png
        background-image.jpg
```

```scss
header {
  background-image:url(../images/background-image.jpg)
}
```

For example, the path is relative to the compiled `style.css` file, so you have to go back one directory using `../` to get to the `images` directory.

## Image Formats and SVG

The goal with images on websites is always have the best quality with the smallest file size.

There are 2 types of compression:
* **Lossless** - image is made smaller without loss of quality
* **Lossy** - image is made smaller *with* loss of quality

### GIF

GIFs use lossless compression. However, they only allow a maximum of 256 colours, so avoid using images with a lot of colour variation.

**Note**: GIFs can be transparent.

### JPEG

JPEG (or JPG) uses lossy compression. It supports a rich range of colours, so it's optimal for **photographic images**. Lossy compression makes it unfavourable for flat colours and line drawings.

**Note**: JPEGs tend to be large file sizes.

**Pro tip**: You'll mostly use JPEG for background images.

### PNG

**PNG-8** means 8 bits per pixel. It supports 256 colours and transparency. **PNG-24** means 24 bits per pixel. It supports way more colours and transparency.

**Pro tip**: PNGs are best used for images with simple colours and which require transparency.

### Bitmap vs. vector

**Bitmap** format means images of composed of little squares of colour, i.e., pixels. When zoomed in, lines that look smooth from afar are actually jagged.

**Vector** format create true smooth lines.

### SVG

**SVG** is a format written in XML and are considered vectors. They are basically images composed of circles, rectangles, and paths in XML.

**Note**: SVG is not supported in IE8 and below.

**Pro tip**: SVG is best used for 2D shapes and icons.

One huge benefit of SVGs is that you can put it inline your HTML. This is good because:
* You can apply CSS styles and JavaScript to it!
* The image loads faster because other images that use `src` require an HTTP request to fetch the image.

The syntax for inline SVG is:

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
</svg>
```

Inside your `svg` tag, you can place basic shape elements like `<rect>`, `<circle>`, `<ellipse>`. `<path>` allows you to create advanced shapes.

### Picture element

The `picture` element allows you to define multiple image sources for multiple breakpoints. This is powerful because it optimizes page load for a variety of devices.

The syntax is like this:

```html
<picture>
    <source srcset="imgs/large.png" media="(min-width: 980px)">
    <source srcset="imgs/medium.png" media="(min-width: 600px)">
    <img src="imgs/small.png" alt="A small picture of a thing">
</picture>
```

The `img` tag is provided as a fallback in case:
* None of the `media` conditions are met
* `picture` tag isn't supported by the browser

### Image optimization

Summary of tips for image optimization:
* Max out image size at **400KB** if possible.
* When using Photoshop, use "Save for web" option.
* Resize images to the dimensions you want *before* using them.
* Use the appropriate file type based on the content of the image.

## Transforms, Transitions, and Animations

### Transitions

The `transition` CSS property gives you the power to tell the browser to transition another CSS property change (e.g. during `:hover`) for a set time.

Syntax:

```css
div {
  background: red;
  border: 1px solid green;

  transition: background 2s, border 5s;
}
div:hover {
  background: blue;
  border: 10px solid purple;
}
```

**Note**: You can use the `all` keyword in `transition` to apply transition to *every* property in the element.

`transition-timing-function` allows you to define the pacing of the transition. Name values include `linear` (default), `ease`, `ease-in`.

**Pro tip**: To create custom easing, you can use the `cubic-bezier()` function. [This is a great tool to learn how cubic bezier works](http://cubic-bezier.com/).

### Transforms

`transform` allows you to manipulate an element on two and three dimensions.

It can accept the `rotate()` value, which takes any number from `0deg` to `360deg` where the values are defined clockwise.

It can also accept `rotateX()` and `rotateY()`, which basically flips it along the X and Y axis respectively.

It can also accept `scale()`, which takes a multiplier that increases or decreases the size of the element *without* affecting document flow. `scaleX()` and `scaleY()` are self-explanatory!

**Pro tip**: You can apply multiple functions like `transform: rotate() scaleX() scaleY();`.

### Animations

**Animations** allow you to define `@keyframes`, which contain percentages between `0%` and `100%`, the start and finish of the animation. These `@keyframes` allow you to specify a series of behaviours in the lifespan of the animation.

```css
@keyframes snow {
  0% {
    top: 0;
  }

  20%,
  40%,
  60%,
  80% {
    margin-left: 100px;
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    margin-left: 10px;
  }

  100% {
    top: 100%;
  }
}

.snowflake {
  animation: snow 3s linear infinite;
}
```

Here's a ton of `animation-*` CSS properties:

```css
.snowflake {
  animation-name: snow; /* for @keyframes */
  animation-duration: 20s; /* time from 0% to 100% */
  animation-timing-function: linear; /* Cubic bezier of animation */
  animation-delay: 1s; /* How long until animation starts upon page load */
  animation-iteration-count: 2; /* Number of loops of animation */
  animation-direction: alternate; /* From 0 to 100% or 100% to 0% */
  animation-fill-mode: both; /* Where animation ends up at end or beginning of animation */
}
```

## Grid Systems

Grid systems are another layout system in CSS. Great analogies of grids are **brick walls** and **newspapers**.

### Terminology

* **Fixed** is the width of each column.
* **Fluid** is the relative width of each column, allowing more flexibility and responsiveness.
* **Column** is the vertical section. Most grid systems use 12 columns.
* **Row** is the horizontal section. It's made up a complete set of columns.
* **Gutter** is the distance between each column.
* **Presentational** means you tack on a class name in the HTML, while **non-presentational** is all done in the CSS.

## CSS Grid

CSS `grid` gives us the power to create our own grids! To use grid, simply add `display: grid;` to the parent container you want to make into a grid. It will unlock special grid properties that apply to the parent's child elements.


### Basic grid properties

```css
.container {
  display: grid;

  /* Creates columns of varying widths */
  grid-template-columns: 25% 50% 25%;
  /* Creates rows of varying heights */
  grid-template-rows: 150px 300px;

  /* Creates gaps between rows and columns */
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  /* Shorthand is grid-gap: [row] [column]; */
}
```

### fr unit

The `fr` unit works kind of like `flex-basis` in that it divvies up the remaining free space in the grid container *after* subtracting for fixed sizes.

```css
.container {
  display: grid;

  /* This causes an overflow because it's greater than 100% width */
  grid-gap: 100px;
  grid-template-columns: 50% 50%;

  /* After accounting for 100px grid gap, */
  /* the remaining space is divvied up equally between elements */
  grid-template-columns: 1fr 1fr;
}
```

### Auto grid

When elements flow beyond the row and column sizes you've defined, it follows the **implicit grid**. In other words, it flows onto the next line, but the size is the size of the element contents.

To re-define the default behaviour of overflowed elements, you can use these properties:

```css
.container {
  display: grid;

  /* Grid flows from row to row */
  grid-auto-flow: row;
  /* Defines heights of elements in overflow */
  grid-auto-rows: 100px;

  /* Grid flows from column to column */
  grid-auto-flow: column;
  /* Defines width of elements in overflow */
  grid-auto-columns: 200px;
}
```

### Grid dev tools

See GitHub Notes. Key concept here is the idea of **grid line numbers**.

### Grid item placement

Using **grid line numbers**, we can tell a specific child element where to start and end in the grid.

```css
.gridItem2 {
  grid-column-start: 2; /* Starts at line 2 */
  grid-column-end: 4; /* Ends at line 4 */
  grid-row-start: 5; /* Starts at line 5 */
  grid-row-end: 8; /* Ends at line 6 */

  /* End result: */
  /* .gridItem2 takes up 2 columns and 3 rows */
  /* and starts at point 2, 5 */
}
```

**Pro tips**:
* Shorthands are `grid-row: [start] / [end];` and `grid-column: [start] / [end];`.
* `span [number]` allows you to say how much space the element takes up within explicitly defining end point.
* `-1` line number represents the last line number, which is useful for more dynamic calculations.

### The repeat keyword

When defining the number of columns and rows, you can use the `repeat(numTimes, size);` function instead of writing it out manually.

Here are special values you can place inside your `repeat()` function in place of `numTimes`:
* `auto-fill` continually adds tracks when the viewport is wider than the content, which is super useful when you want to explicitly push an element to the end like `grid-column-end: -1;`.
* `auto-fit` collapses those extra tracks, making the last element of the column/row appear at the end. No whitespace.

### The minmax keyword

This defines size of columns and rows kind of like `min-width` and `max-width`, setting a range of possible values allowed.

### Combining keywords together for flexible grid

`repeat(auto-fit, minmax(400px, 1fr));` is super powerful in that it makes each child element have an equal width and dynamically shape themselves based on viewport (with a minimum width).