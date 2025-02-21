// Constants for moves
const Rock = 0;
const Paper = 1;
const Scissor = 2;

// Initialize score from localStorage or default to 0
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Update the score display on page load
updateScoreDisplay();
let isAutoPlaying = false;
var intervalId;
// Function to autoplay
function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerMove = Math.floor(Math.random() * 3);
      playGame(playerMove);
    },2000);
    isAutoPlaying = true;
  }else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
  
}

// Function to play the game
function playGame(playerMove) {
  // Disable buttons while the computer is "thinking"
  document.querySelectorAll('.move-button').forEach(button => {
    button.disabled = true;
  });

  // Show a loading message
  document.getElementById("result-message").innerText = "Thinking...";

  // Delay the computer's move
  setTimeout(() => {
    const computerMove = Math.floor(Math.random() * 3);
    const result = determineWinner(playerMove, computerMove);

    const moveNames = ["Rock", "Paper", "Scissor"];
    const imagePaths = {
      Rock: "images/js-rock.png",
      Paper: "images/js-paper.png",
      Scissor: "images/js-scrissor.png"
    };

    document.getElementById("player-move-img").src = imagePaths[moveNames[playerMove]];
    document.getElementById("computer-move-img").src = imagePaths[moveNames[computerMove]];
    document.getElementById("result-message").innerText = result;
    updateScoreDisplay();
    localStorage.setItem('score', JSON.stringify(score));

    // Re-enable buttons
    document.querySelectorAll('.move-button').forEach(button => {
      button.disabled = false;
    });
  }, 600); // 1-second delay
}

// Function to determine the winner
function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    score.ties++;
    return "It's a tie!";
  } else if (
    (playerMove === Rock && computerMove === Scissor) ||
    (playerMove === Scissor && computerMove === Paper) ||
    (playerMove === Paper && computerMove === Rock)
  ) {
    score.wins++;
    return "You win!";
  } else {
    score.losses++;
    return "You lose!";
  }
}

// Function to reset the score
function resetScore() {
  const isConfirmed = confirm("Are you sure you want to reset the score?");
  if (isConfirmed) {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreDisplay();
    localStorage.setItem('score', JSON.stringify(score));

    // Clear move images and result message
    document.getElementById("player-move-img").src = "images/js-scrissor.png";
    document.getElementById("computer-move-img").src = "images/js-scrissor.png";
    document.getElementById("result-message").innerText = "";
  }
}

// Function to update the score display
function updateScoreDisplay() {
  document.querySelector("#result p").innerText =
    `Your score: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  if (key === 'R') playGame(Rock);
  else if (key === 'P') playGame(Paper);
  else if (key === 'S') playGame(Scissor);
});