const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotateA')

  closeAllSubMenus()
}

function toggleSubMenu(button){
  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotateA')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotateA')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotateA')
  })
}





// function buttonklicken(buttonId) {
//   const buttons = document.querySelectorAll('.button-class');

//   // console.log("buttons:", buttons);
//   // console.log("buttonId =", buttonId)

//   buttons.forEach(button => {
//     const icon = button.querySelector('.icon');
//     const span = button.querySelector('span');

//     const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent-clr");

//     // Setze alle Buttons auf weiß
//     btn_icon = button.querySelector(".icon");
//     btn_span = button.querySelector("span");
//     if (btn_icon) {
//       btn_icon.style.color = "white";
//       btn_span.style.color = "white";
//     }
//     // Setzt genau 1 Button auf andere Farbe
//     if (buttonId === "btn_1") {
//       const buttonElement = document.getElementById(buttonId);
//       if (buttonElement) {
//         const iconElement = buttonElement.querySelector(".icon");
//         const spanElement = buttonElement.querySelector("span");
//         if (iconElement) {
//           iconElement.style.color = "red";
//           spanElement.style.color = "red";
//         }
//       }
//     } else if (buttonId === "btn_2") {
//       const buttonElement = document.getElementById(buttonId);
//       if (buttonElement) {
//         const iconElement = buttonElement.querySelector(".icon");
//         const spanElement = buttonElement.querySelector("span");
//         if (iconElement) {
//           iconElement.style.color = "red";
//           spanElement.style.color = "red";
//         }
//       }
//     }


//   })
// }
// // Event Listener für Button 3
// document.getElementById('btn_1').addEventListener('click', function() {
//   buttonklicken('btn_1');
// });

// // Event Listener für Button 4
// document.getElementById('btn_2').addEventListener('click', function() {
//   buttonklicken('btn_2');
// });


















// Zugriff auf alle Buttons für Klicken in der Seitenleiste
const buttons = document.querySelectorAll(".btn_ungedrueckt, .btn_gedrueckt,\
  .btn_home                     .btn_home_gedr,\
  .btn_lektionen,               .btn_lektionen_gedr,\
  .btn_lek_i_ungedr,            .btn_lek_i_gedr,\
  .btn_vokabeltrainer,          .btn_vokabeltrainer_gedr,\
  .btn_vokabeltrainer_i_ungedr, .btn_vokabeltrainer_i_gedr,\
  .btn_spiele,                  .btn_spiele_gedr,\
  .btn_spiele_i_ungedr,         .btn_spiele_i_gedr");

buttons.forEach(button_li => {   // Füge jedem Button einen Event Listener hinzu
  button_li.addEventListener('click', function() {   
  buttonklicken_klasse_2(this); // 'this' bezieht sich auf den geklickten Button
  });
});


