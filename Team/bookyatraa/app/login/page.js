"use client";
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleLoginButton, AppleLoginButton } from 'react-social-login-buttons';

function LogInPage(){
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);}
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // Handler for form submission for email/password login
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in successfully');
            // Redirect to another page/component upon success
            window.location.href = './hero';
        } catch (error) {
            console.error('Error logging in:', error);
            setError(error.message);
        }
    };
    // Function to handle Google sign-in
    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
          console.log('Logged in with Google');
          // Redirect to another page/component upon success
          window.location.href = './hero';
      } catch (error) {
          console.error('Error logging in with Google:', error);
          setError(error.message);
      }
  };

  // Function to handle Apple sign-in
  const handleAppleSignIn = async () => {
      const provider = new OAuthProvider('apple.com');
      try {
          await signInWithPopup(auth, provider);
          console.log('Logged in with Apple');
          // Redirect to another page/component upon success
          window.location.href = '../homepage';
      } catch (error) {
          console.error('Error logging in with Apple:', error);
          setError(error.message);
      }
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
            
            /> 
          </div>
        </Link>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
          {isNavExpanded ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`}>
          <Link href="/homepage" onClick={toggleNav}>Home</Link>
          <Link href="/hotels" onClick={toggleNav}>Hotels</Link>
          <Link href="/flights" onClick={toggleNav}>Flights</Link>
          <Link href="/login"onClick={toggleNav}>Login</Link>
          <Link href="/signup" onClick={toggleNav}>SignUp</Link>
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
              placeholder="@ Enter your Email"
              required
            />

            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="🔒 Enter your Password"
              required
            />

            <button type="submit" className="login-button">Sign-In</button>
     
          {error && <p className="login-error">{error}</p>}
          <div className="social-login">
              <GoogleLoginButton  onClick={handleGoogleSignIn} style={{ fontSize: '13px' }}  />
              <AppleLoginButton onClick={handleAppleSignIn} style={{ fontSize: '13px' }}/>
          </div>  
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