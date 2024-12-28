let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');


const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const draw = () => {
    msg.innerHTML = `Game is Draw`;
    msg.style.backgroundColor = '#081927';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
};

const playGame = (userChoice) => {
    let userWin = true;
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});