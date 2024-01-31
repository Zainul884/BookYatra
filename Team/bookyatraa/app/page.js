"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function LandingPage() {
  
  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <div className="logo">
          <Image
            src="/Images Capstone/Logo For Landing Page.png"
            alt="BookYatra Logo"
            width={250}
            height={80}
            layout="intrinsic"
          />
        </div>
<<<<<<< HEAD
        <nav className='nav-links'>
          <Link href="../homepage">Home</Link>
=======
        <nav className="nav-links">
          <Link href="./homepage">Home</Link>
>>>>>>> 8d05156022d5e07810fa215fe14c3662a238679b
          <Link href="/hotels">Hotels</Link>
          <Link href="../flights">Flights</Link>
          <Link href="/login">Login</Link>
          <Link href="../signup">SignUp</Link>
        </nav>
        
      </header>
      <div className="main-content">
        <p className="tagline">Explore the World in<br></br> Comfort and Style</p>
        <p className="tagline">BookYatra, Your <br></br>Travel Companion.</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
}

export default LandingPage;