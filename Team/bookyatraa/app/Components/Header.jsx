'use client'
import React, { useState,useEffect } from 'react';
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
    const [from, setFrom] = useState('');
    const [toDes,setTo]=useState('');
    const [adult,setadult] = useState(1);
    const [returnType,setReturnType] = useState("Return");
    const [isLoading,setLoading] = useState(false);
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [cabin,setCabin]=useState("ECONOMY");
    

    let flag=true;
    let FromId="";
    let ToID="";



 function loactionSearch(location){

    const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination',
        params: {query: location},
        headers: {
          'X-RapidAPI-Key': '56441d8fedmsh3939c522f3bc44ap126811jsnf885e170e83e',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        try {
            setLoading(true);
          const respo = await axios.request(options);
          console.log(respo.data.data[0].cityName);
          setLoading(false);
          if(respo.data.data.length!==0 && (respo.data.data[0].cityName===location || respo.data.data[0].name===location))
          {
            if(flag)
            {
                setStart(location);
                flag=false;
            FromId=respo.data.data[0].id;
            }
        else
        {
            setEnd(location);
            flag=true;
            ToID=respo.data.data[0].id;
        }
   
            return true
          }
        } catch (error) {
          console.error('Error fetching Loaction details:', error);
        }
        return false;
      };
  
      return fetchData()



 }

    
      const [data, setFlightData] = useState([]);
    
     async function handleShowFlights(){



        const fetchData = async () => {
            
    const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
        params: {
          fromId: FromId,
          toId: ToID,
          page:'1',
          adult:adult,
          departDate: '2024-04-20',
          currency_code: 'CAD',
          cabinClass:cabin
        },
        headers: {
          'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };
       
          try {
            setLoading(true);
            const respo = await axios.request(options);
            setFlightData(respo.data.data.aggregation.airlines); // Update with respo.data instead of respo
            setLoading(false);
          } catch (error) {
            // Handle error
            console.error('Error fetching flight details:', error);
          }
        };

        if(await loactionSearch(from) && await loactionSearch(toDes)  && FromId!=="" && ToID!=="")
        fetchData();
      };

    return (
        <>
        <div className='container-fluid'>
            <img src={img.src} alt="" style={{ width: "100%" }} />
            <div className="out d-flex justify-content-center flex-column container align-items-end px-5 gap-3 py-5">
                <h4 style={{ textAlign: "left", width: "100%" }}>Where are you flying ?</h4>
                <div className="container flight-reserve d-flex align-items-center flex-wrap" style={{ justifyContent: "space-between" }}>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>From</span>
                        <input type="text" className="top-main d-flex align-items-center" value={from} onChange={(e) => setFrom(e.target.value)} placeholder='Enter city' />
                    </div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>To</span>
                        <input type="text" className="top-main d-flex align-items-center" value={toDes} onChange={(e) => setTo(e.target.value)} placeholder='Enter city' />
                    </div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Trip</span><select className="top-main" value={returnType}  onChange={(e) => setReturnType(e.target.value)} placeholder='Select option'><option>Return</option><option>One-way</option></select></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Depart - Return</span><div className="top-main ">  <DateRangePicker onChange={onChange} value={value} /></div></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Passenger</span><input type="number" className="top-main" value={adult} onChange={(e) => setadult(e.target.value)} placeholder='0'></input></div>
                    <div className='flight-reserve-text px-3 py-2'><span className='top-head'>Class</span><select className="top-main" value={cabin}  onChange={(e) => setCabin(e.target.value)} placeholder='Select option'><option>ECONOMY</option><option>PREMIUM_ECONOMY</option><option>BUSINESS</option></select></div>
                </div>
                <button className='div-16' style={{ alignSelf: "end" }} onClick={handleShowFlights}><img className="mt-1" src={img1.src} alt="paper-plane"></img>Show Flights</button>
                {/* Pass the fetched flight data as a prop to the Flight component */}

            </div>
        </div>
        <h1 className='heading container'>Flights</h1>
       {isLoading?<h1 className='mt-5' style={{textAlign:'center'}}>Loading ...</h1> : data.length!==0 && <Flight flights={data} from={start} to={end} returnType={returnType} />}
        </>
    );
}
