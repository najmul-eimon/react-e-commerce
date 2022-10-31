import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeBtn, setActiveBtn] = useState('all');

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setAllProducts(data)
    })
  }, []);

  const filterProduct = (category) => {
    setActiveBtn(category);
    
    if(category === 'all'){
      setProducts(allProducts);
      return;
    }
    setProducts(allProducts);
    const filteredProducts = allProducts.filter(item => item.category === category);
    setProducts(filteredProducts);
  }

  return (
    <div className="container">
      {/* title */}
      <div className="title">
        <h2>Recommend only for you</h2>
        <ul className="product-category">
          <li>
            <button type="button" className={activeBtn === "all" ? "active" : ""} onClick={() => filterProduct('all')}>BEST SELLER</button>
          </li>
          <li>
            <button type="button" className={activeBtn === "man" ? "active" : ""}  onClick={() => filterProduct('man')}>MAN</button>
          </li>
          <li>
            <button type="button" className={activeBtn === "woman" ? "active" : ""} onClick={() => filterProduct('woman')}>WOMAN</button>
          </li>
          <li>
            <button type="button" className={activeBtn === "on sell" ? "active" : ""} onClick={() => filterProduct('on sell')}>ON SELL</button>
          </li>
          <li>
            <button type="button" className={activeBtn === "new" ? "active" : ""} onClick={() => filterProduct('new')}>New</button>
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
