//ChatGPT was used to help solve bugs in this code and provide some design suggestions. 
//The API code has been taken from the Booking.com API on RapidAPI. 
//My name is Zainul Malik 
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Header = () => <header>Hotel Search</header>;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  resultsContainer: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  resultItem: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
};

function HotelSearch() {
  const [hotelResults, setHotelResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [destId, setDestId] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [childrenAge, setChildrenAge] = useState('');
  const [roomQty, setRoomQty] = useState(1);

  const fetchHotels = async () => {
    setIsLoading(true);
    setError('');

    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params: {
        dest_id: destId,
        search_type: 'CITY',
        arrival_date: arrivalDate,
        departure_date: departureDate,
        adults: adults.toString(),
        children_age: childrenAge,
        room_qty: roomQty.toString(),
        page_number: '1',
        languagecode: 'en-us',
        currency_code: 'AED'
      },
      headers: {
        'X-RapidAPI-Key':  'cd5a13cfe5mshb67c69583c5500dp1d6f95jsnb74aede37ad9', 
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setHotelResults(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("An error occurred while fetching hotels.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Destination ID</label>
          <input
            type="text"
            style={styles.input}
            value={destId}
            onChange={(e) => setDestId(e.target.value)}
            placeholder="Enter Destination ID"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Arrival Date</label>
          <input
            type="date"
            style={styles.input}
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Departure Date</label>
          <input
            type="date"
            style={styles.input}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Adults</label>
          <input
            type="number"
            style={styles.input}
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Children Age (comma-separated)</label>
          <input
            type="text"
            style={styles.input}
            value={childrenAge}
            onChange={(e) => setChildrenAge(e.target.value)}
            placeholder="e.g. 5,7"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Room Quantity</label>
          <input
            type="number"
            style={styles.input}
            value={roomQty}
            onChange={(e) => setRoomQty(e.target.value)}
            required
          />
        </div>
        <button style={styles.button} onClick={fetchHotels}>
          Search Hotels
        </button>
      </div>

      <div style={styles.resultsContainer}>
        {isLoading ? (
          <p>Loading hotels...</p>
        ) : error ? (
          <p>{error}</p>
        ) : hotelResults ? (
          <div>
            <h2>Hotel Offers:</h2>
            {hotelResults.hotels.map((hotel, index) => (
              <div key={index} style={styles.resultItem}>
                <h3>{hotel.name}</h3>
                <p>Location: {hotel.location}</p>
                <p>Rating: {hotel.starRating}</p>
                <p>Price: AED {hotel.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
}

export default HotelSearch;
