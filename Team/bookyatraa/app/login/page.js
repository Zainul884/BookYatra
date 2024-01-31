"use client";
import React ,{useState}from 'react';
import Link from 'next/link';
import Image from 'next/image';

function LogInPage(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <Link href="/">
          <div className="logo">
            <Image
              src="/Images Capstone/Logo For Landing Page.png"
              alt="BookYatra Logo"
              width={250}
              height={80}
              layout="intrinsic"
            />
          </div>
        </Link>
        <nav className='nav-links'>
          <Link href="../homepage">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="../flights">Flights</Link>
          <Link href="../login">Login</Link>
          <Link href="/signup">SignUp</Link>
        </nav>
        
      </header>
  
      <div className="login-page">
        <div className="login-container">
          <div className="login-logo">
            <Image
              src="/Images Capstone/LOGO without bg.png" 
              alt="BookYatra Logo"
              width={200} 
              height={40} 
             
              
            />
          </div>
          <h1 className="login-heading">Back Again? We're Thrilled – Welcome Aboard!</h1>
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

            <button type="submit" className="login-button">Sign-In</button>
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

export default LogInPage;