import React from 'react'
import im1 from '../../public/Images Capstone/twitter.png'
import im2 from '../../public/Images Capstone/Instagram.png'
import im3 from '../../public/Images Capstone/Social Icons.png'
import Link from 'next/link'
export default function Footer() {
  return (

    <footer>
        <div className='footer'>
          <p className='foot-title'>BookYatra</p>
          <br></br>
          <div>
            <p className='foot-head'>Explore</p>
            <nav className="footer-nav">
              <Link href="./flights" className="footer-link">Flights</Link>
              <Link href="./hotels" className="footer-link">Hotels</Link>
              <Link href="./about" className="footer-link">About Us</Link>
              <Link href="./contact" className="footer-link">Contact Us</Link>
              <Link href="./FAQ" className="footer-link">FAQs</Link>
            </nav>
          </div>
          <div>
            <p className='foot-head'>Follow Us</p>
            <div className="follow-links">
              <img src="./Images Capstone/Social Icons.png" alt='facebook' className='facebook-pic'/>
              <img src="./Images Capstone/Instagram.png" alt='instagram' className='instagram-pic'/>
              <img src="./Images Capstone/Twitter.png" alt='twitter' className='twitter-pic'/>
            </div>
          </div>
          <div>
            <p className='foot-head'>Legal</p>
            <Link href="./terms" className="footer-link">Terms of Use</Link>
          </div>
        </div>
    </footer>
  )
}
