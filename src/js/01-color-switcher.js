const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStartEl.addEventListener('click', startSwitch);
btnStopEl.addEventListener('click', stopSwitch);
let changeColor = null

function startSwitch() {
  changeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStartEl.disabled = true;
  }, 1000);
}

function stopSwitch() {
  btnStartEl.disabled = false;
  clearInterval(changeColor)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
