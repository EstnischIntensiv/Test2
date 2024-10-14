/*
// TODO
- Allgemein
  - Ende erstellen mit Score
  - Bilderrahmen ist auf Handy nicht passend -> alternatives Video ansehen
  - Größe des gesamten Spieles ist im Web zu groß -> height, width, font-size, ... prüfen
  - Schwierigkeitsauswahl-Buttons passen noch nicht so schön zum restlichen Style
  - Entweder border für Richtig/Falsch dicker oder
      Fragebild mit blauer Farbe und Richtig/Falsch in Grün/Rot anzeigen -> dh neue Bilder GIMP erzeugen
  

- Leicht
  - Einfach -> Leicht (abändern)
  - Ende mit Score schöner -> Abstände leicht vergrößern (nach oben und unten)
  - Bei Falscher Antwort soll die richtige Antwort grün leuchten

- Schwer:
  - Super/Falsch ausgeben bei entspr. Antwort
*/







// Variablen für Landkreise
var landkreisNamen_einfach = [
  ["harju",      "Harju"],
  ["hiiumaa",    "Hiiumaa"],
  ["ida-viru",   "Ida-Viru"],
  ["järva",      "Järva"],
  ["jõgeva",     "Jõgeva"],
  ["lääne",      "Lääne"],
  ["lääne-viru", "Lääne-Viru"],
  ["pärnu",      "Pärnu"],
  ["põlva",      "Põlva"],
  ["rapla",      "Rapla"],
  ["saaremaa",   "Saaremaa"],
  ["tartu",      "Tartu"],
  ["valga",      "Valga"],
  ["viljandi",   "Viljandi"],
  ["võru",       "Võru"]
];

var landkreisNamen_schwer = [
  ["harju",     "Harju",      "harjumaa",      "harju maakond"],
  ["hiiumaa",   "Hiiumaa",    "hiiu",          "hiiu maakond"],
  ["ida-viru",  "Ida-Viru",   "ida-virumaa",   "ida viru", "ida virumaa", "idaviru", "idavirumaa", "ida-viru maakond", "ida viru maakond", "idaviru maakond"],
  ["järva",     "Järva",      "järvamaa",      "järva maakond"],
  ["jõgeva",    "Jõgeva",     "jõgevamaa",     "jõgeva maakond"],
  ["lääne",     "Lääne",      "läänemaa",      "lääne maakond"],
  ["lääne-viru","Lääne-Viru", "lääne-virumaa", "lääne viru", "lääne virumaa", "lääneviru", "läänevirumaa", "lääne-viru maakond", "lääne viru maakond", "lääneviru maakond"],
  ["pärnu",     "Pärnu",      "pärnumaa",      "pärnu maakond"],
  ["põlva",     "Põlva",      "põlvamaa",      "põlva maakond"],
  ["rapla",     "Rapla",      "raplamaa",      "rapla maakond"],
  ["saaremaa",  "Saaremaa",   "saare maakond", "saare"],
  ["tartu",     "Tartu",      "tartumaa",      "tartu maakond"],
  ["valga",     "Valga",      "valgamaa",      "valga maakond"],
  ["viljandi",  "Viljandi",   "viljandimaa",   "viljandi maakond"],
  ["võru",      "Võru",       "võrumaa",       "võru maakond"]
];


// Container für Anfang, Spiele und Bild
var container_anfang = document.querySelector(".container_anfang");
var container_spiel_einfach = document.querySelector(".container_spiel_einfach");
var container_spiel_schwer = document.querySelector(".container_spiel_schwer");
var container_ende = document.querySelector(".ende")
var horizontale_linie = document.querySelector(".horiz_linie");
var horizontale_linie_schwer = document.querySelector(".horiz_linie_schwer");
// var progress = document.querySelector(".progress");
// var progress_schwer = document.querySelector(".progress_schwer_2");

var progress_leicht = document.querySelector(".progress_leicht");
var progress_fuellen_leicht = document.querySelector(".progress_fuellen_leicht");
var progress_text_leicht = document.querySelector(".progress_text_leicht");


