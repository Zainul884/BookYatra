"use client";
import React ,{useState}from 'react';
import Link from 'next/link';
import Image from 'next/image';

const authenticate = (email, password) => {
  // Simulate checking credentials (replace with actual validation logic)
  const isValidUser = (email === "valid@example.com" && password === "password123");
  return isValidUser;
};
function LogInPage(){

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(''); // Error state to display message

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidUser = authenticate(email, password);
    if (isValidUser) {
      // Redirect to homepage after successful login
      window.location.href = '../homepage';
    } else {
      // Display error message and stay on login page for invalid credentials
      setError('Invalid credentials. Please try again.');
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
              layout="intrinsic"
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
          </form>
          {error && <p className="login-error">{error}</p>}
          <div className="social-login">
              <button className="google-button">
                <Image
                    src="/Images Capstone/Google.png" 
                    alt="BookYatra Logo"
                    width={20} 
                    height={5} 
                />
              </button>
              <button className="apple-button">
              <Image
                    src="/Images Capstone/apple.png" 
                    alt="BookYatra Logo"
                    width={20} 
                    height={10} 
              />
              </button>
        </div>  
          
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