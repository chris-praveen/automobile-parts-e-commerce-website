// Define the Product class to represent automobile parts
class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Define the CartItem class to represent items in the shopping cart
class CartItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice(): number {
    return this.product.price * this.quantity;
  }
}

// Define the AutoPartsStore class to manage the store functionality
class AutoPartsStore {
  products: Product[];
  cart: CartItem[];

  constructor() {
    this.products = [
      new Product(1, 'Engine Oil', 25),
      new Product(2, 'Brake Pads', 35),
      new Product(3, 'Air Filter', 15),
    ];
    this.cart = [];
  }

  addToCart(productId: number, quantity: number) {
    const productToAdd = this.products.find(product => product.id === productId);

    if (productToAdd) {
      const existingCartItem = this.cart.find(item => item.product.id === productId);
      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        this.cart.push(new CartItem(productToAdd, quantity));
      }
    } else {
      console.error('Product not found');
    }
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// Export the AutoPartsStore class for usage in other files if needed
export default AutoPartsStore;
