const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  let delayStep = delay;

  for (let i = 1; i <= amount; i += 1) {
    let delaySet = delay + step * i;
    setTimeout(() => {
      delayStep += step;
      createPromise(i, delaySet - step)
        .then(resalt => console.log(resalt))
        .catch(error => console.log(error));
    }, delaySet);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}
