// src/components/Header.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl">MyApp</h1>
      <nav>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
