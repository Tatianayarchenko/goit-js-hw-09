const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formData = {
    delay: +form.elements.delay.value,
    step: +form.elements.step.value,
    amount: +form.elements.amount.value,
  };
  promiseGetValue(formData);
}
const promiseGetValue = ({ delay, step, amount }) => {
  let totalDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, totalDelay)
      .then(({ position, delay }) => {
        console.log(`:белая_галочка: Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`:х: Rejected promise ${position} in ${delay}ms`);
      });
    totalDelay += step;
  }
};
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

// ======================================================

// const formEl = document.querySelector('.form');
// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = {
//     delay: formEl.elements.delay.value,
//     step: formEl.elements.step.value,
//     amount: formEl.elements.amount.value,
//   };
//   promiseGetValue(formData);
// }

// const promiseGetValue = ({ delay, step, amount }) => {
//   let totalDelay = delay;
//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, totalDelay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     totalDelay += step;
//   }
// };

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position: position, delay: delay });
//       } else {
//         reject({ position: position, delay: delay });
//       }
//     }, delay);
//   });
// }

// ===================================================
// const refs = {
//   form: document.querySelector('.form'),
// };
// refs.form.addEventListener('submit', onFormSubmit);

// const formEl = e.target;

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, totalDelay);
//   });
// }

// ===========================================================

// setTimeout(() => {
//   function createPromise(position, delay) {
//     for (let i = 0; i <= amount; i += 1) {
//       console.log(i);
//     }
//     return new Promise((resolve, reject) => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve('промис выполнился без ошибки');
//       } else {
//         reject('промис выполнился c ошибкjq');
//       }
//     });
//   }

//   createPromise()
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
// }, delay);

// ===========================================================
// const position = setInterval(() => {
//   // firstDelay = delay
//   for (let i = 0; i <= amount; i += 1) {
//     console.log(i);
//     if (i >= amount) {
//       clearInterval(position);
//     }
//   }
//   console.log('интервал запущен');
// })

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
