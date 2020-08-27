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
const player_0_panel = document.querySelector('.player-0-panel');
const player_1_panel = document.querySelector('.player-1-panel');

const score0 = document.getElementById('score-0');
const current0 = document.getElementById('current-0');
const score1 = document.getElementById('score-1');
const current1 = document.getElementById('current-1');

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

    // Update the round score IF the rolled number was NOT a 1
    if (randomDice !== 1) {
        // Add score
        roundScore += randomDice;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        current0.textContent = '0';
        current1.textContent = '0';

        player_0_panel.classList.toggle('active');
        player_1_panel.classList.toggle('active');

        dice.style.display = 'none';
    }
}


// ############### Event listener #################
btnRoll.addEventListener('click', rollDice);