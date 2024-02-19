import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from './../images/logo.png';

function Header({ currency, onToggleCurrency }) {
  return (
    <header>
      <div className="left-section">
        <Link to='/'><img src={logoImage} alt="Logo" className="logo-image" /></Link>
      </div>
      <div className="middle-section">
        <nav className="nav">
          <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <div className="currency-buttons">
          <button onClick={onToggleCurrency}>{currency === 'USD' ? 'USD' : 'INR'}</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
