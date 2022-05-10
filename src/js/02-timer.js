// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

const btnStart = document.querySelector('button[data-start]');
btnStart.addEventListener('click', onStart);
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    btnStart.disabled = true;

    const curentDate = options.defaultDate.getTime();
    const selectDate = selectedDates[0].getTime();
    if (selectDate < curentDate) {
      window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

const resalt = flatpickr('input#datetime-picker', options);

function onStart() {
  const deadline = resalt.selectedDates[0].getTime();
  btnStart.disabled = true;
  const intervalID = setInterval(() => {
    const currentTime = Date.now();
    if (deadline <= currentTime) {
      clearInterval(intervalID);
      return;
    }
    const ms = deadline - currentTime;
    const convertTime = convertMs(ms);
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    countdownTimer(convertTime);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function countdownTimer({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minutesValue.textContent = `${minutes}`;
  refs.secondsValue.textContent = `${seconds}`;
}
