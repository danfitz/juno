const drinks = {
	coffee: [
		{
			title: 'Early Bird',
			price: '$$'
		},
		{	
			title: 'Dark Horse',
			price: '$'
		},
		{	
			title: 'Le Gourmand',
			price: '$'
		}
	],
	tea: [
		{
			title: 'David\'s Tea',
			price: '$$'
		},
		{
			title: 'Tealish',
			price: '$$'
		},
		{
			title: 'Teavana',
			price: '$'
		}
	]
};
$(function() {

	let time = 60000;
	const intervalId = setInterval(function () {
		if (!time) {
			$("title").html("TIMER COMPLETE");
			clearInterval(intervalId);
		} else {
			$("title").html(`${time / 1000} seconds`);
			time -= 1000;
		}
	}, 1000);
	
		

	$("form").on("submit", function(event) {
		event.preventDefault();
		// Get user input for drink
		const userDrink = $("input[name=beverage]:checked").val();
		// Get user input for price
		const userPrice = $("input[name=price]:checked").val();
		
		
		// Display error message if drink hasn't been selected
		if (!userDrink) {
			$(".drink .errorMessage").remove();
			$(".drink").append(
				`<p class="errorMessage">You didn't select a drink!</p>`
				);
		} else {
			// Removes error message if it's there
			$(".drink .errorMessage").remove();
		}

		// Display error message if price hasn't been selected
		if (!userPrice) {
			$(".price .errorMessage").remove();
			$("#cheap").after(
				`<p class="errorMessage">You didn't select a price!</p>`
				);
		} else {
			// Removes error message if it's there
			$(".price .errorMessage").remove();
		}

		// This code only runs if both inputs were filled out
		if (userDrink && userPrice) {
			// Select appropriate drink in drinks object
			const drinksArray = drinks[userDrink];

			// Select appropriate locations in drink array
			const filteredDrinksArray = drinksArray
				.filter( drink => drink.price === userPrice ) // filters by price
				.map( drink => drink.title ); // converts to just titles

			// Select random drink
			const randomIndex = Math.floor(Math.random() * filteredDrinksArray.length);
			const randomDrink = filteredDrinksArray[randomIndex];

			$(".results").html(`<p class="choice">${randomDrink}</p>`);
		}
		

	})

});

