let secondCount = 0;
let stopWatch;
const displayPara = document.querySelector('.clock');

function displayCount() {
  let hours = Math.floor(secondCount/3600);
  let minutes = Math.floor((secondCount % 3600)/60);
  let seconds = Math.floor(secondCount % 60)

  let displayHours = (hours < 10) ? '0' + hours : hours;
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

  secondCount++;
}

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
  secondCount = 0;
  displayCount();
});

displayCount();