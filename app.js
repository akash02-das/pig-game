/*
###################### GAME RULES ######################
*** The game has 2 players, playing in rounds

*** In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score

*** BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn

*** The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn

*** The first player to reach 100 points on GLOBAL score wins the game
*/

// ############## DOM Selector ################
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

const dice = document.querySelector(".dice");
const inputFinalScore = document.querySelector(".final-score");
const player_0_panel = document.querySelector(".player-0-panel");
const player_1_panel = document.querySelector(".player-1-panel");

const name0 = document.getElementById("name-0");
const name1 = document.getElementById("name-1");
const score0 = document.getElementById("score-0");
const current0 = document.getElementById("current-0");
const score1 = document.getElementById("score-1");
const current1 = document.getElementById("current-1");

// Global Variable
let scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;

init();

// ################## FUNCTIONS ####################
// Init function
function init() {
  // Initialize the variables
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  dice.style.display = "none";
  btnHold.style.display = "none";

  score0.textContent = "0";
  current0.textContent = "0";
  score1.textContent = "0";
  current1.textContent = "0";

  name0.textContent = "Player 1";
  name1.textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// Roll Dice function
function rollDice() {
  if (gamePlaying) {
    // Random dice
    let randomDice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    dice.style.display = "block";
    dice.src = "dice-" + randomDice + ".png";

    // Update the round score IF the rolled number was NOT a 1
    if (randomDice === 6 && lastDice === 6) {
      // Player losses score
      scores[activePlayer] = 0;
      // Update the UI
      document.querySelector("#score-" + activePlayer).textContent = '0';
      // Next player
      nextPlayer();
    } else if (randomDice !== 1) {
      // Add score
      roundScore += randomDice;

      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();

      btnHold.style.display = "none";
    }
    btnHold.style.display = "block";

    lastDice = randomDice;
  }
}

// Button Hold function
function buttonHold() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Input field
    let input = inputFinalScore.value;
    // Undefined, 0, null or "" are COERCED to false
    // Anything else is COERCED to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).innerHTML =
        'Winner! <i class="ion-trophy ion-lg"></i>';
      dice.style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
}

// Next Player function
function nextPlayer() {
  // Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  current0.textContent = "0";
  current1.textContent = "0";

  player_0_panel.classList.toggle("active");
  player_1_panel.classList.toggle("active");

  setTimeout(() => {
    dice.style.display = "none";
    btnHold.style.display = "none";
  }, 600);
}

// ############### Event listener #################
btnNew.addEventListener("click", init);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", buttonHold);