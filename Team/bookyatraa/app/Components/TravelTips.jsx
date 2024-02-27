import React from "react";

function TravelTips() {
  return (
    <div className="d-flex flex-wrap container gap-3 my-5 justify-content-center">
      <div className="div travel-tips-card">
        <div className="div-2">1. Book in Advance:</div>
        <div className="div-3">
          Generally, booking your flights well in advance can help you get
          better rates. Aim to book your flights at least a few weeks ahead of
          your planned travel date.
        </div>
      </div>
      <div className="div travel-tips-card">
        <div className="div-2">2. Be Flexible with Dates:</div>
        <div className="div-3">
          If possible, have flexible travel dates. Sometimes flying a day earlier or later can significantly reduce the cost. Use BookYatra's flexible date search feature to compare prices across different dates.
        </div>
      </div>
      <div className="div travel-tips-card">
        <div className="div-2">3. Consider Connecting Flights:</div>
        <div className="div-3">
          Choose a hotel that is conveniently located near the attractions or business centers you plan to visit. BookYatra offers maps and local guides to assist with your selection.
        </div>
      </div>
      <div className="div travel-tips-card">
        <div className="div-2">4. Early Bird or Last Minute ?</div>
        <div className="div-3">
          Evaluate the best time to book. While booking early often secures the best rates, last-minute bookings can sometimes offer unexpected deals. BookYatra updates its deals regularly to cater to both types of travelers.
        </div>
      </div>
      <div className="div travel-tips-card">
        <div className="div-2">5. Consider Booking Round Trips:</div>
        <div className="div-3">
          Round trip tickets are often cheaper than one-way tickets. If your travel plans are set, booking a round trip might save you money
        </div>
      </div>
    </div>
  );
}

export default TravelTips;