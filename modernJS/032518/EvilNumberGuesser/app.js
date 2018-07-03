// Game Values
let min = 1,
    max = 3,
    winningNum = 4123,
    guessesLeft = 1;

//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');




//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Play Again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

});



// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    // console.log(guess);


    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter a number between ${min} and ${max}`, 'red');


    }
    // Check if won
    else if(guess === winningNum){
        // Game over- won

        gameOver(true, `${winningNum} is correct, YOU WIN!`);



    } else {
        //Wrong number
        guessesLeft -= 1;


        if(guessesLeft === 0){
            // Game over - lost
            let guess = parseInt(guessInput.value);
            if (guess === max){
                guess -=1;
            } else{
                guess +=1;
            }


            gameOver(false, `Game Over, you lost. The correct number was ${guess}`);

        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

        }


    }

});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';


}

// Get Random number



// // Get Random number
// function getRandomNum(min, max){
//     return Math.floor(Math.random()*(max-min+1)+min);
//
// }
//



// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;

}

winningNum = parseInt(guessInput.value) + 1;