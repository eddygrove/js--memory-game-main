let playerCount = 2;
let playerCurrent = 1;
let playerCurrentPoints = 0;
let darkMode = false;
let deckSize = 6;
let cardsChosenId = [];
let cardsChosen = [];
let autoBack = false;
let playOn = true;
let p1Score = 0;
let p2Score = 0;
let p3Score = 0;

// skapar första spelplanen
document.body.onload = createBoard;
// tilldelar div game-area till variabel gameArea
const gameArea = document.querySelector(".table");
const myDeck = document.createElement("div");
myDeck.classList.add("deck");
gameArea.appendChild(myDeck);
// array av alla bildnamn i img-mapp. två av varje.
let allImages = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
];
let unshuffled = allImages.slice(0, deckSize);
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
    //   for (let deal = 1; deal < deckSize; deal++) {
    // change this element <input> to a <div>?
    let myCheckbox = document.createElement("input");
    myCheckbox.type = "checkbox";
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
    console.log("deckSize: ", deckSize);
    card.addEventListener("click", flipCard);
  }
}

function flipCard() {
  // variable markThis to mark child element <input> of card instead of <div> card itself, remnant from css-only card flip
  let markThis = this.querySelector("input");
  //   if two non-matching cards are flipped, no more card picks are allowed:
  if (!playOn) {
    console.log("playOn: ", playOn);
    // the cards are to be manually flipped back, allowing for memorising at preferred pace:
    // card was flipped:
    if (markThis.classList.contains("checked")) {
      console.log("was checked");
      markThis.classList.toggle("checked");
      console.log("cardsChosen now: ", cardsChosen);
      let flipBack = this.getAttribute("class");
      let index = cardsChosen.indexOf(flipBack);
      cardsChosen.splice(index, 1);
      console.log("cardsChosen trimmed: ", cardsChosen);

      // if the full unmatching pair is flipped back, the turn is passed to next player
      //   if (noOfCards === 0) {
      if (cardsChosen.length === 0) {
        // cardsChosen = [];
        playOn = true;
        // ****>  Next player logic here
      }
      return;
    } else {
      console.log("was unchecked");
      return;
      //
    }
  }
  //   No messing around with an already flipped single:
  if (markThis.classList.contains("checked")) {
    return;
  }
  markThis.classList.add("checked");
  // let pickId = this.getAttribute("id");
  // console.log("pickId: ", pickId);
  let pickClass = this.getAttribute("class");
  console.log("pickClass: ", pickClass);
  // cardsChosenId.push(pickId);
  //   push the picked card's class into array cardsChosen:
  cardsChosen.push(pickClass);

  if (cardsChosen.length === 2) {
    //   checkForMatch();
    console.log("2 cards picked: ", cardsChosen);
    console.log("cardsChosen[0]: ", cardsChosen[0]);
    console.log("cardsChosen[1]: ", cardsChosen[1]);
    if (cardsChosen[0] === cardsChosen[1]) {
      //   alert("Matchhie");

      let splitString = cardsChosen[0].split(" ");
      let lastWord = splitString[splitString.length - 1];
      let matchPair = document.querySelectorAll("." + lastWord);
      matchPair.forEach((match) => {
        match.style.transition =
          "transform 700ms cubic-bezier(0.97, 0.03, 0.42, 0.57) 1.2s";

        match.style.transform = "translate(-300px, -1000px)";
      });
      cardsChosen = [];
    } else if (!autoBack) {
      playOn = false;
      return;

      //   **** AUTOBACK option not working:
      // } else {
      //   console.log(
      //     "autoBack true and cardsChosen.length = 2...? cardsChosen.length:",
      //     cardsChosen.length
      //   );
      //   // ****> flip back cards
      //   let flipBack = document.querySelectorAll(".checked");
      //   flipBack.forEach((flip) => {
      //     flip.classList.toggle("checked");
      //   });
      //   cardsChosen = [];
    }
  }
}

// check for match

function checkForMatch() {
  if (cardsChosen[0] === cardsChosen[1]) alert("Matchhie");
}
