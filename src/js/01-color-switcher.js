const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBackgroundColor = {
  intervalId: null,

  onStart() {
    this.intervalId = setInterval(() => {
      document.body.style.background = getRandomHexColor();
    }, 1000);
    // console.log('нажали на кнопку старт');
    if (this.onStart) {
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
    }
  },

  onStop() {
    clearInterval(this.intervalId);
    if (this.onStop) {
      refs.stopBtn.disabled = true;
      refs.startBtn.disabled = false;
    }
    // console.log('нажали на кнопку стоп');
  },
};

refs.startBtn.addEventListener('click', () => {
  changeBackgroundColor.onStart();
});
refs.stopBtn.addEventListener('click', () => {
  changeBackgroundColor.onStop();
});
