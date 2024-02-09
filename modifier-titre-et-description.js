// Contenu du fichier modifier-titre-et-description.js
$(document).ready(function() {
    // Définir le titre de la page
    document.title = "Placealouer";

    // Définir la balise meta description
    $('meta[name="description"]').attr('content', 'Nouvelle description de la page');
});
