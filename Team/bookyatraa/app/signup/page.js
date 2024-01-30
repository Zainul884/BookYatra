"use client";
import React ,{useState}from 'react';
import Link from 'next/link';
import Image from 'next/image';

function SignUpPage(){
  // State for form inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your sign-up logic here
  };

  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <div className="logo">
          <Image
            src="/Images Capstone/Logo For Landing Page.png"
            alt="BookYatra Logo"
            width={250}
            height={80}
            layout="intrinsic"
          />
        </div>
        <nav className='nav-links'>
          <Link href="../homepage">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="../flights">Flights</Link>
          <Link href="/login">Login</Link>
          <Link href="../signup">SignUp</Link>
        </nav>
        
      </header>
  
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-logo">
            <Image
              src="/Images Capstone/Logo For Landing Page.png" // Use your logo path
              alt="BookYatra Logo"
              width={100} // Adjust according to your logo's aspect ratio
              height={40} // Adjust according to your logo's aspect ratio
            />
          </div>
          <h1 className="signup-heading">Back Again? We're Thrilled – Welcome Aboard!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="signup-button">Sign-In</button>
          </form>
          <p className="terms-text">
            By proceeding, you agree to our <Link href="/terms">Terms of Use</Link>
            and you have read our <Link href="/privacy">Privacy and Cookie Statement</Link>.
          </p>
        </div>
      </div>
    </div>
  );
  }

export default SignUpPage;