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
  - Switch Bild einfügen für DE->EST und EST->DE
  - unten Kategorie und Anzahl anzeigen und dann nochmal auf spielen klicken, um zu starten

  TRAINING LEICHT
  - Weiter Button verschönern
  - Rechts neben Progressbar einen Button (Kreuz) zum beenden und zurück zur Kategorienauswahl zu kommen
  - Am Ende soll Score korrekten Score anzeigen
  - TTS ausprobieren
  - Mit Doppelklick kann man auch eine Antwort auswählen


  TRAINING SCHWER
  - Progressbar mit x_i / x Anzahl anzeigen
  - Rechts neben Progressbar einen Button (Kreuz) zum beenden und zurück zur Kategorienauswahl zu kommen
  - x zufällige Vokabel aus gewählter Kategorie bereitstellen
  - Vokabeln shuffeln
  - Eingabe -> Richtig/Falsch -> Grün/Rot, Hacken/Kreuz
  - õ links neben die Eingabe
  - Hinweis -> um 1 weiter aufdecken -> ganz aufdecken bei Antwort Button
  - Weiter zur nächsten Vokabel
  - Ende Score anzeigen

*/

//random.math();



var vokabelanzahl = [
  ["Zahlen", vokabeln_zahlen.length],
  ["Tiere", vokabeln_tiere.length],
  ["Essen & Trinken", vokabeln_essen_und_trinken.length],
  ["Farben", vokabeln_farben.length],
  ["Kleidung", vokabeln_kleidung.length],
  ["Möbel & Haushalt", vokabeln_moebel_und_haushalt.length],
  ["Familie & Freunde", vokabeln_familie_und_freunde.length],
  ["Schule & Bildung", vokabeln_schule_und_bildung.length],
  ["Freizeit", vokabeln_freizeit.length],
  ["Wetter", vokabeln_wetter.length],
  ["Reisen & Transport", vokabeln_reisen_und_transport.length],
  ["Politik", vokabeln_politik.length],
  ["Zeit & Datum", vokabeln_zeit_und_datum.length]
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
var container_unten_leicht = document.querySelector(".container_unten_leicht");
var container_ende_leicht = document.querySelector(".container_ende_leicht");

// Button
var btn_starte_training = document.getElementById("btn_starte_training");
var btn_kategorien = document.getElementsByClassName("kateg");
var btn_hinweis = document.querySelector(".btn_hinweis");
var btn_weiter_leicht = document.querySelector(".btn_weiter_leicht");
var btn_pruefen_leicht = document.querySelector(".btn_weiter_leicht");
var btn_weiter_schwer = document.querySelector(".btn_weiter_schwer");
var btn_ueberspringen_leicht = document.querySelector(".btn_ueberspringen_leicht");
var antwort_1 = document.querySelector(".btn_antwort_1");
var antwort_2 = document.querySelector(".btn_antwort_2");
var antwort_3 = document.querySelector(".btn_antwort_3");
var antwort_4 = document.querySelector(".btn_antwort_4");
var btn_antwort_gegeben = document.getElementById("btn_antwort_gegeben");
var antworten = [antwort_1, antwort_2, antwort_3, antwort_4];
var antwort_gegeben;
var antwort_richtig;
var antwort_richtig_idx;

// EventListener
// btn_weiter_leicht.addEventListener("click", weiter_leicht);
btn_pruefen_leicht.addEventListener("click", pruefen_weiter_antwort_leicht_2);
btn_ueberspringen_leicht.addEventListener("click", ueberspringen_leicht);

// antwort_1.addEventListener("click", (e) => pruefe_antwort_leicht(e));
// antwort_2.addEventListener("click", (e) => pruefe_antwort_leicht(e));
// antwort_3.addEventListener("click", (e) => pruefe_antwort_leicht(e));
// antwort_4.addEventListener("click", (e) => pruefe_antwort_leicht(e));

antwort_1.addEventListener("click", (e) => antwort_setzen(e));
antwort_2.addEventListener("click", (e) => antwort_setzen(e));
antwort_3.addEventListener("click", (e) => antwort_setzen(e));
antwort_4.addEventListener("click", (e) => antwort_setzen(e));

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
var antwort_gegeben_text_leicht = "";

var eingabe_text = "";
var richtig_falsch_bool = false;
var antwort_laenge = 0;
var hinweis_idx = 0;
var hinweis_text = "";
var score_leicht = 0;
var score_schwer = 0;
var score_leicht_text = document.getElementById("score_leicht");

// Prüfe Eingaben am Anfang
btn_starte_training.addEventListener("click", pruefe_auswahl_kategorien_und_anzahl);

// Switch
var toggle_switch_sprachrichtung = document.getElementById('toggle_switch_sprachrichtung');
var toggle_switch_schwierigkeit = document.getElementById('toggle_switch_schwierigkeit');
var switch_sprachrichtung_text = document.getElementById('switch_sprachrichtung_text');
var switch_schwierigkeit_text = document.getElementById('switch_schwierigkeit_text');

// Setze den Anfangszustand des Switches
toggle_switch_sprachrichtung.checked = false; // Initial auf 'Aus'
toggle_switch_schwierigkeit.checked = false; // Initial auf 'Aus'
switch_sprachrichtung_text.textContent = "DE -> EST";
switch_schwierigkeit_text.textContent = "Leicht";

// Horizontale Linie
var horizontale_linie_leicht = document.querySelector(".horiz_linie_leicht");
var horizontale_linie_schwer = document.querySelector(".horiz_linie_schwer");

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

    eingabe_anzahl.value = vokabelanzahl[kategorie_idx][1];
  }

  kategorie_ausgewaehlt = button;
  // console.log(button.textContent + " ausgewählt");
}










