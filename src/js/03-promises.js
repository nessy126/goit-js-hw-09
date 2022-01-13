import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', createPromise);
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
// console.log(amount);

for (let index = 0; index < array.length; index++) {
  const element = array[index];

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
