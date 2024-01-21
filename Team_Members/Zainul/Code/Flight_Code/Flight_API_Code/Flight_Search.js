"use client";
import React, { useState } from 'react';
import axios from 'axios';


const Header = () => <header>Header Placeholder</header>;

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
  airlineLogo: {
    height: '50px',
    width: 'auto',
    marginRight: '10px',
  },
};

function FlightSearch() {
  const [flightResults, setFlightResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fromId, setFromId] = useState('');
  const [toId, setToId] = useState('');
  const [departDate, setDepartDate] = useState('');

  const fetchFlights = async () => {
    setIsLoading(true);
    setError('');

    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
      params: { fromId, toId, departDate },
      headers: {
        'X-RapidAPI-Key':  'cd5a13cfe5mshb67c69583c5500dp1d6f95jsnb74aede37ad9', 
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setFlightResults(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
      setError("An error occurred while fetching flights.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (units, nanos) => {
    return (units + nanos / 1e9).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>From (Airport ID)</label>
          <input
            type="text"
            style={styles.input}
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            placeholder="BOM.AIRPORT"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>To (Airport ID)</label>
          <input
            type="text"
            style={styles.input}
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            placeholder="DEL.AIRPORT"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Departure Date</label>
          <input
            type="date"
            style={styles.input}
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            required
          />
        </div>
        <button style={styles.button} onClick={fetchFlights}>
          Search Flights
        </button>
      </div>
      <div style={styles.resultsContainer}>
        {isLoading ? (
          <p>Loading flights...</p>
        ) : error ? (
          <p>{error}</p>
        ) : flightResults ? (
          <div>
           <h2>Flight Offers:</h2>
    {flightResults.data.flightOffers.map((offer, index) => (
      <div key={index} style={styles.resultItem}>
        <div>
          <h3>{offer.segments.map(segment => segment.departureAirport.name).join(' to ')}</h3>
          <p>Departure: {offer.segments[0].departureTime}</p>
          <p>Arrival: {offer.segments[0].arrivalTime}</p>
          <p>Number of Seats Available: {offer.seatAvailability.numberOfSeatsAvailable}</p>
          <p>Total Price: AED {formatPrice(offer.priceBreakdown.total.units, offer.priceBreakdown.total.nanos)}</p>
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No flights found.</p>
)}

      </div>
    </div>
  );
}

export default FlightSearch;