var pfad_bilder_ohneName = "assets/Spiele/images/Landkreise_ohne_Namen/";
var pfad_bilder_mitName = "assets/Spiele/images/Landkreise_mit_Namen/";

var pfad_png = ".png";
var frage_bild = document.querySelector(".frage_bild");
var frage_bild_schwer = document.querySelector(".frage_bild_schwer");
var aktueller_landkreis;

//Antwort-Button
var antwort_1 = document.querySelector(".btn_antwort_1");
var antwort_2 = document.querySelector(".btn_antwort_2");
var antwort_3 = document.querySelector(".btn_antwort_3");
var antwort_4 = document.querySelector(".btn_antwort_4");
var antworten = [antwort_1, antwort_2, antwort_3, antwort_4];
var antwort_richtig;
var antwort_richtig_idx;

// Button für Spiele, Weiter
var btn_landkrspiel_einfach = document.getElementById("btn_einfach");
var btn_landkrspiel_schwer = document.getElementById("btn_schwer");
var btn_landkr_einfach_weiter = document.getElementById("btn_weiter_einfach");
var btn_landkr_schwer_weiter = document.getElementById("btn_weiter_schwer");

console.log("btn_landkrspiel_einfach: ", btn_landkrspiel_einfach);
console.log("btn_landkrspiel_schwer: ", btn_landkrspiel_schwer);
console.log("btn_landkr_einfach_weiter: ", btn_landkr_einfach_weiter);


// Bildindex, Score
var frage_idx = 0;
var score_leicht = 0;
var progress_breite = 0;

var score_leicht_text = document.getElementById("score_leicht");

// EventListener für Beginn von Einfach/Schwer, Weiter von Einfach/schwer und 4 Antwort-Buttons
btn_landkrspiel_einfach.addEventListener("click", starte_landkr_spiel_einfach);
btn_landkrspiel_schwer.addEventListener("click", starte_landkr_spiel_schwer);
btn_landkr_einfach_weiter.addEventListener("click", weiter_einfach);
btn_landkr_schwer_weiter.addEventListener("click", weiter_schwer);

antwort_1.addEventListener("click", (e) => pruefe_antwort_einfach(e));
antwort_2.addEventListener("click", (e) => pruefe_antwort_einfach(e));
antwort_3.addEventListener("click", (e) => pruefe_antwort_einfach(e));
antwort_4.addEventListener("click", (e) => pruefe_antwort_einfach(e));













// Einfaches Spiel
function starte_landkr_spiel_einfach() {
  container_anfang.classList.add("hide");
  container_spiel_einfach.classList.remove("hide");

  // Zufällige Liste
  zuf_liste = Array.from({ length: 15 }, (_, i) => i);
  for (let i = zuf_liste.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  }
  shuffledLandkreise = zuf_liste.map(index => landkreisNamen_einfach[index]);

  weiter_einfach();
}


function weiter_einfach() {
  if (frage_idx === 15) {
    console.log("SPIEL ENDE!");
    score_leicht_text.textContent = "Score: " + score_leicht + " / 15";
    return;
  }

  // Entferne IDs, also Grün/Rot
  antwort_1.removeAttribute("id");
  antwort_2.removeAttribute("id");
  antwort_3.removeAttribute("id");
  antwort_4.removeAttribute("id");
  container_spiel_einfach.removeAttribute("id", "container_spiel_einfach_richtig");
  container_spiel_einfach.removeAttribute("id", "container_spiel_einfach_falsch");
  horizontale_linie.removeAttribute("id", "horiz_linie_richtig");
  horizontale_linie.removeAttribute("id", "horiz_linie_falsch");
  antwort_1.disabled = false;
  antwort_2.disabled = false;
  antwort_3.disabled = false;
  antwort_4.disabled = false;
  antwort_1.style.pointerEvents = "auto";
  antwort_2.style.pointerEvents = "auto";
  antwort_3.style.pointerEvents = "auto";
  antwort_4.style.pointerEvents = "auto";


  aktueller_landkreis = shuffledLandkreise[zuf_liste[frage_idx]];
  const neuerPfad = pfad_bilder_ohneName + aktueller_landkreis[0] + pfad_png;
  frage_bild.src = neuerPfad;

  // Get 4 Antwortmöglichkeiten
  let restl_landkreise = shuffledLandkreise.filter(item => item !== aktueller_landkreis);
  restl_landkreise = restl_landkreise.slice(0,3);
  restl_landkreise.push(aktueller_landkreis);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_landkreise.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [restl_landkreise[i], restl_landkreise[j]] = [restl_landkreise[j], restl_landkreise[i]]; // Tausche Elemente
  }

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_landkreise[0][1];
  antwort_2.querySelector("span").textContent = restl_landkreise[1][1];
  antwort_3.querySelector("span").textContent = restl_landkreise[2][1];
  antwort_4.querySelector("span").textContent = restl_landkreise[3][1];

  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    if (antw.querySelector("span").textContent === aktueller_landkreis[1]) {
      antwort_richtig = antw;
      antwort_richtig_idx = i;
    }
  })

  frage_idx++;
  update_progress_schwer(frage_idx, 0);


}


