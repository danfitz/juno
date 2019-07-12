const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{	
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]	
};

$(document).ready(function() {

	const pickOneFromArray = (arr) => {
		const randIndex = Math.floor(Math.random() * arr.length);
		return arr[randIndex];
	}

	let $size, $price;
	let desiredSize, desiredPrice;

	// on submit, execute this code
	$("form").on("submit", (event) => {
		event.preventDefault();
		
		// clear
		$(".results").empty();

		$size = $("input[name='size']:checked");
		$price = $("input[name='price']:checked");
		desiredSize = $size.val();
		desiredPrice = $price.val();

		// Use radio inputs to select chosen size array in our pizza object
		// FILTER chosen size array to only include pizza options at desired price
		const pizzaOptions = pizza[desiredSize].filter((pizzaOption) => {
			return pizzaOption.price === desiredPrice;
		});

		// Display random choice within options
		const randomChoice = pickOneFromArray(pizzaOptions);
		$(".results").html(`<br><h1>You should go to ${randomChoice.title}</h1>`);
	});
	



	
})