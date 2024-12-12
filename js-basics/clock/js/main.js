function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  const timeString = `${hours}:${minutes}:${second}`;
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
