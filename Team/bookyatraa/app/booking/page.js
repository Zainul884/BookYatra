"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';




const HotelBooking = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showStripeModal, setShowStripeModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const taxRate = 0.05; // 5% tax rate, for example
  
  
  const [hotel, setHotel] = useState({
    name: '',
    roomDetails: '',
    amenities: [],
    image: '',
    price: 0,
    taxes: 0,
    totalPrice: 0,
    arrivalDate: '',
    departureDate: '',
    currency: '',
    numberOfNights: 0,
  });

  

  useEffect(() => {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    console.log("Hotel Image URL:", hotel.image);
    if (bookingDetails) {
      const numberOfNights = calculateNumberOfNights(
        bookingDetails.arrivalDate,
        bookingDetails.departureDate
      );

      setHotel({
        ...hotel,
        name: bookingDetails.hotelName,
        image: bookingDetails.hotelImage,
        price: bookingDetails.price,
        currency: bookingDetails.currency,
        amenities: bookingDetails.amenities.split(", "),
        arrivalDate: bookingDetails.arrivalDate,
        departureDate: bookingDetails.departureDate,
        numberOfNights: numberOfNights,
      });
      localStorage.removeItem('bookingDetails');
    }
  }, []);

  useEffect(() => {
    console.log("Updated Hotel Image URL:", hotel.image);
  }, [hotel]);

  const calculateNumberOfNights = (arrivalDate, departureDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);
    const diffDays = Math.round(Math.abs((arrival - departure) / oneDay));
    return diffDays;
  };

  useEffect(() => {
    const numberOfNights = calculateNumberOfNights(hotel.arrivalDate, hotel.departureDate);
    const roomPriceTotal = hotel.price * numberOfNights;
    const taxes = roomPriceTotal * taxRate;
    const finalPrice = roomPriceTotal + taxes;
  
    // Update the state with the new calculated values
    setHotel(prevHotel => ({
      ...prevHotel,
      numberOfNights,
      taxes,
      totalPrice: finalPrice,
    }));
  }, [hotel.arrivalDate, hotel.departureDate, hotel.price]); // Depend on arrivalDate, departureDate, and price
  
  // Adjusted handleDateChange to only set dates without recalculating the price directly
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setHotel(prevHotel => ({
      ...prevHotel,
      [name]: value,
    }));
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(selectedPaymentMethod === method ? null : method);
    setShowCardDetails(selectedPaymentMethod === method ? false : true);
  };
  
  const handleBookNow = () => {
    setShowStripeModal(true);
    setIsProcessingPayment(true);

    // Simulate the payment processing delay
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true); // Indicate that the payment was successful
      // Keep the modal open to show the success message
    }, 3000);
  };

  const handleCloseModal = () => {
    setShowStripeModal(false);
    setPaymentSuccess(false); // Reset the payment success state for future transactions
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    setCardNumber(value);
  };

  const handleExpiryChange = (e) => {
    const { value } = e.target;
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    const { value } = e.target;
    setCvv(value);
  };

  const handleCardHolderNameChange = (e) => {
    const { value } = e.target;
    setCardHolderName(value);
  };

  const handleSubmit = () => {
    // Implement submission logic here
    alert('Card details submitted. Implement further processing as needed.');
    // Reset state or navigate to another page
  };
  
 
  const roomPriceTotal = hotel.price * hotel.numberOfNights;
  const taxes = roomPriceTotal * taxRate; // Calculate taxes
  const finalPrice = roomPriceTotal + taxes;
  

  //console.log(bookingDetails)
  return (
    <>
      <Head>
        <title>Hotel Booking - {hotel.name}</title>
      </Head>
      <div className={styles.containerBP}>
        <h1 className={styles.titleBP}>You're Almost There!</h1>
        
        <div className={styles.gridBP}>
          <div className={styles.bookingDetailsBP}>
            <h2>{hotel.name}</h2>
            <p className={styles.roomDetailsBP}>{hotel.roomDetails}</p>
            {hotel.amenities && <div><strong>Amenities: </strong>{hotel.amenities}</div>}
            <div><strong>Arrival Date: </strong>{hotel.arrivalDate}</div>
            <div><strong>Departure Date: </strong>{hotel.departureDate}</div>
            <div className={styles.hotelImageBP}>
              <img src={hotel.image} alt="Hotel"  style={{ width: '300px' }}/>
           </div>
          </div>
          <div className={styles.datesSectionBP}>
  <h2>Select Dates</h2>
  <label htmlFor="arrivalDate" className={styles.dateLabel}>Arrival Date</label>
  <input type="date" id="arrivalDate" name="arrivalDate" className={styles.calendarBP} onChange={handleDateChange} required />
  
  <label htmlFor="departureDate" className={styles.dateLabel}>Departure Date</label>
  <input type="date" id="departureDate" name="departureDate" className={styles.calendarBP} onChange={handleDateChange} required />
</div>

        </div>


        
        <div className={styles.gridBP}>
       <div className={styles.paymentFormBP}>
          <h2>Who's Gonna Pay?</h2>
          <div className={styles.formGridBP}>
            <label htmlFor="firstName" className={styles.inputLabelBP}>
              First Name
            </label>
            <input id="firstName" type="text" className={styles.inputFieldBP} placeholder="First Name" required />
            
            <label htmlFor="middleName" className={styles.inputLabelBP}>
              Middle Name
            </label>
            <input id="middleName" type="text" className={styles.inputFieldBP} placeholder="Middle Name" />
            
            <label htmlFor="lastName" className={styles.inputLabelBP}>
              Last Name
            </label>
            <input id="lastName" type="text" className={styles.inputFieldBP} placeholder="Last Name" required />
            
            <label htmlFor="phoneNumber" className={styles.inputLabelBP}>
              Phone Number
            </label>
            <input id="phoneNumber" type="text" className={styles.inputFieldBP} placeholder="Phone Number" required />
            
            <label htmlFor="emailId" className={styles.inputLabelBP}>
              Email 
            </label>
            <input id="emailId" type="email" className={styles.inputFieldBP} placeholder="Email" required />
          </div>

            <div className={styles.paymentMethodBP}>
            <div className={styles.paymentMethodOptionsBP}>
          <button
            className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'visa' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('visa')}
          >
            <img
              className={styles.paymentMethodIconBP}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/640px-Visa_2021.svg.png"
              alt="Visa"
            />
          </button>
          <button
            className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'mastercard' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('mastercard')}
          >
            <img
              className={styles.paymentMethodIconBP}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1920px-Mastercard-logo.svg.png"
              alt="Mastercard"
            />
          </button>
            <button className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'american express' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('american express')}>
              <img
                className={styles.paymentMethodIconBP}
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                alt="American Express"
              />
            </button>
            <button  className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'paypal' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('paypal')}>
              <img
                className={styles.paymentMethodIconBP}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                alt="PayPal"
              />
            </button>
            <button className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'skrill' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('skrill')}>
              <img
                className={styles.paymentMethodIconBP}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kprOm1ye5_A0mfQ9a56Jv7vgH8D7fKKp6Hc3rah2mA&s"
                alt="Skrill"
              />
            </button>
            <button  className={`${styles.paymentMethodButtonBP} ${selectedPaymentMethod === 'Paysafecard' ? styles.selectedPaymentMethodBP : ''}`}
            onClick={() => handlePaymentMethodSelect('Paysafecard')}>
              <img
                className={styles.paymentMethodIconBP}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Paysafe.svg/1200px-Paysafe.svg.png"
                alt="Paysafecard"
              />
            </button>
          </div>

          
          </div>
          {showCardDetails && (
  <div className={styles.cardDetailsContainerBP}>
    <h3>Card Details</h3>
    <div className={styles.cardInputContainerBP}>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        placeholder="1234 5678 9012 3456"
        maxLength="19"
        pattern="\d*"
        onChange={handleCardNumberChange}
      />
    </div>

    <div className={styles.cardExpiryCvvContainerBP}>
      <div className={styles.cardExpiryBP}>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          maxLength="5"
          onChange={handleExpiryChange} 
        />
      </div>
      <div className={styles.cardCvvBP}>
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          maxLength="3"
          pattern="\d*"
          onChange={handleCvvChange}
        />
      </div>
    </div>

    <div className={styles.cardInputContainerBP}>
      <label htmlFor="cardHolderName">Cardholder's Name</label>
      <input
        type="text"
        id="cardHolderName"
        placeholder="John Doe"
        onChange={handleCardHolderNameChange} 
      />
    </div>

    <button className={styles.cardSubmitButtonBP} onClick={handleSubmit}>Submit</button>
  </div>
)}
          </div>

     

          
          <div className={styles.priceDetailsBP}>
      <h2>Price Details</h2>
      <div className={styles.priceBoxBP}>
        <p>Room Name:</p>
        <p>{hotel.roomDetails}</p>
      </div>
      <div className={styles.priceBoxBP}>
        <p>Total Price of Room ({hotel.numberOfNights} Nights):</p>
        <p>{hotel.currency} {roomPriceTotal.toFixed(2)}</p>
      </div>
      <div className={styles.priceBoxBP}>
        <p>Taxes:</p>
        <p>{hotel.currency} {taxes.toFixed(2)}</p>
      </div>
      
      <div className={styles.totalPriceBP}>Final Price: {hotel.currency} {finalPrice.toFixed(2)}</div>
   

            <button className={styles.bookNowButton} onClick={handleBookNow} disabled={isProcessingPayment}>
              Pay with link
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path fill="currentColor" d="M438.6 233.4l-192-192c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9L312.2 216H24c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h288.2l-121.1 120.1c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l192-192c9.5-9.4 9.5-24.6.1-34z"></path></svg>
            </button>
        </div>
        </div>
        {showStripeModal && (
        <div className={styles.overlayBP}>
          <div className={styles.stripeModalBP}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className={styles.stripeLogoBP} />
            {isProcessingPayment ? (
              <>
                <div className={styles.stripeHeaderBP}>Processing your payment...</div>
                <div className={styles.processingIndicatorBP}>
                  <div className={styles.spinnerBP}></div>
                  <div className={styles.processingTextBP}>Please wait.</div>
                </div>
              </>
            ) : paymentSuccess ? (
              <>
                <div className={styles.stripeHeaderBP}>Payment successful! Your booking has been confirmed. 🎉</div>
                <div className={styles.stripeModalCloseButtonBP} onClick={handleCloseModal}>
                          × 
                  </div>
              </>
            ) : null}
          </div>
        </div>
      )}
      </div>




      
    </>
  );
};

export default HotelBooking;
