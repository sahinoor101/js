function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem=hours>=12 ? "PM" : "AM";
  hours %=12 || 12;
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  const timeString = `${hours}:${minutes}:${second} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