function buttonklicken_klasse_2(button) {
  // console.log("-------- ANFANG --------\n")
  // console.log("button =", button)
  const buttons_0 = document.querySelectorAll(".btn_ungedrueckt, .btn_gedrueckt");
  const buttons_1 = document.querySelectorAll(".btn_lek_i_ungedr, .btn_lek_i_gedr");
  const buttons_2 = document.querySelectorAll(".btn_vokabeltrainer_i_ungedr, .btn_vokabeltrainer_i_gedr")
  const buttons_3 = document.querySelectorAll(".btn_spiele_i_ungedr, .btn_spiele_i_gedr");

  const btn_lektionen = document.querySelector(".btn_lektionen, .btn_lektionen_gedr");
  const btn_vokabeltrainer = document.querySelector(".btn_vokabeltrainer, .btn_vokabeltrainer_gedr");
  const btn_spiele = document.querySelector(".btn_spiele, .btn_spiele_gedr");

  // Beim Ein- und Ausklappen soll nicht die Farbe gelöscht werden
  if (button.classList.contains("btn_lektionen_gedr") ||
      button.classList.contains("btn_vokabeltrainer_gedr") ||
      button.classList.contains("btn_spiele_gedr")) {
    return;
  }
  if (!button.classList.contains("btn_lektionen") &&
      !button.classList.contains("btn_vokabeltrainer") &&
      !button.classList.contains("btn_spiele")) {
    // console.log("button =", button)
    buttons_0.forEach(btn => {
      btn.classList.replace("btn_gedrueckt", "btn_ungedrueckt");
      btn_lektionen.classList.replace("btn_lektionen", "btn_lektionen_gedr");
    })
    buttons_1.forEach(btn => {
      btn.classList.replace("btn_lek_i_gedr", "btn_lek_i_ungedr");
      btn_lektionen.classList.replace("btn_lektionen_gedr", "btn_lektionen");
    })
    buttons_2.forEach(btn => {
      btn.classList.replace("btn_vokabeltrainer_i_gedr", "btn_vokabeltrainer_i_ungedr");
      btn_vokabeltrainer.classList.replace("btn_vokabeltrainer_gedr", "btn_vokabeltrainer");
    })
    buttons_3.forEach(btn => {
      btn.classList.replace("btn_spiele_i_gedr", "btn_spiele_i_ungedr");
      btn_spiele.classList.replace("btn_spiele_gedr", "btn_spiele");
    })
  }


  // HIER DIE IF BEDINGUNGN
  if (button.classList.contains("btn_ungedrueckt")) {   // Button A,B,C wurde gedrückt
    buttons_0.forEach(btn => {
      btn.classList.replace("btn_gedrueckt", "btn_ungedrueckt");
    })
    button.classList.replace("btn_ungedrueckt", "btn_gedrueckt");  // Setze geklickten Button auf 'gedrückt'
  }
  else if (button.classList.contains("btn_lek_i_ungedr")) {   // Button Lektionen_i wurde gedrückt
    buttons_1.forEach(btn => {
      btn.classList.replace("btn_lek_i_gedr", "btn_lek_i_ungedr");
    })
    button.classList.replace("btn_lek_i_ungedr", "btn_lek_i_gedr");  // Setze geklickten Button auf 'gedrückt'
  }
  else if (button.classList.contains("btn_vokabeltrainer_i_ungedr")) {
    buttons_2.forEach(btn => {
      btn.classList.replace("btn_vokabeltrainer_i_gedr", "btn_vokabeltrainer_i_ungedr");
    })
    button.classList.replace("btn_vokabeltrainer_i_ungedr", "btn_vokabeltrainer_i_gedr");
  }
  else if (button.classList.contains("btn_spiele_i_ungedr")) {
    buttons_3.forEach(btn => {
      btn.classList.replace("btn_spiele_i_gedr", "btn_spiele_i_ungedr");
    })
    button.classList.replace("btn_spiele_i_ungedr", "btn_spiele_i_gedr");
  }

  // Falls eine Lektion gedrückt ist, soll Lektion und das Buch aufleuchten
  buttons_1.forEach(btn => {
    if (btn.classList.contains("btn_lek_i_gedr")) {
      if (btn_lektionen.classList.contains("btn_lektionen")) {
        // console.log("WECHSEL");
        btn_lektionen.classList.replace('btn_lektionen', 'btn_lektionen_gedr');
      }
      else if (!btn.classList.contains("btn_lek_i_gedr")) {
        btn_lektionen.classList.replace('btn_lektionen_gedr', 'btn_lektionen');
      }
    }
  })
  // Falls eine Vokabeltrainer gedrückt ist, soll Vokabeltrainer und das Symbol aufleuchten
  buttons_2.forEach(btn => {
    if (btn.classList.contains("btn_vokabeltrainer_i_gedr")) {
      if (btn_vokabeltrainer.classList.contains("btn_vokabeltrainer")) {
        // console.log("WECHSEL VOKABELTRAINER");
        btn_vokabeltrainer.classList.replace('btn_vokabeltrainer', 'btn_vokabeltrainer_gedr');
      }
      else if (!btn.classList.contains("btn_vokabeltrainer_i_gedr")) {
        btn_vokabeltrainer.classList.replace('btn_vokabeltrainer_gedr', 'btn_vokabeltrainer');
      }
    }
  })
  buttons_3.forEach(btn => {
    if (btn.classList.contains("btn_spiele_i_gedr")) {
      if (btn_spiele.classList.contains("btn_spiele")) {
        // console.log("WECHSEL SPIELE");
        btn_spiele.classList.replace('btn_spiele', 'btn_spiele_gedr');
      }
      else if (!btn.classList.contains("btn_spiele_i_gedr")) {
        btn_spiele.classList.replace('btn_spiele_gedr', 'btn_spiele');
      }
    }
  })

  // console.log("-------- ENDE --------\n")
}
















