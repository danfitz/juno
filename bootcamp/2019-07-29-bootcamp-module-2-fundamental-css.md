---
categories: [frontend]
tags: [css]
title: "Bootcamp Module 2: Fundamental CSS"
source: [juno]
---

## Intro to CSS

CSS stands for **cascading stylesheets**. It's what gives you the power to define the look, feel, size, colour, and really any visual aspect of your HTML elements.

### CSS rule syntax

Defining styles involves creating a **CSS rule**. The syntax consists of:

```css
h3 {
  color: red;
}
```

* `h3` is the **selector**
* Everything inside the curly braces is the **declaration**
* `color` is a **property**
* `red` is a **value**

### Colors

There's 2 ways you want to start off with for selecting colors.

* **color keywords** like `red` or `blue`
* **hex values** like `#000` for black or `#fff` for white

### External stylesheets

Best practice is to create a separate `styles.css` or `main.css` file and link to it in your HTML `<head>`.

```html
<head>
  <link rel="stylesheet" href="styles/main.css">
</head>
```

## CSS Selectors

Writing good CSS depends on understanding **inheritance**. When you choose a selector, you have to know what's being *included* in your CSS rule.

### Type selectors

**Type selectors** select every element of that name.

```css
p {
  color: red;
}
/* This makes every p tag font red */
```

### Class selectors & ID selectors

**Class selectors** are great when you want to target a group of elements with the same class name, but it's not as simple as targetting every element of the same name.

**ID selectors** can only target 1 element at a time!

**Pro tip**: *Never* use ID selectors. You're just making your life harder because of the 1 element per page limitation of IDs. Just use a class selector instead. It's more flexible.

### Naming your classes

Always aim to modularize your classes by their styling function. For example, you could create a `warning` class for making text red and a `emphasize` class that increases the size of the font by 50%. Then you just include `class="warning emphasize"` together for the same element.

### Descendant selectors

Suppose you want to target your anchor links in your header. You can't just create a CSS rule using the type selector `a`; that will target *all* `<a>` tags.

Instead, you can use a **parent child** or **descendent selector**. In the example above, you would use the `header a` selector to specifically target anchor links *inside* your `<header>` tag.

**Pro tip**: Try to limit your descendant selectors to **3 levels deep**. It will be harder to manage otherwise.

### Targetting multiple classes

Sometimes you want to target only elements that have multiple classes at once. Syntax is:

```css
.class1.class2 {
  color: red;
}
/* This only targets elements with class1 AND class2 */
/* Elements with one class but not the other aren't included */
```

### CSS rules for more than one selector

Use commas `,` between selectors to shorten this

```css
.caramel {
  background: orange;
}
.pumpkin {
  background: orange;
}
.chocolate {
  background: orange;
}
```

to this

```css
.caramel, .pumpkin, .chocolate {
  background: orange;
}
```

### Inheritance

Some styles can be **inherited** by children from their parent (also known as a **cascade**).

```
<section class="content-box">
  <h2>Section Title</h2>
  <p>Some text within the section</p>
</section>

.content-box {
  color: grey;
}
```

The `.content-box` element applies grey to all fonts inside.

**Pro tip**: Inheritance works for almost all **typographical** styles.

### Specificity

How **specific** your selectors are affects which CSS rule wins. Specifically, the more **specific** your selector, the less likely it will be overriden by CSS rules written after.

**Pro tip**: Best practice is to write your selectors **from most general to most specific**. This makes it less likely that your later code doesn't work because you don't have specificity messing everything up.

## Developer Tools

### Inspector

The inspector allows you to see the CSS that gets computed for each HTML element. By selecting an HTML element, it shows you all the CSS rules that have bee applied to it (based on inheritance and specificity).

**Pro tip**: Instead of going back and forth between your editor and browser in order to get your styling perfect, you can do it first in the inspector *and then* update your code once you're happy with the change.

## CSS Colors

There are 6 different formats for color values:
1. Color keyword - black
2. Hexadecimal - #000
3. RGB  - rgb(0,0,0)
4. RGBA - rgba(0,0,0,1)
5. HSL
6. HSLA

Here's a [resource for color keywords](http://colours.neilorangepeel.com/)!

