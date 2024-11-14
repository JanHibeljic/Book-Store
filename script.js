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

// Diese Funktion erstellt das HTML für ein einzelnes Buch basierend auf den übergebenen Buchdaten
function getBookHTML(book, index) {
  // Der ternäre Operator entscheidet basierend auf dem liked-Status des Buchs, welches Icon angezeigt werden soll
  let likeIcon = book.liked
    ? "./images/redheart.png" // Wenn liked true ist, wird das rote Herz angezeigt
    : "./images/blackheart.png"; // Wenn liked false ist, wird das schwarze Herz angezeigt

  // Initialisiere den HTML-String für das Like-Element, damit es unabhängig vom Liked-Status immer angezeigt wird
  let likeHTML = /*HTML*/ `
    <div id="likeContainer-${index}">
      <span class="likesCounter" id="likeCounter-${index}">${book.likes}</span>
      <img
        class="zoom"
        id="likeImg-${index}"
        src="${likeIcon}"
        alt="Like"
        onclick="toggleLike(${index})"  /* Klick-Event zum Ändern des Like-Status */
      />
    </div>
  `;

  // Erstelle das HTML für die Kommentare des Buches
  let commentsHTML = "";
  if (book.comments.length > 0) {
    commentsHTML = '<div class="comments"><h3>Kommentare:</h3>';
    for (let i = 0; i < book.comments.length; i++) {
      commentsHTML += `<p><strong>${book.comments[i].name}:</strong> ${book.comments[i].comment}</p>`;
    }
    commentsHTML += "</div>";
  }

  // Eingabefeld und Senden-Button für neue Kommentare
  commentsHTML += /*HTML*/ `
    <div class="add-comment">
      <input type="text" id="commentInput-${index}" placeholder="Schreibe dein Kommentar">
      <button onclick="sendComment(${index})">senden</button>
    </div>
  `;

  // Erstelle das HTML für das gesamte Buch und füge alle relevanten Daten hinzu
  return /*HTML*/ `
    <div class="book">
      <h2 id="bookTitle">${book.name}</h2>
      <img class="bookIcon" src="./images/book-161117_640.png" alt="Book Icon">
      <div>
        <p>Preis: ${book.price} €</p>
        ${likeHTML}  
      </div>
      <p>Autor: ${book.author}</p>
      <p>Erscheinungsjahr: ${book.publishedYear}</p>
      <p>Genre: ${book.genre}</p>
      ${commentsHTML}
    </div>
  `;
}

// Diese Funktion rendert alle Bücher und fügt sie dem HTML-Container hinzu
function renderBook() {
  let content = document.getElementById("bookContentFrame");
  // Initialisiere den HTML-Content, um alle Bücher zu rendern
  let bookHTML = "";
  // Iteriere über alle Bücher und füge HTML für jedes Buch hinzu
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    bookHTML += getBookHTML(books[indexBook], indexBook);
  }

  // Setze den gesammelten HTML-Inhalt in den Container
  content.innerHTML = bookHTML;
}

// Diese Funktion wird aufgerufen, wenn der Benutzer auf das Like-Icon klickt
function toggleLike(index) {
  let book = books[index]; // Hole das entsprechende Buch basierend auf dem Index
  let likeImg = document.getElementById(`likeImg-${index}`); // Referenziere das Like-Icon
  let likeCounterElement = document.getElementById(`likeCounter-${index}`); // Referenziere den Like-Counter

  // Überprüfe den aktuellen liked-Status des Buchs und ändere den Status entsprechend
  if (book.liked) {
    book.likes--; // Verringere den Like-Counter
    book.liked = false; // Setze den liked-Status auf false
    likeImg.src = "./images/blackheart.png"; // Ändere das Icon auf das schwarze Herz
  } else {
    book.likes++; // Erhöhe den Like-Counter
    book.liked = true; // Setze den liked-Status auf true
    likeImg.src = "./images/redheart.png"; // Ändere das Icon auf das rote Herz
  }

  // Aktualisiere den Like-Counter im HTML-Element
  likeCounterElement.textContent = book.likes;
}

