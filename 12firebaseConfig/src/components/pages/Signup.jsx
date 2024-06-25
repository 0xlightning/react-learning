// src/components/pages/Signup.js

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      // Set a cookie
      document.cookie = `user=${userCredential.user.uid}; path=/;`;
      // Redirect to home page
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="mb-4 text-red-500">{error}</p>}
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
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSignup}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Sign Up
      </button>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
      <p className="mt-2">
        <Link to="/" className="text-blue-500">Return to Home</Link>
      </p>
    </div>
  );
}

export default Signup;
