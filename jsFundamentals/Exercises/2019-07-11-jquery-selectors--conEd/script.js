$(document).ready(function() {
    // Using jQuery
    /*
        1. Select the elements in the comments and save it in a variable
        2. Log each jQuery object to the console
    */

    // EXAMPLE:
    // the body
    const $body = $('body');
    console.log("body: ", $body);

    // all paragraphs
    const $p = $("p");
    console.log("p elements: ", $p);

    // log how many paragraphs there are on the page
    console.log("number of p elements: ", $p.length);

    // all the links in the nav
    const $aInNav = $("nav a");
    console.log("anchors in nav: ", $aInNav);

    // all 6 features in the features section
    const $features = $("#features li");
    console.log("features in features section: ", $features);

    // the last feature in the features section (using pseudo class selector)
    const $lastFeature = $("#features li:last-child");
    console.log("last feature: ", $lastFeature);

    // the feature section and the contact section (using 1 selector)
    const $featureAndContactSection = $("section:not(:first)");
    console.log("feature and contact sections: ", $featureAndContactSection);

    // the email input (using attribute selector)
    const $emailInput = $("input[type='email']");
    console.log("email input: ", $emailInput);

    // the checked radio input (using attribute selector)
    const $radioInput = $("input[type='radio']:checked");
    console.log("radio input: ", $radioInput);

    // the submit input (using attribute selector and pseudo class selector)
    const $submitInput = $("input:not([type='email'])[type='submit']");
    console.log("submit input: ", $submitInput);

}); // end of document ready