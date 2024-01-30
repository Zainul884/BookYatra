import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

function Flights() {
  return (
    <div className="flights-page">
      <h1 style={{ position: 'relative', width: '1440px', height: '3442px', background: '#FFFFFF' }}>
        Flights Page
      </h1>

      {/* Flights Heading */}
      <p
        style={{
          position: 'absolute',
          width: '418px',
          height: '69px',
          left: '26px',
          top: '897px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '57px',
          lineHeight: '69px',
          color: '#000000',
        }}
      >
        Flights
      </p>

      {/* Make your travel wishlist, we’ll do the rest */}
      <p
        style={{
          position: 'absolute',
          width: '900px',
          height: '69px',
          left: '26px',
          top: '967px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#000000',
        }}
      >
        Make your travel wishlist, we’ll do the rest
      </p>

      {/* Where are you flying? From - To */}
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '200px',
          left: '26px',
          top: '1022px',
        }}
      >
        <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '24px', lineHeight: '29px', color: '#000000' }}>
          Where are you flying? From - To
        </p>

        {/* Trip, Depart - Return, Passenger - Class */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            Trip
          </p>
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            Depart - Return
          </p>
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            Passenger - Class
          </p>
        </div>

        {/* From - To Details */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            Calgary - Mumbai
          </p>
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            Return
          </p>
          <p style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '24px', color: '#000000' }}>
            1 Passenger, Economy
          </p>
        </div>

        {/* Show Flights Button */}
        <button
          style={{
            marginTop: '20px',
            padding: '10px',
            fontSize: '20px',
            backgroundColor: '#2E3B4E',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Show Flights
        </button>
      </div>

      {/* Flights Section */}
      <div
        style={{
          position: 'absolute',
          width: '1150px',
          height: '500px',
          left: '43px',
          top: '1350px',
        }}
      >
        {/* Flight 1 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '400px',
              height: '300px',
              background: '#FFFFFF',
              border: '1px solid #000000',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '10px',
            }}
          >
            {/* Content for Flight 1 goes here */}
            <p>Calgary to Mumbai</p>
            <p>Round Trip</p>
            <p>Dates: Feb 13 - Feb 15</p>
            <p>$2489/Per Person</p>
            <button>Book Now</button>
          </div>
          {/* Repeat the structure for other flights */}
        </div>
      </div>

      {/* Popular Destinations In The City Heading */}
      <p
        style={{
          position: 'absolute',
          width: '899px',
          height: '69px',
          left: '23px',
          top: '2243px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '57px',
          lineHeight: '69px',
          color: '#000000',
        }}
      >
        Popular Destinations In The City
      </p>

      {/* Popular Destinations Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '20px',
        }}
      >
        {/* Destination 1 */}
        <div
          style={{
            width: '300px',
            height: '300px',
            background: '#FFFFFF',
            border: '1px solid #000000',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          {/* Content for Destination 1 goes here */}
          <p>Paris</p>
          <p>$600</p>
          <p>A Paris Adventure</p>
          <button>Book a Flight</button>
        </div>
        {/* Repeat the structure for other destinations */}
      </div>

      {/* Tips Section */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          left: '26px',
          top: '3000px',
        }}
      >
        <h2>Tips for Booking a Flight with BookYatra</h2>
        <ul>
          <li>Book in Advance: Be Flexible with Dates</li>
          <li>Consider Connecting Flights</li>
          <li>Early Bird or Last Minute?</li>
          <li>Consider Booking Round Trips</li>
        </ul>
      </div>

      {/* BookYatra Footer */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          left: '0',
          top: '3500px',
          background: '#2E3B4E',
          padding: '20px 0',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <h2>BookYatra</h2>
        <p>Explore</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <a href="/">Flights</a>
          <a href="/">Hotels</a>
          <a href="/">About Us</a>
          <a href="/">FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default Flights;