### Hexadecimal

Hexadecimal consists of 3 pairs, each representing red, green, and blue respectively. The values range from 0 to 255 for each color.

### RGB

RGB is literally the same thing except you wrap it in an `rgb()` and explicitly give 3 numbers between 0 and 255.

### Alpha channel

In `rgba()`, `hsla()`, and even 8-digit hex codes, the last number is just defining how see-through or opaque the colour is.

**Note**: 8-digit hex codes aren't supported by all browsers.

**Pro tip**: Alpha channels are more useful than the `opacity` CSS property when you want to specifically target ONE thing. Opacity always applies to the entire element *and* all its children.

## CSS Measurement Units

Measurement units just declare the size of things on your page.

### Pixels

Pixels literally tell the browser how many pixels the element takes up.

Most browsers default to a font size of 16px. However, larger base font sizes are becoming increasingly common because they're easier to read.

**Pro tip**: Pixels are only absolute values *for your screen*. Some more pixel-dense screens will display your elements as smaller!

**Note**: Some of the measurement units below actually just *compile down* to pixels.

### Percentages

Percentages define size *relative to* the parent element.

```css
div {
  width: 1000px;
}
div img {
  width: 25%;
  /* this will be 250px */
}

div {
  font-size: 20px;
}
div p {
  font-size: 50%;
  /* 20px x 0.5 = 10px */
}
```

### Ems

`em` is similar to percentage in that they take their size from the parent element.

However, they run into a problem where they **compound** if you layer them.

```css
html {
  font-size: 10px;
}
body {
  font-size: 1.6em; /*  10px x 1.6 = 16px */
}
body main {
  font-size: 1.6em; /*  16px x 1.6 = 25.6px */
}
```

### Rems

`rem` or **root em** solves the compounding problem by setting size relative to the root element, which is usually `html`.

```css
html {
  font-size: 20px;
}
body {
  font-size: 1rem; /*  20px x 1 = 20px */
}
body main {
  font-size: 1.1rem; /*  20px x 1.1 = 22px */
}
```

### Base fonts

The power of `rem` and `em` is that it makes it easier to add responsiveness. Because all child element sizes are based on your base font, you can just adjust the base font for each breakpoint!

However, it's best practice to not use `px` for your base font because this overrides the user's browser settings. This is bad for accessibility because some users like to zoom in or out.

Instead, use `%` for your base font!

**Pro tip**: Most people use `62.5%` for the base font because since the base font is almost always `16px`, it converts to `10px`, which is super easy for multiplication. You can also use `125%` though because that converts to `20px`.

### Measurement keywords

There are 2 keywords for sizing you will encounter a lot.

`auto` automatically sizes itself based on its surroundings and content.

`inherit` inherits the style from its parent.

## CSS Backgrounds

Backgrounds appear *within* the dimensions of the element and *behind* any content nested within the element.

### Background colour

The `background-color` property fills your element with a colour.

