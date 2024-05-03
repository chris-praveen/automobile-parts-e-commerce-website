// AutoPartsApp.tsx

import React, { Component } from 'react';

// Define interfaces for Product and CartItem
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

// Define state interface for App component
interface State {
  products: Product[];
  cart: CartItem[];
}

// Product component to display each product
class ProductComponent extends Component<Product, {}> {
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }

  addToCart = () => {
    const { id, name, price } = this.props;
    this.props.onAddToCart({ id, name, price, quantity: 1 });
  };
}

// Cart component to display the items in the cart
class CartComponent extends Component<{ cart: CartItem[] }, {}> {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// App component to manage state and render the app
class App extends Component<{}, State> {
  state: State = {
    products: [
      { id: 1, name: 'Engine Oil', price: 25 },
      { id: 2, name: 'Brake Pads', price: 35 },
      { id: 3, name: 'Air Filter', price: 15 },
    ],
    cart: [],
  };

  handleAddToCart = (item: CartItem) => {
    const existingItem = this.state.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      this.setState({
        cart: this.state.cart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ),
      });
    } else {
      this.setState({ cart: [...this.state.cart, item] });
    }
  };

  render() {
    const { products, cart } = this.state;
    return (
      <div>
        <h1>Welcome to Auto Parts Store</h1>
        <div>
          {products.map(product => (
            <ProductComponent key={product.id} {...product} onAddToCart={this.handleAddToCart} />
          ))}
        </div>
        <CartComponent cart={cart} />
      </div>
    );
  }
}

export default App;
