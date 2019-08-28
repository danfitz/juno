---
categories: [frontend]
tags: [html]
title: "Bootcamp Module 1: HTML"
source: [juno]
---

## Intro to the Internet

### What is the internet?

The internet is a **physical infrastructure** consisting of:
* Wires (e.g. electricity),
* Cables (e.g. fiber optic), or
* Radio transmitters (e.g. Wi-Fi)

On the internet, each device has an **internet protocol**  (IP) address. This is similar to a telephone number or street address. When visiting a website, you're essentially asking for information from an IP address and asking it to send that information back to your IP address.

However, IP addresses are hard to remember, so browsers use the **domain name system** (DNS), which matches **uniform resource locations** (URLs) with IP addresses.

### What is the world wide web?

WWW is basically one of several ways to share information on the internet. (Other methods include email and file transfer protocol or FTP).

### What is a website?

A website is just a folder with a collection of files written in HTML, CSS, and JS that is accessible via web browsers.

These files are particularly stored on a **server**. A server is essentially a big computer that never turns off, giving you the power to access your files from anywhere and any time.

### What is a web browser?

A web browser is an application to view and/or render your website's files. However, web browsers aren't standardized. Web browser creators can make their applications any way they want.

As a result, the decisions made about these web browsers drives *how* developers create websites. For example, if we need to build a site using a browser that doesn't support flexbox, then we can't use flexbox!

## Marking Up Content with HTML Elements

### Web page structure

Think of HTML as the **structure** of a website. It's the frame that holds up the building.

Base HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>

  </body>
</html>
```

### Nesting

When you're nesting tags within each other, the golden rule here is to **always close tags in the reverse order that you opened them**.

### HTML comments

Comments are great for:
* Removing code without actually deleting it
* Marking what closing tags belong to (useful for long HTML files)
* Marking where content starts and ends

### Heading tags

Heading tags should be thought of as similar to a research paper: it should be organized **hierarchically**. Your top heading is your title, and you have subheadings and sub-subheadings and even sub-sub-subheadings.

```html
<h1>Animals</h1>
<h2>Mammals</h2>
<h3>Mammal diet</h3>
<h2>Reptiles</h2>
<h3>Reptile diet</h3>
```

You should only have one `<h1>` per web page. It tells the browser what is the most important heading.

Here's how we usually use all the heading tags:

```html
<h1>Title of my website</h1>
<h2>Title of a high-level section of my website</h2>
<h3>Title of a less important section of my website</h3>
<h4>Title of a section in the sidebar</h4>
<h5>Title of a section in the footer</h5>
<h6>Title of a secondary section in the footer</h6>
```

### Paragraph tags

`<p>` tags create a full line break between text for use on full-length paragraphs.

### Strong and em tags

You use `<strong>` and `<em>` tags when you want the browser to know that some bit of text is important.

### Span tags

`<span>` tags are **inline elements**, so you can insert them in the middle of block elements (e.g. `<p>` tags).

These are powerful when you want to target something *within* your block element.

Example:
```html
<p>My favourite color is <span class="contains-red">red</span></p>
```

### Div tags

`<div>` tags stand for **division** elements. They define an **area** of content. This is useful when you want to **group** content together, so they can be styled together.

### Image tags

The `<img>` tag is used to embed images on your web page.

There are 2 attributes you **must** add to your `<img>` tag:
* `src` defines where the image is located
* `alt` describes what the image is about for people and robots who can't see images

For `src`, you can have **absolute** or **relative** image paths:
* **Relative** paths start at the position of the current file (usually index.html) and moves through folders and subfolders to find the image
* **Absolute** paths point to the exact location of the image

For `alt`, it's so much better for users to provide good descriptions, so people who can't see the image don't lose the context and semantic value added by the images.

If, on the other hand, your image doesn't add semantic value, simply add `alt=""`, which tells screen readers to skip describing the image. If you don't do this, screen readers will read your `src` attribute, which is bad!

Finally, here's some last pro tips for the `<img>` tag:
* The `title` attribute adds a tooltip to your image on hover. Best practice is to use this *with* `alt` to increase visibility.
* Avoid putting your text inside your images. Instead, create images and text separately and bring them together via styling.
* Cool tools for image placeholders:
    * http://placekitten.com/
    * https:/lorempixel.com/
    * https://picsum.photos/
    * https://www.fillmurray.com/
    * https://baconmockup.com/

### List tags

`<ol>` or **ordered** lists number your lists, and `<ul>` or **unordered** lists are just bullet points.

They both only allow `<li>` tags inside them as children.

The CSS properties we care about for lists are:
* `list-style-type`: type of bullet point to use
* `list-style-position`: defines whether bullet point is inline with text or stands outside of it
* `list-style-image`: allows you to use a custom image for bullet points

**Pro tip**: List tags come with a lot of default styling, so if you want to start from scratch use this:

```css
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

