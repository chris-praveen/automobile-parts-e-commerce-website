// Define class for the shopping cart
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (part, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var existingItems = this.items.filter(function (item) { return item.part.id === part.id; });
        if (existingItems.length > 0) {
            // If part already exists, update its quantity
            existingItems[0].quantity += quantity;
        }
        else {
            // If part doesn't exist, add it to the cart
            this.items.push({ part: part, quantity: quantity });
        }
    };
    ShoppingCart.prototype.getItems = function () {
        return this.items;
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.part.price * item.quantity; }, 0);
    };
    return ShoppingCart;
}());
// Dummy data for automobile parts
var automobileParts = [
    { id: 1, name: 'Engine Oil', price: 30, image: 'engine_oil.jpg' },
    { id: 2, name: 'Brake Pads', price: 50, image: 'brake_pads.jpg' },
    { id: 3, name: 'Air Filter', price: 15, image: 'air_filter.jpg' },
];
// Dummy data for testing
var cart = new ShoppingCart();
// Function to render automobile parts and add to cart button
function renderParts() {
    var partsContainer = document.getElementById('parts-container');
    if (!partsContainer)
        return;
    automobileParts.forEach(function (part) {
        var partElement = document.createElement('div');
        partElement.classList.add('col-md-4', 'mb-4');
        partElement.innerHTML = "\n      <div class=\"card\">\n        <img src=\"".concat(part.image, "\" class=\"card-img-top\" alt=\"").concat(part.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(part.name, "</h5>\n          <p class=\"card-text\">Price: $").concat(part.price, "</p>\n          <button class=\"btn btn-primary add-to-cart\" data-part-id=\"").concat(part.id, "\">Add to Cart</button>\n        </div>\n      </div>\n    ");
        partsContainer.appendChild(partElement);
    });
    // Add event listener to each "Add to Cart" button
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var partId = parseInt(button.getAttribute('data-part-id') || '0', 10); // Ensure radix 10
            addToCart(partId);
        });
    });
}
// Function to add item to cart
function addToCart(partId) {
    var partToAdd = automobileParts.filter(function (part) { return part.id === partId; })[0]; // Use `filter` and get the first item
    if (partToAdd) {
        cart.addItem(partToAdd);
        window.location.href = 'sample1.html'; // Redirect to cart page
    }
}
// Initial setup
renderParts();
