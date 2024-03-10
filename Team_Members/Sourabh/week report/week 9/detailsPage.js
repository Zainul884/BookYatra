////I added new code in it 
///View details of the hotel
///Fetch data from API




"use client";
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import './firebaseConfig';
import './styles.css';
// Styled-components for the form
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url('./images/LP.jpg') no-repeat ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  
  
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  padding: 60px;
  width: 100%;
  margin-right: 700px;
  max-width: 500px;
  z-index: 2;
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 0 0 20px 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #666;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  background-color: #0056b3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004494;
  }
`;






const SwitchModeButton = styled.button`
  background: none;
  color: #0056b3;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;



// const styles = {
//   container: {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: '#333',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: '20px',
//     width: '100%',
//      // Adjusted for a wider layout
//     margin: '0 auto', // Centered in the viewport
//     boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
//     borderRadius: '12px',
//     transition: 'all 0.3s ease-in-out',
//     position: 'relative', // Added for absolute positioning of children if needed
//   },
//   signOut: {
//     position: 'absolute', 
//     top: '50px',
//     right: '50px',
//   },
  
//   header: {
//     color: 'white',
//     fontSize: '32px',
//     fontWeight: 'bold',
//     position: 'absolute',
//     top: '50px',
//     left: '50px',
//     alignItems:'left',

    
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     padding: '15px', // Increased padding for more space
//     marginTop: '30px', // Increased margin-top for more space between sections
//     borderRadius: '12px',
//     display: 'flex',
//     flexDirection: 'row',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Softer shadow for a subtle effect
//     marginBottom: '40px', // Increased margin-bottom for more space between sections
//     transition: 'transform 0.3s ease-out', // Subtle transform effect
//     transform: 'translateY(0)', // Initial transform state
//     width:'60%',
//     gap: '20px', // Increased gap between form elements
//     marginLeft: '270px',
//     padding: '10px',
    
    
//   },
//   inputGroup: {
//     marginBottom: '25px', // Increased space between input groups
//   },
  
//   p2: {
//     color: 'white',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     width: '500px',
//     marginTop: '20px',
//     },
//   searchContainer: {
//     background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/gb.jpg') no-repeat center center",
//     backgroundSize: 'cover',
//     padding: '20px', // Increased padding for a larger appearance
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     marginBottom: '30px',
   
//     justifyContent: 'space-between', // Distribute space between items
    
   
    
//   },
//   label: {
//     display: 'block',
//     marginBottom: '15px', // More space between label and input
//     fontWeight: 'bold', // Bold labels for better readability
//     color: '#444', // Slightly darker for better contrast
//   },
 
//   n:{
   
//     marginTop: '200px',
//     marginLeft: '930px',
    
// },
//   input: {
//     width: '100%',
//     padding:'10px',// Increased padding for better input visibility
//     border: '2px solid #ccc', // Thicker border for more pronounced input fields
//     borderRadius: '8px', // Rounded corners for a modern look
//      // Increased margin-bottom for more space
//     fontSize: '16px', // Larger font size for better readability
//     maxWidth: '200px', // Set max width for larger screens
//   },
 
//   button: {
//     padding: '10px',
//     marginTop:'40px', // More margin at the top for better spacing
//     height: '50%', // Increased height for a larger button
    
//     borderRadius: '8px', // Rounded corners for buttons
//     backgroundColor: '#007bff', // A more vibrant button color
//     color: 'white',
//     fontSize: '18px', // Larger font size for buttons
//     cursor: 'pointer',
    
//   },
//   resultItem: {
//     borderBottom: '2px solid #eee', // Thicker bottom border for clear separation
//     paddingBottom: '20px', // More padding at the bottom
//     marginBottom: '20px', // More space between items
//     transition: 'background-color 0.3s ease-in-out', // Background color transition for hover effect
//     ':hover': {
//       backgroundColor: '#f8f9fa', // Subtle hover background change
//     },
//   },
//   flexContainer: {
//     display: 'flex',
    
//     flexDirection: 'column',
//     gap: '20px', 
//   },
//   halfWidthContainer: {
//     flex: '1',
    
