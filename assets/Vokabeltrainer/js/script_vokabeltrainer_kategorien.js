/*
TODO
- Vokabeln in einer anderen Datei speichern und importieren
  - vermutlich alle in einer .js Datei speichern
  - importieren
- Aus ausgewählter Kategorie Vokabeln wählen
  - weitere Vokabeln einfügen
  - Vokabeln aus ausgewählter Kategorie anzeigen
- SVG für jede Kategorie erstellen
  - soll links im Button angezeigt werden, genau wie in der Sidebar


- Vokabeltraining:
  ANFANG:
  - Wahl zwischen Leicht und Schwer in einer Reihe mit Switch
  - Switch Bild einfügen für DE->EST und EST->DE
  - unten Kategorie und Anzahl anzeigen und dann nochmal auf spielen klicken, um zu starten

  TRAINING LEICHT

  TRAINING SCHWER
  - Progressbar mit x_i / x Anzahl anzeigen
  - Rechts neben Progressbar einen Button (Kreuz) zum beenden und zurück zur Kategorienauswahl zu kommen
  - x zufällige Vokabel aus gewählter Kategorie bereitstellen
  - Vokabeln shuffeln
  - Eingabe -> Richtig/Falsch -> Grün/Rot, Hacken/Kreuz
  - Hinweis -> um 1 weiter aufdecken -> ganz aufdecken bei Antwort Button
  - Weiter zur nächsten Vokabel
  - Ende Score anzeigen

*/






// var vokabeln_tiere = [
//   ["Pinguin", "pingviin"],
//   ["Hund", "koer"],
//   ["Katze", "kass"],
//   ["Fisch", "kala"],
//   ["Bär", "karu"],
//   ["Wolf", "hunt"],
//   ["Huhn", "kana"],
//   ["Schaf", "lammas"],
//   ["Kuh", "lehm"],
//   ["Elefant", "elevant"],
//   ["Maus", "hiir"],
//   ["Eichhörnchen", "orav"],
//   ["Igel", "siil"],
//   ["Pferd", "hobune"],
//   ["Löwe", "lõvi"],
//   ["Tiger", "tiiger"],
//   ["Affe", "ahv"],
//   ["Giraffe", "kaelkirjak"],
//   ["Hase", "jänes"],
//   ["Ratte", "rott"],
//   ["Vogel", "lind"],
//   ["Esel", "eesel"],
//   ["Ente", "part"],
//   ["Gans", "hani"],
//   ["Schlange", "madu"],
//   ["Delfin", "delfiin"],
//   ["Tintenfisch", "kaheksajalg"],
//   ["Biene", "mesilane"],
//   ["Ameise", "sipelgas"]
// ];

var vokabelanzahl = [
  ["Zahlen", vokabeln_zahlen.length],
  ["Tiere", vokabeln_tiere.length],
  ["Essen & Trinken", vokabeln_essen_und_trinken.length],
  ["Farben", vokabeln_farben.length],
  ["Kleidung", 18],
  ["Möbel & Haushalt", 22],
  ["Familie & Freunde", 19],
  ["Bildung", 24],
  ["Freizeit", 20],
  ["Wetter", 17],
  ["Reisen & Transport", 28],
  ["Politik", 10],
  ["Zeit & Datum", 14]
];




// console.log("vokabeln_zahlen: ", vokabeln_zahlen);
// console.log("vokabeln_tiere: ", vokabeln_tiere);
// console.log("vokabeln_essen_und_trinken: ", vokabeln_essen_und_trinken);
// console.log("vokabeln_farben: ", vokabeln_farben);

























// Durch die Buttons iterieren und die Anzahl zuweisen
var kategorienButtons = document.querySelectorAll("#container_auswahl .kateg");
kategorienButtons.forEach(function(button) {
  var buttonText = button.textContent.split(' (')[0];  // Trennt den Text vor der Klammer. Text des Buttons ohne die Zahl (#) auslesen
  
  // Suche in der Liste nach der Kategorie und deren Anzahl
  for (let i = 0; i < vokabelanzahl.length; i++) {
    if (vokabelanzahl[i][0] === buttonText) { // Button-Text mit der Anzahl aktualisieren
      button.textContent = `${buttonText} (${vokabelanzahl[i][1]})`;
      break; // Schleife abbrechen, wenn Kategorie gefunden
    }
  }
});


