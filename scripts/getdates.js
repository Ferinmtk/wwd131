document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        alert(`Navigating to ${event.target.innerText}`);
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
const lastModifiedDate = document.lastModified; 
document.getElementById('lastModified').textContent = lastModifiedDate; 
