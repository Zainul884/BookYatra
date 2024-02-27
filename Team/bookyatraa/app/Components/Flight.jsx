import React from 'react'
import qat from '../../public/Images Capstone/image 43.png'
import vec from '../../public/Images Capstone/Vector.png'
import arr from '../../public/Images Capstone/Icon.png'
export default function Flight() {
  return (
    <div className='d-flex container ticket-container gap-4 justify-content-center mt-5'>
    <div className="container w-50 ticket-flight">
    <div className="div-2">
      <div className="column">
        <div className="div-3">
          <img
            loading="lazy"
            src={qat.src}
            className="img"
          />
          <div className="div-4">Calgary</div>
          <div className="div-5">RoundTrip</div>
          <div className="div-6">Dates :</div>
          <div className="div-7">Feb13 - Feb 15</div>
        </div>
      </div>
      <div className="column-2">
        <div className="div-8">
          <div className="div-9">
            <img
              loading="lazy"
             src={vec.src}
              className="img-2"
            />
           <div style={{display:"flex",alignItems:"end",gap:"2rem"}}> <div className="div-10">Mumbai</div>India</div>
          </div>
          <div className="div-12">
            <div className="div-13">
              <div className="div-14">$ 2489/</div>
              <div className="div-15">Per Person</div>
            </div>
            <div className="div-16">
              <button className="div-17">Book Now</button>
              <img
                loading="lazy"
               src={arr.src}
                className="img-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container w-50 ticket-flight">
    <div className="div-2">
      <div className="column">
        <div className="div-3">
          <img
            loading="lazy"
            src={qat.src}
            className="img"
          />
          <div className="div-4">Calgary</div>
          <div className="div-5">RoundTrip</div>
          <div className="div-6">Dates :</div>
          <div className="div-7">Feb13 - Feb 15</div>
        </div>
      </div>
      <div className="column-2">
        <div className="div-8">
        <div className="div-9">
            <img
              loading="lazy"
             src={vec.src}
              className="img-2"
            />
           <div style={{display:"flex",alignItems:"end",gap:"2rem"}}> <div className="div-10">Mumbai</div>India</div>
          </div>
          <div className="div-12">
            <div className="div-13">
              <div className="div-14">$ 2489/</div>
              <div className="div-15">Per Person</div>
            </div>
            <div className="div-16">
              <button className="div-17">Book Now</button>
              <img
                loading="lazy"
               src={arr.src}
                className="img-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