function pruefe_antwort_einfach(e) {
  if (e.currentTarget.outerText.trim() === aktueller_landkreis[1].trim()) {
    // console.log("RICHTIG!");
    e.currentTarget.setAttribute("id", "btn_antwort_richtig");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_richtig");
    horizontale_linie.setAttribute("id", "horiz_linie_richtig");

    const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
    frage_bild.src = neuerPfad_mitName;

    score_leicht++;
  }
  else {
    // console.log("FALSCH!");
    e.currentTarget.setAttribute("id", "btn_antwort_falsch");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_falsch");
    horizontale_linie.setAttribute("id", "horiz_linie_falsch");

    const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
    frage_bild.src = neuerPfad_mitName;
  }

  antwort_1.disabled = true;
  antwort_2.disabled = true;
  antwort_3.disabled = true;
  antwort_4.disabled = true;
  antwort_1.style.pointerEvents = "none";
  antwort_2.style.pointerEvents = "none";
  antwort_3.style.pointerEvents = "none";
  antwort_4.style.pointerEvents = "none";

  const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
  frage_bild.src = neuerPfad_mitName;

}












var progress_schwer = document.querySelector(".progress_schwer");
var progress_fuellen_schwer = document.querySelector(".progress_fuellen_schwer");
var progress_text_schwer = document.querySelector(".progress_text_schwer");
var antwort_schwer = document.querySelector(".btn_antworten");
var hinweis_btn = document.querySelector(".btn_hinweis");
var btn_oe = document.getElementById("btn_oe");
var eingabe_schwer = document.getElementById("eingabe");
var hinweis_ausgabe = document.getElementById("hinweis_ausgabe");
var eingabe_aufforderung_text = document.getElementById("eingabe_lbl");
var score_schwer_text = document.getElementById("score_schwer");
var score_schwer = 0;
var richtig_falsch_bool = false;
var antwort_laenge;
var hinweis_idx;
var hinweis_text;



  // Füge Buchstaben OE in das Inputfeld hinzu
  btn_oe.addEventListener('click', function() {
    eingabe_schwer.value += 'õ';
  });


// Schweres Spiel
function starte_landkr_spiel_schwer() {
  container_anfang.classList.add("hide");
  container_spiel_schwer.classList.remove("hide");


  // Zufällige Liste
  zuf_liste = Array.from({ length: 15 }, (_, i) => i);
  for (let i = zuf_liste.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  }
  shuffledLandkreise = zuf_liste.map(index => landkreisNamen_schwer[index]);

  weiter_schwer();
}




