// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.textContent = hamburger.textContent === 'X' ? '\u2630' : 'X'; 
});

hamburger.addEventListener('click', () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        hamburger.textContent = 'X'; 
    } else {
        menu.style.display = "none";
        hamburger.textContent = '\u2630'; 
    }
});

// Footer dynamic year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modified').textContent = document.lastModified;
