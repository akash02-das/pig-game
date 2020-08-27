/*
###################### GAME RULES ######################
*** The game has 2 players, playing in rounds

*** In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score

*** BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn

*** The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn

*** The first player to reach 100 points on GLOBAL score wins the game
*/

// ############## DOM Selector ################
const btnRoll = document.querySelector('.btn-roll');
const dice = document.querySelector('.dice');
const score0 = document.getElementById('score-0');
const current0 = document.getElementById('current-0');
const score1 = document.getElementById('score-1');
const current1 = document.getElementById('current-1');

score0.textContent = '0';
current0.textContent = '0';
score1.textContent = '0';
current1.textContent = '0';

let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

dice.style.display = 'none';

// ################## FUNCTIONS ####################
// Roll Dice function
function rollDice() {
    // Random dice
    let randomDice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    dice.style.display = 'block';
    dice.src = 'dice-' + randomDice + '.png';
}


// ############### Event listener #################
btnRoll.addEventListener('click', rollDice);