// var btn_spiel_einfach = document.getElementById("btn_landkreise_einfach")
// var btn_spiel_schwer = document.getElementById("btn_landkreise_schwer")
// var btn_weiter = document.getElementById("btn_weiter")

// var frage_idx, frage_rando

// btn_spiel_einfach.addEventListener('click', starte_landkreise)

// function starte_landkreise() {
//   console.log("starte_landkreise")
// }





// Variablen für Landkreise
var landkreisNamen_einfach = [
  ["harju", "Harjumaa"],
  ["hiiumaa", "Hiiumaa"],
  ["ida-viru", "Ida-Virumaa"],
  ["järva", "Järvamaa"],
  ["jõgeva", "Jõgeva"],
  ["lääne", "Läänemaa"],
  ["lääne-viru", "Lääne-Virumaa"],
  ["pärnu", "Pärnu"],
  ["põlva", "Põlva"],
  ["rapla", "Rapla"],
  ["saaremaa", "Saaremaa"],
  ["tartu", "Tartu"],
  ["valga", "Valga"],
  ["viljandi", "Viljandi"],
  ["võru", "Võru"]
];

// Container für Anfang, Spiele und Bild
var container_anfang = document.querySelector(".container_anfang");
var container_spiel_einfach = document.querySelector(".container_spiel_einfach");
var container_spiel_schwer = document.querySelector(".container_spiel_schwer");
var container_ende = document.querySelector(".ende")

var pfad_bilder = "assets/Spiele/images/Landkreise_ohne_Namen/";
var pfad_png = ".png";
var frage_bild = document.querySelector(".frage_bild");
var aktueller_landkreis;

//Antwort-Button
var antwort_1 = document.querySelector(".btn_antwort_1");
var antwort_2 = document.querySelector(".btn_antwort_2");
var antwort_3 = document.querySelector(".btn_antwort_3");
var antwort_4 = document.querySelector(".btn_antwort_4");
var antworten = [antwort_1, antwort_2, antwort_3, antwort_4];
// antworten = document.querySelectorAll(".btn_antwort_1, .btn_antwort_2, .btn_antwort_3, .btn_antwort_4")
var antwort_richtig;
var antwort_richtig_idx;

// Button für Spiele, Weiter
var btn_landkrspiel_einfach = document.getElementById("btn_einfach");
var btn_landkrspiel_schwer = document.getElementById("btn_schwer");
var btn_landkr_weiter = document.getElementById("btn_weiter");

console.log("btn_landkrspiel_einfach: ", btn_landkrspiel_einfach);
console.log("btn_landkrspiel_schwer: ", btn_landkrspiel_schwer);
console.log("btn_landkr_weiter: ", btn_landkr_weiter);

// Bildindex, Score
var frage_idx = 0;
var score = 0;

// EventListener
btn_landkrspiel_einfach.addEventListener("click", starte_landkr_spiel);
btn_landkr_weiter.addEventListener("click", weiter);
antwort_1.addEventListener("click", (e) => pruefe_antwort(e));
antwort_2.addEventListener("click", (e) => pruefe_antwort(e));
antwort_3.addEventListener("click", (e) => pruefe_antwort(e));
antwort_4.addEventListener("click", (e) => pruefe_antwort(e));
//antwort_1.addEventListener("touchstart", (e) => pruefe_antwort(e));
//antwort_2.addEventListener("touchstart", (e) => pruefe_antwort(e));
//antwort_3.addEventListener("touchstart", (e) => pruefe_antwort(e));
//antwort_4.addEventListener("touchstart", (e) => pruefe_antwort(e));




// Einfaches Spiel
function starte_landkr_spiel() {
  console.log("starte_landkr_spiel");
  container_anfang.classList.add("hide");
  container_spiel_einfach.classList.remove("hide");

  console.log("btn_landkrspiel_einfach 1: ", btn_landkrspiel_einfach);
  console.log("btn_landkrspiel_schwer 1: ", btn_landkrspiel_schwer);
  console.log("btn_landkr_weiter 1: ", btn_landkr_weiter);

  weiter();
}


