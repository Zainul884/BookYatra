"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted contact form:', { name, email, subject, message });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {setIsNavExpanded(!isNavExpanded);}


    return (
        <div className="contact-page">
        <header className="landingpage-header">
        <Link href="/">
        <div className="logo">
          <Image
            src="/Images Capstone/LOGO without bg.png"
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
        <div className="contact-container">
            <div className="form-container">
                <h1 className="form-title">Contact Us</h1>
                <p className="form-subtitle">Have questions or need assistance? Send us a message.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
        </div>
    );
}
