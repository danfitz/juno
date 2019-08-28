const spellsApp = {}

spellsApp.apiKey = '$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy'
spellsApp.apiUrl = 'https://www.potterapi.com/v1/spells?key='+spellsApp.apiKey 

spellsApp.getSpells = function() {
	$.ajax({
		url: spellsApp.apiUrl,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(res) {
		spellsApp.showSpells(res);
	});
}

spellsApp.showSpells = function(data) {
	for (let i = 0; i < data.length; i++){
		$('.spellbook')
			.append('<h2>' + data[i].spell + ' <span>('+ data[i].type+')</span ></h2>')
			.append('<p>'+ data[i].effect+'</p>');
	}
}

$(document).ready(function() {
	spellsApp.getSpells()
});

