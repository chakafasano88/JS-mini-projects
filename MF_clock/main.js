const secondsHand = document.querySelector(".second-hand")
// Contains the recipe for current time/date
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

};

// method which calls setDate function, and evaluates the specified intervals
setInterval(setDate, 1000);
