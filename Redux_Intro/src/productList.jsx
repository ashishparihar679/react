import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addToCart } from "./cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2 className="text-center mt-6">Loading...</h2>;
  if (error) return <h2 className="text-center mt-6 text-red-500">Error: {error}</h2>;

  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col justify-between"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mx-auto"
          />
          <h3 className="font-semibold text-lg mt-3 line-clamp-2">{product.title}</h3>
          <p className="text-gray-700 mt-2 font-bold">${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
