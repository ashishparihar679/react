import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductSlice";   // ✅ spelling sahi

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct());   // ✅ thunk ko call karna hai
  }, [dispatch]);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            {product.id} :- 
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;