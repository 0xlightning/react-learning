import React from 'react';
import Header from '../Header';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-lg">This is the home page.</p>
      </div>
    </>
  );
}

export default Home;
