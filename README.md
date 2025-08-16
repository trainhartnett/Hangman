User Stories:

1. As a player, I want to know the game and instructions, so that I understand how to play the game.

2. As a player, I want to click on boxes to select, so that I can enter/guess a letter of the hidden word.

3. As a player, I want see visual feedback after guessing a letter, so that I know whether I've guess right or not.

4. As a player, I want see the life of hangman being built as I guess letters correctly, so that I have a goal to accomplish and a reason to win.

5. As a player, I want an option to play again, so that I can guess a different word.


//Game Flow Pseudocode

To start the Hangman game, display the game title and instructions to the player.
Randomly select a hidden word from a predefined list.
Show the player blank spaces representing each letter in the word.
Present clickable letter boxes for the player to choose from.
When the player clicks a letter, check if the letter is in the hidden word.
If the guess is correct, reveal the letter in all its positions and provide positive feedback.
If the guess is incorrect, visually update the hangman drawing to show a new part and provide negative feedback.
Continue this process until the player either guesses all the letters correctly (winning the game) or the hangman drawing is completed (losing the game).
After the game ends, display a message indicating whether the player won or lost, reveal the correct word if necessary, and offer an option to play again with a new game.