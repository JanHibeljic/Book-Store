let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

// Aufruf der Funktionen
function init() {
  renderBook(); // Diese Funktion fügt alle Bücher hinzu
}

function renderBook() {
  let content = document.getElementById("bookContentFrame");
  // Initialisiere den HTML Content um alle Bücher zu rendern
  let bookHTML = "";
  // Iteriere über alle Bücher und füge HTML für jedes Buch hinzu
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    bookHTML += `
      <div class="book">
        <h2 id="bookTitle">${books[indexBook].name}</h2>
        <img class="bookIcon" src="./images/book-161117_640.png" alt="Book Icon">
        <div>
          <p>Preis: ${books[indexBook].price} €</p>
          <div id="likeContainer"><span class="likesCounter" id="likeCounter">1250</span><img
      class="zoom"
      id="likeImg"
      src="./images/blackheart.png"
      alt="Like"
      onclick="toggleLike()"
    /></div>
        </div>
        <p>Autor: ${books[indexBook].author}</p>
        <p>Erscheinungsjahr: ${books[indexBook].publishedYear}</p>
        <p>Genre: ${books[indexBook].genre}</p>
      </div>
    `;
  }

  // Setze den gesammelten HTML-Inhalt in den Container
  content.innerHTML = bookHTML;
}

//likescounter
let likeCounter = 1250;
let isLiked = false;
//Funktion wird aufgerufen wenn der Like Button geklickt wird.
function toggleLike() {
  let likeImg = document.getElementById("likeImg");

  if (isLiked) {
    likeCounter--;
    likeImg.src = "./images/blackheart.png";
  } else {
    likeCounter++;
    likeImg.src = "./images/redheart.png";
  }
  document.getElementById("likeCounter").textContent = likeCounter;
  isLiked = !isLiked;
}

//Kommentar senden
function sendCommend() {
  const commentInput = document.getElementById("commentInput");
  const comment = commentInput.value;

  //Überprüft ob das Input leer ist
  if (comment == "") {
    alert("Bitte Kommentar einfügen");
    return false;
  }

  //Speichert den Kommentar als Objekt
  const commentObject = {
    text: comment,
  };
  console.log("Kommentar:", commentObject);
  //Inputinhalt zurückgesetzt
  commentInput.value = "";
}
