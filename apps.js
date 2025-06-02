
// Rock Paper And scissors

let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const resetButton = document.querySelector("#reset-btn");

//  Reset the Game
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    drawScore = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game Reset! Start Again";
};

resetButton.addEventListener("click", resetGame);

//  Play Sound Effect
const playSoundEffect = () => {
    const sound = document.querySelector("#sound-effect");
    sound.currentTime = 0;
    sound.play();
};

// Show Winner Result
const showWinner = (userWon, userChoice, computerChoice) => {
    if (userWon) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! ${userChoice} beats ${computerChoice}`;
        console.log("You win");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        console.log("You lose");
    }
};

//  Handle Draw
const handleDraw = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game is a Draw!";
    console.log("The game is a draw");
};

//  Generate Computer's Choice
const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

//  Play Game Function
const playGame = (userChoice) => {
    const computerChoice = generateCompChoice();
    if (userChoice === computerChoice) {
        handleDraw();
    } else {
        let userWon = true;

        if (userChoice === "rock") {
            userWon = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWon = computerChoice === "scissors" ? false : true;
        } else {
            userWon = computerChoice === "rock" ? false : true;
        }

        showWinner(userWon, userChoice, computerChoice);
    }
};

//  Add Event Listeners to All Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playSoundEffect();
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
