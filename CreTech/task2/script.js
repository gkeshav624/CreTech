const workDuration = 25 * 60;
const breakDuration = 5 * 60;

let currentTime = workDuration;
let timer = null;
let isRunning = false;
let isWorkMode = true;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const workModeBtn = document.getElementById("work-mode");
const breakModeBtn = document.getElementById("break-mode");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(currentTime);
}

function setTimerDuration(mode) {
  currentTime = mode === "work" ? workDuration : breakDuration;
}

function toggleMode(isWork) {
  isWorkMode = isWork;
  workModeBtn.classList.toggle("active", isWork);
  breakModeBtn.classList.toggle("active", !isWork);
  setTimerDuration(isWork ? "work" : "break");
  updateTimerDisplay();
  stopTimer();
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  timer = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert(isWorkMode ? "Work time is over! Take a break." : "Break time is over! Back to work.");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  setTimerDuration(isWorkMode ? "work" : "break");
  updateTimerDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
workModeBtn.addEventListener("click", () => toggleMode(true));
breakModeBtn.addEventListener("click", () => toggleMode(false));

updateTimerDisplay();