// Prüfe Eingaben der Auswahl und Anzahl
function pruefe_auswahl_kategorien_und_anzahl() {
  // console.log("= = = = = = ANFANG = = = = = =")
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

  // console.log("= = = = = = ENDE = = = = = =")
}













// HIER BEGINNT DAS LEICHTE VOKABELTRAINING
function starte_vokabeltraining_leicht() {
  // console.log("Hier beginnt der leichte Vokabeltrainer.");


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
    case 4:
      woerter = vokabeln_kleidung;
      anzahl_vokabeln_maximal = vokabeln_kleidung.length;
      break;
    case 5:
      woerter = vokabeln_moebel_und_haushalt;
      anzahl_vokabeln_maximal = vokabeln_moebel_und_haushalt.length;
      break;
    case 6:
      woerter = vokabeln_familie_und_freunde;
      anzahl_vokabeln_maximal = vokabeln_familie_und_freunde.length;
      break;
    case 7:
      woerter = vokabeln_schule_und_bildung;
      anzahl_vokabeln_maximal = vokabeln_schule_und_bildung.length;
      break;
    case 8:
      woerter = vokabeln_freizeit;
      anzahl_vokabeln_maximal = vokabeln_freizeit.length;
      break;
    case 9:
      woerter = vokabeln_wetter;
      anzahl_vokabeln_maximal = vokabeln_wetter.length;
      break;
    case 10:
      woerter = vokabeln_reisen_und_transport;
      anzahl_vokabeln_maximal = vokabeln_reisen_und_transport.length;
      break;
    case 11:
      woerter = vokabeln_politik;
      anzahl_vokabeln_maximal = vokabeln_politik.length;
      break;
    case 12:
      woerter = vokabeln_zeit_und_datum;
      anzahl_vokabeln_maximal = vokabeln_zeit_und_datum.length;
      break;
  }
  // console.log("woerter 0:\n", woerter);
  // console.log("woerter.length =", woerter.length);

  // value = 0;
  // let breite = ( (1) / eingabe_anzahl.value ) * 100;
  // document.querySelector(".progress_fuellen_leicht").style.width = `${breite}%`;
  // document.querySelector(".progress_text_leicht").textContent = (wort_idx) + " / " + eingabe_anzahl.value;

  update_progress(wort_idx, 0);


  // Zufällige Liste
  zuf_liste = Array.from({ length: woerter.length }, (_, i) => i);
  for (let i = zuf_liste.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  }
  worter_shuffled = zuf_liste.map(index => woerter[index]);

  // weiter_leicht();
  vokabel_aufsetzen();
}






