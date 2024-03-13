
import React from 'react';
import Flight from './Flight'; // Import Flight component

export default function FlightsContainer({ flights }) {
    return (
        <div>
            {flights.map(flight => (
                <Flight key={flight.id} flight={flight} />
            ))}
        </div>
    );
}
