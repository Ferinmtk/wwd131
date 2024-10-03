
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        alert(`Navigating to ${event.target.innerText}`);
    });
});
// Set the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date
const lastModified = new Date();
document.getElementById('lastModified').textContent = `${lastModified.toLocaleDateString()} at ${lastModified.toLocaleTimeString()}`;
