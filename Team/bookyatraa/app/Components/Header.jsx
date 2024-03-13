'use client'
import React, { useState } from 'react';
import img from '../../public/Images Capstone/Frame 118.png';
import img1 from '../../public/Images Capstone/Paper Plane.png';
import './Header.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import axios from 'axios'; // Import Axios library
import Flight from './Flight'; // Import Flight component
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function Header() {
    const [value, onChange] = useState([new Date(), new Date()]);
    const [fromTo, setFromTo] = useState('');
    const [flights, setFlights] = useState(null); // Initialize flights state

    const handleShowFlights = async () => {
        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination',
            params: { query: fromTo },
            headers: {
                'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setFlights(response.data.data); // Update flights state with fetched data
        } catch (error) {
            console.error(error);
            // Handle errors here
        }
    };

    return (
        <div className='container-fluid'>
            <img src={img.src} alt="" style={{ width: "100%" }} />
            <div className="out d-flex justify-content-center flex-column container align-items-end px-5 gap-3 py-5">
                <h4 style={{ textAlign: "left", width: "100%" }}>Where are you flying ?</h4>
                <div className="container flight-reserve d-flex align-items-center gap-1 flex-wrap" style={{ justifyContent: "space-between" }}>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>From - To</span>
                        <input type="text" className="top-main d-flex align-items-center" value={fromTo} onChange={(e) => setFromTo(e.target.value)} placeholder='Enter city' />
                    </div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Trip</span><select className="top-main" placeholder='Select option'><option>Return</option><option>One-way</option></select></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Depart - Return</span><div className="top-main ">  <DateRangePicker onChange={onChange} value={value} /></div></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Passenger</span><input type="number" className="top-main" placeholder='0'></input></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Class</span><select className="top-main" placeholder='Select option'><option>Economy</option><option>Business</option><option>Premium Economy</option><option>Premium Business</option></select></div>
                </div>
                <button className='div-16' style={{ alignSelf: "end" }} onClick={handleShowFlights}><img className="mt-1" src={img1.src} alt="paper-plane"></img>Show Flights</button>
                {/* Pass the fetched flight data as a prop to the Flight component */}
                <Flight flights={flights} />
            </div>
        </div>
    );
}