function weiter_schwer() {
  if (frage_idx === 15) {
    console.log("SPIEL ENDE!");
    score_schwer_text.textContent = "Score: " + score_schwer + " / 15";
    btn_oe.disabled = true;
    btn_oe.style.pointerEvents = "none";
    return;
  }

  // Alle Attribute wieder auf 0 setzen
  antwort_schwer.removeAttribute("id", "btn_antwort_gegeben");
  antwort_schwer.style.pointerEvents = "auto";
  antwort_schwer.disabled = false;
  eingabe_schwer.disabled = false;
  eingabe_schwer.value = "";
  hinweis_btn.disabled = false;
  hinweis_text = "";
  hinweis_ausgabe.textContent = "";
  hinweis_idx = 0;
  eingabe_aufforderung_text.textContent = "Landkreis eingeben";
  richtig_falsch_bool = false;

  container_spiel_schwer.removeAttribute("id", "container_spiel_schwer_richtig");
  container_spiel_schwer.removeAttribute("id", "container_spiel_schwer_falsch");
  horizontale_linie_schwer.removeAttribute("id", "horiz_linie_richtig");
  horizontale_linie_schwer.removeAttribute("id", "horiz_linie_falsch");

  // Landkreise shuffeln
  aktueller_landkreis = shuffledLandkreise[zuf_liste[frage_idx]];
  antwort_laenge = aktueller_landkreis[1].length;
  // console.log("aktueller_landkreis =", aktueller_landkreis);
  // console.log("antwort_laenge =", antwort_laenge);
  
  // Neues Bild einfügen
  const neuerPfad = pfad_bilder_ohneName + aktueller_landkreis[0] + pfad_png;
  frage_bild_schwer.src = neuerPfad;

  // Hinweis
  hinweis_btn.onclick = function(){
    if (hinweis_text.length !== antwort_laenge) {
      hinweis_text += aktueller_landkreis[1][hinweis_idx];
      hinweis_ausgabe.textContent = hinweis_text;
      hinweis_idx++;
    }
  }

  // Klicken zur Eingabe
  antwort_schwer.onclick = function(){
    eingabe_text = eingabe_schwer.value.toLowerCase();

    //Keine Antwort mehr möglich
    eingabe_aufforderung_text.textContent = "";
    antwort_schwer.setAttribute("id", "btn_antwort_gegeben");
    antwort_schwer.style.pointerEvents = "none";
    antwort_schwer.disabled = true;
    eingabe_schwer.disabled = true;
    hinweis_ausgabe.textContent = aktueller_landkreis[1];
    hinweis_btn.disabled = true;

    //Antwort prüfen
    aktueller_landkreis.forEach(() => {
      // antwort_schwer.setAttribute("id", "btn_antwort_gegeben");
      let richtig = aktueller_landkreis.some(loes_i => {  // Bool, muss mit einem übereinstimmen
        if (loes_i === eingabe_text) {
          console.log("RICHTIG");
          richtig_falsch_bool = true;
          container_spiel_schwer.setAttribute("id", "container_spiel_schwer_richtig");
          horizontale_linie_schwer.setAttribute("id", "horiz_linie_richtig");
          return true; // Abbrechen, wenn richtig
        }
      });
      if (!richtig) {
        console.log("FALSCH");
        richtig_falsch_bool = false;
        container_spiel_schwer.setAttribute("id", "container_spiel_schwer_falsch");
        horizontale_linie_schwer.setAttribute("id", "horiz_linie_falsch");
      }
    })

    if (richtig_falsch_bool) {
      score_schwer++;
    }
    // console.log("richtig_falsch_bool =", richtig_falsch_bool);
    // console.log("score_schwer =", score_schwer);

    // Bild mit Lösung
    const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
    frage_bild_schwer.src = neuerPfad_mitName;
  }

  // Fragebild-Index erhöhen
  if (richtig_falsch_bool) {
    score_schwer++;
  }
  frage_idx++;
  update_progress_schwer(frage_idx, 1);

}








function update_progress_schwer(value, schwierigkeit) {
  value = Math.round(value);
  let breite = ( (value) / 15 ) * 100;

  if (schwierigkeit === 0) {
    document.querySelector(".progress_fuellen_leicht").style.width = `${breite}%`;
    document.querySelector(".progress_text_leicht").textContent = frage_idx + " / 15";
  }
  else if (schwierigkeit === 1) {
  document.querySelector(".progress_fuellen_schwer").style.width = `${breite}%`;
  document.querySelector(".progress_text_schwer").textContent = frage_idx + " / 15";
  }
}





























