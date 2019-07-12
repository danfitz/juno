$(document).ready(function() {
    
    let counter = 0;
    let goal;

    const $counter = $(".counter");
    const $goal = $("#goal");
    const $submit = $("input[type='submit']");

    const checkGoal = () => {
        // if goal reached, give alert and reset everything
        if (counter === goal) {
            alert(`You reached your goal of ${goal}!`);
            $goal.val("");
            $goal.prop("disabled", false).removeClass("set");
            $submit.prop("disabled", false).removeClass("submitted");
        }
    };

    // create an event listener on click of add button
    // if counter value now matches input value, issue prompt
    $("#add").on("click", () => {
        counter++;
        $counter.text(counter);
        checkGoal();
    });

    // create an event listener on click of subtract button
    // if counter value now matches input value, issue prompt
    $("#subtract").on("click", () => {
        counter--;
        $counter.text(counter);
        checkGoal();
    });

    // create an event listener on click of set button
    // must get the value of input on click
    // must check if input value matches counter value
    $("form").on("submit", (event) => {
        event.preventDefault();

        goal = parseInt($goal.val());

        // give error if goal is not a number
        if (isNaN(goal)) {
            $("form").effect("shake");
            $goal.val("");
        // if number, disable set prompt
        } else {
            $goal.prop("disabled", true).addClass("set");
            $submit.prop("disabled", true).addClass("submitted");
            checkGoal();
        }        
    });
});