// Diese Funktion wird aufgerufen, wenn der Benutzer einen Kommentar absendet
function sendComment(index) {
  const commentInput = document.getElementById(`commentInput-${index}`); // Hole das Eingabefeld basierend auf dem Index des Buches
  const comment = commentInput.value; // Hole den Wert des Eingabefeldes

  // Überprüft ob das Input leer ist
  if (comment == "") {
    alert("Bitte Kommentar einfügen"); // Zeige eine Warnung an, wenn das Eingabefeld leer ist
    return false; // Beende die Funktion, wenn das Eingabefeld leer ist
  }

  // Speichert den Kommentar als Objekt
  const commentObject = {
    name: "userJan", // Name des Benutzers, der den Kommentar schreibt
    comment: comment, // Der eingegebene Kommentar
  };

  // Fügt den neuen Kommentar zum entsprechenden Buch hinzu
  books[index].comments.push(commentObject); // Füge den Kommentar zum comments-Array des entsprechenden Buches hinzu

  // Rendert die Bücher neu, um den neuen Kommentar anzuzeigen
  renderBook(); // Rufe die renderBook-Funktion auf, um die Ansicht zu aktualisieren

  // Inputinhalt zurückgesetzt
  commentInput.value = ""; // Setze den Inhalt des Eingabefeldes zurück
}

/**
 * Programmablaufs und Funktionen:
 *
 * 1. `getBookHTML(book, index)`:
 *    - Diese Funktion erstellt das HTML für ein einzelnes Buch.
 *    - Basierend auf dem `liked`-Status des Buches wird das entsprechende Like-Icon (rotes oder schwarzes Herz) gewählt.
 *    - Es werden die Informationen des Buches wie Titel, Autor, Preis, Erscheinungsjahr und Genre in HTML-Elemente eingefügt.
 *    - Kommentare des Buches werden ebenfalls eingefügt, falls vorhanden.
 *    - Zusätzlich wird ein Eingabefeld und ein Button hinzugefügt, um neue Kommentare zu schreiben.
 *
 * 2. `renderBook()`:
 *    - Diese Funktion rendert alle Bücher auf der Webseite.
 *    - Es wird durch die gesamte `books`-Liste iteriert und für jedes Buch wird das HTML mithilfe der `getBookHTML()`-Funktion generiert.
 *    - Der gesamte HTML-Content wird dann in das Element mit der ID `bookContentFrame` eingefügt, um die Bücher anzuzeigen.
 *
 * 3. `toggleLike(index)`:
 *    - Diese Funktion wird aufgerufen, wenn der Benutzer auf das Like-Icon klickt.
 *    - Der `liked`-Status des Buches wird umgeschaltet (also von `true` zu `false` oder umgekehrt).
 *    - Abhängig vom neuen Status wird der Like-Counter erhöht oder verringert und das entsprechende Like-Icon (rotes oder schwarzes Herz) gesetzt.
 *    - Der aktualisierte Like-Counter wird im HTML-Element angezeigt.
 *
 * 4. `sendComment(index)`:
 *    - Diese Funktion wird aufgerufen, wenn der Benutzer einen Kommentar absendet.
 *    - Es wird überprüft, ob das Eingabefeld leer ist. Falls ja, wird eine Warnung angezeigt und die Funktion beendet.
 *    - Wenn das Eingabefeld nicht leer ist, wird ein neues Kommentarobjekt erstellt und dem `comments`-Array des entsprechenden Buches hinzugefügt.
 *    - Danach wird die Funktion `renderBook()` aufgerufen, um die aktualisierte Liste der Bücher inklusive des neuen Kommentars anzuzeigen.
 *    - Das Eingabefeld wird anschließend geleert.
 *
 * Allgemeiner Programmablauf:
 * - Das Programm besteht aus einer Liste von Büchern (`books`), wobei jedes Buch mehrere Eigenschaften wie Titel, Autor, Kommentare usw. hat.
 * - Beim Laden der Seite wird die Funktion `init()` aufgerufen, welche die Funktion `renderBook()` verwendet, um die Bücher anzuzeigen.
 * - Benutzer kann Bücher liken oder Kommentare hinzufügen, was jeweils die entsprechenden Funktionen (`toggleLike()` und `sendComment()`) auslöst.
 * - Die Funktionen aktualisieren die Buchdaten und rendern die aktualisierte HTML-Ansicht, sodass der Benutzer die Änderungen sofort sieht.
 

 * Erklärung des ternären Operators
 * Der ternäre Operator ist eine Kurzform von if...else. Er wird verwendet, um einen Wert basierend auf einer Bedingung auszuwählen.
 * Die allgemeine Syntax lautet: Bedingung ? WertWennTrue : WertWennFalse;
 * In diesem Code wird der ternäre Operator verwendet, um das entsprechende Like-Icon basierend auf dem liked-Status des Buchs auszuwählen.
 * Wenn book.liked true ist, wird das schwarze Herz ausgewählt. Wenn book.liked false ist, wird das rote Herz ausgewählt.
**/