// Container
var container_anfang = document.querySelector(".container_anfang");
var container_vokabeltraining_leicht = document.querySelector(".container_vokabeltraining_leicht");
var container_vokabeltraining_schwer = document.querySelector(".container_vokabeltraining_schwer");

// Button
var btn_starte_training = document.getElementById("btn_starte_training");
var btn_kategorien = document.getElementsByClassName("kateg");
var hinweis_btn = document.querySelector(".btn_hinweis");
var btn_weiter_leicht = document.getElementById("btn_weiter_leicht");
var btn_weiter_schwer = document.getElementById("btn_weiter_schwer");
var antwort_1 = document.querySelector(".btn_antwort_1");
var antwort_2 = document.querySelector(".btn_antwort_2");
var antwort_3 = document.querySelector(".btn_antwort_3");
var antwort_4 = document.querySelector(".btn_antwort_4");
var antworten = [antwort_1, antwort_2, antwort_3, antwort_4];
var antwort_richtig;
var antwort_richtig_idx;

// EventListener
btn_weiter_leicht.addEventListener("click", weiter_leicht);

// Label
var frage_wort_leicht = document.querySelector(".frage_wort_leicht");
var hinweis_ausgabe = document.getElementById("hinweis_ausgabe");
var eingabe = document.getElementById("eingabe");
var eingabe_aufforderung_text = document.getElementById("eingabe_lbl");
var error_ausgabe = document.getElementById("error_ausgabe");


// Eingabe
var eingabe_anzahl = document.getElementById("eingabe_anzahl");
var anzahl_vokabeln_maximal = 0;

// Variablen bei Kategorienauswahl
var sprachrichtung = 0; // 0 = DE -> EST; 1 = EST -> DE
var schwierigkeit = 0;  // 0 = Leicht; 1 = Schwer
var kategorie_ausgewaehlt = false;  // Bool:  wurde eine Kategorie ausgewählt
var anzahl_gueltig = false;         // Bool: ist eingegebene Anzahl wirklich eine Zahl
var anzahl_unter_max = false;       // Bool: ist eingegebene Anzahl unter der maximalen Anzahl an vorhandenen Vokabeln
var kategorie_idx = -1;
var anzahl_vokabeln = 0;

// Variablen im Vokabeltraining
var zuf_liste;
var woerter;
var worter_shuffled;
var wort_idx = 0;
var aktuelles_wort_leicht = "";
var aktuelles_wort_schwer = "";
var wort_idx = 0;
var eingabe_text = "";
var richtig_falsch_bool = false;
var antwort_laenge = 0;
var hinweis_idx = 0;
var hinweis_text = "";

// Prüfe Eingaben am Anfang
btn_starte_training.addEventListener("click", pruefe_auswahl_kategorien_und_anzahl);


// Switch
var toggle_switch_sprachrichtung = document.getElementById('toggle_switch_sprachrichtung');
var toggle_switch_schwierigkeit = document.getElementById('toggle_switch_schwierigkeit');
var switch_sprachrichtung_text = document.getElementById('switch_sprachrichtung_text');
var switch_schwierigkeit_text = document.getElementById('switch_schwierigkeit_text');

// schwierigkeit
// Setze den Anfangszustand des Switches
toggle_switch_sprachrichtung.checked = false; // Initial auf 'Aus'
toggle_switch_schwierigkeit.checked = false; // Initial auf 'Aus'
switch_sprachrichtung_text.textContent = "DE -> EST";
switch_schwierigkeit_text.textContent = "Leicht";

// Füge einen Event-Listener hinzu, um auf Änderungen zu reagieren
toggle_switch_sprachrichtung.addEventListener('change', function() {
    if (this.checked) {
      switch_sprachrichtung_text.textContent = "EST -> DE";
        sprachrichtung = 1;
    } else {
      switch_sprachrichtung_text.textContent = "DE -> EST";
        sprachrichtung = 0;
    }
});
toggle_switch_schwierigkeit.addEventListener('change', function() {
  if (this.checked) {
    switch_schwierigkeit_text.textContent = "Schwer";
      schwierigkeit = 1;
  } else {
    switch_schwierigkeit_text.textContent = "Leicht";
    schwierigkeit = 0;
  }
});


