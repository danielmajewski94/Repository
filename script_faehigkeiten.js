// Definition einer Liste von Fähigkeiten mit entsprechenden Eigenschaften
var faehigkeiten = [
    { id: 1, name: 'Java', stars: 4, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'ABAP', stars: 1, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'Adobe LiveCycle Designer', stars: 4, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'HTML, CSS und JavaScript', stars: 3, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'Cartago', stars: 5, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'SQL', stars: 3, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'Objektorientierte Programmierung', stars: 3, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'Betriebssysteme', stars: 1, Text: "", Kategorie: "Informatik" },
    { id: 1, name: 'Fotografie', stars: 4, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Adobe Photoshop', stars: 2, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Adobe Lightroom', stars: 4, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Medienproduktion', stars: 1, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Webdesign', stars: 1, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Frontend-Entwicklung', stars: 1, Text: "", Kategorie: "Design" },
    { id: 1, name: 'User Interface Prototyping', stars: 1, Text: "", Kategorie: "Design" },
    { id: 1, name: 'Fotografie', stars: 4, Text: "", Kategorie: "Hobbies" },
    { id: 1, name: 'Bildbearbeitung', stars: 2, Text: "", Kategorie: "Hobbies" },
    { id: 1, name: 'Sport', stars: 1, Text: "", Kategorie: "Hobbies" },
];

// Funktion zum Erstellen von Tabellen basierend auf den Fähigkeiten-Kategorien
function createTable() {

    // Temporäre Listen für jede Kategorie
    var temp_list_Informatik = [];
    var temp_list_Design = [];
    var temp_list_Hobbies = [];

    // Tabelle für die Kategorie "Informatik" erstellen
    var Table_Informatik = '<table id="Table_Informatik">';
    Table_Informatik += '<tbody>';
    var rückgabewerte = TabelleninhaltFuellen(Table_Informatik, temp_list_Informatik, 'Informatik');
    Table_Informatik += rückgabewerte[0];
    temp_list_Informatik = rückgabewerte[1];
    Table_Informatik += '</tbody></table>';

    // Tabelle für die Kategorie "Design" erstellen
    var Table_Design = '<table id="Table_Design">';
    Table_Design += '<tbody>';
    var rückgabewerte = TabelleninhaltFuellen(Table_Design, temp_list_Design, 'Design');
    Table_Design += rückgabewerte[0];
    temp_list_Design = rückgabewerte[1];
    Table_Design += '</tbody></table>';

    // Tabelle für die Kategorie "Hobbies" erstellen
    var Table_Hobbies = '<table id="Table_Hobbies">';
    Table_Hobbies += '<tbody>';
    var rückgabewerte = TabelleninhaltFuellen(Table_Hobbies, temp_list_Hobbies, 'Hobbies');
    Table_Hobbies += rückgabewerte[0];
    temp_list_Hobbies = rückgabewerte[1];

    Table_Hobbies += '</tbody></table>';

    // Tabellen in HTML-DIV-Elementen platzieren.
    document.getElementById('DIV_Table_Informatik').innerHTML = Table_Informatik;
    document.getElementById('DIV_Table_Design').innerHTML = Table_Design;
    document.getElementById('DIV_Table_Hobbies').innerHTML = Table_Hobbies;
    // Die Tabellen wurden in den DIV-Block platziert
}

// Funktion zum Füllen der Tabelle für eine bestimmte Kategorie.
function TabelleninhaltFuellen(Tabelle, temp_list, tablename) {

    faehigkeiten.forEach(function (item) {
        if (item.Kategorie === tablename) {
            // Eine Zeile für jede Fähigkeit erstellen.
            Tabelle += '<tr>';
            Tabelle += '<td>' + item.name + '</td><td><div class="star-rating">';

            // Sterne für die Bewertung der Fähigkeit hinzufügen.
            for (i = 0; i < 5; i++) {
                if (i < item.stars) {
                    Tabelle += '<label class="checked"></label>';
                } else {
                    Tabelle += '<label></label>';
                }
            }

            Tabelle += '</div></td></tr>';
            temp_list.push(item);
        }
    });

    // Rückgabewerte für die aktualisierte Tabelle und die temp_list zurückgeben.
    return [Tabelle, temp_list];

}

// Funktion zum Erstellen und Anzeigen der Tabellen beim Laden der Seite.
createTable();