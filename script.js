let startBtn = document.querySelector(".startbtn");
let info = document.querySelector(".instructions");
let gamearea = document.querySelector(".gamearea");
let redBox = document.querySelector(".redbox");
let finalscore = document.querySelector(".score");
let timer = document.querySelector(".timer");

let score = 0;
let timeinterval;
let count = 20;

startBtn.addEventListener("click", () => {
  info.style.display = "none";
  gamearea.style.display = "block";
  startBtn.style.display = "none";
  MoveRedBox();
  startimer();
});
redBox.addEventListener("click", () => {
  score++;
  finalscore.textContent = score;
  MoveRedBox();
});
function MoveRedBox() {
  let width = gamearea.clientWidth - 50;
  let height = gamearea.clientHeight - 50;
  let x = Math.random() * width;
  let y = Math.random() * height;

  redBox.style.left = x + "px";
  redBox.style.top = y + "px";
}

function startimer() {
  
  timer.textContent = count;
  timeinterval = setInterval(() => {
    count--;
    timer.textContent = count;
    if (count === 0) {
      EndGame();
    }
  }, 1000);
}
function EndGame() {
  clearInterval(timeinterval);
  alert("Game Over! Your final score is: " + score);
  gamearea.style.display = "none";
  info.style.display = "block";
  startBtn.style.display = "block";
  ScoreReset();
}
function ScoreReset() {
  score = 0;
  finalscore.textContent = score;
  count = 20;
}