function weiter() {
  if (frage_idx === 15) {
    console.log("SPIEL ENDE!");
    container_ende.textContent = "Score: " + score + ", Weiter?";
    container_ende.classList.remove("hide");
    return;
  }

  // Entferne IDs, also Grün/Rot
  antwort_1.removeAttribute("id");
  antwort_2.removeAttribute("id");
  antwort_3.removeAttribute("id");
  antwort_4.removeAttribute("id");
  container_spiel_einfach.removeAttribute("id", "container_spiel_einfach_richtig");
  container_spiel_einfach.removeAttribute("id", "container_spiel_einfach_falsch");
  antwort_1.disabled = false;
  antwort_2.disabled = false;
  antwort_3.disabled = false;
  antwort_4.disabled = false;
  antwort_1.style.pointerEvents = "auto";
  antwort_2.style.pointerEvents = "auto";
  antwort_3.style.pointerEvents = "auto";
  antwort_4.style.pointerEvents = "auto";


  // Zufällige Liste
  zuf_liste = Array.from({ length: 15 }, (_, i) => i);
  // for (let i = zuf_liste.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [zuf_liste[i], zuf_liste[j]] = [zuf_liste[j], zuf_liste[i]]; // Tausche Elemente
  // }
  shuffledLandkreise = zuf_liste.map(index => landkreisNamen_einfach[index]);

  console.log("shuffledLandkreise: ", shuffledLandkreise);

  aktueller_landkreis = shuffledLandkreise[zuf_liste[frage_idx]];
  const neuerPfad = pfad_bilder + aktueller_landkreis[0] + pfad_png;
  frage_bild.src = neuerPfad;
  console.log("aktueller_landkreis =", aktueller_landkreis);

  // Get 4 Antwortmöglichkeiten
  let restl_landkreise = shuffledLandkreise.filter(item => item !== aktueller_landkreis);
  restl_landkreise = restl_landkreise.slice(0,3);
  restl_landkreise.push(aktueller_landkreis);
  console.log("restl_landkreise 1 =", restl_landkreise);

  // Shuffle 4 Antwortmöglichkeiten
  for (let i = restl_landkreise.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [restl_landkreise[i], restl_landkreise[j]] = [restl_landkreise[j], restl_landkreise[i]]; // Tausche Elemente
  }
  console.log("restl_landkreise 2 =", restl_landkreise);

  // Antwortmöglichkeiten anzeigen auf Buttons
  antwort_1.querySelector("span").textContent = restl_landkreise[0][1];
  antwort_2.querySelector("span").textContent = restl_landkreise[1][1];
  antwort_3.querySelector("span").textContent = restl_landkreise[2][1];
  antwort_4.querySelector("span").textContent = restl_landkreise[3][1];

  // Finde richtige Antwort
  antworten.forEach( (antw,i) => {
    console.log("A", i, ": ", antw.querySelector("span").textContent);
    if (antw.querySelector("span").textContent === aktueller_landkreis[1]) {
      antwort_richtig = antw;
      antwort_richtig_idx = i;
    }
  })
  console.log("Richtiges Index =", antwort_richtig_idx);





  frage_idx++;
}


function pruefe_antwort(e) {
  //e.preventDefault();
  // console.log("pruefe_antwort");
  // console.log("e: ", e);

  // console.log("aktueller_landkreis: ", aktueller_landkreis);
  // console.log("e.target 2: ", e.target.outerText);

  if (e.currentTarget.outerText.trim() === aktueller_landkreis[1].trim()) {
    console.log("RICHTIG!");
    e.currentTarget.setAttribute("id", "btn_antwort_richtig");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_richtig");

    score++;
  }
  else {
    console.log("FALSCH!");
    e.currentTarget.setAttribute("id", "btn_antwort_falsch");
    container_spiel_einfach.setAttribute("id", "container_spiel_einfach_falsch");
  }

  antwort_1.disabled = true;
  antwort_2.disabled = true;
  antwort_3.disabled = true;
  antwort_4.disabled = true;
  antwort_1.style.pointerEvents = "none";
  antwort_2.style.pointerEvents = "none";
  antwort_3.style.pointerEvents = "none";
  antwort_4.style.pointerEvents = "none";

}

// TODO
// - Problem: Wenn geshuffelt wird, kommen manche Landkreise doppelt vor
// - Richtige Antwort anzeigen, bei falscher Antwort
// - Weiter Button verschönern
// - Evtl Leiste unten erstellen, die Richtig oder Falsch sagt -> spätestens für Schweres Spiel nötig
// - Ende erstellen

















































