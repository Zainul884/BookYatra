import React from 'react'
import img from '../../public/Images Capstone/Rectangle 4.png'
export default function TravelCard() {



  return (
    <div className="trip-card mt-5">
 <div className="div">
        <img
          loading="lazy"
         src={img.src}
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Paris</div>
            <div className="div-5">A Paris Adventure</div>
          </div>
          <div className="div-6">$ 600</div>
        </div>
        <button className="div-7">Book a Flight</button>
      </div>
      <div className="div">
        <img
          loading="lazy"
         src={img.src}
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Paris</div>
            <div className="div-5">A Paris Adventure</div>
          </div>
          <div className="div-6">$ 600</div>
        </div>
        <button className="div-7">Book a Flight</button>
      </div>
      <div className="div">
        <img
          loading="lazy"
         src={img.src}
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Paris</div>
            <div className="div-5">A Paris Adventure</div>
          </div>
          <div className="div-6">$ 600</div>
        </div>
        <button className="div-7">Book a Flight</button>
      </div>
      <div className="div">
        <img
          loading="lazy"
         src={img.src}
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Paris</div>
            <div className="div-5">A Paris Adventure</div>
          </div>
          <div className="div-6">$ 600</div>
        </div>
        <button className="div-7">Book a Flight</button>
      </div>
  </div>
  )
}

