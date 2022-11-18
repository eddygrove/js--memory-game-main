// gör i css game-area till flex.
// skapa konstant för antal kolumner dom är faktor av numberOfCards
// skapa konstant för antal rader som är faktor av numberOfCards
// skapa konstant numberOfCards med värde 12
// fyll vid laddning av sidan spelplanen med det antal cards som numberOfCards anger
// cards = div i grid
// img borde vara oberoende av ratio på bilder, och evxvis klippa overflow till kvadrat. Vore kul om användaren kan lägga in egna bilder/bildlänkar i framtida version.
//ge

// skapar första spelplanen
document.body.onload = createBoard;
// tilldelar div game-area till variabel gameArea
const gameArea = document.querySelector(".table");
const myDeck = document.createElement("div");
myDeck.classList.add("deck");
gameArea.appendChild(myDeck);
console.log("skapat Dynamical Deck°");
// array av alla bildnamn i img-mapp. två av varje.
let unshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
// blanda dessa slumpmässigt
let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

let untilted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tilted = untilted
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

// befolka spelplanen med slumpmässigt blandade kort
function createBoard() {
  for (let deal of shuffled) {
    let myCard = document.createElement("input");
    myCard.type = "checkbox";
    myCard.id = "toggle-" + deal;
    // ge checkboxen klass för att flytta den ur sidan
    // myCard.classList.add("checkbox_hidden");
    // let container = document.createElement("label");
    // container.classList.add("container");
    // container.htmlFor = "toggle-" + deal;
    let tilt = document.createElement("div");
    tilt.classList.add("tilt");
    let rotation = Math.floor(Math.random() * (20 - -19 + 1) + -19);
    // let horMargin = Math.floor(
    //   Math.random() * (20 - 0 + rotation / 3) + rotation / 3
    // );
    let horMargin = Math.floor(Math.random() * (20 - 0 + 1) + 1);
    let verMargin = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    tilt.style.transform = `rotate(${rotation}deg)`;
    tilt.style.margin = `${verMargin}px ${horMargin}px`;
    let front = document.createElement("u");
    // front.classList.add("card", "front");
    let back = document.createElement("b");
    // back.classList.add("card", "back");
    let newImage = document.createElement("img");
    newImage.src = "img/" + deal + ".jpg";
    // newImage.classList.add("front-image");
    myDeck.appendChild(tilt);
    tilt.appendChild(myCard);
    tilt.appendChild(front);
    front.appendChild(newImage);
    tilt.appendChild(back);
  }
}

{
  /* <input type="checkbox" id="toggle-1">
<label class="container" for="toggle-1">
  <div class="card front"></div>
  <div class="card back">i am back</div>
</label> */
}

// befolka spelplanen med slumpmässigt blandade kort
{
  /* function createBoard() {
  for (let deal of shuffled) {
    let card = document.createElement("div");
    card.classList.add("card");
    let innerCard = document.createElement("div");
    innerCard.classList.add("card_inner");
    let newImage = document.createElement("img");
    newImage.src = "img/" + deal + ".jpeg";
    newImage.classList.add("front-image");
    gameArea.appendChild(card);
    card.appendChild(innerCard);
    innerCard.appendChild(newImage);
  }
} */
}
