import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const calendarEl = document.querySelector('input[type="text"]')
const btnStart = document.querySelector('button')
btnStart.disabled = true;
btnStart.addEventListener('click', startTimer)
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')
let selectedDate = null

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return Notiflix.Notify.failure("Please choose a date in the future");
    }
    selectedDate = selectedDates[0]
    btnStart.disabled = false;
  },
};

flatpickr(calendarEl, options)

function startTimer() {
  btnStart.disabled = true
  const counter = setInterval(() => {
    const timeLeft = selectedDate - new Date();
    if (timeLeft <= 0) {
      return clearInterval(counter)
    }
    addLeadingZero(timeLeft)
  }, 1000)
}

    function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
    daysEl.textContent = convertMs(value).days.toString().padStart(2,0)
    hoursEl.textContent = convertMs(value).hours.toString().padStart(2,0)
    minutesEl.textContent = convertMs(value).minutes.toString().padStart(2,0)
    secondsEl.textContent = convertMs(value).seconds.toString().padStart(2,0)
}