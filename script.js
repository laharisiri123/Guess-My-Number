"use strict";

// document.querySelector(".message").textContent = "Correct Number!!!";

let random_number = Math.floor(Math.random() * 20) + 1;
let curr_score = Number(document.querySelector("#scoreValue").textContent);
console.log(curr_score);

let high_score = 0;
let flag = false;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  if (flag) {
    document.querySelector(".message").textContent =
      "You guessed already! Play again";
  } else {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
      displayMessage("No number entered!");
    } else {
      // equal to secret NUmber
      if (random_number === guess) {
        displayMessage("Correct Guess!!!");
        high_score = Math.max(high_score, curr_score);
        document.querySelector("#highScoreValue").textContent = high_score;
        document.querySelector(".number").textContent = random_number;
        flag = true;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".message").style.color = "blue";

        // not equal to secret Number
      } else {
        if (curr_score > 1) {
          displayMessage(random_number > guess ? "Too low" : "Too high");
          curr_score--;
          document.querySelector("#scoreValue").textContent = curr_score; // Update displayed score
        } else {
          displayMessage("You lost the game :(");
          curr_score = 0;
          document.querySelector("#scoreValue").textContent = curr_score; // Update displayed score
        }
      }
    }
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  random_number = Math.floor(Math.random() * 20) + 1;
  curr_score = 20;
  document.querySelector("#scoreValue").textContent = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start Guessing!");
  // Reset the input box with placeholder
  let guessInput = document.querySelector(".guess");
  guessInput.value = ""; // Clear any previous input
  guessInput.placeholder = "Enter"; // Set the placeholder
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").style.color = "rgba(207, 214, 14, 0.873)";
  flag = false;
});
