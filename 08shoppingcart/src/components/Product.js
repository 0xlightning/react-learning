// Product.js
import React from 'react';
// import productImg from './../images/product.jpeg';

function Product({id, name, description, price, currency, img}) {
  return (
    <div key={id} className="product">
      <div className="product-image">
        <img src={img} alt="Product" />
      </div>
      <div className="product-details">
        <div className="left-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="right-details">
          <p className="product-price">Price: {price} {currency}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;