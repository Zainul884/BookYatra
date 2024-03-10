"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="landing-page">
      <header className="landingpage-header">
        <Link href="/" >
          <div className="logo">
            <Image
              src="/Images Capstone/Logo For Landing Page.png"
              alt="BookYatra Logo"
              width={250}
              height={80}
          
            />
        </div>
        </Link>
        <button
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? '✖' : '☰'}
        </button>
        <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`}>
          <Link href="../homepage">Home</Link>
          <Link href="/hotels">Hotels</Link>
          <Link href="../flights">Flights</Link>
          <Link href="../login">Login</Link>
          <Link href="../signup">SignUp</Link>
        </nav>
      </header>
      <div className="signup-page">
      <div className="signup-container">
        <div className="signup-logo">
          <Image
            src="/Images Capstone/LOGO without bg.png"
            alt="BookYatra Logo"
            width={200} 
            height={40} 
          />
        </div>
        <div className="slogan">
          <p>Get the full BookYatra experience 
                <br></br>sign up today.</p>
        </div>
        <form onSubmit={handleSubmit}>
        <input
                    type="text"
                    name="first Name"
                    placeholder="First name"
                    value={user.firstName}
                    onChange={handleChange}
                    required
                />
          <div className="name-fields">
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={user.lastName}
                    onChange={handleChange}
                    required
                />
                </div>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
                />
                <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                />
                <button type="submit">Sign Up</button>
                <p className="privacy-policy">By signing up, you agree to our Privacy Policy.</p>
                <p className="signin-link">
                    Already have an account? <Link href="../login">Sign in</Link>
                </p>
        </form>
      </div>


    </div>
    </div>
  );
}

export default Signup;
