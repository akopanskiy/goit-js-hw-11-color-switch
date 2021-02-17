const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const pressStart = document.querySelector('button[data-action="start"]');
const pressStop = document.querySelector('button[data-action="stop"]');

const changeColors = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.background =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

pressStart.addEventListener("click", changeColors.start.bind(changeColors));
pressStop.addEventListener("click", changeColors.stop.bind(changeColors));
