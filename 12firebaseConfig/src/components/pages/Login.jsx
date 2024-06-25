// src/components/pages/Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      // Set a cookie
      document.cookie = `user=${userCredential.user.uid}; path=/;`;
      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleLogin}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      <p className="mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
      </p>
      <p className="mt-2">
        <Link to="/" className="text-blue-500">Return to Home</Link>
      </p>
    </div>
  );
}

export default Login;
