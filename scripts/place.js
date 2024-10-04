// Display current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display last modified date in the footer
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();


// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        // Wind chill formula for Celsius
        let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

// Static values for temperature and wind speed
const temperature = 8; // Celsius
const windSpeed = 10; // km/h

// Display wind chill
document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);


