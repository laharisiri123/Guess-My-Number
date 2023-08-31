"use strict";

// document.querySelector(".message").textContent = "Correct Number!!!";

let random_number = Math.floor(Math.random() * 20) + 1;
let curr_score = Number(document.querySelector("#scoreValue").textContent);
console.log(curr_score);

let high_score = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number entered!";
  } else {
    if (random_number === guess) {
      document.querySelector(".message").textContent = "Correct Guess!!!";
      high_score = Math.max(high_score, curr_score);
      document.querySelector("#highScoreValue").textContent = high_score;
      document.querySelector(".number").textContent = random_number;
    } else if (random_number > guess) {
      document.querySelector(".message").textContent = "Too low";
      curr_score--;
      document.querySelector("#scoreValue").textContent = curr_score; // Update displayed score
    } else {
      document.querySelector(".message").textContent = "Too high";
      curr_score--;
      document.querySelector("#scoreValue").textContent = curr_score; // Update displayed score
    }
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  random_number = Math.floor(Math.random() * 20) + 1;
  curr_score = 20;
  document.querySelector("#scoreValue").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing!";
  // Reset the input box with placeholder
  let guessInput = document.querySelector(".guess");
  guessInput.value = ""; // Clear any previous input
  guessInput.placeholder = "Enter"; // Set the placeholder
});
