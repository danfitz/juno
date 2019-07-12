// document ready
$(document).ready(function() {
    
    // stores input box for adding todos
    $todoItem = $("#item");
    
    // event listener that adds todo to list when submitted
    $("form").on("submit", (event) => {
        
        event.preventDefault();

        // get value inside input box
        const $todoText = $todoItem.val();
        
        // if input box is empty, don't do anything
        if ($todoText === "") {
            return;
        }

        // otherwise, add an li element containing the input box value
        $("ul").append(`
            <li>
                <span class="check todo"></span>
                ${$todoText}
                <span class="delete">X</span>
            </li>
        `);
        
        // clear input box
        $todoItem.val("");

        // adds sortability to list items
        $("ul").sortable();
    });

    // event listener that toggles todo list item between completed and incomplete
    $("ul").on("click", "li", function() {
        // grab span element inside li
        let $checkBox = $(this).find(".check");
        // toggles classes that style completed vs. incomplete
        $checkBox.toggleClass("todo done");
        $(this).toggleClass("completed");
    });

    $("ul").on("click", ".delete", function() {
        $(this).parent().remove();
    })
});