function vokabel_aufsetzen() {
  // Aktuelles Wort
  aktuelles_wort_leicht = worter_shuffled[wort_idx]
  frage_wort_leicht.textContent = aktuelles_wort_leicht[Math.abs(sprachrichtung)];

  // Get 4 Antwortmöglichkeiten
  let restl_woerter = worter_shuffled.filter(item => item !== aktuelles_wort_leicht);

  // Nochmal restl_woerter shuffeln, damit man verschiedene Antwortmöglichkeiten hat
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  restl_woerter = restl_woerter.slice(0,3);
  restl_woerter.push(aktuelles_wort_leicht);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  // console.log("restl_woerter =", restl_woerter);

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_woerter[0][Math.abs(1-sprachrichtung)];
  antwort_2.querySelector("span").textContent = restl_woerter[1][Math.abs(1-sprachrichtung)];
  antwort_3.querySelector("span").textContent = restl_woerter[2][Math.abs(1-sprachrichtung)];
  antwort_4.querySelector("span").textContent = restl_woerter[3][Math.abs(1-sprachrichtung)];

  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    // console.log("antw.querySelector(span).textContent =", antw.querySelector("span").textContent);
    // console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim());
    if (antw.querySelector("span").textContent === aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim()) {
      // console.log("IN IF");
      antwort_richtig = antw;
      antwort_richtig_idx = i;
      // console.log("antwort_richtig: ", antwort_richtig);
    }
  })
}



function antwort_setzen(e) {
  // Setze angeklickten Button auf geklickt und dunkel Blau
  btn_antwort_gegeben = e.currentTarget;
  antwort_gegeben_text_leicht = e.currentTarget.outerText.trim()
  
  // Setze Button zum Prüfen auf klickbar
  btn_pruefen_leicht.setAttribute("id", "btn_weiter_leicht_drueckbar");
  btn_pruefen_leicht.disabled = false;
  btn_pruefen_leicht.style.pointerEvents = "auto";


  // Alle bis auf den gedrückten Button kenntlich machen
  antworten.forEach(antw => {
    antw.removeAttribute("id", "btn_antwort_gegeben");
  })
  // btn_antwort_gegeben = e.currentTarget;
  btn_antwort_gegeben.setAttribute("id", "btn_antwort_gegeben");


}



function pruefen_weiter_antwort_leicht_2() {
  // Falls Button "Weiter" ist, gehe weiter zur nächsten Frage
  if (btn_weiter_leicht.textContent === "Weiter") {
    if (wort_idx === parseInt(eingabe_anzahl.value) - 1) {
      ende_leicht();
      return;
    }
    console.log("score_leicht (Weiter) =", score_leicht)

    btn_weiter_leicht.disabled = true;
    btn_weiter_leicht.style.pointerEvents = "none";
    btn_weiter_leicht.textContent = "Prüfen";
    wort_idx++;
    update_progress(wort_idx, 0);
    vokabel_aufsetzen();
    button_auf_anfang_setzen();
    btn_weiter_leicht.removeAttribute("id", "btn_weiter_leicht_drueckbar");

    return;
  }


  // Prüfe die Antwort
  if (antwort_gegeben_text_leicht === aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim()) {
    // console.log("RICHTIG!");
    btn_antwort_gegeben.removeAttribute("id", "btn_antwort_gegeben");
    btn_antwort_gegeben.setAttribute("id", "btn_antwort_richtig");
    container_vokabeltraining_leicht.setAttribute("id", "container_spiel_einfach_richtig");
    horizontale_linie_leicht.setAttribute("id", "horiz_linie_richtig");
    
    score_leicht++;
  }
  else {
    // console.log("FALSCH!");
    btn_antwort_gegeben.removeAttribute("id", "btn_antwort_gegeben");
    btn_antwort_gegeben.setAttribute("id", "btn_antwort_falsch");
    container_vokabeltraining_leicht.setAttribute("id", "container_spiel_einfach_falsch");
    horizontale_linie_leicht.setAttribute("id", "horiz_linie_falsch");
    antwort_richtig.setAttribute("id", "btn_antwort_richtig");
  }

  // Setze Antwort Buttons auf nicht-klickbar
  antwort_1.disabled = true;
  antwort_2.disabled = true;
  antwort_3.disabled = true;
  antwort_4.disabled = true;
  antwort_1.style.pointerEvents = "none";
  antwort_2.style.pointerEvents = "none";
  antwort_3.style.pointerEvents = "none";
  antwort_4.style.pointerEvents = "none";


  // Von Prüfen zu Weiter Button
  btn_weiter_leicht.setAttribute("id", "btn_weiter_leicht_drueckbar");
  btn_weiter_leicht.disabled = false;
  btn_weiter_leicht.style.pointerEvents = "auto";
  btn_weiter_leicht.textContent = "Weiter";

  update_progress(wort_idx, 0);

}















