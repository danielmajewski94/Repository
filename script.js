document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

var mediaQuery = window.matchMedia("(max-width: 450px)");

function handleMediaChange() {

    const Portraitimage = document.getElementById('Portraitimage');
    const Mail = document.getElementById('Mail');
    const Adresse = document.getElementById('Adresse');

    if (mediaQuery.matches) {
        Portraitimage.style.display = "none";
        Mail.style.display = "none";
        Adresse.style.display = "none";
    } else {
        Portraitimage.style.display = "inline";
        Mail.style.display = "inline";
        Adresse.style.display = "inline";
    }
}

mediaQuery.addListener(handleMediaChange);