// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

const temp = 45;
const wind = 5;

if (temp <= 50 && wind > 3) {
  document.getElementById("windchill").textContent = `${calculateWindChill(temp, wind)} °F`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}
