Explanation:

We define a closure generateRandomNumber that generates a random number between 1 and 100 and encapsulates it within the returned function.

We use generateRandomNumber to create a closure named getRandomNumber that holds our random secret number.

Next, we define a closure checkGuess that takes the secret number as an argument and returns a function to check the user's guess against the secret number.

We generate the secret number using the getRandomNumber closure.

We fetch DOM elements for the input field, guess button, and message paragraph to interact with the web page.

We add an event listener to the guess button. When clicked, this function:

Parses the user's input and converts it to an integer.
Uses the checkGuess closure to check the user's guess against the secret number.
Displays the result message on the web page.
Clears the input field.
