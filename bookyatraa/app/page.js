import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <nav className="landingpage-nav">
          <div className="logo">
          <Image 
              src="/Images Capstone/Logo For Landing Page.png"
              alt="BookYatra Logo"
              width={150} // Adjust width as necessary
              height={50} // Adjust height as necessary
              layout="fixed"
            />
          </div>
          <div className="nav-links">
            {/* Update these hrefs to the correct paths */}
            <Link href="/home">Home</Link>
            <Link href="/hotels">Hotels</Link>
            <Link href="/flights">Flights</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">SignUp</Link>
          </div>
        </nav>
      </header>
      <main className="landingpage-main">
        <div className="main-content">
          <h1>Explore the World in Comfort and Style</h1>
          <p>BookYatra, Your Travel Companion.</p>
          <Link href="/home"className="explore-button">Explore Now</Link>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
