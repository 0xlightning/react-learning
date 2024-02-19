// Home.js
import React, { useState } from 'react';
import Product from './Product';
import productImg from './../images/product.jpeg'; //tempavary values

function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      images: [productImg]
    },//tempavary values
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 5,
      images: [productImg]
    },//tempavary values
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 15,
      images: [productImg]
    },//tempavary values
  ]);  

  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to our Shopping Cart!</h1>
          <p>Explore our amazing products and find what you need.</p>
        </div>
      </div>
      <div className="product-section">
        <h2>Our Products</h2>
        <div className="product-list">
        {products.map((product) => (
          <Product 
          key={product.id} 
          id={product.id} 
          name={product.name} 
          currency='USD'
          description={product.description} 
          price={product.price} 
          img={product.images} // Pass the correct prop name here
        />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
