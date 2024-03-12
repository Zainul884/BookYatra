import React from 'react';

export default function Flight({ flights }) {
    return (
        <div className='d-flex container ticket-container gap-4 justify-content-center mt-5'>
            {flights && flights.map(flight => (
                <div key={flight.id} className="container w-50 ticket-flight">
                    <div className="div-2">
                        <div className="column">
                            <div className="div-3">
                                <img loading="lazy" src={flight.image} className="img" alt="Flight Image" />
                                <div className="div-4">{flight.city}</div>
                                <div className="div-5">{flight.tripType}</div>
                                <div className="div-6">Dates:</div>
                                <div className="div-7">{flight.dateRange}</div>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="div-8">
                                <div className="div-9">
                                    <img loading="lazy" src={flight.vector} className="img-2" alt="Vector Image" />
                                    <div style={{ display: "flex", alignItems: "end", gap: "2rem" }}>
                                        <div className="div-10">{flight.destination}</div>{flight.country}
                                    </div>
                                </div>
                                <div className="div-12">
                                    <div className="div-13">
                                        <div className="div-14">{flight.price}</div>
                                        <div className="div-15">Per Person</div>
                                    </div>
                                    <div className="div-16">
                                        <button className="div-17">Book Now</button>
                                        <img loading="lazy" src={flight.icon} className="img-3" alt="Icon Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
