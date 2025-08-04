import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [Product, setProduct] = useState([]);
  const api_url = 'http://localhost:3002/products';

  useEffect(() => {
    const fetchapi = async () => {
      try {
        let response = await axios.get(api_url);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchapi();
  }, []);

  return (
    <>
      <h1>Product</h1>
      {
        Product.map((e, j) => (
          <>
          <section className="pro1">

          <div className="product-card">
  <h3 className="product-id">ID: {e.id}</h3>
  <img className="product-image" src={e.image} alt="product" />
  <h2 className="product-title">
    <strong>Brand:</strong> <span>{e.title}</span>
  </h2>
  <h2 className="product-price">Price: ₹{e.price}</h2>
  <p className="product-desc">
    Description: {e.description.slice(0, 300)}...
  </p>
</div>
          </section>
</>
        ))
      }
    </>
  );
};

export default Product;
