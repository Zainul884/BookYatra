'use client'

import React from 'react'
import img from '../../public/Images Capstone/Frame 118.png'
import img1 from '../../public/Images Capstone/Paper Plane.png'
import './Header.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
export default function Header() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className='container-fluid'>
       <img src={img.src} alt="" style={{width:"100%"}}/>
       <div className="out d-flex justify-content-center flex-column container align-items-end px-5 gap-3 py-5">
        <h4 style={{textAlign:"left",width:"100%"}}>Where are you flying ?</h4>
       <div className="container flight-reserve d-flex align-items-center gap-1 flex-wrap" style={{justifyContent:"space-between"}}>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>From - To</span><div className="top-main d-flex align-items-center">Calagary - Mumbai</div></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Trip</span><select className="top-main" placeholder='Select option'><option>Return</option><option>One-way</option></select></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Depart - Return</span><div className="top-main ">  <DateRangePicker onChange={onChange} value={value} /></div></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Passenger</span><input type="number" className="top-main" placeholder='0'></input></div>
        <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Class</span><select className="top-main" placeholder='Select option'><option>Economy</option><option>Business</option><option>Premium Economy</option><option>Premium Business</option></select></div>
       </div>
       <button className='div-16' style={{alignSelf:"end"}}><img className="mt-1" src={img1.src}></img>Show Flights</button></div>
    </div>
  )
}
