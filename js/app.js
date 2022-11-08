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
const gameArea = document.querySelector(".game-area");

// array av alla bildnamn i img-mapp. två av varje.
let unshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// blanda dessa slumpmässigt
let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

// befolka spelplanen med slumpmässigt blandade kort
function createBoard() {
  for (let deal of shuffled) {
    let check = document.createElement("input");
    check.type = "checkbox";
    check.id = "toggle-" + deal;
    check.classList.add("checkbox_hidden");
    let card = document.createElement("div");
    card.classList.add("card");
    let innerCard = document.createElement("div");
    innerCard.classList.add("card_inner");
    let newImage = document.createElement("img");
    newImage.src = "img/" + deal + ".jpeg";
    newImage.classList.add("front-image");
    gameArea.appendChild(check);
    gameArea.appendChild(card);
    card.appendChild(innerCard);
    innerCard.appendChild(newImage);
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
