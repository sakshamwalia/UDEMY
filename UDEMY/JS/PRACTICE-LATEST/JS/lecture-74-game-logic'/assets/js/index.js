`use strict`;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);

let score = 20;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {

    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);


    // WHEN THERE IS NO INPUT
    if (!guess) {

        displayMessage(`Please Input The Number First !`);

    }

    // WHEN PLAYER WINS
    else if (guess === secretNumber) {

        displayMessage(`Correct Number 🎉`)
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.box-for-secret-number`).style.width = `20rem`;
        document.querySelector(`.box-for-secret-number`).textContent = secretNumber;

        if (score > highscore) {

            highscore = score;
            document.querySelector(`.highscore-change`).textContent = highscore;

        }
    }


    // WHEN GUESS IS WRONG
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(`.message`).textContent = guess > secretNumber ? `Too High` : `Too Low`;
            displayMessage(guess > secretNumber ? `Too High 📈` : `Too Low 📉`)
            score--;
            document.querySelector(`.score-change`).textContent = score;
        }
        else {
            // document.querySelector(`.message`).textContent = `You Lost the game !`;
            displayMessage(`You Lost The Game 💥`)
            document.querySelector(`.score-change`).textContent = 0;
            document.querySelector(`body`).style.backgroundColor = `red`;
        }
    }

    // WHEN GUESS IS TOO HIGH
    // else if (guess > secretNumber) {

    //     if (score > 1) {
    //         document.querySelector(`.message`).textContent = `Too High 📈`;
    //         score--;
    //         document.querySelector(`.score-change`).textContent = score;
    //     }
    //     else {

    //         document.querySelector(`.message`).textContent = `💥 You Lost the game`;
    //         document.querySelector(`.score-change`).textContent = 0;

    //     }

    // }


    // WHEN GUESS IS TOO LOW
    // else if (guess < secretNumber) {

    //     if (score > 1) {
    //         document.querySelector(`.message`).textContent = `Too Low 📈`;
    //         score--;
    //         document.querySelector(`.score-change`).textContent = score;
    //     }
    //     else {

    //         document.querySelector(`.message`).textContent = `💥 You Lost the game`;
    //         document.querySelector(`.score-change`).textContent = 0;

    //     }

    // }

})

document.querySelector(`.again`).addEventListener(`click`, function () {

    // REASSIGNING THE VALUES TO INITIAL VALUES
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector(`.score-change`).textContent = score;
    document.querySelector(`.box-for-secret-number`).textContent = `?`;
    // document.querySelector(`.message`).textContent = `Start Guessing !`;
    displayMessage(`Start Guessing !`)
    document.querySelector(`.guess`).value = ``;  // EMPTY STRING (INPUT WILL ALWAYS GIVE VALUE IN STRING, SO THATS WHY WE USE EMPTY STRING AS INITIAL VALUE HERE)
    // document.querySelector(`.guess`).value = null;
    document.querySelector(`body`).style.backgroundColor = `#000`;
    document.querySelector(`.box-for-secret-number`).style.width = `200px`;

})