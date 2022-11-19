// gör i css game-area till flex.
// skapa konstant för antal kolumner dom är faktor av numberOfCards
// skapa konstant för antal rader som är faktor av numberOfCards
// skapa konstant numberOfCards med värde 12
// fyll vid laddning av sidan spelplanen med det antal cards som numberOfCards anger
// cards = div i grid
// img borde vara oberoende av ratio på bilder, och evxvis klippa overflow till kvadrat. Vore kul om användaren kan lägga in egna bilder/bildlänkar i framtida version.
//ge

let playerCount = 2;
let playerCurrent = 1;
let playerCurrentPoints = 0;
let cardsChecked = 0;
let matchClass = "";
let darkMode = false;
let checkboxID = 1;

// skapar första spelplanen
document.body.onload = createBoard;
// tilldelar div game-area till variabel gameArea
const gameArea = document.querySelector(".table");
const myDeck = document.createElement("div");
myDeck.classList.add("deck");
gameArea.appendChild(myDeck);
// array av alla bildnamn i img-mapp. två av varje.
let unshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
// blanda dessa slumpmässigt
let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

// let untilted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let tilted = untilted
//   .map((value) => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value);

// befolka spelplanen med slumpmässigt blandade kort
function createBoard() {
  for (let deal of shuffled) {
    let myCheckbox = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.classList.add("pair-" + deal);

    myCheckbox.id = checkboxID;
    checkboxID = checkboxID + 1;
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("pair-" + deal);
    let rotation = Math.floor(Math.random() * (20 - -20 + 1) + -20);
    // let horMargin = Math.floor(
    //   Math.random() * (20 - 0 + rotation / 3) + rotation / 3
    // );
    let horMargin = Math.floor(Math.random() * (20 - 0 + 1) + 1);
    let verMargin = Math.floor(Math.random() * (10 - 0 + 1) + 1);
    card.style.transform = `rotate(${rotation}deg)`;
    card.style.margin = `${verMargin}px ${horMargin}px`;
    let front = document.createElement("u");
    let back = document.createElement("b");
    let newImage = document.createElement("img");
    newImage.src = "img/" + deal + ".jpg";
    myDeck.appendChild(card);
    card.appendChild(myCheckbox);
    card.appendChild(front);
    front.appendChild(newImage);
    card.appendChild(back);
  }
}

// let btn = document.getElementById("btn");
// btn.addEventListener("click", (event) => {
//   let cardMatch = document.querySelectorAll(".pair-5");
//   for (let aCard of cardMatch) {
//     aCard.classList.toggle("collect-p1");

//     aCard.style.transform = `translate(-70px, -100px)`;
//     aCard.style.transition = `transform 1500ms ease-in`;
//   }
// });

// Target all clicks on any element
document.addEventListener("click", (e) => {
  // Get element class(es)
  let pickedClass = e.target.className;
  //   ***** additional class since js doesn't honour unchecked input state:
  e.target.classList.toggle("checked");
  console.log("listener picked Class: ", pickedClass);
  if (pickedClass === matchClass) {
    console.log("Card MATCH!: ", matchClass);
    matchClass = "";
    console.log("A match done, emptying matchClass:", matchClass);
    const matchPair = document.querySelectorAll("." + pickedClass);
    console.log("matchPair ", matchPair);
    matchPair.forEach((match) => {
      match.style.transition = "transform 500ms ease-in 1.2s";
      //   match.style.animationDelay = "1s";
      match.style.transform = "translate(-300px, -1000px)";
      console.log("match ", match);
    });
  } else {
    matchClass = pickedClass;
    console.log("No match yet, setting matchClass:", matchClass);
  }
});

// If element has class(es)
//   if (matchClass !== "") {
//     console.log("this element has the class: ", matchClass);
//   }
//   // If element has no classes
//   else {
//     console.log("An element without a class was clicked");
//   }
