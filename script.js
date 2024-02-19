var aktuelleSeite = "Startseite.html";

// Diese Funktion wird ausgeführt, wenn das DOM vollständig geladen ist.
document.addEventListener('DOMContentLoaded', function () {
    // Sucht das Toggle-Button-Element und das Menü-Element in der Navbar.
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    // Fügt einen Event-Listener hinzu, der das Menü beim Klicken auf den Toggle-Button ein- oder ausblendet.
    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

// Erstellt ein Media Query-Objekt für Bildschirmbreiten bis 450px.
var mediaQuery = window.matchMedia("(max-width: 580px)");

// Diese Funktion wird aufgerufen, wenn sich die Bildschirmbreite ändert.
function handleMediaChange() {
    // Holt sich die DOM-Elemente für das Mail und Adresse Element.
    const Mail = document.getElementById('Mail');
    const Adresse = document.getElementById('Adresse');

    // Überprüft, ob die Bildschirmbreite kleiner als oder gleich 450px ist.
    if (mediaQuery.matches) {
        // Versteckt die Elemente bei kleineren Bildschirmbreiten.
        Mail.style.display = "none";
        Adresse.style.display = "none";
    } else {
        // Zeigt die Elemente bei größeren Bildschirmbreiten an.
        Mail.style.display = "inline";
        Adresse.style.display = "inline";
    }
}

// Fügt einen Listener hinzu, um auf Änderungen der Bildschirmbreite zu reagieren.
mediaQuery.addListener(handleMediaChange);

// Diese Funktion ändert die Quelle des ContentFrames auf die übergebene Datei.
function ChangeFrame(Datei) {
    aktuelleSeite = Datei;
    console.log(aktuelleSeite);
    document.getElementById('ContentFrame').src = Datei;
}
