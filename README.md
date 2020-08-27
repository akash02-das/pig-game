# The Pig Game

This is a simple little dice game using Vanilla Javascript.

# Project Specification

- The init() uses to initialize state of the game
- The rollDice() uses to rolls random dices
- The buttonHold() uses to add CURRENT score to GLOBAL score
- The nextPlayer() is used to next player's turn
- players can set the winning score
- Used Ion Icons for some icons

# Game Rules

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- players can set the winning score, so that they can change the predefined score of 100
- The first player to reach winning points on GLOBAL score wins the game
