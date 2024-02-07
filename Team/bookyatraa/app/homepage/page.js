"use client";
import React from 'react';
import Link from 'next/link';


function Home() {
  const flights = [
    {
      id: 1,
      title: 'Paris',
      image: './Images Capstone/Paris Image Home Page.jpg',
      description: '"Where love and art collide, there lies Paris, beautiful, adorable, timeless and unforgettable."',
      price: '$450',
    },
    {
      id: 2,
      title: 'Las Vegas',
      image: './Images Capstone/Las Vegas Image.jpg',
      description: '"A city that never sleeps, where every hotel tells a story and every casino echoes with the thrill of chance."',
      price: '$380',
    },
    {
      id: 3,
      title: 'Toronto',
      image: './Images Capstone/Toranto Image.jpg',
      description: '"A hub of arts, fashion, and business, Toronto pulses with creativity and entrepreneurial spirit."',
      price: '$250',
    },
  ];

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <img src="./Images Capstone/LOGO without bg.png" alt="logo" className="logo-home" />
          <nav className="homenavigation">
            <Link href="./homepage"className="link">Home</Link>
            <Link href="./hotel" className="link">Hotel</Link>
            <Link href="./flights"className="link">Flights</Link>
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
            <div className='flights-content'>
              <h2 className='flightsHome'>Flights</h2>
              <p className='flightWords'>Search Flights & Places Hire to our most popular destinations</p>
              <div className='flightSearchBox'>
                <img src="./Images Capstone/Vector.png" alt='vector' className='vector-pic'/>
                <Link href="./flights" className="flightlink">Show flights</Link>
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
          <div className='popularflights'>
            {flights.map((flight) => (
              <div key={flight.id} className='flightcard'>
                <img src={flight.image} alt={flight.title} className='flightp-pic'/>
                <div className='flight-content'>
                </div>
                <div className='flightp-content'>
                  <h2 className='flightp-title'>{flight.title}</h2>
                  <p className='flightp-words'>{flight.description}</p>
                  <div className='price'>
                    <p className='strating'>Starting From</p>
                    <p className='flightp-price'>{flight.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className='popularHotels'>Popular Hotels</h1>
        <div className='popularFlightsGrid'>
          <div className='popularflights'>
            {flights.map((flight) => (
              <div key={flight.id} className='flightcard'>
                <img src={flight.image} alt={flight.title} className='flightp-pic'/>
                <div className='flight-content'>
                </div>
                <div className='flightp-content'>
                  <h2 className='flightp-title'>{flight.title}</h2>
                  <p className='flightp-words'>{flight.description}</p>
                  <div className='price'>
                    <p className='strating'>Starting From</p>
                    <p className='flightp-price'>{flight.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