// Stelle sicher, dass diese Klasse nicht bereits existiert
if (typeof Landkreise === 'undefined') {
  class Landkreise {
    constructor() {
      // Elemente als Eigenschaften der Klasse speichern
      this.btn_einfach = document.getElementById("btn_einfach");
      this.btn_schwer = document.getElementById("btn_schwer");
      
      this.container_anfang = document.querySelector(".container_anfang");
      this.container_spiel_einfach = document.querySelector(".container_spiel_einfach");
      this.container_spiel_schwer = document.querySelector(".container_spiel_schwer");
      this.antwort_1 = document.querySelector(".btn_antwort_1");
      this.antwort_2 = document.querySelector(".btn_antwort_2");
      this.antwort_3 = document.querySelector(".btn_antwort_3");
      this.antwort_4 = document.querySelector(".btn_antwort_4");
      this.antworten = document.querySelectorAll(".btn_antwort_1, .btn_antwort_2, .btn_antwort_3, .btn_antwort_4")

      this.btn_weiter = document.querySelector(".btn_weiter");

      this.pfad_bilder = "assets/Spiele/images/Landkreise_ohne_Namen/";
      this.pfad_png = ".png";
      this.frage_bild = document.querySelector(".frage_bild");

      // Initialisieren der Fragen-Index-Variablen
      this.frage_idx = 0;
      this.frage_rando = 0;
      this.score = 0;

      // Event-Listener hinzufügen
      // addEventListeners();

      this.btn_einfach.addEventListener("click", () => this.starte_landkreise_leicht());
      this.btn_schwer.addEventListener("click", () => this.starte_landkreise_schwer());
      this.btn_weiter.addEventListener("click", () => this.next_bild());
      this.antwort_1.addEventListener("click", () => antwort_pruefen_2());
      this.antwort_2.addEventListener("click", () => antwort_pruefen_2());
      this.antwort_3.addEventListener("click", () => antwort_pruefen_2());
      this.antwort_4.addEventListener("click", () => antwort_pruefen_2());



      this.landkreisNamen_einfach = [
        ["harju", "Harjumaa"],
        ["hiiumaa", "Hiiumaa"],
        ["ida-viru", "Ida-Virumaa"],
        ["järva", "Järvamaa"],
        ["jõgeva", "Jõgeva"],
        ["lääne", "Läänemaa"],
        ["lääne-viru", "Lääne-Virumaa"],
        ["pärnu", "Pärnu"],
        ["põlva", "Põlva"],
        ["rapla", "Rapla"],
        ["saaremaa", "Saaremaa"],
        ["tartu", "Tartu"],
        ["valga", "Valga"],
        ["viljandi", "Viljandi"],
        ["võru", "Võru"]
      ];


      this.landkreisNamen_schwer = [
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


      this.zuf_liste = Array.from({ length: 15 }, (_, i) => i);
      for (let i = this.zuf_liste.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.zuf_liste[i], this.zuf_liste[j]] = [this.zuf_liste[j], this.zuf_liste[i]]; // Tausche Elemente
      }
      this.shuffledLandkreise = this.zuf_liste.map(index => this.landkreisNamen_einfach[index]);
    }

    // Methode zum Hinzufügen von Event-Listenern
    // addEventListeners() {
    //   this.btn_einfach.addEventListener("click", () => this.starte_landkreise_leicht());
    //   this.btn_schwer.addEventListener("click", () => this.starte_landkreise_schwer());
    //   this.btn_weiter.addEventListener("click", () => this.next_bild());
    //   // this.antwort_1.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_2.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_3.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_4.addEventListener('click', (e) => this.antwort_pruefen(e));
    // }


    // EINFACHES SPIEL
    starte_landkreise_leicht() {
      console.log("Starte Landkreise Leicht");
      // Verstecke Anfangsframe
      if (this.container_anfang) {
        this.container_anfang.classList.add("hide");
        this.container_spiel_einfach.classList.remove("hide");
      }
      
      let aktueller_landkreis = this.shuffledLandkreise[this.zuf_liste[this.frage_idx]]
      // console.log("akt Landkreis: ", aktueller_landkreis);

      // // Erstes Bild anzeigen
      // const neuerPfad = this.pfad_bilder + aktueller_landkreis[0] + this.pfad_png;
      // this.frage_bild.src = neuerPfad;
      // console.log(this.shuffledLandkreise[this.zuf_liste[this.frage_idx]][0]);
      // console.log("akt: ", aktueller_landkreis[0])

      // // Antwortmöglichkeiten

      // // Shuffle Array und nehme 4 zufällige
      // let zahlen = Array.from({ length: 14 }, (_, i) => i + 1);
      // for (let i = zahlen.length - 1; i > 0; i--) {
      //   const j = Math.floor(Math.random() * (i + 1));
      //   [zahlen[i], zahlen[j]] = [zahlen[j], zahlen[i]]; // Tausche Elemente
      // }
      // let zuf_indizes = zahlen.slice(0, 4);
      // let zuf_landkreise = zuf_indizes.map(index => this.landkreisNamen_einfach[index]);

      // console.log("zuf_indizes: ", zuf_indizes);
      // console.log("aktueller_landkreis =", aktueller_landkreis[0]);

      // // Füge aktuellen Landkreis zu Antwortmöglichkeiten hinzu
      // zuf_landkreise.forEach(landkreis => {
      //   if (aktueller_landkreis[0] !== landkreis[0]) {
      //     zuf_landkreise[0] = aktueller_landkreis;
      //   }
      // })

      // // Shuffle die 4 Antwortmöglichkeiten
      // for (let i = zuf_landkreise.length - 1; i > 0; i--) {
      //   const j = Math.floor(Math.random() * (i + 1));
      //   [zuf_landkreise[i], zuf_landkreise[j]] = [zuf_landkreise[j], zuf_landkreise[i]]; // Tausche Elemente
      // }
      // console.log("zuf_landkreise 3: ", zuf_landkreise);

      // let i = 0;
      // this.antworten.forEach(antw => {
      //   antw.querySelector("span").textContent = zuf_landkreise[i][1];
      //   i++;
      // })

      // this.bild_weiter();
      this.next_bild();
      
    }

    next_bild() {
      this.aktueller_landkreis = this.shuffledLandkreise[this.zuf_liste[this.frage_idx]];
      const neuerPfad = this.pfad_bilder + this.aktueller_landkreis[0] + this.pfad_png;
      this.frage_bild.src = neuerPfad;
      console.log("aktueller_landkreis =", this.aktueller_landkreis);

      // Get 4 Antwortmöglichkeiten
      let restl_landkreise = this.shuffledLandkreise.filter(item => item !== this.aktueller_landkreis);
      restl_landkreise = restl_landkreise.slice(0,3);
      restl_landkreise.push(this.aktueller_landkreis);
      console.log("restl_landkreise =", restl_landkreise);

      // Shuffle 4 Antwortmöglichkeiten
      for (let i = restl_landkreise.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [restl_landkreise[i], restl_landkreise[j]] = [restl_landkreise[j], restl_landkreise[i]]; // Tausche Elemente
      }

      // Antwortmöglichkeiten anzeigen auf Buttons
      // this.antworten.forEach( (btn, i) => {
      //   btn.querySelector("span").textContent = restl_landkreise[i][1];
      //   // btn.addEventListener("click", function(e){
      //   //   console.log("aktueller_landkreis 1: ", aktueller_landkreis[1]);
      //   //   console.log("e: ", e.target.querySelector("span").textContent);
      //   //   if (aktueller_landkreis[1] === e.target.querySelector("span").textContent) {
      //   //     console.log("Antwort war RICHTIG!");
      //   //   }
      //   //   else {
      //   //     console.log("Antwort war FALSCH!");
      //   //   }

      //   //   // Prüfe, ob klick richtig war
      //   //   // Setze diesen Button auf Grün / Rot(-> Richtigen auf Grün)
      //   //   //  -> evtl hier unten Leiste ändern mit richtiger Antwort geben, die Grün / Rot ist
      //   //   // Mache Antwort Buttons unklickbar
      //   //   //  -> mache Antowrtbuttons unklickbar am Anfang dieser Funktion oder der Funktion drüber 
      //   //   //  -> es kann also nur noch auf weiter gedrückt werden
      //   // });
      // })

      this.antwort_1.querySelector("span").textContent = restl_landkreise[0][1];
      this.antwort_2.querySelector("span").textContent = restl_landkreise[1][1];
      this.antwort_3.querySelector("span").textContent = restl_landkreise[2][1];
      this.antwort_4.querySelector("span").textContent = restl_landkreise[3][1];

      // this.antwort_1.addEventListener("click", antwort_pruefen());

      console.log("this.frage_idx =", this.frage_idx);

      this.frage_idx++;

      // antwort_pruefen_2();
      // function antwort_pruefen_2() {
      //   console.log("In antwort_pruefen_2", this.frage_idx);
      // }

      // this.antwort_1.addEventListener('click', (e) => antwort_pruefen_2(e, this.aktueller_landkreis));
      // this.antwort_2.addEventListener('click', (e) => antwort_pruefen_2(e, this.aktueller_landkreis));
      // this.antwort_3.addEventListener('click', (e) => antwort_pruefen_2(e, this.aktueller_landkreis));
      // this.antwort_4.addEventListener('click', (e) => antwort_pruefen_2(e, this.aktueller_landkreis));

      // function antwort_pruefen_2(e, Landkr) {
      //   console.log("In antwort_pruefen: ", Landkr);
      //   console.log("e: ", e);
      //   console.log("e.target 1: ", e.target.querySelector("span").textContent);
      //   console.log("e.target 2: ", e.target.outerText);
      // }

    }


    // antwort_pruefen(e) {
    //   console.log("In antwort_pruefen: ", this.aktueller_landkreis);
    //   console.log("e: ", e.target.querySelector("span").textContent);

    //   if (this.aktueller_landkreis === e.target.querySelector("span").textContent) {
    //     console.log("RICHTIG!");
    //   }
    //   else {
    //     console.log("FALSCH!");
    //   }

    //   // this.antwort_1.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_2.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_3.addEventListener('click', (e) => this.antwort_pruefen(e));
    //   // this.antwort_4.addEventListener('click', (e) => this.antwort_pruefen(e));

    // }


    bild_weiter() {
      if (this.frage_idx < this.shuffledLandkreise.length - 1) {
        // this.frage_idx++;
        let aktueller_landkreis = this.shuffledLandkreise[this.zuf_liste[this.frage_idx]]

        const neuerPfad = this.pfad_bilder + aktueller_landkreis[0] + this.pfad_png;
        this.frage_bild.src = neuerPfad;

        let zahlen = Array.from({ length: 14 }, (_, i) => i + 1);
        for (let i = zahlen.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [zahlen[i], zahlen[j]] = [zahlen[j], zahlen[i]]; // Tausche Elemente
        }
        let zuf_indizes = zahlen.slice(0, 3);
        let zuf_landkreise = zuf_indizes.map(index => this.landkreisNamen_einfach[index]);
        zuf_landkreise.push(aktueller_landkreis);
        // console.log("zuf_indizes: ", zuf_indizes);

        // console.log("aktueller_landkreis =", aktueller_landkreis[0]);
        // console.log("zuf_landkreise: ", zuf_landkreise);
  
        // Shuffle die 4 Antwortmöglichkeiten
        for (let i = zuf_landkreise.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [zuf_landkreise[i], zuf_landkreise[j]] = [zuf_landkreise[j], zuf_landkreise[i]]; // Tausche Elemente
        }
        // console.log("zuf_landkreise: ", zuf_landkreise);
  
        let ii = 0;
        this.antworten.forEach(antw => {
          antw.querySelector("span").textContent = zuf_landkreise[ii][1];
          ii++;
        })

        // // Finde richtige Antwort Index
        // let richtiger_ind = 0;
        // for (let j=0; j<zuf_landkreise.length; j++) {
        //   if (zuf_landkreise[j] === aktueller_landkreis) {
        //     richtiger_ind = j;
        //     // console.log("Der Index j =", j, " ist richtig");
        //   }
        // }

        // // Antwort Button
        // console.log("this.frage_idx 1 =", this.frage_idx);
        // this.antworten.forEach((btn, index) => {
        //   console.log("this.frage_idx 2 =", this.frage_idx);
        //   // Überprüfe, ob der gedrückte Button der richtige ist
        //   if (index === richtiger_ind) {
        //     console.log("Richtig! this.frage_idx =", this.frage_idx);
        //     btn.setAttribute("id", "btn_antwort_richtig");
        //     this.frage_idx++;
        //   } else {
        //     console.log("Falsch! this.frage_idx =", this.frage_idx);
        //     btn.setAttribute("id", "btn_antwort_falsch");
        //     this.frage_idx++;
        //   }
        //   //Hier soll kein weiteres mal mehr gedrückt werden können, nur noch auf weiter.
        //   // this.frage_idx++;

        // });
      }
      else {
        console.log("HIER KOMMT DAS ENDE")
      }


      function antwort_pruefen_2() {
        console.log("antwort_pruefen_2");
      }


    }

    // antwort_pruefen_2() {
    //   console.log("antwort_pruefen_2");
    // }



    
    // SCHWERES SPIEL
    starte_landkreise_schwer() {
      console.log("Starte Landkreise Schwer");
      this.container_anfang.classList.add("hide");
    }
  }

  // Instanziiere die Klasse
  // var Spiel = new Landkreise();
}




