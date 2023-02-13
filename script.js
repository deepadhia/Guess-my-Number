'use strict';
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};
let secretnumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretnumber);
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretnumber);

  //document.querySelector('.number').textContent = secretnumber;
  score = 20;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

//document.querySelector('.number').textContent = secretnumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  let entered_num = document.querySelector('.guess').value;
  //console.log(entered_num);

  if (!entered_num) {
    displayMessage('No Number');
  } else {
    let currscore = document.querySelector('.score').textContent;
    if (currscore > 1) {
      if (Number(entered_num) == Number(secretnumber)) {
        displayMessage('Correct Answer');
        if (currscore > highscore) {
          highscore = currscore;
          document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (entered_num > secretnumber) {
        displayMessage('Too High!!!');
        score--;
        displayScore(score);
      } else {
        displayMessage('Too Low!!!');
        score--;
        displayScore(score);
      }
    } else {
      displayMessage('Game Over');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score--;
      displayScore(score);
    }
  }
});
