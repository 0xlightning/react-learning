import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>mini context</h1>
      <div className="card">
        <Login />
        <Product />
      </div>
    </UserContextProvider>
  )
}

export default App
