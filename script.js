// Closure for generating a random number
function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Return a function that encapsulates the random number
    return function () {
        return randomNumber;
    };
}

// Use the closure to get a random number between 1 and 100
const getRandomNumber = generateRandomNumber();

// Closure for checking the guess
function checkGuess(secretNumber) {
    return function (guess) {
        // Check if the guess matches the secret number
        if (guess === secretNumber) {
            return "Congratulations! You guessed the number!";
        } else if (guess > secretNumber) {
            return "Too high! Try again.";
        } else {
            return "Too low! Try again.";
        }
    };
}

// Generate the secret number
const secretNumber = getRandomNumber();

// Get DOM elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.querySelector(".message");

// Add an event listener to the guess button
guessButton.addEventListener("click", function () {
    // Get the user's guess as an integer
    const guess = parseInt(guessInput.value);
    // Check the user's guess using the closure
    const result = check(guess);
    // Display the result message on the web page
    message.textContent = result;
    // Clear the input field
    guessInput.value = "";
});