console.log("Main loaded");
//set all dice nmr so the computer can choose later for a random for the game.
const diceArray = [
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;",
];

//start credits
let playerCredits = 10;
let computerCredits = 10;

//game over
let gameOver = false;


//quary selector for all btn action that would want in prgram
const startBtn = document.querySelector(".startBtn");
const higherBtn = document.querySelector(".js-higher-btn");
const lowerBtn = document.querySelector(".js-lower-btn");
const rollBtn = document.querySelector(".js-roll-btn");
const textparagraph = document.querySelector(".text");
const compDiceElement1 = document.querySelector(".computer-dice-one");
const compDiceElement2 = document.querySelector(".computer-dice-two");
const playDiceElement1 = document.querySelector(".player-dice-one");
const playDiceElement2 = document.querySelector(".player-dice-two");
const compCreditsElement = document.querySelector(".credits1");
const playCreditsElement = document.querySelector(".credits2");

//nmr of computer dice
let computerDice1 = 0;
let computerDice2 = 0;

//and here you set the same for the player dice
let playerDice1 = 0;
let playerDice2 = 0;

//set e variabel turn for who is at turn
let computerTurn = true;

//set for if the player higher or lower has been choosen
let higher = false;

//make a line code for when the btn have to be active or be disable
btnDice.disabled = true;
higherBtn.disabled = true;
lowerBtn.disabled = true;
startBtn.disabled = false;

//give player/comp link value
compCreditsElement.textContent = computerCredits;
playCreditsElement.textContent = playerCredits;

//add click function to start btn
startBtn.addEventListener('click', function () {
  //if start btn is clicked game is false
  if (gameOver) {
    playerCredits = 10;
    computerCredits = 10;
    compCreditsElement.textContent = computerCredits;
    playCreditsElement.textContent = playerCredits;
    //after all the commands is game over ellement false so the game will start over with new score
    gameOver = false;
  }
  //print out in textcontent
  textparagraph.textContent = 'New Game.';
  //after you click on the start btn it goes disable
  startBtn.disabled = true;
  //then the dice btn is enable
  btnDice.disabled = false;
});


rollBtn.addEventListener('click', function () {


  // Function to handle the roll button being clicked

  if (computerTurn) {
    computerDice1 = getRandomInt(6);
    computerDice2 = getRandomInt(6);

    compDiceElement1.innerHTML = diceArray[computerDice1];
    compDiceElement2.innerHTML = diceArray[computerDice2];

    textparagraph.textContent = 'Computer threw, choose higher or lower.';

    higherBtn.disabled = false;
    lowerBtn.disabled = false;
    btnDice.disabled = true;
  } else {
    playerDice1 = getRandomInt(6);
    playerDice2 = getRandomInt(6);


    playDiceElement1.innerHTML = diceArray[playerDice1];
    playDiceElement2.innerHTML = diceArray[playerDice2];

    //if player chose higher ther player will get 2 points and compuetr will loose 1 point
    if (higher && computerDice1 + computerDice2 < playerDice1 + playerDice2) {
      textparagraph.textContent = 'you have choosen higher,  You won!';
      playerCredits = playerCredits + 2;
      computerCredits = computerCredits - 2;
    }
    if (higher && computerDice1 + computerDice2 > playerDice1 + playerDice2) {
      textparagraph.textContent = 'you have chooce higher,  you lost!';
      computerCredits = computerCredits + 2;
      playerCredits = playerCredits - 2;
    }
    if (!higher && computerDice1 + computerDice2 > playerDice1 + playerDice2) {
      textparagraph.textContent = 'You have chosen lower,  You won!';
      playerCredits = playerCredits + 2;
      computerCredits = computerCredits - 2;
    }
    if (!higher && computerDice1 + computerDice2 < playerDice1 + playerDice2) {
      textparagraph.textContent = 'You have chosen lower,  you lost!';
      computerCredits = computerCredits + 2;
      playerCredits = playerCredits - 2;
    }

    if (computerDice1 + computerDice2 == playerDice1 + playerDice2) {
      textparagraph.textContent = "It's a tie! No one wins.";
    }

    if (computerCredits <= 0) {
      textparagraph.textContent = 'computer has no more credits, you won resart game!';
      gameOver = true;
    }
    if (playerCredits <= 0) {
      textparagraph.textContent = 'you have no more credits, restart the game!';
      gameOver = true;
    }
    compCreditsElement.textContent = computerCredits;
    playCreditsElement.textContent = playerCredits;

    higherBtn.disabled = true;
    lowerBtn.disabled = true;
    startBtn.disabled = false;
    computerTurn = true;
  }
});

lowerBtn.addEventListener('click', function () {
  textparagraph.textContent = 'you chooce lower';
  higherBtn.disabled = true;
  lowerBtn.disabled = true;

  computerTurn = false;
  higher = true;
});

higherBtn.addEventListener('click', function () {
  textparagraph.textContent = 'you chooce higher';
  higherBtn.disabled = true;
  lowerBtn.disabled = true;

  computerTurn = false;
  higher = true;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
