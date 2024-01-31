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
            <Link href="./homepage"className="link">Home</Link>
            <Link href="./hotel" className="link">Hotel</Link>
            <Link href="./flight"className="link">Flight</Link>
            <Link href="./login" className="link">Login</Link>
            <Link href="./signup" className="link">Sign Up</Link>
          </nav>
        </div>
        <hr className="line"></hr>
      </header>
      <main>
        <div className="flight-hotel">
          <div className="flight">
            <img src="./Images Capstone/homePageflight.jpg.jpg" alt='flight' className='flight-pic'/>
            <div className='flight-content'>
              <h2 className='flightsHome'>Flights</h2>
              <p className='flightWords'>Search Flights & Places Hire to our most popular destinations</p>
              <div className='flightSearchBox'>
                <img src="./Images Capstone/Vector.png" alt='vector' className='vector-pic'/>
                <Link href="./flight" className="flightlink">Show flights</Link>
              </div>
            </div>
          </div>
          <div className="hotel">
            <img src="./Images Capstone/homePagehotel.jpg" alt='hotel' className='hotel-pic'/>
            <div className='hotel-content'>
              <h2 className='hotelsHome'>Hotels</h2>
              <p className='hotelWords'>Search hotels & Places Hire to our most popular destinations</p>
              <div className='hotelSearchBox'>
                <img src="./Images Capstone/Vector.png" alt='vector' className='vector-pic'/>
                <Link href="./hotel" className="hotellink">Show flights</Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className='popularFlights'>Popular Flights</h1>
        <div className='popularFlightsGrid'>
          <div className='flight1'>
            <img src="./Images Capstone/Paris Image Home Page.jpg" alt='flight1' className='flightp-pic'/>
          </div>
          <div className='flight2'>
            <img src="./Images Capstone/Las Vegas Image.jpg" alt='flight2' className='flightp-pic'/>
          </div>
          <div className='flight3'>
            <img src="./Images Capstone/Toranto Image.jpg" alt='flight3' className='flightp-pic'/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
