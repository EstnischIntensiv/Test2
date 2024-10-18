// https://flashcardo.com/de/estnisch-lernkarten/

var vokabeln_zahlen = [
  ["eins", "üks"],
  ["zwei", "kaks"],
  ["drei", "kolm"],
  ["vier", "neli"],
  ["fünf", "viis"],
  ["sechs", "kuus"],
  ["sieben", "seitse"],
  ["acht", "kaheksa"],
  ["neun", "üheksa"],
  ["zehn", "kümme"],
];

var vokabeln_tiere = [
  ["Pinguin", "pingviin"],
  ["Hund", "koer"],
  ["Katze", "kass"],
  ["Fisch", "kala"],
  ["Bär", "karu"],
];

// var vokabeln_essen_und_trinken = [
//   ["Wasser", "vesi"],
//   ["Kaffee", "kohv"],
//   ["Tee", "tee"],
//   ["Saft", "mahl"],
//   ["Bier", "õlu"],
//   ["Milch", "piim"],
// ];

// var vokabeln_farben = [
//   ["rot", "punane"],
//   ["blau", "sinine"],
//   ["gelb", "kollane"],
//   ["grün", "roheline"],
//   ["schwarz", "must"],
// ];



var vokabeln_tiere = [
  ["Pinguin", "pingviin"],
  ["Hund", "koer"],
  ["Katze", "kass"],
  ["Fisch", "kala"],
  ["Bär", "karu"],
  ["Wolf", "hunt"],
  ["Huhn", "kana"],
  ["Schaf", "lammas"],
  ["Kuh", "lehm"],
  ["Elefant", "elevant"],
  ["Maus", "hiir"],
  ["Eichhörnchen", "orav"],
  ["Igel", "siil"],
  ["Pferd", "hobune"],
  ["Löwe", "lõvi"],
  ["Tiger", "tiiger"],
  ["Affe", "ahv"],
  ["Giraffe", "kaelkirjak"],
  ["Hase", "jänes"],
  ["Ratte", "rott"],
  ["Vogel", "lind"],
  ["Esel", "eesel"],
  ["Ente", "part"],
  ["Gans", "hani"],
  ["Schlange", "madu"],
  ["Delfin", "delfiin"],
  ["Tintenfisch", "kaheksajalg"],
  ["Biene", "mesilane"],
  ["Ameise", "sipelgas"]
];




var vokabeln_essen_und_trinken = [
  ["Wasser", "vesi"],
  ["Kaffee", "kohv"],
  ["Tee", "tee"],
  ["Saft", "mahl"],
  ["Limonade", "limonaad"],
  ["Bier", "õlu"],
  ["Wein", "vein"],
  
  ["Milch", "piim"],
  ["Käse", "juust"],
  
  ["Brot", "leib"],
  ["Reis", "riis"],
  ["Nudeln", "nuudlid"],
  ["Suppe", "supp"],
  ["Pizza", "pitsa"],
  ["Hamburger", "hamburger"],
  ["Sandwich", "võileib"],
  ["Keks", "küpsis"],
  ["Schokolade", "šokolaad"],
  ["Eis", "jäätis"],
  
  ["Fleisch", "liha"],
  ["Fisch", "kala"],
  
  ["Obst", "puuvili"],
  ["Gemüse", "köögivili/juurvili"],
  ["Äpfel", "õun"],
  ["Banane", "banaan"],
  ["Beere", "mari"],
  ["Erdbeere", "maasikas"],
  ["Traube", "viinamari"],
  ["Karotte", "porgand"],
  ["Tomate", "tomat"],
  ["Zwiebel", "sibul"],
  ["Knoblauch", "küüslauk"],
  ["Salat", "salat"],
  ["Kartoffel", "kartul"],
  
  ["Zucker", "suhkur"],
  ["Salz", "sool"],
  ["Pfeffer", "pipar"],
  ["Öl", "õli"],
  ["Essig", "äädikas"],
  ["Honig", "mesi"],
  ["Joghurt", "jogurt"],
  ["Marmelade", "moos"],
  
  ["Nuss", "pähkel"],
  ["Popcorn", "popkorn"],
  ["Pfannkuchen", "pannkook"],
  ["Wurst", "vorst"],
  ["Sahne", "koor"],
  ["Pudding", "puding"],
  ["Torte", "kook"]
];



var vokabeln_farben = [
  ["rot", "punane"],
  ["blau", "sinine"],
  ["gelb", "kollane"],
  ["grün", "roheline"],
  ["schwarz", "must"],
  ["weiß", "valge"],
  ["orange", "oranž"],
  ["lila", "lilla"],
  ["braun", "pruun"],
  ["grau", "hall"],
  ["rosa", "roosa"],
  ["hell", "hele"],
  ["dunkel", "tume"],
  ["hellblau", "helesinine"],
  ["dunkelblau", "tumesinine"]
];




