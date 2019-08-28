const artApp = {};

artApp.baseUrl = "https://www.rijksmuseum.nl/api/en/collection";
artApp.apiKey = "VeM17szh";
artApp.animalChoice = $("option:selected").val();

artApp.displayPieces = function(pieces) {
    $("#artwork").empty();

    pieces.forEach(function(piece) {
        if (piece.hasImage) {
            const pieceHtml = `
                <div class="piece">
                    <h2>${piece.title}</h2>
                    <p class="artist">${piece.principalOrFirstMaker}</p>
                    <img src="${piece.webImage.url}" alt="${piece.longTitle}">
                </div>
            `;
            $("#artwork").append(pieceHtml);
        }
    });
};

artApp.getPieces = function(animalChoice) {
    $.ajax({
        url: artApp.baseUrl,
        method: "GET",
        dataType: "json",
        data: {
            key: artApp.apiKey,
            format: "json",
            q: animalChoice,
            ps: 10
        }
    }).then(function(result) {
        artApp.displayPieces(result.artObjects);
    });
};

artApp.chooseAnimal = function() {
    $("select").on("change", function() {
        const animalChoice = $("option:selected").val(); 
        artApp.getPieces(animalChoice);
    });
}

artApp.init = function() {
    artApp.getPieces($("option:selected").val());
    artApp.chooseAnimal();
};

$(document).ready(function() {
    artApp.init();
});