// Wähle genau eine Kategorie
for (var i = 0; i < btn_kategorien.length; i++) {
  btn_kategorien[i].addEventListener("click", function() {
    kategorie_gewaehlt(this); // this referenziert den geklickten Button
  });
}


function kategorie_gewaehlt(button) {
  // Überprüfen, ob der Button bereits die "active"-Klasse hat, wenn ja, die "active"-Klasse entfernen
  if (button.classList.contains("ausgewaehlt")) {
    button.classList.remove("ausgewaehlt");
    eingabe_anzahl.value = "";
  } else {
    // Andernfalls die "ausgewaehlt"-Klasse von allen Buttons entfernen
    for (let i = 0; i < btn_kategorien.length; i++) {
      btn_kategorien[i].classList.remove("ausgewaehlt");
    }
    button.classList.add("ausgewaehlt"); // Und dem geklickten Button die "active"-Klasse hinzufügen

    for (let i = 0; i < btn_kategorien.length; i++) {
      if (btn_kategorien[i].classList.contains("ausgewaehlt")) {
        kategorie_ausgewaehlt = true;
        kategorie_idx = i;
        break;
      }
    }
    console.log("kategorie_idx =", kategorie_idx);

    // switch (kategorie_idx) {
    //   case 0:
    //     woerter = vokabeln_zahlen;
    //     anzahl_vokabeln_maximal = vokabeln_zahlen.length;
    //     break;
    //   case 1:
    //     woerter = vokabeln_tiere;
    //     anzahl_vokabeln_maximal = vokabeln_tiere;
    //     break;
    //   case 2:
    //     woerter = vokabeln_essen_und_trinken;
    //     anzahl_vokabeln_maximal = vokabeln_essen_und_trinken.length;
    //     break;
    //   case 3:
    //     woerter = vokabeln_farben;
    //     anzahl_vokabeln_maximal = vokabeln_farben.length;
    //     break;
    // }
    // console.log("woerter 0:\n", woerter);
    // console.log("woerter:\n", woerter[0]);
    // console.log("woerter:\n", woerter[1]);
    // console.log("woerter:\n", woerter[2]);

    eingabe_anzahl.value = vokabelanzahl[kategorie_idx][1];
  }

  kategorie_ausgewaehlt = button;
  // console.log(button.textContent + " ausgewählt");
}










// Prüfe Eingaben der Auswahl und Anzahl
function pruefe_auswahl_kategorien_und_anzahl() {
  console.log("= = = = = = ANFANG = = = = = =")
  // console.log("starte_vokabeltraining_pruefen");

  // Variablen initialisieren
  kategorie_ausgewaehlt = false;
  anzahl_gueltig = false;
  anzahl_unter_max = false;
  kategorie_idx = -1;


  // Überprüfe alle Kategorie-Buttons
  for (var i = 0; i < btn_kategorien.length; i++) {
    if (btn_kategorien[i].classList.contains("ausgewaehlt")) {
      kategorie_ausgewaehlt = true;
      kategorie_idx = i;
      break;
    }
  }
  if (!kategorie_ausgewaehlt) {
    // console.log("Keine Kategorie gewählt -> Wähle Kategorie");
    error_ausgabe.textContent = "Wähle eine Kategorie aus!";
    return;
  }
  // else {
  //   console.log("Eine Kategorie gewählt.");
  // }

  // Überprüfen, ob eine gültige Zahl eingegeben wurde
  if (isNaN(eingabe_anzahl.value) || eingabe_anzahl.value <= 0 || !Number.isInteger(Number(eingabe_anzahl.value))) {
    error_ausgabe.textContent = "Anzahl an Vokabeln ist ungültig!";
    anzahl_gueltig = false;
    return;
  }
  else {
    anzahl_gueltig = true;
  }

  // Prüfe, ob eingegebene Anzahl die maximale überschreitet
  if (eingabe_anzahl.value <= vokabelanzahl[kategorie_idx][1]) {
    anzahl_unter_max = true;
  }
  else {
    error_ausgabe.textContent = "Anzahl an Vokabeln ist zu groß!";
  }



  // Falls alles korrekt war, soll das Vokabeltraining gestartet werden
  if (kategorie_ausgewaehlt && anzahl_gueltig && anzahl_unter_max) {

    
    if (schwierigkeit === 0) { //Leicht
      container_anfang.classList.add("hide");
      container_vokabeltraining_leicht.classList.remove("hide");
      starte_vokabeltraining_leicht();
    }
    else if (schwierigkeit === 1) {  //Schwer
      container_anfang.classList.add("hide");
      container_vokabeltraining_schwer.classList.remove("hide");
      starte_vokabeltraining_schwer();
    }
  }

  console.log("= = = = = = ENDE = = = = = =")
}