var vokabeln_kleidung = [
  ["Hose", "püksid"],
  ["Hemd", "särk"],
  ["T-Shirt", "T-särk"],
  ["Jacke", "jope"],
  ["Schuhe", "kingad"],
  ["Stiefel", "saapad"],
  ["Socke", "sokk"],
  ["Mütze", "müts"],
  ["Handschuhe", "kindad"],
  ["Schal", "sall"],
  ["Mantel", "mantel"],
  ["Pullover", "kampsun"],
  ["Kleid", "kleit"],
  ["Rock", "seelik"],
  ["Bluse", "pluus"],
  ["Anzug", "ülikond"],
  ["Krawatte", "lips"],
  ["Fliege", "kikilips"],

  ["Schlafanzug", "pidžaama"],
  ["Unterwäsche", "aluspesu"],
  ["Unterhose", "aluspüks"],
  ["BH", "rinnahoidja"],
  ["Jeans", "teksad"],
  ["Sandalen", "sandaalid"],
  ["Gürtel", "vöö"],
  ["Regenjacke", "vihmamantel"],
  ["Bikini", "bikiinid"],
  ["Weste", "vest"],
  ["Sonnenbrille", "päikeseprillid"],

  ["Kapuzenpullover", "kapuutsiga kampsun"],
  ["Strumpfhose", "sukkpüksid"],

  ["Handtasche", "käekott"],
  ["Rucksack", "seljakott"],
  ["Reißverschluss", "lukk"],
  ["Knopf", "nööp"],
  ["Schleife", "pael"],
  ["Regenstiefel", "kummikud"],
  ["Schürze", "põll"],
];



var vokabeln_moebel_und_haushalt = [
  ["Tisch", "laud"],
  ["Stuhl", "tool"],
  ["Sofa", "diivan"],
  ["Schrank", "kapp"],
  ["Lampe", "lamp"],
  ["Teppich", "vaip"],
  ["Regal", "riiul"],
  ["Fernseher", "telekas"],
  ["Buch", "raamat"],

  ["Vorhang", "kardin"],
  ["Bett", "voodi"],
  ["Kissen", "padi"],
  ["Decke", "tekk"],
  ["Bettwäsche", "voodipesu"],
  ["Matratze", "madrats"],
  ["Nachttisch", "öölaud"],

  ["Spiegel", "peegel"],
  ["Waschmaschine", "pesumasin"],
  ["Spülmaschine", "nõudepesumasin"],
  ["Staubsauger", "tolmuimeja"],
  ["Bügeleisen", "triikraud"],
  ["Bügelbrett", "triikimislaud"],

  ["Küche", "köök"],
  ["Ofen", "ahi"],
  ["Herd", "pliit"],
  ["Mikrowelle", "mikrolaineahi"],
  ["Kühlschrank", "külmkapp"],
  ["Gefrierschrank", "sügavkülmik"],
  ["Toaster", "röster"],
  ["Wasserkocher", "veekeetja"],
  ["Gabel", "kahvel"],
  ["Messer", "nuga"],
  ["Löffel", "lusikas"],
  ["Teller", "taldrik"],
  ["Tasse", "tass"],
  ["Glas", "klaas"],
  ["Pfanne", "pann"],
  ["Topf", "pott"],
  ["Schüssel", "kauss"],

  ["Eimer", "ämber"],
  ["Mülleimer", "prügikast"],
  ["Besen", "hari"],
  ["Wischmopp", "mopp"],
  ["Tuch", "lapp"],
  ["Handtuch", "käterätik"],
];




var vokabeln_familie_und_freunde = [
  ["Mutter", "ema"],
  ["Mama", "eme"],
  ["Vater", "isa"],
  ["Papi", "isi"],
  
  ["Eltern", "vanemad"],
  ["Schwester", "õde"],
  ["Bruder", "vend"],

  ["Tochter", "tütar"],
  ["Sohn", "poeg"],

  ["Großmutter", "vanaema"],
  ["Großvater", "vanaisa"],
  ["Enkel", "lapselaps"],

  ["Onkel", "onu"],
  ["Tante", "täd"],

  ["Cousin", "nõbu"],
  ["Neffe", "vennapoeg / õepoeg"],
  ["Nichte", "vennatütar / õetütar"],
  
  ["Schwiegermutter", "ämm"],
  ["Schwiegervater", "äi"],

  ["Pate", "ristiisa"],
  ["Patin", "ristiema"],

  ["Stiefmutter", "kasuema"],
  ["Stiefvater", "kasuisa"],
  ["Stiefbruder", "kasuvend"],
  ["Stiefschwester", "kasusõde"],

  ["Freund", "sõber"],
  ["Freundin", "sõbranna"],

  ["Kollege", "kolleeg"],
  ["Nachbar", "naaber"],
  ["Bekannter", "tuttav"],

  ["Verwandte", "sugulane"],
  ["Zwillinge", "kaksikud"],
  ["Drillinge", "kolmikud"],
  ["Baby", "beebi"],

  ["Kind", "laps"],
];