//     padding: '20px', // Padding inside each half-width container
//     backgroundColor: '#f8f9fa', // Background color for each container for distinction
//     borderRadius: '8px', // Rounded corners for internal containers
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
//   },
  
//   authInput: { // New style for the authentication input fields
//     width: '100%',
//     padding: '10px',
//     margin: '5px 0',
//     borderRadius: '4px',
//     border: '1px solid #ddd',
//     fontSize: '16px',
//     backgroundColor: '#fff', // Ensuring the background is white for visibility
//   },
//   authButton: { // New style for the authentication buttons
//     width: '100%',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '4px',
//     backgroundColor: '#4CAF50', // Changing button color for distinction
//     color: 'white',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     ':hover': {
//       backgroundColor: '#45a049', // Darker shade on hover
//     },
//   },

//     resultsContainer1: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//       gap: '20px',
//       justifyContent: 'center',
//       gap: '20px',
//       padding: '20px',
//       width: '100%',
      
//     },
    
//     halfWidthContainer1: {
//       width: '50%',
//     },
   
//     resultItem2: {
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       border: '2px solid black',
//       marginBottom: '20px',
//       width: '40%',
      
      

      
      
//       },
    
//     hotelName1: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       color: 'black',
//       marginBottom: '10px',
//     },
//     hotelInfo1: {
//       fontSize: '16px',
//       color: '#666',
//       marginBottom: '15px',
//       width: '60%',
      
//     },
//     favoriteButton1: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       padding: '10px 15px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     }
  
// };






