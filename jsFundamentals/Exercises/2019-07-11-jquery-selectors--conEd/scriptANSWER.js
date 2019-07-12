$(document).ready(function() {
    // Using jQuery
    /*
        1. Select the elements in the comments and save it in a variable
        2. Log each jQuery object to the console
    */

    // EXAMPLE:
    // the body
    const $body = $("body");
    console.log("body: ", $body);

    // all paragraphs
    const $paragraphs = $("p");
    console.log("paragraphs: ", $paragraphs);

    // log how many paragraphs there are on the page (using a property on the object selected in all paragraphs)
    console.log("amount of paragraphs on page: ", $paragraphs.length);

    // all the links in the nav
    const $linksInNav = $("nav a");
    console.log("links in nav: ", $linksInNav);

    // all 6 features in the features section (the lis)
    const $features = $(".features ul li");
    console.log("features: ", $features);

    // the last feature in the features section (using pseudo class selector)
    const $lastFeature = $(".features ul li:last-child");
    console.log("last feature: ", $lastFeature);

    // the feature section and the contact section (using 1 selector)
    const $featureContact = $('.features, .contact');
    console.log("feature and contact sections: ", $featureContact);

    // the email input (using attribute selector)
    const $email = $('input[type="email"]');
    console.log("email input: ", $email);

    // the checked radio input (using attribute selector pseudo class selector)
    const $checkedInput = $('input[name="colour"]:checked');
    console.log("checked radio input: ", $checkedInput);

    // the submit input (using attribute selector)
    const $submitInput = $('input[type="submit"]');
    console.log("submit input: ", $submitInput);
}); // end of document ready