**Pro tip**: Try to keep your text-to-background-colour ratio to 4.5:1 for optimal readability. Here a [great resource for checking contrast ratios](https://contrast-ratio.com/#%23555-on-white).

### Background images

You can use an image as a background using `background-image` and `url()`.

```css
body {
  background-image: url(images/dog2.jpg);
}
```

**Pro tip**: If an image is actual semantic content on the page, use the `img` tag instead. `background-image` is reserved for atmospheric imagery.

### Background image properties

By default, the background image will be set to `repeat` and will appear the size that it is. Here's how customize these settings.

`background-repeat`, by default, is set to `repeat`. You can change it to `no-repeat`, `repeat-x`, and `repeat-y`.

`background-position`, by default, is set to `left top`. These values take in the x and y axes. You can provide keywords like `center`, percentages like `50%`, and pixels like `50px`.


`background-size`, by default, is set to the actual pixel size of the image. sets the size. You can override using pixels like `100px`, `cover` to increase width to fit perfectly into container (may crop), and `contain` to fit image perfectly into element without cropping.

`background-attachment`, by default, is set to `scroll`, which moves as you scroll. Change it to `fixed` to fix it in place as you scroll.

### Background shorthand

`background` takes in multiple properties all at once.

```css
body {
  background: [background-color] [background-image] [background-position] [background-repeat] [background-attachment];
}
```

**Pro tip**: Providing a `background-color` before `background-image` gives you a fallback in case the image doesn't load!

### Background gradients

To add a background gradient, use the `background-image` property and add the `linear-gradient()` or `radial-gradient()` function in the value. (Gradients are considered images, not colours.)

```css
div {
  background: linear-gradient( [angle], [colour], [colour] );
  background: radial-gradient( [colour], [colour] );
}
```

By default, angle in `linear-gradient()` is **top to bottom**. You can use keywords though to define your angle--like `to top right` or `to bottom left`.

**Bonus features**:
* You can provide as many colours as you want in the gradient.
* You can define the position where the colour reaches its fullest point by adding a percentage after the colour.

```css
div {
  background: linear-gradient( to right, blue 20%, red 40%, green, yellow, pink, lime 70%);
}
```

### Multiple backgrounds

`background` can take multiple background images, which are *powerful* for overlays. Just separate by a comma, and CSS will render with the first provided background value on the top.

```css
div {
  background:
    /* You have to use linear-gradient for this */
    /* That's because you can't mix colours and images */
    linear-gradient(rgba(0,255,0,0.1), rgba(0,255,0,0.1)),
    url("path/to/image.png");
}
```

## Pseudo-selectors

### Common pseudo-classes

Each element has several states. We can target these states by appending **pseudo-classes**.

`:hover` adds styles for when user hovers cursor over element.

`:visited` adds styles for links that user has already visited (based on cache).

`:active` adds styles that appear when an element is currently being clicked down on.

`:focus` adds styles for when element is currently in focus.

**Pro tip**: Make sure to include `:focus` and `:active` and not just `:hover` in your CSS because some people exclusively navigate sites using keyboard focus. You need to care about accessibility!

### Advanced pseudo-classes

`:first-child` targets first child element of a specified parent. `:last-child` targets last child element.

```css
section p:first-child {
  color: red;
}
section p:last-child {
  color: blue;
}
```

`:nth-child(x)` targets the xth child element of a specified parent. Using `odd` or `even` selects every other child. And using `xn` (where x is step amount) selects every child at x steps. You can even use arithmetic like `4n-1`!

```css
section p:nth-child(2) {
  color: green; /* Selects 2nd child */
}
section p:nth-child(odd) {
  color: red; /* Selects 1, 3, 5 etc. */
}
section p:nth-child(4n) {
  color: blue; /* Selects 4, 8, 12, etc. */
}
```

`:nth-of-type(x)` does the same thing as `:nth-child(x)` but only counts elements of the type provided.

```css
section p:nth-of-type(1) {
  background-color: red; /* Selects first p element */
}
```

## Web Typography

The default font for most browsers is `serif`. To declare a font, simply use `font-family` property.

The standard font families are:
* serif
* sans-serif
* cursive
* fantasy
* monospace

### Font stacks

You can stack multiple fonts, so that the browser has fonts to fallback on in case one of the fonts breaks.

```css
body {
  font-family: "WoweeWhatACoolFont", "Zapf-Chancery", cursive;
}
```

### Font properties

`font-weight` moves in increments of 100 from 100 to 900. It also accepts keywords `bold`, `bolder`, `lighter`, `normal`, and `inherit`.

`font-style` is mostly used to italicize. It accepts `italic`, `oblique`, `normal`, and `inherit`. Note though that if you don't provide an explicit italic font, it simply skews the text.

`line-height` creates **leading** or space above and below text. This adds readability. Generally, best practice is you want `line-height` to be larger than `font-size`.

```css
/* 3 ways to add line-height */
h1 {
  font-size: 80px;
  line-height: 91px;
}
p {
  font-size: 10px;
  line-height: 120%; /* Computed line height will be 12px */
}
p {
  font-size: 22px;
  line-height: 2; /* Computed line height will be 44px */
}
```

`text-align` moves the text along the x axis of the container. It accepts `left`, `right`, `center`, and `justify`.

`text-transform` affects capitalization. It accepts `lowercase`, `uppercase`, `capitalize`, and `inherit`. Note though that uppercase sometimes gets read as acronyms by screen readers, so use them intelligently.

`text-shadow` takes horizontal offset, vertical offset, blur, and colour. This sets a (optionally blurred) duplicate of your text.

`letter-spacing` allows you to control the amount of space between letters. This can be useful for

## Using Web Fonts

Before web fonts were available, devs were limited to system fonts and would have font stacks 10 levels deep to make sure text showed up on browsers. And when you wanted to use a new font, you'd have to display it as an image.

CDNs like Google Web Fonts and TypeKit came along and made it possible to display any custom fonts you want!

**Pro tip**: If you like a font in a website, you can use the dev tools inspector to find out the value in the `font-family` property.

## CSS Dimensions

### Width and height

`width` and `height` set the dimensions of our element. Without any `width` or `height`, elements are invisible on the web page!

```html
<div class="container1"></div>
```

The `div` above is invisible, unless...

```css
.container1 {
  width: 100px;
  height: 100px;
}
```

By default, block elements have a `width` of `auto`, which just means they stretch to the full width of the page.

You can also use `%` for `width` and `height`. `%` for `width` is always percentage of the browser. So `width: 50%;` is 50% the width of the browser.

However, `%` for `height` acts weird. `height: 50%;` actually means take up 50% of the content *inside* the element.

### Padding and margin

`padding` and `margin` add space between elements, so elements aren't squished together. `padding` adds space **inside** the element, and `margin` adds space **outside** the element.

To target a specific side of an element, just append `-top`, `-right`, `-bottom`, `-left` to `margin` or `padding`.

Or you can use a shorthand:

```css
div {
  margin: [top] [right] [bottom] [left];
  padding: [top] [right] [bottom] [left];
}
```

### Centering elements with margins

Providing the value `auto` in `margin`  for the left and right values will center your element in the browser.

```css
div {
  height: 100px;
  width: 100px;
  margin: 0 auto;
}
```

### Borders

Borders are similar to `padding` and `margin`, but it's part of the edge of the element.

There are 3 properties for border:
* `border-width` accepts measurement units
* `border-color` accepts colours
* `border-style` accepts `solid` or `dashed` or others

Shorthand is `border: [width] [color] [style];`.

### Border-radius

`border-radius` rounds each corner of an element. The way it works is that the browser places an invisible circle at the corner and defines the diameter by the value given. The higher the diameter, the rounder the border.

`border-radius: x;` defines all corners, which is the most common usage. However, you can specify each side like `border-radius: [top] [right] [bottom] [left];`.

Another common use is to make your element, especially images, a perfect circle. Simply use `border-radius: 50%;`.

### Box-sizing

HTML adheres to a **box model**, which is the summation of content, padding, border, and margin.

For example, if the content is `width: 160px;`, `padding: 10px;`, and `margin: 10px;`, the box itself is 160 + 10 + 10 + 10 + 10 = 200px.

This behaviour is, by default, defined as `box-sizing: content-box;`.

If we want our content height and width to represent the final width and height of the element *when factoring in* padding, border, and margin, we have to declare `box-sizing: border-box;`.

`border-box` will figure out a way (or try its best) to resize itself to the width and height you asked for.

To apply `border-box` to your entire site, just use:

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

### Box-shadow

`box-shadow` adds a shadow just like `text-shadow`.

```css
div {
  box-shadow: [h-offset] [v-offset] [blur] [spread] [colour];
}
```

* Blur radius is **optional**. If set to 0, it's very sharp.
* Spread radius is **optional**. It increases the size of the shadow.

## CSS Layouts

Because almost everything in HTML is a block element, by default, everything sits on top of each other. Websites nowadays do *way more* than this.

The earliest solution to this was `float`. It works with almost any browser and is great to have on your toolbelt, even though it's kind of outdated and a bit of a hack as opposed to an intentional solution.

### Float

Originally, `float` was used for text to wrap around an image (as opposed to sitting above or below the image).

By adding `float: left;` or `float: right;` to an element, the width, by default, shrinks to the size of the content. Then the elements below it will try to fill the space it doesn't take up.

However, if 2 elements are greater than the width of the browser, the 2nd element still gets pushed to the bottom, like this...

```css
.div1 {
  background-color:aqua;
  height: 100px;
  width:50%;
  float:left;
}
.div2 {
  background-color: tomato;
  height: 100px;
  width:51%; /* greater than 100%! */
}
```

What makes this issue even harder to maintain is padding, margin, and border because it affects the final width and height.

The solution to this is to convert *all* your elements to `border-box`, so your elements stay within your defined height and width.

**Note**: `border-box` only applies to padding and border. You still have to factor in margin into your final width and height.

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

[Video of how to think about floats](https://www.youtube.com/watch?v=xara4Z1b18I)

### Float hack

1. Convert elements to `border-box`.
2. Make sure the elements you want side by side have enough space to sit next to each other.
3. Add `float` to the elements to get them to sit side by side.
4. Add `.clearfix` to the parent to prevent collapsing.
5. If some sibling elements are acting weird, add `clear: both;`.


### Removing browser default styles

There's a snippet of CSS known as **normalize** that removes all default stylings defined by the browser. For example, `body` always has padding by default!

Best practice is to always include these in your projects.

[normalize.css](http://necolas.github.com/normalize.css/) is a great resource for this.

## Display and Positioning

### Display

The `display` property defines the default sizing behaviour of your element.

You've seen `block` elements already: they take up the full width of the browser (or parent) and the height of the content. Because it's full width, every subsequent element breaks onto a new line.

`inline` elements always take up *exactly* the space of their content, even if you give them `width` or `height`. This means `inline` elements can be nested inside `block` elements.

`inline-block` elements allow you to set a width and height, but they also can live inside block elements. (It's the best of both worlds!)

**Pro tip**: `inline` and `inline-block` elements have inherent whitespace around them. You cannot remove them. You have to turn it into a `block` element and then `float` them on the same row.

### `Display: none` vs. `visibility: hidden`

If you want an element to completely disappear (even for screen readers), use `display: none;`.

This is identical to `visibility: hidden;` *except* `hidden` keeps the empty space. It's like a chameleon blending into a tree: still there but invisible.

### Positioning

Positioning allows you to shift where an element is positioned. It won't be able to replace your layout needs, but here's some great use cases:

* Bump something up and over a few pixels
* Overlap two elements
* Have something burst out of its wrapper
* Place an element in the top right corner of a page, regardless of how wide or tall its containing div is (Like an x to exit a modal box)
* Overlap text on top of an image

## Relative and absolute

`static` is the default value. It just means the element stays in the place it was given. By changing to other `position` values, you unlock the properties `top`, `right`, `left`, and `bottom`, which allow you to shift position *away* from the given property.

`relative` acts just like static, *but* it unlocks the positioning properties. When you move a `relative` element, it is positioned relative to the *initial* position. However, keep in mind that the space it took up remains.

`absolute` completely removes the element from the flow, causing every element below it to move up. When you move an `absolute` element, it is positioned relative to the *closest ancestor with a position other than static*.

### Combining relative and absolute

Because all elements are `static` by default, an `absolute` element will be positioned relative to the viewport by default as well.

This is fine when we're trying to create a fixed element on the page. However, sometimes we want an element to be positioned within its *parent* element (e.g. "NEW!" badge attached to container).

To do this, we give the parent element `position: relative;` because that doesn't affect the element. Then we give the target element `position: absolute;`. Now the element's positioning properties are relative to the parent element, so, for example, `top: 0;` will bring it to the top of the parent.

### Fixed

`fixed` behaves exactly like `absolute` except it doesn't move when you scroll through the page.

### Sticky

Although not supported by all browsers, `sticky` keeps the element in its original position. However, once you scroll down enough, it starts behaving like `fixed`.

### Z-index

Because position allows us to move elements around, sometimes they will **overlap**. `z-index` gives us the ability to define which elements show up on the top and which on the bottom.

By default, all elements have a `z-index: 0;`. Simply give a value above or below that to change the overlap order.

**Pro tip**: Increment you `z-index` increments of 10 because that gives you breathing room when you want to reorder elements. Whereas moving in increments of 1 usually means having to update every `z-index` value when you're trying to reorder.