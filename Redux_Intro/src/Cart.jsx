import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./cartSlice";

const Cart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="text-gray-500 hover:text-black mb-4">✖</button>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      
      {items.length === 0 ? (
        <p className="text-center text-gray-500">🛒 Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
