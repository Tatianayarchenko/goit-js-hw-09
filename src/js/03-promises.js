const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const delay = formElements.delay.value;
  const step = formElements.step.value;
  const amount = formElements.amount.value;
  // console.log(delay);
  // console.log(step);
  // console.log(amount);

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve('промис выполнился без ошибки');
      } else {
        reject('промис выполнился c ошибкjq');
      }
    });
  }

  const position = setInterval(() => {
    // firstDelay = delay
    for (let i = 0; i <= amount; i += 1) {
      console.log(i);
      if (i >= amount) {
        clearInterval(position);
      }
    }
    console.log('интервал запущен');
  }, delay);

  createPromise(1, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(position, delay);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