function ladeSkript(url) {
  var head = document.getElementsByTagName("head")[0];
  var skript = document.createElement("script");
  skript.type = "text/javascript";
  skript.src = url;
  head.appendChild(skript);
}
function ladeModul(url) {
  var head = document.getElementsByTagName("head")[0];
  var skript = document.createElement("script");
  skript.type = "module";
  skript.src = url;
  head.appendChild(skript);
}



var letztes_skript = null;
// Füge einen Event-Listener für alle Buttons hinzu, um andere Datei anzeigen zu lassen
document.querySelectorAll('.btn_ungedrueckt, .btn_lek_i_ungedr,\
                           .btn_vokabeltrainer_i_ungedr, .btn_vokabeltrainer_i_gedr,\
                           .btn_spiele_i_ungedr, .btn_spiele_i_gedr').forEach(button => {
  button.addEventListener('click', function() {
    // Lese die URL aus dem data-content-Attribut des geklickten Buttons
    var contentUrl_1 = this.getAttribute('data-content');
    var contentUrl_2 = this.getAttribute('data-content-2');
    var contentUrl_3 = this.getAttribute('data-content-3');
    console.log("contentUrl_3 =", contentUrl_3);

    // Lade die HTML-Datei und ersetze den Inhalt des <main>-Elements
    fetch(contentUrl_1)
      .then(response => response.text())
      .then(data => {
        // Den mainContent-Bereich mit dem geladenen HTML ersetzen
        // console.log("contentUrl_1: ", contentUrl_1)
        document.getElementById('mainInhalt').innerHTML = data;

        ladeSkript(contentUrl_2);
        if (contentUrl_3 !== null) {
          ladeSkript(contentUrl_3);
        }

        // Skript dynamisch hinzufügen
        // const script = document.createElement('script');
        // script.src = 'assets/Spiele/js/script_landkreise_ee.js'; // Den Pfad zu deinem JS anpassen
        // script.defer = true; // Optional, um sicherzustellen, dass das Skript nach dem Laden ausgeführt wird
        // document.body.appendChild(script);

        // alle_button = document.querySelectorAll("button")
        // alle_button.forEach(btn => {
        //   console.log(btn.getElementsByClassName)
        // })

        // const script = document.createElement("script");
        // script.src = contentUrl_2;
        // script.defer = true;
        // console.log("neues script: ", script.src)
        // if (letztes_skript !== null) { console.log("letztes_skript: ", letztes_skript.src) }


        // if (letztes_skript === null) {
        //   console.log("IST NULL")
        //   document.body.appendChild(script);
        //   letztes_skript = script;
        // }
        // else if (letztes_skript.src !== script.src) {
        //   console.log("NICHT GLEICH")
        //   document.body.appendChild(script);
        //   letztes_skript = script;
        // }
        // else if (letztes_skript !== null && letztes_skript.src === script.src) {
        //   console.log("SIND GLEICH")
        //   script.forEach(btn => {
        //     btn.remove();
        //   })
        // }

      })
      .catch(error => {
          console.error('Fehler beim Laden der Lektion:', error);
      });
  });
});



// else {
//   console.log("SIND GLEICH")
//   script.forEach(btn => {
//     btn.remove();
//   })
// }

// const btn_loesch = document.querySelectorAll('.btn_spiel_einfach');

