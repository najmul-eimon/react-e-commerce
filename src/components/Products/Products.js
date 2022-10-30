import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      {/* title */}
      <div className="title">
        <h2>Recommend only for you</h2>
        <ul className="product-category">
          <li>
            <button type="button" className="active">BEST SELLER</button>
          </li>
          <li>
            <button type="button">MAN</button>
          </li>
          <li>
            <button type="button">WOMAN</button>
          </li>
          <li>
            <button type="button">ON SELL</button>
          </li>
          <li>
            <button type="button">New</button>
          </li>
        </ul>
      </div>

      {/* products */}
      <div className="products">
      {
        products.map(product => <Product key={product._id} product={product}/>)
      }
      </div>
    </div>
  );
}

export default Products;
