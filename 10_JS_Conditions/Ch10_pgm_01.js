// Guess the number

var secret = 8;

var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  }
};

// Example usage:
guess(5);  // Outputs: Too high!
guess(10); // Outputs: Too high!
guess(8);  // (No output, since it only checks for "Too high!")
