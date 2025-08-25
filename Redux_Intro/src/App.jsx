import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./productList";
import Cart from "./Cart";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <ProductList />
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
