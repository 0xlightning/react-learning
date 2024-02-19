// Layout.js
import React, { useState } from 'react';
import { Header, Footer } from './components/index';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [currency, setCurrency] = useState('USD'); 
  const [exchangeRate, setExchangeRate] = useState(1); 

  const toggleCurrency = () => {
    if (currency === 'USD') {
      setCurrency('INR');
      setExchangeRate(82.99); 
    } else {
      setCurrency('USD');
      setExchangeRate(1);
    }
  };

  return (
    <div>
      <Header currency={currency} onToggleCurrency={toggleCurrency} />
      <Outlet currency={currency} exchangeRate={exchangeRate} />
      <Footer />
    </div>
  );
}

export default Layout;
