import Header from '../Components/Header';
import Flight from '../Components/Flight';
import TravelCard from '../Components/TravelCard';
import TravelTips from '../Components/TravelTips';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import Link from 'next/link';



function FlightPage() {



  return (
    <div className="App">
<div className="header-content">
          <img src="./Images Capstone/LOGO without bg.png" alt="logo" className="logo-home" />
          <nav className="homenavigation" style={{color:"black"}}>
            <Link href="./homepage"className="link">Home</Link>
            <Link href="./hotel" className="link">Hotel</Link>
            <Link href="./flights"className="link">Flights</Link>
            <Link href="./login" className="link">Login</Link>
            <Link href="./signup" className="link">SignUp</Link>
          </nav>
        </div>
    <Header/>
    <h1 className='heading container'>Flights</h1>
    <Flight/>
    <h1 className='heading container'>Popular Destinations</h1>
    <TravelCard/>
    <h1 className='heading container'>
  Tips for Booking a Flight with BookYatra
</h1>
   <TravelTips/>
   <hr/>
   <Footer/>
    </div>
  );
}

export default FlightPage;
