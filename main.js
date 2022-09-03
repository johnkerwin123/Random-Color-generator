
const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const h1 = document.querySelector('.container h1');

function randomColor() {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    let colorValue = 'RGB('+random1+','+random2+','+random3+')';
    body.style.background = colorValue;
    h1.innerHTML = colorValue;
};

function intervalrgb() {
  let intervalTime = Number(document.getElementById("setInterval").value) * 1000;
  let interval = setInterval(randomColor, intervalTime);
  let countdown = document.getElementById("countdown");
  let timeleft = document.getElementById("setTimer").value;
  let counter = setInterval(function() {
    if (timeleft <= 0) {
      clearInterval(counter);
      clearInterval(interval);
}
countdown.innerHTML = `Time left : ${timeleft}`;
timeleft -= 1;
}, 1000); 
}

