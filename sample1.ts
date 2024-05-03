// Function to render shopping cart
function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  if (!cartContainer) return;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  cartContainer.innerHTML = '';
  cart.forEach((item: any) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('card', 'mb-3');
    cartItemElement.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${item.part.name}</h5>
        <p class="card-text">Quantity: ${item.quantity}</p>
        <p class="card-text">Price: $${item.part.price * item.quantity}</p>
      </div>
    `;
    cartContainer.appendChild(cartItemElement);
  });

  const totalPriceElement = document.createElement('div');
  const totalPrice = cart.reduce((total: number, item: any) => total + item.part.price * item.quantity, 0);
  totalPriceElement.innerHTML = `<h4>Total: $${totalPrice}</h4>`;
  cartContainer.appendChild(totalPriceElement);
}

// Initial setup
renderCart();
