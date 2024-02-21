var aktuelleSeite = "Startseite.html";


// Diese Funktion wird aufgerufen, wenn sich die Bildschirmbreite ändert.
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const Mail = document.getElementById('Mail');
    const Adresse = document.getElementById('Adresse');

    console.log('toggleButton:', toggleButton);
    console.log('menu:', menu);
    console.log('Mail:', Mail);
    console.log('Adresse:', Adresse);

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Erstellt ein Media Query-Objekt für Bildschirmbreiten bis 450px.
    var mediaQuery = window.matchMedia("(max-width: 980px)");

    function handleMediaChange() {
        if (mediaQuery.matches) {
            Mail.style.display = "none";
            Adresse.style.display = "none";
        } else {
            Mail.style.display = "inline";
            Adresse.style.display = "inline";
        }
    }

    // Fügt einen Listener hinzu, um auf Änderungen der Bildschirmbreite zu reagieren.
    mediaQuery.addListener(handleMediaChange);
});

// Diese Funktion ändert die Quelle des ContentFrames auf die übergebene Datei.
function ChangeFrame(Datei) {
    aktuelleSeite = Datei;
    console.log(aktuelleSeite);
    document.getElementById('ContentFrame').src = Datei;
    // Schließe das Menü nach dem Navigieren zu einer neuen Seite.
    document.querySelector('.navbar-menu').classList.remove('show');
}