import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <div className="logo">
          <Image 
            src="/Images Capstone/LOGO without bg.png" 
            alt="BookYatra Logo"
            width={150}
            height={100}
          />
        </div>
        <nav className="nav-links">
          <Link href="/home">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="/flights">Flights</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">SignUp</Link>
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

