const spellsApp = {};

spellsApp.url = "https://www.potterapi.com/v1/spells";
spellsApp.apiKey = "$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy";

spellsApp.getSpells = function() {
    let spells;
    
    $.ajax({
        url: spellsApp.url,
        method: "GET",
        dataType: "json",
        data: {
            key: spellsApp.apiKey
        }
    }).then(function(result) {
        spellsApp.spells = result;
        spellsApp.renderSpells(spellsApp.spells);
    });
}

spellsApp.renderSpells = (spellsData) => {
    $(".spellbook").empty();

    spellsData.forEach(function(spell) {
        const spellHtml = `
            <div class="spell">
                <h2>${spell.spell} <span>(${spell.type})</span></h2>
                <p>${spell.effect}</p>
            </div>
        `;

        $(".spellbook").append(spellHtml);
    });
}

spellsApp.filterSpellPrompt = function() {
    $("input[name=spellType]").on("click", function() {
        const spellChoice = $(this).val();

        const filteredSpells = spellsApp.spells.filter(function(spell) {
            return spell.type === spellChoice;
        });

        if (spellChoice !== "All") {
            spellsApp.renderSpells(filteredSpells);
        } else {
            spellsApp.renderSpells(spellsApp.spells);
        }
    });
}

spellsApp.init = function() {
    spellsApp.getSpells();
    spellsApp.filterSpellPrompt();
}


$("document").ready(function() {
    spellsApp.init();
});