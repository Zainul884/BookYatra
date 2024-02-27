import React from 'react'
import im1 from '../../public/Images Capstone/Vector (1).png'
import im2 from '../../public/Images Capstone/Instagram.png'
import im3 from '../../public/Images Capstone/Social Icons.png'
export default function Footer() {
  return (

    <footer style={{marginBottom:"50px"}}>
      <div className="footer-outer d-flex gap-5 align-items-start pb-5" style={{ marginLeft: "150px",marginBottom:"70px"}}>
        <div className='logo' style={{ fontSize: "50px", fontStyle: "italic" }}>#BookYata</div>
        <div className='explore'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}>Explore</h3><div className="d-flex flex-column justify-content-start"><p>Flights</p>
          <p>Hotels</p>
          <p>AboutUs</p>
          <p>FAQs</p>
</div></div>
        <div className='social'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}>Follow Us</h3><div className='d-flex gap-3 mt-4'>
          <img src={im3.src} alt="" /><img src={im2.src} alt="" /><img src={im1.src} alt="" /></div></div>
        <div className='leagal'><h3 className='pt-4' style={{ fontWeight: "400", fontStyle: "italic" }}> Legal</h3><p>Terms of use</p></div>
      </div>
    </footer>
  )
}
