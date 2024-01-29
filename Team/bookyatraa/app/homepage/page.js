"use client";
import React from 'react';
import Link from 'next/link';

function Home() {
  return (

    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <img src="./Images Capstone/LOGO without bg.png" alt="logo" className="logo-home" />
          <nav className="homenavigation">
            <Link href="/home"className="link">Home</Link>
            <Link href="/hotel" className="link">Hotel</Link>
            <Link href="/flight"className="link">Flight</Link>
            <Link href="/login" className="link">Login</Link>
            <Link href="/signup" className="link">Sign Up</Link>
          </nav>
        </div>
        <hr className="line"></hr>
      </header>
      <main>
        <div className="flight-hotel">
          <div className="flight">
            <img src="./Images Capstone/homePageflight.jpg.jpg" alt='flight' className='flight-pic'/>
          </div>
          <div className="hotel">
            <img src="./Images Capstone/homePagehotel.jpg" alt='hotel' className='hotel-pic'/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
