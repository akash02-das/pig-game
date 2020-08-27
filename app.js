/*
###################### GAME RULES ######################
*** The game has 2 players, playing in rounds

*** In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score

*** BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn

*** The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn

*** The first player to reach 100 points on GLOBAL score wins the game
*/

// ############## DOM Selector ################
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const dice = document.querySelector('.dice');
const player_0_panel = document.querySelector('.player-0-panel');
const player_1_panel = document.querySelector('.player-1-panel');

const name0 = document.getElementById('name-0');
const name1 = document.getElementById('name-1');
const score0 = document.getElementById('score-0');
const current0 = document.getElementById('current-0');
const score1 = document.getElementById('score-1');
const current1 = document.getElementById('current-1');

init();

// ################## FUNCTIONS ####################
// Init function
function init() {
    // Initialize the variables
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    dice.style.display = 'none';

    score0.textContent = '0';
    current0.textContent = '0';
    score1.textContent = '0';
    current1.textContent = '0';

    name0.textContent = 'Player 1';
    name1.textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

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
        nextPlayer();
    }
}

// Button Hold function
function buttonHold() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        dice.style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer();
    }


}

// Next Player function
function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    current0.textContent = '0';
    current1.textContent = '0';

    player_0_panel.classList.toggle('active');
    player_1_panel.classList.toggle('active');

    dice.style.display = 'none';
}

// ############### Event listener #################
btnNew.addEventListener('click', init);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', buttonHold);