function DestIdSearch() {
  const [destResults, setDestResults] = useState([]);
  const [isLoadingDest, setIsLoadingDest] = useState(false);
  const [errorDest, setErrorDest] = useState('');
  const [query, setQuery] = useState('');

  const [cityName, setCityName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState('1');
  const [childrenAge, setChildrenAge] = useState('');
  const [roomQty, setRoomQty] = useState('1');
  const [hotels, setHotels] = useState([]);
  const [hotelsDetails, setHotelsDetails] = useState([]);
  const [destId, setDestID] = useState([]);
  const [hotel_id, setHotelsId] = useState([]);
  const [isLoadingHotels, setIsLoadingHotels] = useState(false);
  const [errorHotels, setErrorHotels] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [selectedHotelDetails, setSelectedHotelDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [modalSize, setModalSize] = useState({ width: 600, height: 400 }); // Example initial size


  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user.uid); // Log user ID for verification
        setUser(user);
  
        const database = getDatabase();
        const userDataRef = ref(database, `users/${user.uid}/favoritesData`);

        
        const unsubscribeData = onValue(userDataRef, (snapshot) => {
          const data = snapshot.val();
          console.log("Retrieved data:", data); // Log the retrieved data
          if (data && data.favorites) {
            setFavorites(data.favorites);
          } else {
            setFavorites([]);
          }
        }, (error) => {
          console.error("Error fetching data:", error);
        });
  
        return () => unsubscribeData();
      } else {
        console.log("No user logged in");
        setUser(null);
        setFavorites([]);
      }
    });
    console.log('Modal Open:', isModalOpen, 'Selected Hotel:', selectedHotelDetails);
    return () => unsubscribeAuth();
  }, [user]); // Add 'user' to the dependency array

  const fetchHotelsWithCityName = async () => {
    setIsLoadingHotels(true);
    setErrorHotels('');
    try {
      const destResponse = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination', {
        params: { query: cityName },
        headers: {
          'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
        },
      });
  
      const destId = destResponse.data.data[0].dest_id; // Directly use dest_id
  
      const hotelResponse = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels', {
        params: {
          dest_id: destId, // Use the direct destId
          arrival_date: arrivalDate,
          departure_date: departureDate,
          adults: adults,
          children_age: childrenAge,
          room_qty: roomQty,
          search_type: 'CITY',
          page_number: '1',
          languagecode: 'en-us',
          currency_code: 'CAD',
        },
        headers: {
          'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
        },
      });
  
      const hotelIds = hotelResponse.data.data.hotels.map(hotel => hotel.property.id);
      
      // Fetch details for all hotels concurrently
      const hotelDetailsPromises = hotelIds.map(hotel_id =>
        axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails', {
          params: {
            hotel_id: hotel_id,
            arrival_date: arrivalDate,
            departure_date: departureDate,
            adults: '1',
            children_age: '1,17',
            room_qty: '1',
            languagecode: 'en-us',
            currency_code: 'EUR',
          },
          headers: {
            'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
          },
        }).then(response => response.data.data)
      );
  
      const hotelsDetails = await Promise.all(hotelDetailsPromises);
      setHotelsDetails(hotelsDetails); // Update state once all promises resolve
  
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setErrorHotels("An error occurred while fetching hotels.");
    } finally {
      setIsLoadingHotels(false);
    }
  };
  

  const handleVisitHotelDetails = (hotelDetails) => {
    console.log('Visit Details clicked', hotelDetails);
    setSelectedHotelDetails(hotelDetails);
    setIsModalOpen(true); // Open the modal
  };
  
  
  const handleCloseModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false); // Close the modal
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  
  
  const fetchFavorites = (userId) => {
    const favoritesRef = firebase.database().ref(`users/${userId}/favorites`);
    favoritesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFavorites(data.favoritesList || []);
      }
    });
  };

  const addToFavorites = (hotel) => {
    if (!hotel || !hotel.hotel_id) {
      console.error('Invalid hotel object:', hotel);
      return;
    }
  
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.hotel_id === hotel.hotel_id);
      if (isAlreadyFavorite) {
        // If the hotel is already in favorites, don't add it again
        return prevFavorites;
      }
  
      // Create a new favorite object with price and currency
      const newFavorite = {
        ...hotel,
        price: hotel.product_price_breakdown.gross_amount.value, // Make sure these paths are correct
        currency: hotel.product_price_breakdown.gross_amount.currency // Make sure these paths are correct
      };
  
      // Create a new array of favorites with the new favorite added
      const newFavorites = [...prevFavorites, newFavorite];
  
      // If the user is logged in, save the new favorites array to the database
      if (user) {
        const database = getDatabase();
        const favoritesRef = ref(database, `users/${user.uid}/favorites`);
        set(favoritesRef, newFavorites).catch((error) =>
          console.error('Error updating favorites:', error)
        );
      }
  
      // Return the new array of favorites
      return newFavorites;
    });
  };
  
  
  const submitFavorites = () => {
    if (user && favorites.length > 0) {
      const database = getDatabase();
      const favoritesRef = ref(database, `users/${user.uid}/favoritesData`);


      set(favoritesRef, {
        favorites: favorites,
        totalCost: calculateTotalPrice()
      }).then(() => {
        console.log("Favorites successfully submitted!");
        setSubmitStatus("Favorites successfully submitted!");
      }).catch((error) => {
        console.error("Error submitting favorites:", error);
        setSubmitStatus("Error submitting favorites. Please try again.");
      });
    } else {
      setSubmitStatus("No favorites to submit.");
    }
  };
  
  

  const signIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // You can set user state or perform other actions here
      })
      .catch(error => console.error("Error signing in:", error));
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("User signed out");
      setUser(null); // Reset the user state
      setFavorites([]); // Clear favorites upon sign out
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const signUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created
        // You can set user state or perform other actions here
      })
      .catch(error => console.error("Error signing up:", error));
  };


  const calculateTotalPrice = () => {
    // Use reduce to sum up the prices of all favorited hotels
    const total = favorites.reduce((total, fav) => {
      // Parse the price to a float and add it to the total
      const price = parseFloat(fav.price);
      // If the price is not a number (isNaN), don't add anything to the total (return the current total)
      // Otherwise, add the price to the total
      return total + (isNaN(price) ? 0 : price);
    }, 0); // Start the total at 0
  
    // Return the total price fixed to 2 decimal places and converted to a string
    return total.toFixed(2);
  };
  
  
  

  const fetchDestId = async () => {
    setIsLoadingDest(true);
    setErrorDest('');
    setDestResults([]);

    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
      params: { query: query },
      headers: {
        'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setDestResults(response.data.data);
    } catch (error) {
      console.error("Error fetching destination ID:", error);
      setErrorDest("An error occurred while fetching the destination ID.");
    } finally {
      setIsLoadingDest(false);
    }
  };


  const renderHotels = () => {
    return hotels.map((hotel, index) => (
      <div key={index} className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="img" src={hotel.property.preview_image.url} alt="Hotel" />
          <div className="rectangle"></div>
          <div className="text-wrapper">
            <div className="hotel-name">{hotel.property.name}</div>
            <div className="hotel-location">Located in {hotel.property.city}, {hotel.property.country}</div>
            {/* Add dynamic star rating here */}
            <button className="visit-button" onClick={() => window.location.href = hotel.property.url}>Visit Now</button>
          </div>
        </div>
      </div>
    ));
  };

  const HotelDetailsModal = ({ hotel, onClose }) => {
    if (!hotel) return null;
  
    return (
      <div className="ModalBackdrop">
        <div className="ModalContent">
          <div className="modal-header">
            <h2>Hotel Details</h2>
            <button className="modal-close-button" onClick={onClose}>Close</button>
          </div>
          <div className="modal-body">
            <p><strong>Name:</strong> {hotel.hotel_name}</p>
            <p><strong>City:</strong> {hotel.city}</p>
            <p><strong>District:</strong> {hotel.district}</p>
            <p><strong>ZIP:</strong> {hotel.zip}</p>
            <p><strong>Country:</strong> {hotel.country_trans}</p>
            <p><strong>Address:</strong> {hotel.address}</p>
            <p><strong>Latitude:</strong> {hotel.latitude}</p>
            <p><strong>Longitude:</strong> {hotel.longitude}</p>
            <p><strong>Price Transparency Mode:</strong> {hotel.price_transparency_mode}</p>
            <p><strong>Accommodation Type:</strong> {hotel.accommodation_type_name}</p>
            <p><strong>Number of Reviews:</strong> {hotel.review_nr}</p>
            <p><strong>Arrival Date:</strong> {hotel.arrival_date}</p>
            <p><strong>Departure Date:</strong> {hotel.departure_date}</p>
            <p><strong>Available Rooms:</strong> {hotel.available_rooms}</p>
            <p><strong>Max Rooms in Reservation:</strong> {hotel.max_rooms_in_reservation}</p>
            <p><strong>Family Friendly:</strong> {hotel.is_family_friendly ? 'Yes' : 'No'}</p>
            <p><strong>Hotel Include Breakfast:</strong> {hotel.hotel_include_breakfast ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    );
  };
  
  
  



  const fetchHotels = async () => {
    setIsLoadingHotels(true);
    setErrorHotels('');
  
    const hotelOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params: {
        dest_id: destId,
        search_type: 'CITY',
        arrival_date: arrivalDate,
        departure_date: departureDate,
        adults: adults,
        children_age: childrenAge,
        room_qty: roomQty,
        page_number: '1',
        languagecode: 'en-us',
        currency_code: 'CAD'
      },
      headers: {
        'X-RapidAPI-Key': 'ae41750b50msh389a7b6e1203026p127800jsnc1c3b5dbac79',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(hotelOptions);
      // Access the hotels array within the data object
      if (response.data && response.data.data && Array.isArray(response.data.data.hotels)) {
        setHotels(response.data.data.hotels);
      } else {
        setHotels([]); // Set to empty if the path is not as expected
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setErrorHotels("An error occurred while fetching hotels.");
    } finally {
      setIsLoadingHotels(false);
    }
  };
  
  if (!user) {
    return (
      <>
        <GlobalStyle />
        
        <div className="overlay"></div>
        {!user ? (
          <FormContainer>
            <Title>{isSigningUp ? "Sign Up" : "Sign In"}</Title>
            <InputGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button onClick={() => isSigningUp ? signUp(email, password) : signIn(email, password)}>
              {isSigningUp ? "Sign Up" : "Sign In"}
            </Button>
            <SwitchModeButton onClick={() => setIsSigningUp(!isSigningUp)}>
              {isSigningUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </SwitchModeButton>
          </FormContainer>
        ) : (
          // Placeholder for logged-in user interface
          <p>You are logged in</p>
        )}
      </>
    );
  }

  return (
    <div className='container'>
    
      <div className='searchContainer'>
        
      <p className='header'>BookYatra</p>
    {user && (
      <div className='signOut'>
        <button onClick={handleSignOut} className='button'>Sign Out</button>
      </div>
    )}
        <div className='n'>
        <p className='p2'>Nestle Into Comfort, Where Quietude Meets Luxury</p>
        </div>

        
      <div className='formContainer'>
        <div className='inputGroup'>
          <label className='label'>City Name</label>
          <input
            type="text"
            className='input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
            required
          />
        </div>
        <div className='inputGroup'>
          <label className='label'>Arrival Date</label>
          <input
            type="date"
            className='input'
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            required
          />
        </div>
        <div className='inputGroup'>
          <label className='label'>Departure Date</label>
          <input
            type="date"
            className='input'
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        
        <button className='button' onClick={fetchHotelsWithCityName}>
          Search Hotels
        </button>
      
      </div>
      </div>
  
      
        
        
        <div>
        <p className='line'>2024's Unrivaled Escape – See What Everyone's Raving About!</p>
        <p className='line2'>Reflect on the type of vacation you desire. Are you seeking a tranquil beach resort or a bustling city hotel? BookYatra offers diverse options to match every travel style.
</p>
        </div>
        
        <div className='resultsContainer'> 
  {hotelsDetails.map((hotel, index) => (
    <div key={index} className='resultItem2'>
      <img src={hotel.url_max1280 || './images/H1.png'} style={{ width: '500px', height: '300px' }} alt="Hotel"/>
      <h3 className='hotelName1'>{hotel.hotel_name}</h3>
      <p>{hotel.city}</p>
      <p>{hotel.district}</p>
      <p>{hotel.zip}</p>
      <p>Currency: {hotel.currency_code}</p>
      {/* Render the price from the hotel object, similar to the favorites section */}
      <p>Price per night: {hotel.product_price_breakdown.gross_amount?.value} {hotel.product_price_breakdown.gross_amount?.currency}</p>
      <div>
        <button 
          className='favoriteButton1' 
          onClick={() => addToFavorites({
            ...hotel,
            price: hotel.product_price_breakdown.gross_amount?.value,
            currency: hotel.product_price_breakdown.gross_amount?.currency
          })}
        >
          Add to Favorites
        </button>
        <button
          onClick={() => handleVisitHotelDetails(hotel)}
          className='visitButton1' // Ensure you have CSS for this class
        >
          Visit Details
        </button>
      </div>
    </div>
  ))}
</div>



    

  <div className='fav'>
  <h2 className='f1'>Looking for inspiration?</h2>
  <p className='f1line'>Your favorite hotels are a window to new experiences.</p>
  </div>
  
  {favorites.length > 0 ? (
  <div className='favoritesContainer'>
  <div className='favcontainer'>
    {favorites.map((fav, index) => (
      <div key={index} className='resultItem3'>
        <div className='result4'>
          <h3 className='line3'>{fav.hotel_name}</h3>
          {/* Ensure you are rendering the price from the hotel object */}
          <p className='line4'>Price: {fav.price} {fav.currency}</p>
        </div>
      </div>
    ))}
  </div>

    <div className='favfooter'>
  <strong className='price'>Total Price: {calculateTotalPrice()} EUR</strong>
  <button onClick={submitFavorites} className='button'>Submit Favorites</button>
</div>

    {submitStatus && <p>{submitStatus}</p>}
  </div>
) : (
  <p>No favorites added.</p>
)}
{isModalOpen && (
  <HotelDetailsModal hotel={selectedHotelDetails} onClose={handleCloseModal} />
)}



      </div>
      
   
  );
}

export default DestIdSearch;