import React from 'react';
import VectorPlane from '../../public/Images Capstone/airPlane.png'
import rightArrow from '../../public/Images Capstone/Icon.png'
export default function Flight({ flights,from,to,returnType,returnDate,departureDate }) {

    return (
        <div className='d-flex container ticket-container flex-wrap gap-4 justify-content-center mt-5'>
            {flights && flights.map(flight => (
                <div key={flight.id} className="container ticket-flight">
                    <div className="div-2">
                        <div className="column">
                            <div className="div-3">
                                <img loading="lazy" src={flight.logoUrl} className="img" alt="Flight Image" />
                                <div className="div-4">{from}</div>
                                <div className="div-5">Round Trip</div>
                                <div className="div-6">Date:</div>
                                <div className="">{departureDate+"  "+returnDate}</div>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="div-8">
                                <div className="div-9">
                                    <img loading="lazy" src={VectorPlane.src} className="img-2" alt="Vector Image" />
                                    <div style={{ display: "flex", alignItems: "end", gap: "2rem" }}>
                                        <div className="div-10">{to}</div>
                                    </div>
                                </div>
                                <div className="div-12">
                                    <div className="div-13">
                                        <div className="div-14">{"$"+flight.minPrice.units+"/"}</div>
                                        <div className="div-15">Per Person</div>
                                    </div>
                                    <div className="div-16">
                                        <button className="div-17">Book Now</button>
                                        <img loading="lazy" src={rightArrow.src} className="img-3" alt="Icon Image" />
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