### Anchor tags

`<a>` tags create links pointing to other web pages (either inside or outside your site).

**Accessibility tip**: Don't use anchor tags around generic text like "click here". Make your link text descriptive.

### Table tags

Only use table tags for **tables**. Don't use them for layouts! (Tables used to be how everyone laid out their web pages.)

### Attributes

Here's some generic attributes that all elements can have:

* `class` attributes can be applied to multiple elements. In CSS, you then can target all elements of that class and blanket style them.
* `id` attributes are unique IDs that only 1 element can have per page. Used to identify a unique element. Great for targeting in CSS too.

**Pro tip**: DO NOT use styling attributes like `style` or `height` or `color`. You're going to make your code harder to maintain. These stylings should instead live in your CSS.

### Linking to ids

Sometimes you want to provide jump links to specific locations on a page. Just do the following:

1. Add `id` attribute to element you want to jump to.
2. Use `<a href="#id"></a>` for anchor link.

### Semantic Elements

`<header>` tag is at the top of your page. It often contains the title `<h1>` and a tagline/subtitle.

`<footer>` is at the bottom of your page. It often contains information about the page like copyright information, who developed the site, and sometimes links to related files/documents.

`<main>` is used for the main content in your page, oten sandwiched between `<header>` and `<footer>`.

`<nav>` defines a section that links to other parts of your website. **You can have more than one nav on your web page**.

`<section>` defines a distinct group of content. Rule of thumb: if it shows up in your table of contents, the content group can likely be placed inside a `<section>`. (If it's not its own section, a generic `<div>` is good enough.)

`<article>` defines a complete and independent piece of content on your site. Rule of thumb: if you can remove it from your site, and it doesn't break the readability of the rest of your site (i.e. not context-sensitive), then it's likely an `<article>`. Examples: comments, news articles, blog posts.

`<aside>` defines content secondary to the main content. Often used as a **sidebar**.

`<figure>` wraps around content like `<img>`, `<code>`, or `<video>`. Rule of thumb: if your content is self-containing and can be moved around without affecting semantic flow (e.g. gallery of images), then it probably makes sense to use `<figure>`. Optionally, you can add `<figcaption>` inside `<figure>` to add description to your content.

## Video and Audio

### Video

To add a video, simply use:

```html
<video>
    <source src="url" />
    Text that shows up if video element isn't supported
</video>
```

On its own though, this isn't very useful because it looks like a static image. You need to add video attributes!
* `controls` adds controls
* `muted` mutes the sound
* `autoplay` plays the video right away
* `loop` repeats the video

**Pro tip**: It's common to provide fallback video sources in case the browser doesn't recognize the given file format.

```html
<!-- Simply stack sources from highest to lowest priority -->
<source src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/videos/OurLearningLoop.mp4" type="video/mp4">
<source src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/videos/OurLearningLoop.ogg" type="video/ogg">
<source src="http://hackeryou.com/wp-content/themes/hackeryou/assets/images/videos/OurLearningLoop.webm" type="video/webm">
```

### Audio

Everything is basically the same for audio except you use the `<audio>` tag instead.

### Video and audio accessibility

For true accessibility, you want to transcribe your video or audio. To add transcripts to your video or audio, simply do the following:

```html
<video id="video" controls preload="metadata">
   <source src="video/sintel-short.mp4" type="video/mp4">
   <track label="English" kind="captions" srclang="en" src="captions/vtt/sintel-en.vtt" default>
   <track label="Deutsch" kind="subtitles" srclang="de" src="captions/vtt/sintel-de.vtt">
</video>
```

Here's [more information on how to implement subtitles and captions](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).