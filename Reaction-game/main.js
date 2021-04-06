const spinner = document.querySelector('.spinner p')
const spinnerContainer = document.querySelector('.spinner')

let rotateCount = 0;
let startTime = null;
let rAF;

const btn = document.querySelector('button');
const result = document.querySelector('.result');

function randomNum(min, max){
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function drawSpinner(timestamp){
  if(!startTime){
    startTime = timestamp
  }

  rotateCount = (timestamp - startTime)/3;

  if(rotateCount > 359){
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;
  rAF = requestAnimationFrame(drawSpinner);
}

result.style.display = 'none';
spinnerContainer.style.display = 'none';

function reset(){
  btn.style.display = 'block';
  result.textContent = '';
  result.style.display = 'none';
}

btn.addEventListener('click', start);

function start(){
  drawSpinner();
  spinnerContainer.style.display = 'block';
  btn.style.display = 'none';
  setTimeout(setEndgame, randomNum(5000, 10000));
}

function setEndgame(){
  cancelAnimationFrame(rAF);
  spinnerContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = 'Players GO!!!';

  document.addEventListener('keydown', keyHandler);

  function keyHandler(e){
    let isOver = false;
    console.log(e.key);

    if(e.key === "a"){
      result.textContent = 'Player 1 won!!!';
      isOver = true;
    }else if(e.key === "l"){
      result.textContent = 'Player 2 won!!!';
      isOver = true;
    }

    if(isOver){
      document.removeEventListener('keydown', keyHandler);
      setTimeout(reset, 3000);
    }
  }
}