function ueberspringen_leicht() {
  // console.log("ÜBERSPRINGEN");
  console.log("score_leicht (Überspringen) =", score_leicht)
  if (wort_idx === parseInt(eingabe_anzahl.value) - 1) {
    ende_leicht();
    return;
  }

  button_auf_anfang_setzen();

  aktuelles_wort_leicht = worter_shuffled[wort_idx]
  frage_wort_leicht.textContent = aktuelles_wort_leicht[Math.abs(sprachrichtung)];

  // Get 4 Antwortmöglichkeiten
  let restl_woerter = worter_shuffled.filter(item => item !== aktuelles_wort_leicht);

  // Nochmal restl_woerter shuffeln, damit man verschiedene Antwortmöglichkeiten hat
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  restl_woerter = restl_woerter.slice(0,3);
  restl_woerter.push(aktuelles_wort_leicht);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  console.log("restl_woerter =", restl_woerter);

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_woerter[0][Math.abs(1-sprachrichtung)];
  antwort_2.querySelector("span").textContent = restl_woerter[1][Math.abs(1-sprachrichtung)];
  antwort_3.querySelector("span").textContent = restl_woerter[2][Math.abs(1-sprachrichtung)];
  antwort_4.querySelector("span").textContent = restl_woerter[3][Math.abs(1-sprachrichtung)];

  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    // console.log("antw.querySelector(span).textContent =", antw.querySelector("span").textContent);
    // console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim());
    if (antw.querySelector("span").textContent === aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim()) {
      // console.log("IN IF");
      antwort_richtig = antw;
      antwort_richtig_idx = i;
      // console.log("antwort_richtig: ", antwort_richtig);
    }
  })

  wort_idx++;
  update_progress(wort_idx, 0);
}







function button_auf_anfang_setzen() {
  // Setze alles auf Standard
  btn_weiter_leicht.textContent = "Prüfen";
  antwort_1.removeAttribute("id");
  antwort_2.removeAttribute("id");
  antwort_3.removeAttribute("id");
  antwort_4.removeAttribute("id");
  container_vokabeltraining_leicht.removeAttribute("id", "container_spiel_einfach_richtig");
  container_vokabeltraining_leicht.removeAttribute("id", "container_spiel_einfach_falsch");
  horizontale_linie_leicht.removeAttribute("id", "horiz_linie_richtig");
  horizontale_linie_leicht.removeAttribute("id", "horiz_linie_falsch");
  antwort_1.disabled = false;
  antwort_2.disabled = false;
  antwort_3.disabled = false;
  antwort_4.disabled = false;
  antwort_1.style.pointerEvents = "auto";
  antwort_2.style.pointerEvents = "auto";
  antwort_3.style.pointerEvents = "auto";
  antwort_4.style.pointerEvents = "auto";
}




function ende_leicht() {
  score_leicht_text.textContent = "Score: " + score_leicht + " / " + anzahl_vokabeln;
  btn_ueberspringen_leicht.setAttribute("class", "hide");
  btn_weiter_leicht.setAttribute("class", "hide");
  antwort_1.disabled = true;
  antwort_2.disabled = true;
  antwort_3.disabled = true;
  antwort_4.disabled = true;
  antwort_1.style.pointerEvents = "none";
  antwort_2.style.pointerEvents = "none";
  antwort_3.style.pointerEvents = "none";
  antwort_4.style.pointerEvents = "none";

  console.log("container_ende_leicht 0:", container_ende_leicht);
  container_unten_leicht.classList.add("hide");
  container_ende_leicht.classList.remove("hide");
  console.log("container_ende_leicht 1:", container_ende_leicht);

  console.log("ENDE");
}


























































