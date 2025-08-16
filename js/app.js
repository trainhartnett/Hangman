/*-------------- Constants -------------*/

const maxGuesses = 6;   

/*---------- Variables (state) ---------*/


let currentWord
let corrrectLetters
let wrongGuessCount


/*----- Cached Element References  -----*/

const wordDisplay = document.querySelector(".word-display");
const gussesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hangmanImage = document.querySelector(".hangman-img")

/*-------------- Functions -------------*/

const resetGame = () => {
    corrrectLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src="images/hangman-0.svg";
    gussesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    //create the empty letter slots
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    //enable keyboard buttons
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    // Hide the game modal
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    //pick random word with hint
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
//set the current word and update
currentWord = word;
document.querySelector(".hint-text b").innerText = hint;
resetGame();
}

//win or lose
const gameOver = (isVictroy) => {
    const modalText = isVictroy ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictroy ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictroy ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

//display keyboard
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
    console.log("adding button")
}

//handle game logic when letter clicked
const initGame = (button, clickedLetter) => {
    //check if the letter in current word
    if (currentWord.includes(clickedLetter)) {
        //update the letter if clicked is correct
        [...currentWord].forEach((letter, index) =>{
            if (letter === clickedLetter) {
                corrrectLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        //update wrong guess count
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    //disable the clicked buttons
    button.disabled = true;
    //update the displayed guess count
    gussesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    //check if the game end win or lose
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (corrrectLetters.length === currentWord.length) return gameOver(true);
}

/*----------- Event Listeners ----------*/

getRandomWord();
//add play again function
playAgainBtn.addEventListener("click", getRandomWord)
