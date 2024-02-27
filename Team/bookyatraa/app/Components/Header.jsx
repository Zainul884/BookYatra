import React from 'react'
import img from '../../public/Images Capstone/Frame 118.png'
import img1 from '../../public/Images Capstone/Paper Plane.png'
import './Header.css'
export default function Header() {
  return (
    <div className='container-fluid'>
       <img src={img.src} alt="" style={{width:"100%"}}/>
       <div className="out d-flex justify-content-center flex-column container align-items-end px-5 gap-3 py-5">
        <h4 style={{textAlign:"left",width:"100%"}}>Where are you flying ?</h4>
       <div className="container flight-reserve d-flex align-items-center gap-1 flex-wrap" style={{justifyContent:"space-between"}}>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>From - To</span><div className="top-main d-flex align-items-center widthChange">Calagary - Mumbai<i className="fa-solid fa-right-left fa-xs"></i></div></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Trip</span><div className="top-main">Return</div></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Depart - Return</span><div className="top-main widthChange">13 Feb 24 - 15 Feb 24</div></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Passenger - Class</span><div className="top-main widthChange">1 Passenger, Economy</div></div>
       </div>
       <button className='div-16' style={{alignSelf:"end"}}><img className="mt-1" src={img1.src}></img>Show Flights</button></div>
    </div>
  )
}
