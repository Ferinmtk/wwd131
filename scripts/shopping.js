$(document).ready(function () {
    let cartItems = 0;
    let cart = [];

    // Load cart from localStorage on page load
    function loadCart() {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            cart = storedCart;
            cartItems = cart.length;
            $('.cart-items').text(cartItems);
        }
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function showToast(message) {
        const toast = $('#toast');
        toast.text(message).addClass('show');
        setTimeout(() => toast.removeClass('show'), 3000);
    }

    $('.add-to-cart').on('click', function () {
        const productName = $(this).closest('.product-item').find('.product-name').text();
        cart.push(productName);
        cartItems++;
        $('.cart-items').text(cartItems);

        // Save cart to localStorage
        saveCart();

        // Show toast notification
        showToast(`${productName} has been added to your cart!`);

        // Add animation to the cart badge
        $('.cart-items').addClass('animated');
        setTimeout(() => $('.cart-items').removeClass('animated'), 300);
    });

    $('.cart-icon').on('click', function () {
        if (cart.length === 0) {
            // Use a UI message instead of alert
            $('#empty-cart-message').fadeIn(); // Assuming you have a dedicated area for this
        } else {
            // Displays the cart modal
            $('#cart-modal').fadeIn();

            const cartList = $('#cart-list');
            cartList.empty();
            cart.forEach((item, index) => {
                cartList.append(`<li>${index + 1}. ${item}</li>`);
            });
        }
    });

    // Close the cart modal
    $('#close-modal').on('click', function () {
        $('#cart-modal').fadeOut();
    });

    // Checkout button action
    $('#checkout-button').on('click', function () {
        if (confirm("Proceed to checkout?")) {
            alert("Proceeding to checkout...");
            // Placeholder for checkout process
        }
        $('#cart-modal').fadeOut();
    });

    $('#search-button').on('click', function () {
        const searchTerm = $('#search-input').val().toLowerCase();
        let itemFound = false;
        $('.product-item').each(function () {
            const productName = $(this).find('.product-name').text().toLowerCase();
            if (productName.includes(searchTerm)) {
                $(this).show();
                itemFound = true;
            } else {
                $(this).hide();
            }
        });

        if (!itemFound) {
            $('#item-not-found-message').fadeIn(); // Display in the UI instead of alert
        }
    });

    $('.submit-review').on('click', function () {
        const reviewText = $('#review-text').val().trim();
        if (reviewText) {
            const reviewHTML = `
                <div class="review-item">
                    <p class="review-author">Anonymous</p>
                    <p class="review-text">${reviewText}</p>
                    <div class="rating">${'★'.repeat(5)}</div>
                </div>
            `;
            $('.reviews-list').append(reviewHTML);
            $('#review-text').val('');
        } else {
            // Notify user in the UI
            $('#review-error-message').fadeIn(); // Display in the UI instead of alert
        }
    });

    $('.product-item a').on('click', function (event) {
        event.preventDefault();
    });
    
    $('.footer').on('click', function (event) {
        event.preventDefault();
        alert("This Page is Coming Soon!");
    });

    // Load the cart on document ready
    loadCart();
});
