"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function LandingPage() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {/* Hamburger Icon */}
          {isNavExpanded ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`}>
          <Link href="/homepage">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="/flights">Flights</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">SignUp</Link>
        </nav>
      </header>
      <div className="main-content">
        <p className="tagline">Explore the World in Comfort and Style</p><br></br>
        <p className="tagline">BookYatra, Your Travel Companion.</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
}

export default LandingPage;
