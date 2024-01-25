import React from 'react';
function landingpage() {
  return (
    <div className="landing page">
      <header className="landingpage-header">
        <nav className="landingpage-nav">
          <div className="logo">BOOKYATRA</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#hotels">Hotels</a>
            <a href="#flights">Flights</a>
            <a href="#login">Login</a>
            <a href="#signup">SignUp</a>
          </div>
        </nav>
      </header>
      <main className="landingpage-main">
        <div className="main-content">
          <h1>Explore the World in Comfort and Style</h1>
          <p>BookYatra, Your Travel Companion.</p>
          <button className="explore-button">Explore Now</button>
        </div>
      </main>
    </div>
  );
}

export default landingpage;
