// Home.js
import Product from './Product';
import productImg from './../images/product.jpeg'; 
import { useSelector } from "react-redux";

function Home() {
  const currency = useSelector((state)=>state.currency)

  const products=[
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10,
      images: [productImg,]
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 5,
      images: [productImg,]
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 15,
      images: [productImg,]
    },
  ];  

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
            currency={currency}
            description={product.description} 
            price={currency === "INR" ? (product.price * 82.99).toFixed(2) : product.price * 1 } 
            img={product.images}
          />
          ))}
        </div>  
      </div>
    </div>
  );
}

export default Home;