// HIER BEGINNT DAS LEICHTE VOKABELTRAINING
function starte_vokabeltraining_leicht() {
  console.log("Hier beginnt der leichte Vokabeltrainer.");


  switch (kategorie_idx) {
    case 0:
      woerter = vokabeln_zahlen;
      anzahl_vokabeln_maximal = vokabeln_zahlen.length;
      break;
    case 1:
      woerter = vokabeln_tiere;
      anzahl_vokabeln_maximal = vokabeln_tiere;
      break;
    case 2:
      woerter = vokabeln_essen_und_trinken;
      anzahl_vokabeln_maximal = vokabeln_essen_und_trinken.length;
      break;
    case 3:
      woerter = vokabeln_farben;
      anzahl_vokabeln_maximal = vokabeln_farben.length;
      break;
  }
  console.log("woerter 0:\n", woerter);

  console.log("woerter.length =", woerter.length);



  // Zufällige Liste
  zuf_liste = Array.from({ length: woerter.length }, (_, i) => i);
  for (let i = zuf_liste.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  }
  worter_shuffled = zuf_liste.map(index => woerter[index]);
  // console.log("worter_shuffled:\n", worter_shuffled);

  weiter_leicht();
}


function weiter_leicht() {
  if (wort_idx === parseInt(eingabe_anzahl.value)) {
    console.log("ENDE");
    return;
  }

  console.log("eingabe_anzahl =", eingabe_anzahl.value);
  console.log("wort_idx =", wort_idx);

  // console.log("Weiter Leicht.");
  aktuelles_wort_leicht = worter_shuffled[wort_idx]
  console.log("frage_wort_leicht =", frage_wort_leicht);
  console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht);
  frage_wort_leicht.textContent = aktuelles_wort_leicht[Math.abs(sprachrichtung)];
  // console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht);

  // Get 4 Antwortmöglichkeiten
  let restl_woerter = worter_shuffled.filter(item => item !== aktuelles_wort_leicht);
  restl_woerter = restl_woerter.slice(0,3);
  restl_woerter.push(aktuelles_wort_leicht);
  // console.log("restl_woerter 1:", restl_woerter);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_woerter.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }

  console.log("restl_woerter =", restl_woerter);

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_woerter[0][Math.abs(1-sprachrichtung)];
  antwort_2.querySelector("span").textContent = restl_woerter[1][Math.abs(1-sprachrichtung)];
  antwort_3.querySelector("span").textContent = restl_woerter[2][Math.abs(1-sprachrichtung)];
  antwort_4.querySelector("span").textContent = restl_woerter[3][Math.abs(1-sprachrichtung)];

  // console.log("restl_woerter 2:", restl_woerter);

  // console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht);
  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    if (antw.querySelector("span").textContent === aktuelles_wort_leicht) {
      antwort_richtig = antw;
      antwort_richtig_idx = i;
    }
  })










  wort_idx++;
  update_progress(wort_idx, 0);

}























// HIER BEGINNT DAS SCHWERE VOKABELTRAINING
function starte_vokabeltraining_schwer() {
  console.log("Hier beginnt der leichte Vokabeltrainer.");
}
function weiter_schwer() {
  console.log("Weiter Schwer.");
}
























function update_progress(value, schwierigkeit) {
  value = Math.round(value);
  let breite = ( (value) / eingabe_anzahl.value ) * 100;

  if (schwierigkeit === 0) {
    document.querySelector(".progress_fuellen_leicht").style.width = `${breite}%`;
    document.querySelector(".progress_text_leicht").textContent = wort_idx + " / " + eingabe_anzahl.value;
  }
  else if (schwierigkeit === 1) {
  document.querySelector(".progress_fuellen_schwer").style.width = `${breite}%`;
  document.querySelector(".progress_text_schwer").textContent = wort_idx + " / " + eingabe_anzahl.value;
  }
}


