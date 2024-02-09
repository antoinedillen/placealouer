// Contenu du fichier modifier-titre-et-description.js
$(document).ready(function() {
    // Définir le titre de la page
    document.title = "Placealouer";

    // Définir la balise meta description
    $('meta[name="description"]').attr('content', 'Placealouer est une application de location de place de parking et de garages entre particuliers. Rentabilisez votre place dès maintenant.');
});
