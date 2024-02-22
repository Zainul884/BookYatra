"use client";
import React from 'react';
import Link from 'next/link';


function Home() {

  const posters = [
    {
      id: 1,
      title: 'Easy Flying',
      image: './Images Capstone/Easy Flying.jpg',
      description: 'Fill your life with experiences, not things. Have stories to tell, not stuff to show. Book your next flight to start the journey!',
    },
    {
      id: 2,
      title: 'Living Better',
      image: './Images Capstone/Hotel Image.jpg',
      description: 'Discover the luxury of being yourself in a land of wonder, one hotel stay at a time',
    },
    {
      id: 3,
      title: 'Having Problem?',
      image: './Images Capstone/chatbot.png',
      description: 'Discover the luxury of being yourself in a land of wonder, one hotel stay at a time',
    }
  ];
  const reviews = [
    {
      id: 1,
      name: 'Prit Patel',
      image: './Images Capstone/Prit Image.jpg',
      description: '“Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.” ',
      rating: '4.0 ⭐⭐⭐⭐',
      date:'14 Feb,2023'
    },
    {
      id: 1,
      name: 'Zanudi',
      image: './Images Capstone/Zanudi Image.jpg',
      description: '“Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.” ',
      rating: '4.0 ⭐⭐⭐⭐',
      date:'20 Dec,2023'
    },
  ];

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

  const hotels = [
    {
      id: 1,
      title: 'Farmount Springs',
      image: './Images Capstone/Farmount Image.jpg',
      Place: 'Banff, Alberta',
      price: '$450',
    },
    {
      id: 2,
      title: 'Taj Hotel',
      image: './Images Capstone/Taj Hotel Image.webp',
      Place: 'Udaipur, India',
      price: '$310',
    },
    {
      id: 3,
      title: 'The Plaza',
      image: './Images Capstone/Plaza Hotel.jpg',
      Place: 'New York, USA',
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
            <div className='hotels-content'>
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
          <div className='container'>
            <div className='flightExploreBox'>
              <img src="./Images Capstone/VectorWhite.png" alt='vector' className='vectorWhite-pic'/>
              <Link href="./flights" className="flightExpoLink">Explore Now</Link>
            </div>
          </div>
        <h1 className='popularHotels'>Popular Hotels</h1>
        <div className='popularFlightsGrid'>
          <div className='popularflights'>
            {hotels.map((hotel) => (
              <div key={hotel.id} className='flightcard'>
                <img src={hotel.image} alt={hotel.title} className='flightp-pic'/>
                <div className='hotel-content'>
                </div>
                <div className='hotelp-content'>
                  <h2 className='hotelp-title'>{hotel.title}</h2>
                  <p className='hotelp-words'>{hotel.Place}</p>
                  <div className='pricep'>
                    <p className='strating'>Starting From</p>
                    <div className='flightp-price'>
                      <p className='pricer'>{hotel.price}/<span className='per'>per night</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='container'>
            <div className='flightExploreBox'>
              <img src="./Images Capstone/VectorWhite.png" alt='vector' className='vectorWhite-pic'/>
              <Link href="./hotel" className="flightExpoLink">Explore Now</Link>
            </div>
          </div>
        </div>
        <h1 className='testimonal'>Testimonal</h1>
        <div className='users'>
          <p className='testimonalHeading'>What <span className='book'>Book</span>Yatra Users Are Saying</p>
        </div>
        <div className='testimonalBox'>
          {reviews.map((review) => (
            <div key={review.id} className='review'>
              <img src={review.image} alt={review.name} className='review-pic'/>
              <div className='review-content'>
                <h2 className='review-title'>{review.name}</h2>
                <p className='review-rating'>{review.rating}</p>
                <p className='review-words'>{review.description}</p>
                <p className='review-date'>{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='poster'>
          {posters.map((poster) => (
          <div key={poster.id} className='p-poster' >
            <img src={poster.image} alt='poster' className='poster-pic'/>
            <div className='poster-content'>
              <h2 className='poster-title'>{poster.title}</h2>
              <p className='poster-words'>{poster.description}</p>
            </div>
          </div>
          ))}
        </div>
        <hr className="blck"></hr>
        <div className='footer'>
          <p className='foot-title'>#BookYatra</p>
          <div>
            <p className='foot-head'>Explore</p>
            <nav className="footer-nav">
              <Link href="./flights" className="footer-link">Flights</Link>
              <Link href="./hotel" className="footer-link">Hotels</Link>
              <Link href="./About" className="footer-link">About Us</Link>
              <Link href="./FAQ" className="footer-link">FAQs</Link>
            </nav>
          </div>
          <div>
            <p className='foot-head'>Follow Us</p>
            <div className="follow-links">
              <img src="./Images Capstone/Social Icons.png" alt='facebook' className='facebook-pic'/>
              <img src="./Images Capstone/Instagram.png" alt='instagram' className='instagram-pic'/>
              <img src="./Images Capstone/Twitter.png" alt='twitter' className='twitter-pic'/>
            </div>
          </div>
          <div>
            <p className='foot-head'>Legal</p>
            <p className='terms'>Terms of Use</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

