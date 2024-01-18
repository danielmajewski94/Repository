document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

var mediaQuery = window.matchMedia("(max-width: 450px)");

function handleMediaChange() {

    //const Portraitimage = document.getElementById('Portraitimage');
    const Mail = document.getElementById('Mail');
    const Adresse = document.getElementById('Adresse');

    if (mediaQuery.matches) {
        //Portraitimage.style.display = "none";
        Mail.style.display = "none";
        Adresse.style.display = "none";
    } else {
        //Portraitimage.style.display = "inline";
        Mail.style.display = "inline";
        Adresse.style.display = "inline";
    }
}

mediaQuery.addListener(handleMediaChange);

function ChangeFrame(Datei) {
    document.getElementById('ContentFrame').src = Datei;
}

/*
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', function () {
            var Modal_Textinhalt = document.getElementById('Modal_Textinhalt');
            Modal_Textinhalt.innerHTML = "<h1>Hallo</h1>";
            openModal();
        });
    }
});*/