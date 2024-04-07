"use client";
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref, push, remove,  set } from 'firebase/database';
import { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { useRouter } from 'next/router';


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



function DestIdSearch() {
  const [isCartVisible, setIsCartVisible] = useState(false);
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
  const [selectedHotelId, setSelectedHotelId ] = useState('');
  const [roomDetails, setRoomDetails] = useState([]);
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
  const [modalSize, setModalSize] = useState({ width: 600, height: 400 }); 
  const [hotelData, setHotelData] = useState(null);
  const [roomImages, setRoomImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setIsLoadingHotels(true);
        const result = await fetchYourHotelData(); 
        setHotelData(result.data); 
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setErrorHotels("An error occurred while fetching the hotel data.");
      } finally {
        setIsLoadingHotels(false);
      }
    };
    
    fetchData();
  }, []); 

  useEffect(() => {
    
    if (hotelData && hotelData.rooms && hotelData.rooms["19160501"] && hotelData.rooms["19160501"].photos) {
      
      const newRoomImages = hotelData.rooms["19160501"].photos.map(photo => photo.url_max1280);
      setRoomImages(newRoomImages);
    }
  }, [hotelData]); 
  

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

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Toggle the visibility
  };

  const fetchHotelsWithCityName = async () => {
    setIsLoadingHotels(true);
    setErrorHotels('');
    try {
      const destResponse = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination', {
        params: { query: cityName },
        headers: {
          'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
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
          'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
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
            'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
          },
        }).then(response => response.data.data)
      );
  
      const hotelsDetails = await Promise.all(hotelDetailsPromises);
      setHotelsDetails(hotelsDetails); // Update state once all promises resolve

      const hotelRoomDetailsPromises = hotelIds.map(hotel_id =>
        axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getRoomList', {
          params: {
            hotel_id: hotel_id,
            arrival_date: arrivalDate,
            departure_date: departureDate,
            adults: adults, // Ensure these are correctly set
            children_age: childrenAge,
            room_qty: roomQty,
            languagecode: 'en-us',
            currency_code: 'EUR',
          },
          headers: {
            'X-RapidAPI-Key': 'your_api_key_here',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
          },
        }).then(response => response.data.data.rooms) // Assuming this is the correct path
      );
    const roomsDetails = await Promise.all(hotelRoomDetailsPromises);
    setRoomDetails(roomsDetails);
  }

    catch (error) {
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
  const closeCart = () => setIsCartVisible(false);
  
  
  
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
        'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
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
  
    const [selectedRooms, setSelectedRooms] = useState(1);
    const [noOfPersons, setNoOfPersons] = useState(1);
    const [clickCount, setClickCount] = useState(0); // Additional state to track clicks
   
    const handleIncreaseRoom = () => {
      setNoOfPersons(noOfPersons + 1);
      setClickCount(clickCount + 1);
  
      if ((clickCount + 1) % 2 === 0) {
        if (selectedRooms < hotel.max_rooms_in_reservation) {
          setSelectedRooms(selectedRooms + 1);
        }
      }
    };
  
    const handleDecreasePerson = () => {
      setNoOfPersons(Math.max(1, noOfPersons - 1));
      if (noOfPersons <= 1 && selectedRooms > 1) {
        setSelectedRooms(Math.max(1, selectedRooms - 1));
      }
    };

    const deleteFavorite = (hotelId) => {
      // Filter out the favorite that needs to be deleted
      const updatedFavorites = favorites.filter(fav => fav.hotel_id !== hotelId);
    
      // Update state
      setFavorites(updatedFavorites);
    
      // Update Firebase if the user is logged in
      if (user) {
        const database = getDatabase();
        const favoritesRef = ref(database, `users/${user.uid}/favoritesData/favorites`);
        set(favoritesRef, updatedFavorites)
          .then(() => console.log('Favorite successfully deleted'))
          .catch((error) => console.error('Error removing favorite:', error));
      }
    };
    
    const addToCart = (hotel) => {
      // Ensure there is a logged-in user
      if (!user) {
        alert("Please log in to add items to your cart.");
        return;
      }
    
      // Reference to the user's cart in Firebase Realtime Database
      const db = getDatabase();
      const cartRef = ref(db, `users/${user.uid}/cart`);
      
      // Generate a new push ID for the new cart item
      const newCartItemRef = push(cartRef);
      const firstRoomWithPhotos = Object.values(hotel.rooms || {}).find(room => room.photos && room.photos.length > 0);

  // Attempt to get the URL of the first photo of the first room with photos
  const firstPhotoUrl = firstRoomWithPhotos ? firstRoomWithPhotos.photos[0].url_max1280 : './images/H1.png';

      // Save the hotel data under the new cart item
      set(newCartItemRef, {
        hotelpic: firstPhotoUrl,
        hotelId: hotel.hotel_id,
        name: hotel.hotel_name,
        location: hotel.city,
        price: hotel.product_price_breakdown.gross_amount.value,
        currency: hotel.product_price_breakdown.gross_amount.currency
        // Add other hotel details you want to save
      })
      .then(() => alert("Hotel added to cart successfully"))
      .catch((error) => console.error("Error adding hotel to cart:", error));
    };

    
  
    const bookHotel = () => {
      const firstRoomWithPhotos = selectedHotelDetails.rooms && Object.values(selectedHotelDetails.rooms).find(room => room.photos && room.photos.length > 0);
      const firstPhotoUrl = firstRoomWithPhotos ? firstRoomWithPhotos.photos[0].url_max1280 : './images/defaultHotel.png'; // Fallback image if no photo is available
      const hotelDetails = {
        hotelId: hotel.hotel_id,
        hotelName: hotel.hotel_name,
        hotelImage: firstPhotoUrl, 
        price: hotel.product_price_breakdown.gross_amount.value,
        currency: hotel.product_price_breakdown.gross_amount.currency,
        amenities: hotel.family_facilities.join(", "), 
        arrivalDate: hotel.arrival_date,
        departureDate: hotel.departure_date,
      };
    
      localStorage.setItem('bookingDetails', JSON.stringify(hotelDetails));
      window.location.href = '/booking'; 
    };
    
  
    const amenitiesList = [
      'Air Conditioning',
      'Meals Available',
      'Parking Available',
      'Swimming Pool',
      'High Speed Wifi',
      'Massage Sessions',
    ];
      
      const firstRoomWithPhotos = Object.values(hotel.rooms || {}).find(room => room.photos && room.photos.length > 0);
    
      
      const firstPhotoUrl = firstRoomWithPhotos ? firstRoomWithPhotos.photos[0].url_max1280 : './images/H1.png';
    
  
    return (
      <div className="ModalBackdrop">
      <div className="ModalContent">
        <div className="modal-header">
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          <h2 className='hotelDetailsMod'>Hotel Details</h2>
          <img src={firstPhotoUrl} alt="Hotel" style={{ paddingBottom: '30px' }} />
          <div className="info-section">

          <div class='hotelInfoMod'>
              <p class='hotelName'> {hotel.hotel_name}</p>
              <p class='hotelDetail'><strong>City:</strong> {hotel.city}</p>
              <p class='hotelDetail'><strong>ZIP:</strong> {hotel.zip}</p>
              <p class='hotelDetail'><strong>Country:</strong> {hotel.country_trans}</p>
              <p class='hotelDetail'><strong>Address:</strong> {hotel.address}</p>
          </div>
            
           <div className='maindiv1'>
                  <div className='amenitiesMod'>
                    <h3>Amenities:</h3>
                    <ul>
                      {amenitiesList.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                </div>
                <div className="hotelInfoMod1">
                  <h1>Hotel Ratings</h1>
              <div className="hotelInfoItem1" style={{ '--order': 1 }}>
                <strong>Accommodation Ratings:</strong> <span>4.0</span>
              </div>
              <div className="hotelInfoItem1" style={{ '--order': 2 }}>
                <strong>Accommodation Type:</strong> <span>{hotel.accommodation_type_name}</span>
              </div>
              <div className="hotelInfoItem1" style={{ '--order': 3 }}>
                <strong>Number of Reviews:</strong> <span>{hotel.review_nr}</span>
              </div>
            
            </div>

         </div>

         <div className="additionalHotelMod">
            <h3>Additional Information</h3>
            <div className="hotelInfoItem2">
              <strong>Max Rooms in Reservation:</strong>
              <span>{hotel.max_rooms_in_reservation}</span>
            </div>
            <div className="hotelInfoItem2">
              <strong>Family Friendly:</strong>
              <span>{hotel.is_family_friendly ? 'Yes' : 'No'}</span>
            </div>
            <div className="hotelInfoItem2">
              <strong>Hotel Include Breakfast:</strong>
              <span>{hotel.hotel_include_breakfast ? 'Yes' : 'No'}</span>
            </div>
         </div>

          
           
        
     
    
         <div className="usersInfoContainer">
            <div className='usersInfoMod'>
              <div className="infoItem"><strong>Selected Rooms:</strong> <span>{selectedRooms}</span></div>
              <div className="infoItem"><strong>Total Persons:</strong> <span>{noOfPersons}</span></div>
              <div className="infoItem"><strong>Arrival Date:</strong> <span>{hotel.arrival_date}</span></div>
              <div className="infoItem"><strong>Departure Date:</strong> <span>{hotel.departure_date}</span></div>
            </div>
            <div className="actions">
              <button className="actionButton addPerson" onClick={handleIncreaseRoom}disabled={selectedRooms >= hotel.max_rooms_in_reservation}>Add Person</button>
              <button className="actionButton minusPerson" onClick={handleDecreasePerson} disabled={noOfPersons <= 1}>Minus Person</button>
              {selectedRooms >= hotel.max_rooms_in_reservation && (
                <p className="alert">Hotel has no more space.</p>
              )}
            </div>
          </div>
        </div>
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
          <button className='favoriteButton1' onClick={() => addToCart(hotel)}>
            Add to Cart
            </button>
          <button className="bookButton" onClick={bookHotel}>Book</button>
        </div>
      </div>
    </div>
      
    );
  };
  

  const Cart = ({ user }) => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      if (user) {
        const db = getDatabase();
        const cartRef = ref(db, `users/${user.uid}/cart`);
  
       
        const unsubscribe = onValue(cartRef, (snapshot) => {
          const data = snapshot.val();
          const loadedCartItems = [];
  
          for (const key in data) {
            loadedCartItems.push({
              id: key,
              ...data[key],
            });
          }
  
          setCartItems(loadedCartItems);
        });
  
        return () => unsubscribe();
      }
    }, [user]);
  
    const removeFromCart = (itemId) => {
      // Ensure there is a logged-in user
      if (!user) {
        console.error("User not signed in");
        return;
      }
    
      const db = getDatabase();
      // Path to the specific cart item in Firebase Realtime Database
      const itemRef = ref(db, `users/${user.uid}/cart/${itemId}`);
    
      remove(itemRef)
        .then(() => console.log("Item removed from cart successfully"))
        .catch((error) => console.error("Error removing item from cart:", error));
    };
  
    return (
      <div>
        <h2 className='f1'>Your Cart</h2>
        {cartItems.length > 0 ? (
          <div >
            {cartItems.map((item) => (
              <div key={item.id} className='resultItem2'>
              <img 
                src={item.hotelpic} 
                style={{ width: '500px', height: '300px' }} 
                alt="Hotel"
              />
              <h3 className='hotelName1'>{item.name}</h3>
              <p className='infoLabel'>Price: {item.price} {item.currency}</p>
              <p className='infoLabel'>Location: {item.location}</p>
              <button className='favoriteButton1'  onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
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
        'X-RapidAPI-Key': 'd5873eece3msh6c105f37489832ap16623ajsn3ba97a7a3aa6',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(hotelOptions);
      
      if (response.data && response.data.data && Array.isArray(response.data.data.hotels)) {
        setHotels(response.data.data.hotels);
      } else {
        setHotels([]); 
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
          
          <p>You are logged in</p>
        )}
      </>
    );
  }

  
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='container1'>
    
      <div className='searchContainer'>
        
      <p className='header'>BookYatra</p>
      {user && (
        <div className='signOut'>
          <button onClick={handleSignOut} className='button'>Sign Out</button>
          <button onClick={toggleCartVisibility} className='button'>My Cart</button>
        </div>
      )}

      
      {isCartVisible && (
        <div className="modalOverlay" onClick={closeCart}>
         
          <div className="cartModal" onClick={e => e.stopPropagation()}>
            <Cart user={user} />
            
            <button onClick={closeCart} className='button'>Close Cart</button>
          </div>
        </div>
      )}
        <div className='n'>
        <p className='p2'>Nestle Into Comfort, Where Quietude Meets Luxury</p>
       
        </div>

        
      <div className='formContainer'>
        <div className='inputGroup'>
          <label className='label'>City Name</label>
          <br></br>
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
  
      
        
        
        <div className='header2'>
        <p className='line'>2024's Unrivaled Escape – See What Everyone's Raving About!</p>
        <p className='line2'>Reflect on the type of vacation you desire. Are you seeking a tranquil beach resort or a bustling city hotel? BookYatra offers diverse options to match every travel style.
        </p>
        </div>
        
        <div className='resultsContainer'> 
        
        {hotelsDetails.map((hotel, index) => {
  
  const firstRoomWithPhotos = Object.values(hotel.rooms || {}).find(room => room.photos && room.photos.length > 0);

  
  const firstPhotoUrl = firstRoomWithPhotos ? firstRoomWithPhotos.photos[0].url_max1280 : './images/H1.png';

  return (
    <div key={index} className='resultItem2'>
      <img 
        src={firstPhotoUrl} 
        style={{ width: '500px', height: '300px' }} 
        alt="Hotel"
      />
      <h3 className='hotelName1'>{hotel.hotel_name}</h3>
      <p className="infoLabel">City: {hotel.city}</p>
      <p>{hotel.district}</p>
      <p>Postal Code: {hotel.zip}</p>
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
        
        <button className='favoriteButton1'
          onClick={() => handleVisitHotelDetails(hotel)}
        >
          Visit Details
        </button>
        
      </div>
    </div>
  );
})}

  {roomDetails.map((rooms, index) => (
    <div key={index} className='resultItem2'>
      <h3 className='hotelName1'>{rooms.room_name}</h3>
      <p>{rooms.room_type}</p>
      <p>{rooms.description}</p>
      <p>Price per night: {rooms.price?.value} {rooms.price?.currency}</p>
      <div>
        <button 
          className='favoriteButton1' 
          onClick={() => addToFavorites({
            ...rooms,
            price: rooms.price?.value,
            currency: rooms.price?.currency
          })}
        >
          Add to Favorites
        </button>
        <div ref={bottomRef} />
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
      <p className='line4'>Price: {fav.price} {fav.currency}</p>
      <button onClick={() => deleteFavorite(fav.hotel_id)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        🗑️
      </button>
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