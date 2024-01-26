import React from 'react';
import Link from 'next/link';

function Home() {
  return (

    <div className="home">
      <header className="header">
        <div className="header-content">
         
          <img src="./Images Capstone/LOGO without bg.png" alt="logo" className="logo-image" />
          <nav className="navigation">
        
            <Link href="/home"className="link">Home</Link>
            <Link href="/hotel" className="link">Hotel</Link>
            <Link href="/flight"className="link">Flight</Link>
            <Link href="/login" className="link">Login</Link>
            <Link href="/signup" className="link">Sign Up</Link>
          </nav>
          <p className="underline"></p>
        </div>
      </header>
      <main>
       
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  );
}

export default Home;
