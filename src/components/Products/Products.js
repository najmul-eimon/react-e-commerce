import React from 'react'
import './Products.css';

function Products() {
  return (
    <div>
      <h2>Recommend only for you</h2>
      <ul>
        <li>
          <button type='button'>BEST SELLER</button>
        </li>
        <li>
          <button type='button'>MAN</button>
        </li>
        <li>
          <button type='button'>WOMAN</button>
        </li>
        <li>
          <button type='button'>ON SELL</button>
        </li>
        <li>
          <button type='button'>New</button>
        </li>
      </ul>
    </div>
  )
}

export default Products