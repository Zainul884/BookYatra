import React from 'react'
import im1 from '../../public/Images Capstone/twitter.png'
import im2 from '../../public/Images Capstone/Instagram.png'
import im3 from '../../public/Images Capstone/Social Icons.png'
import Link from 'next/link'
export default function Footer() {
  return (

    <footer style={{marginBottom:"50px"}}>
      <div className="footer-outer d-flex gap-5 align-items-start pb-5 flex-wrap" style={{ marginLeft: "150px",marginBottom:"70px"}}>
        <div className='logo' style={{ fontSize: "50px", fontStyle: "italic" }}>#BookYatra</div>
        <div className='explore'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}>Explore</h3><div className="d-flex flex-column justify-content-start">
        <Link href="./flights" className="footer-link">Flights</Link>
              <Link href="./hotel" className="footer-link">Hotels</Link>
              <Link href="./about" className="footer-link">About Us</Link>
              <Link href="./contact" className="footer-link">Contact Us</Link>
              <Link href="./FAQ" className="footer-link">FAQs</Link>
</div></div>
        <div className='social'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}>Follow Us</h3><div className='d-flex gap-3 mt-4'>
          <img src={im3.src} alt="" /><img src={im2.src} alt="" /><img src={im1.src} alt="" /></div></div>
        <div className='legal'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}> Legal</h3><p>Terms of use</p></div>
      </div>
    </footer>
  )
}
