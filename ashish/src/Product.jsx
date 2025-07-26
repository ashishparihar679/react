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
          <h1 >ID :- {e.id}</h1>
          <h1 id="p1"><img  src={e.image} alt="" height="200px" width="200px" /></h1>
           <h2> <strong>Brand</strong>:- <strong id="p2">{e.title}</strong></h2>
          <h2>Price :- {e.price}</h2>
          <p>Decription ;- {e.description.slice(0, 300)}</p>
          </>
        ))
      }
    </>
  );
};

export default Product;
