import "./polyfills";
import React from "react";
import { createRoot, useState } from "@wordpress/element";
import { ProductEditView } from "./components/product-edit";
import { ProductGrid } from "./components/product-display";
import { Cart } from "./components/cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import "./data"; // create the store

export default function App() {
  const [cartItems, updateCartItems] = useState([]);
  const addToCart = (product) => {
    if (!cartItems.some((cartItem) => cartItem.id === product.id)) {
      const updatedCart = [...cartItems, product];
      updateCartItems(updatedCart);
    }
  };
  const removeFromCart = (cartItemId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemId
    );
    updateCartItems(updatedCartItems);
  };
  return (
    <div className="container">
      <Router>
        <div>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <ProductGrid cartItems={cartItems} addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} onRemove={removeFromCart} />
            </Route>
            <Route path="/edit">
              <ProductEditView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
