// Function to render shopping cart
function renderCart() {
    var cartContainer = document.getElementById('cart-container');
    if (!cartContainer)
        return;
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cartContainer.innerHTML = '';
    cart.forEach(function (item) {
        var cartItemElement = document.createElement('div');
        cartItemElement.classList.add('card', 'mb-3');
        cartItemElement.innerHTML = "\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">".concat(item.part.name, "</h5>\n        <p class=\"card-text\">Quantity: ").concat(item.quantity, "</p>\n        <p class=\"card-text\">Price: $").concat(item.part.price * item.quantity, "</p>\n      </div>\n    ");
        cartContainer.appendChild(cartItemElement);
    });
    var totalPriceElement = document.createElement('div');
    var totalPrice = cart.reduce(function (total, item) { return total + item.part.price * item.quantity; }, 0);
    totalPriceElement.innerHTML = "<h4>Total: $".concat(totalPrice, "</h4>");
    cartContainer.appendChild(totalPriceElement);
}
// Initial setup
renderCart();
