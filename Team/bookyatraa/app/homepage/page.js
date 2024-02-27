"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


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

  const [destId, setDestId] = useState([]); // This will be the destination ID for the hotel search
  const [hotelsDetails, setHotelsDetails] = useState([]);
  const cityName = 'mumbai'; // Example city name
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${cityName}`;
  const Hotelurl = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=20088325&search_type=CITY&arrival_date=2024-04-10&departure_date=2024-04-18&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED`;
  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
		  'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	  }
  };


  useEffect(() => {
    const fetchDestId = async () => {
        
    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
      setDestId(result.data[0].dest_id);
    } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchDestId();
  }, []);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      
    try {
    	const response = await fetch(Hotelurl, options);
    	const result = await response.json();
      setHotelsDetails(result.data.hotels.slice(0,3).map((hotel) => hotel.property));
    } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchHotelDetails();
  }, []);

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
            {hotelsDetails.map((hotel, index) => (
              <div key={index} className='flightcard'>
                <img src={hotel.photoUrls} alt={hotel.name} className='flightp-pic'/>
                <div className='flight-content'>
                </div>
                <div className='hotelp-content'>
                  <h2 className='hotelp-title'>{hotel.name.split(' ').slice(0, 3).join(' ')}</h2>
                  <p className='hotelp-words'>{hotel.wishlistName}</p>
                  <div className='price'>
                    <p className='strating'>Starting From</p>
                    <p className='hotelp-price'>${Math.round(hotel.priceBreakdown.grossPrice.value/75)}<span className='per'>/per night</span></p>
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

