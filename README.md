# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of completed project](./design/Screenshot%20Completed%20Frontend%20Mentor%20FAQ%20accordion.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Ankia-Fuls/fem-faq-accordion)
- Live Site URL: [GitHub Pages](https://ankia-fuls.github.io/fem-faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS Styling
- Javascript

### What I learned

I learned how to create an accordion and which aria attributes are useful to set for accessibility, as well as what layout and html is good for accessibility.

I looked at a website showing the code of how to create an accessible accordion and each section ended up with the following HTML and was controlled with the JS code shown below.

```html
<h2>
  <button class="accordion__header" id="accordion-header-1" aria-expanded="false"
    aria-controls="accordion-panel-1" onclick="toggle(this)">
    <span class="button__text">What is Frontend Mentor, and how will it help me?</span>
    <img class="button__image" src="./assets/images/icon-plus.svg" alt="A purple plus icon" aria-hidden="true" />
  </button>
</h2>
<section class="accordion__panel" id="accordion-panel-1" aria-labelledby="accordion-header-1" aria-hidden="true">
  Frontend Mentor offers realistic coding challenges to help developers improve their
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
  all levels and ideal for portfolio building.
</section>
```

```js
const toggle = (header) => {
    var panel = header.parentElement.nextElementSibling;
    var image = header.getElementsByTagName("img");

    header.classList.toggle("active");

    if (header.getAttribute("aria-expanded") === "true") {
        header.setAttribute('aria-expanded', "false");
        panel.setAttribute('aria-hidden', "true");
        image[0].src = "./assets/images/icon-plus.svg";
        image[0].alt = "A purple plus icon";
    }
    else {
        header.setAttribute('aria-expanded', "true");
        panel.setAttribute('aria-hidden', "false");

        image[0].src = "./assets/images/icon-minus.svg";
        image[0].alt = "A dark purple minus icon";
    }
}
```

This code was what added the toggle display functionality and changed the icons between plus and minus as the section was expanded.

### Continued development

I would like to keep practicing these types of projects to make sure I am familiar with them. I would also like to redo this project using the React Framework since I have an idea of how it should work and it would be good practice. I would also like to play around with coding it so that only one section can be shown at a time, and toggling one closes the other that was open since one of the sites I used to learn how to create an accordion noted that feature as key to how an accordion should function.

### Useful resources

- [W3Schools Accordion Code](https://www.w3schools.com/howto/howto_js_accordion.asp) - This was one of the sites I consulted on how to create an accordion.
- [Accessible Accordion](https://www.aditus.io/patterns/accordion/) - This showed me what types of choices I needed to make for accessibility.
- [Change Image Src using JS](https://stackoverflow.com/questions/32142290/how-to-change-image-src-in-a-div-with-javascript) - This showed me how to change the src of an image using JS to change the plus and minus icons.
- [Target Specific Child in Element](https://stackoverflow.com/questions/24596091/javascript-targeting-child-elements-in-a-id) - This showed me how to use the getElementsByTagName DOM function to target the image within my button.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)