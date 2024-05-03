interface AutomobilePart {
  id: number;
  name: string;
  price: number;
  image: string;
}
interface CartItem {
  part: AutomobilePart;
  quantity: number;
}
class ShoppingCart {
  private items: CartItem[] = [];
  addItem(part: AutomobilePart, quantity: number = 1) {
    const existingItems = this.items.filter(item => item.part.id === part.id);

    if (existingItems.length > 0) {
      existingItems[0].quantity += quantity;
    } else {
      this.items.push({ part, quantity });
    }
  }
  getItems(): CartItem[] {
    return this.items;
  }
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.part.price * item.quantity, 0);
  }
}
const automobileParts: AutomobilePart[] = [
  { id: 1, name: 'Engine Oil', price: 30, image: 'engine_oil.jpg' },
  { id: 2, name: 'Brake Pads', price: 50, image: 'brake_pads.jpg' },
  { id: 3, name: 'Air Filter', price: 15, image: 'air_filter.jpg' },
];
const cart = new ShoppingCart();
function renderParts() {
  const partsContainer = document.getElementById('parts-container');
  if (!partsContainer) return;

  automobileParts.forEach(part => {
    const partElement = document.createElement('div');
    partElement.classList.add('col-md-4', 'mb-4');
    partElement.innerHTML = `
      <div class="card">
        <img src="${part.image}" class="card-img-top" alt="${part.name}">
        <div class="card-body">
          <h5 class="card-title">${part.name}</h5>
          <p class="card-text">Price: $${part.price}</p>
          <button class="btn btn-primary add-to-cart" data-part-id="${part.id}">Add to Cart</button>
        </div>
      </div>
    `;
    partsContainer.appendChild(partElement);
  });
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const partId = parseInt(button.getAttribute('data-part-id') || '0', 10); // Ensure radix 10
      addToCart(partId);
    });
  });
}
function addToCart(partId: number) {
  const partToAdd = automobileParts.filter(part => part.id === partId)[0];
  if (partToAdd) {
    cart.addItem(partToAdd);
    window.location.href = 'sample1.html'; 
  }
}
renderParts();

