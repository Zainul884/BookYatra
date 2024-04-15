"use client";
import Header from '../Components/Header';
import Flight from '../Components/Flight';
import TravelCard from '../Components/TravelCard';
import TravelTips from '../Components/TravelTips';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';


function FlightPage() {

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);}
  
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="App">
    <header className="landingpage-header">
        <Link href="/">
          <div className="logo">
            <Image
              src="/Images Capstone/Logo For Landing Page.png"
              alt="BookYatra Logo"
              width={250}
              height={80}
            
            /> 
          </div>
        </Link>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
          {isNavExpanded ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`} >
          <Link href="/homepage" onClick={toggleNav} style={{color:"black"}}>Home</Link>
          <Link href="/hotels" onClick={toggleNav} style={{color:"black"}}>Hotels</Link>
          <Link href="/flights" onClick={toggleNav} style={{color:"black"}}>Flights</Link>
          <Link href="/login"onClick={toggleNav} style={{color:"black"}}>Login</Link>
          <Link href="/signup" onClick={toggleNav} style={{color:"black"}}>SignUp</Link>
        </nav>
      </header>
      <Header />



      <h1 className='heading-container'>
        Tips for Booking a Flight with BookYatra
      </h1>
      <TravelTips />
      <hr />
      <Footer />
    </div>
  );
}

export default FlightPage;
