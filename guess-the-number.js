'use strict'

function guessNumberGame() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let numberAttempts = 10;

    function askPlayer() {

        const playerInput = prompt(`Угадай число от 1 до 100. Осталось попыток: ${numberAttempts}`);

        const checkingRemainingAttempts = function (numberAttempts) {
            if (numberAttempts > 0) {
                (playerNumber > randomNumber) ? alert(`Загаданное число меньше. Осталось попыток: ${numberAttempts}`) :
                    alert(`Загаданное число больше. Осталось попыток: ${numberAttempts}`);
                askPlayer();
            } else {
                alert("Попытки закончились.Хотите сыграть еще?");
                if (confirm("Хотите сыграть еще?")) {
                    guessNumberGame();
                } else {
                    alert("Спасибо за игру!");
                }
            }
        }

        if (playerInput === null) {
            alert("Игра окончена");
            return;
        }

        const playerNumber = +playerInput.trim();

        if (isNaN(playerNumber)) {
            alert("Введите число!");
            askPlayer();
            return;
        }

        if (playerNumber > randomNumber) {
            numberAttempts--;
            checkingRemainingAttempts(numberAttempts);
        } else if (playerNumber < randomNumber) {
            numberAttempts--;
            checkingRemainingAttempts(numberAttempts);
        } else {
            alert("Поздравляю, вы угадали!!! Хотели бы сыграть ещё?");
            if (confirm("Хотите сыграть еще?")) {
                guessNumberGame();
            } else {
                alert("Спасибо за игру!");
            }
        }
    }

    askPlayer();
}

guessNumberGame();