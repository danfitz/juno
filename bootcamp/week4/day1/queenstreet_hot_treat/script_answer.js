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

	function randomItem(optionsArray) {
		const index = Math.floor(Math.random() * optionsArray.length);
		return optionsArray[index];
	}

	$('form').on('submit', function(e) {
		e.preventDefault();
		const type = $('input[name=beverage]:checked').val();
		const price = $('input[name=price]:checked').val();

		const choice = drinks[type];
		const options = [];

		for(let i = 0; i < choice.length; i++) {
			const store = choice[i];

			if(store.price === price) {
				options.push(store);
			}
		}
		console.log(options);

		const optionToDisplay = randomItem(options);

		$('.results').html(`<h2 class="choice">${optionToDisplay.title}</h2>`);
	});
});