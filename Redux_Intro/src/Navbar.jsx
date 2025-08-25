import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ onCartClick }) => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">🛍️ FakeStore</h1>
      <button
        onClick={onCartClick}
        className="relative bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
