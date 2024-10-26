// Product array
const products = [
    { id: "1", name: "Kabeji" },
    { id: "2", name: "Misheveve" },
    { id: "3", name: "Salati" }
];

// Populate Product Name Options
window.onload = function() {
    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Increment and Display Review Count
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Display confirmation and review count
    document.body.innerHTML = `<h1>Thank You!</h1><p>Your review has been submitted.</p><p>Total Reviews Submitted: ${reviewCount}</p>`;
}

document.getElementById('year').textContent = new Date().getFullYear();
const lastModifiedDate = document.lastModified; 
document.getElementById('lastModified').textContent = lastModifiedDate; 
