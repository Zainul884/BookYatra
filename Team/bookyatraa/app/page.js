"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatBot from './api/chatbot';


function LandingPage() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {setIsNavExpanded(!isNavExpanded);}


  return (
  
    <div className="landing-page">
      <header className="landingpage-header">
        <div className="logo">
          <Image
            src="/Images Capstone/Logo For Landing Page.png"
            alt="BookYatra Logo"
            width={250}
            height={80}
           
          />
        </div>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
          {isNavExpanded ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`}>
          <Link href="/homepage" onClick={toggleNav}>Home</Link>
          <Link href="/hotels" onClick={toggleNav}>Hotels</Link>
          <Link href="/flights" onClick={toggleNav}>Flights</Link>
          <Link href="/login"onClick={toggleNav}>Login</Link>
          <Link href="/signup" onClick={toggleNav}>SignUp</Link>
        </nav>
      </header>
      <div className="main-content">
        <p className="tagline">Explore the World in Comfort and Style</p><br></br>
        <p className="tagline">BookYatra, Your Travel Companion.</p>
        <Link href="/homepage">
          <button className="explore-button">Explore Now</button>
        </Link>  
      </div>
    <ChatBot />
    </div>

  );
}
export default LandingPage;