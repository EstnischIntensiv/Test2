// TODO
// - Richtige Antwort anzeigen, bei falscher Antwort -> Bild ändern mit Lösung
// - Ende erstellen
// - Bilderrahmen ist auf Handy nicht passend -> alternatives Video ansehen
// - Größe des gesamten Spieles ist im Web zu groß -> height, width, font-size, ... prüfen








// Variablen für Landkreise
var landkreisNamen_einfach = [
  ["harju", "Harju"],
  ["hiiumaa", "Hiiumaa"],
  ["ida-viru", "Ida-Viru"],
  ["järva", "Järva"],
  ["jõgeva", "Jõgeva"],
  ["lääne", "Lääne"],
  ["lääne-viru", "Lääne-Viru"],
  ["pärnu", "Pärnu"],
  ["põlva", "Põlva"],
  ["rapla", "Rapla"],
  ["saaremaa", "Saaremaa"],
  ["tartu", "Tartu"],
  ["valga", "Valga"],
  ["viljandi", "Viljandi"],
  ["võru", "Võru"]
];

var landkreisNamen_schwer = [
  ["harju", "harjumaa", "harju maakond"],
  ["hiiumaa", "hiiu", "hiiu maakond"],
  ["ida-viru", "ida-virumaa", "ida viru", "ida virumaa", "idaviru", "idavirumaa", "ida-viru maakond", "ida viru maakond", "idaviru maakond"],
  ["järva", "järvamaa", "järva maakond"],
  ["jõgeva", "jõgevamaa", "jõgeva maakond"],
  ["lääne", "läänemaa", "lääne maakond"],
  ["lääne-viru", "lääne-virumaa", "lääne viru", "lääne virumaa", "lääneviru", "läänevirumaa", "lääne-viru maakond", "lääne viru maakond", "lääneviru maakond"],
  ["pärnu", "pärnumaa", "pärnu maakond"],
  ["põlva", "põlvamaa", "põlva maakond"],
  ["rapla", "raplamaa", "rapla maakond"],
  ["saaremaa", "saare maakond", "saare"],
  ["tartu", "tartumaa", "tartu maakond"],
  ["valga", "valgamaa", "valga maakond"],
  ["viljandi", "viljandimaa", "viljandi maakond"],
  ["võru", "võrumaa", "võru maakond"]
];


// Container für Anfang, Spiele und Bild
var container_anfang = document.querySelector(".container_anfang");
var container_spiel_einfach = document.querySelector(".container_spiel_einfach");
var container_spiel_schwer = document.querySelector(".container_spiel_schwer");
var container_ende = document.querySelector(".ende")
var horizontale_linie = document.querySelector(".horiz_linie");
var progress = document.querySelector(".progress");

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
var score = 0;
var progress_breite = 0;

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
  console.log("starte_landkr_spiel_einfach");
  container_anfang.classList.add("hide");
  container_spiel_einfach.classList.remove("hide");

  console.log("btn_landkrspiel_einfach 1: ", btn_landkrspiel_einfach);
  console.log("btn_landkrspiel_schwer 1: ", btn_landkrspiel_schwer);
  // console.log("btn_landkr_einfach_weiter 1: ", btn_landkr_einfach_weiter);

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
    container_ende.textContent = "Score: " + score + ", Weiter?";
    container_ende.classList.remove("hide");
    return;
  }

  console.log("aktueller_landkreis: ", aktueller_landkreis);

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
  console.log("aktueller_landkreis =", aktueller_landkreis);

  // Get 4 Antwortmöglichkeiten
  let restl_landkreise = shuffledLandkreise.filter(item => item !== aktueller_landkreis);
  restl_landkreise = restl_landkreise.slice(0,3);
  restl_landkreise.push(aktueller_landkreis);
  // console.log("restl_landkreise 1 =", restl_landkreise);

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
  // console.log("Richtiges Index =", antwort_richtig_idx);



  frage_idx++;
  progress_breite = progress_breite + frage_idx;
  setInterval(() => {
    // const computedStyle = getComputedStyle(progress);
    // const breite = parseFloat(computedStyle.getPropertyValue("--progress_breite")) || 0
    progress.style.setProperty("--progress_breite", progress_breite)
  }, 5)
}


function pruefe_antwort_einfach(e) {
  // console.log("pruefe_antwort_einfach");
  // console.log("e: ", e);

  if (e.currentTarget.outerText.trim() === aktueller_landkreis[1].trim()) {
    console.log("RICHTIG!");
    e.currentTarget.setAttribute("id", "btn_antwort_richtig");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_richtig");
    horizontale_linie.setAttribute("id", "horiz_linie_richtig");

    const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
    console.log("neuerPfad_mitName 1 =", neuerPfad_mitName);
    frage_bild.src = neuerPfad_mitName;

    score++;
  }
  else {
    console.log("FALSCH!");
    e.currentTarget.setAttribute("id", "btn_antwort_falsch");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_falsch");
    horizontale_linie.setAttribute("id", "horiz_linie_falsch");

    const neuerPfad_mitName = pfad_bilder_mitName + aktueller_landkreis[0] + pfad_png;
    console.log("neuerPfad_mitName 2 =", neuerPfad_mitName);
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
  console.log("neuerPfad_mitName 3 =", neuerPfad_mitName);
  frage_bild.src = neuerPfad_mitName;

}















// Einfaches Spiel
function starte_landkr_spiel_schwer() {
  console.log("starte_landkr_spiel_schwer");
  container_anfang.classList.add("hide");
  container_spiel_schwer.classList.remove("hide");

  // Zufällige Liste
  zuf_liste = Array.from({ length: 15 }, (_, i) => i);
  // for (let i = zuf_liste.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  // }
  shuffledLandkreise = zuf_liste.map(index => landkreisNamen_einfach[index]);

  weiter_schwer();
}




function weiter_schwer() {
  if (frage_idx === 15) {
    console.log("SPIEL ENDE!");
    container_ende.textContent = "Score: " + score + ", Weiter?";
    container_ende.classList.remove("hide");
    return;
  }

  aktueller_landkreis = shuffledLandkreise[zuf_liste[frage_idx]];
  const neuerPfad = pfad_bilder_ohneName + aktueller_landkreis[0] + pfad_png;
  frage_bild_schwer.src = neuerPfad;
  console.log("aktueller_landkreis =", aktueller_landkreis);
  console.log("neuerPfad: ", neuerPfad);










  frage_idx++;

}