function weiter_leicht() {
  if (wort_idx === parseInt(eingabe_anzahl.value)) {
    score_leicht_text.textContent = "Score: " + score_leicht + " / " + anzahl_vokabeln_maximal;
    console.log("ENDE");
    return;
  }

  antwort_1.removeAttribute("id");
  antwort_2.removeAttribute("id");
  antwort_3.removeAttribute("id");
  antwort_4.removeAttribute("id");
  container_vokabeltraining_leicht.removeAttribute("id", "container_spiel_einfach_richtig");
  container_vokabeltraining_leicht.removeAttribute("id", "container_spiel_einfach_falsch");
  horizontale_linie_leicht.removeAttribute("id", "horiz_linie_richtig");
  horizontale_linie_leicht.removeAttribute("id", "horiz_linie_falsch");
  antwort_1.disabled = false;
  antwort_2.disabled = false;
  antwort_3.disabled = false;
  antwort_4.disabled = false;
  antwort_1.style.pointerEvents = "auto";
  antwort_2.style.pointerEvents = "auto";
  antwort_3.style.pointerEvents = "auto";
  antwort_4.style.pointerEvents = "auto";
  btn_weiter_leicht.disabled = true;
  btn_weiter_leicht.style.pointerEvents = "none";
  btn_weiter_leicht.removeAttribute("id", "btn_weiter_leicht_drueckbar");




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

  // Nochmal restl_woerter shuffeln, damit man verschiedene Antwortmöglichkeiten hat
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  restl_woerter = restl_woerter.slice(0,3);
  restl_woerter.push(aktuelles_wort_leicht);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_woerter.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [restl_woerter[i], restl_woerter[j]] = [restl_woerter[j], restl_woerter[i]];
  }
  console.log("restl_woerter =", restl_woerter);

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_woerter[0][Math.abs(1-sprachrichtung)];
  antwort_2.querySelector("span").textContent = restl_woerter[1][Math.abs(1-sprachrichtung)];
  antwort_3.querySelector("span").textContent = restl_woerter[2][Math.abs(1-sprachrichtung)];
  antwort_4.querySelector("span").textContent = restl_woerter[3][Math.abs(1-sprachrichtung)];

  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    console.log("antw.querySelector(span).textContent =", antw.querySelector("span").textContent);
    console.log("aktuelles_wort_leicht =", aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim());
    if (antw.querySelector("span").textContent === aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim()) {
      console.log("IN IF");
      antwort_richtig = antw;
      antwort_richtig_idx = i;
      console.log("antwort_richtig: ", antwort_richtig);
    }
  })

  wort_idx++;
  update_progress(wort_idx, 0);

}





function pruefe_antwort_leicht(e) {
  if (e.currentTarget.outerText.trim() === aktuelles_wort_leicht[Math.abs(1-sprachrichtung)].trim()) {
    // console.log("RICHTIG!");
    e.currentTarget.setAttribute("id", "btn_antwort_richtig");
    container_vokabeltraining_leicht.setAttribute("id", "container_spiel_einfach_richtig");
    horizontale_linie_leicht.setAttribute("id", "horiz_linie_richtig");

    score_leicht++;
  }
  else {
    // console.log("FALSCH!");
    e.currentTarget.setAttribute("id", "btn_antwort_falsch");
    container_vokabeltraining_leicht.setAttribute("id", "container_spiel_einfach_falsch");
    horizontale_linie_leicht.setAttribute("id", "horiz_linie_falsch");

    antwort_richtig.setAttribute("id", "btn_antwort_richtig");
  }

  antwort_1.disabled = true;
  antwort_2.disabled = true;
  antwort_3.disabled = true;
  antwort_4.disabled = true;
  antwort_1.style.pointerEvents = "none";
  antwort_2.style.pointerEvents = "none";
  antwort_3.style.pointerEvents = "none";
  antwort_4.style.pointerEvents = "none";

  btn_weiter_leicht.setAttribute("id", "btn_weiter_leicht_drueckbar");
  btn_weiter_leicht.disabled = false;
  btn_weiter_leicht.style.pointerEvents = "auto";
  btn_weiter_leicht.textContent = "Prüfen";

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
  let breite = ( (value + 1) / eingabe_anzahl.value ) * 100;
  console.log("eingabe_anzahl.value =", eingabe_anzahl.value);

  if (schwierigkeit === 0) {
    document.querySelector(".progress_fuellen_leicht").style.width = `${breite}%`;
    document.querySelector(".progress_text_leicht").textContent = (wort_idx + 1) + " / " + eingabe_anzahl.value;
  }
  else if (schwierigkeit === 1) {
  document.querySelector(".progress_fuellen_schwer").style.width = `${breite}%`;
  document.querySelector(".progress_text_schwer").textContent = wort_idx + " / " + eingabe_anzahl.value;
  }
}


