import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='bg-gray-500 w-full h-screen flex justify-center items-center'>
  <div className='box mt-10'>
    <App />
  </div>
</div>

);