var vokabeln_schule_und_bildung = [
  ["Schule", "kool"],
  ["Lehrer", "õpetaja"],
  ["Schüler", "õpilane"],
  ["Klasse", "klass"],
  ["Klassenraum", "klassiruum"],
  ["Direktor", "direktor"],
  ["Fach", "aine"],
  ["Mathematik", "matemaatika"],
  ["Biologie", "bioloogia"],
  ["Chemie", "keemia"],
  ["Physik", "füüsika"],
  ["Geschichte", "ajalugu"],
  ["Erdkunde", "geograafia"],
  ["Kunst", "kunst"],
  ["Musik", "muusika"],
  ["Sport", "sport"],

  ["Englisch", "inglise keel"],
  ["Deutsch", "saksa keel"],

  ["Hausaufgaben", "kodutööd"],
  ["Test", "test"],

  ["Heft", "vihik"],
  ["Stift", "pliiats"],
  ["Lineal", "joonlaud"],
  ["Zeugnis", "tunnistus"],
  ["Note", "hinne"],
  ["Pause", "paus"],

  ["Grundschule", "algkool"],
  ["Hochschule", "kõrgkool"],
  ["Universität", "ülikool"],

  ["Student", "üliõpilane"],
  ["Semester", "semester"],

  ["Bibliothek", "raamatukogu"],
  ["Diplom", "diplom"],
  ["Bachelor", "bakalaureus"],
  ["Master", "magister"],
  ["Doktor", "doktor"],
  ["Bildung", "haridus"],
];



var vokabeln_freizeit = [
  ["Freizeit", "vabaaeg"],
  ["Hobby", "hobi"],
  ["Sport", "sport"],

  ["tanzen", "tantsima"],
  ["schwimmen", "ujuma"],
  ["joggen", "jooksma"],
  ["spazieren", "jalutama"],
  ["wandern", "matkama"],
  ["lesen", "lugema"],
  ["singen", "laulma"],
  ["malen", "maalima"],
  ["reisen", "reisima"],
  ["malen", "maalima"],
  ["kochen", "kokkama"],
  ["backen", "küpsetama"],
  ["grillen", "grillima"],
  ["spielen", "mängima"],

  ["Buch", "raamat"],
  ["Kino", "kino"],
  ["Film", "film"],
  ["Theater", "teater"],
  ["Konzert", "kontsert"],
  ["Musik", "muusika"],


  ["Instrument", "instrument"],
  ["Gitarre", "kitarr"],
  ["Klavier", "klaver"],


  ["Urlaub", "puhkus"],
  ["Strand", "rand"],
  ["Berg", "mägi"],
  ["Meer", "meri"],
  ["Museum", "muuseum"],
  ["Ausstellung", "näitus"],
  ["Handarbeit", "käsitöö"],


  ["Picknick", "piknik"],
  ["Brettspiel", "lauamäng"],
  ["Karten spielen", "kaardimäng"],
  ["Videospiel", "videomäng"],
  ["Schach", "male"],
];




var vokabeln_wetter = [
  ["Wetter", "ilm"],
  ["Temperatur", "temperatuur"],
  ["Grad", "kraad"],

  ["Sonne", "päike"],
  ["Mond", "kuu"],
  ["Stern", "täht"],

  ["Regen", "vihm"],
  ["Schnee", "lumi"],
  ["Wind", "tuul"],
  ["Wolke", "pilv"],
  ["Nebel", "udu"],
  ["Gewitter", "äike"],
  ["Blitz", "välk"],
  ["Donner", "mürin"],
  ["Hagel", "rahe"],
  ["Sturm", "torm"],
  ["Eis", "jää"],
  ["Sturm", "torm"],

  ["Sommer", "suvi"],
  ["Herbst", "sügis"],
  ["Winter", "talv"],
  ["Frühling", "kevad"],

  ["heiß", "kuumu"],
  ["kalt", "külm"],
  ["warm", "soe"],
  ["kühl", "jahe"],
  ["feucht", "niiske"],
  ["trocken", "kuiv"],
  ["glatt", "libe"],


  ["Sonnenaufgang", "päikesetõus"],
  ["Sonnenuntergang", "päikeseloojang"],
  ["Regenbogen", "vikerkaar"],
];






























// var vokabelanzahl = [
//   ["Zahlen", vokabeln_zahlen.length],
//   ["Tiere", vokabeln_tiere.length],
//   ["Essen & Trinken", vokabeln_essen_und_trinken.length],
//   ["Farben", vokabeln_farben.length],
//   ["Kleidung", 18],
//   ["Möbel & Haushalt", 22],
//   ["Familie & Freunde", 19],
//   ["Bildung", 24],
//   ["Freizeit", 20],
//   ["Wetter", 17],
//   ["Reisen & Transport", 28],
//   ["Politik", 10],
//   ["Zeit & Datum", 14]
// ];
