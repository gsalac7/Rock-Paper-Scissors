let computer_score = 0;
let human_score = 0;

const operate = human_choice => {
  let computer_choice = "";

  const choices = ["rock", "paper", "scissors"];
  // Give the computer a random choice in the array
  computer_choice = choices[Math.floor(Math.random() * choices.length)];

  if (human_choice === computer_choice) {
    console.log("It's a tie");
    return "Neither";
  } else if (human_choice === "scissors" && computer_choice === "paper") {
    document.getElementById("display-results").innerHTML =
      "Computer chose paper and human chose scissors";
    return "Computer";
  } else if (human_choice === "paper" && computer_choice === "scissors") {
    document.getElementById("display-results").innerHTML =
      "Human chose paper and computer chose scissors!";
    return "Human";
  } else if (human_choice === "rock" && computer_choice === "scissors") {
    document.getElementById("display-results").innerHTML =
      "Human chose rock and computer chose scissors!";
    return "Human";
  } else if (human_choice === "scissors" && computer_choice === "rock") {
    document.getElementById("display-results").innerHTML =
      "Computer chose paper and human chose scissors";
    return "Computer";
  } else if (human_choice === "rock" && computer_choice === "paper") {
    document.getElementById("display-results").innerHTML =
      "Computer chose paper and human chose scissors";
    return "Computer";
  } else if (human_choice === "paper" && computer_choice === "rock") {
    document.getElementById("display-results").innerHTML =
      "Human chose paper and computer chose rock";
    return "Human";
  }
};

const check_score = function(c_score, h_score) {
  if (c_score === 5) {
    alert("Game Over Computuer Wins!");
    //Set the scores back to 0
    computer_score = 0;
    human_score = 0;
  } else if (h_score === 5) {
    alert("Congrats You Win!");
    human_score = 0;
    computer_score = 0;
  }
};

document.getElementById("rock").onclick = function() {
  if (operate("rock") === "Human") {
    console.log("human wins!");
    human_score++;
  } else if (operate("rock") === "Computer") {
    console.log("computer wins!");
    computer_score++;
  } else {
    console.log("No Winners :(");
  }
  document.getElementById("hnum").innerHTML = human_score;
  document.getElementById("cnum").innerHTML = computer_score;
  check_score(computer_score, human_score);
};

document.getElementById("paper").onclick = function() {
  if (operate("paper") === "Human") {
    console.log("human wins!");
    human_score++;
  } else if (operate("paper") === "Computer") {
    console.log("computer wins!");
    computer_score++;
  } else {
    console.log("No Winners :(");
  }
  document.getElementById("hnum").innerHTML = human_score;
  document.getElementById("cnum").innerHTML = computer_score;
  check_score(computer_score, human_score);
};

document.getElementById("scissors").onclick = function() {
  if (operate("scissors") === "Human") {
    console.log("human wins!");
    human_score++;
  } else if (operate("scissors") === "Computer") {
    console.log("computer wins!");
    computer_score++;
  } else {
    console.log("No Winners :(");
  }
  document.getElementById("hnum").innerHTML = human_score;
  document.getElementById("cnum").innerHTML = computer_score;
  check_score(computer_score, human_score);
};
