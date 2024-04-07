"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PrivacyPolicy() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    return (
        
        <div className="privacy-policy-page">
        <header className="landingpage-header">
            <Link href="/">
                <div className="logo">
                    <Image  src="/Images Capstone/LOGO without bg.png"alt="BookYatra Logo" width={250} height={80} />
                </div>
            </Link>
            <button onClick={toggleNav} className="hamburger" aria-label="Toggle navigation">
                {isNavExpanded ? '✖' : '☰'}
            </button>
            <nav className={`nav-links ${isNavExpanded ? 'nav-expanded' : ''}`}>
                <Link href="/homepage"><span onClick={toggleNav}>Home</span></Link>
                <Link href="/hotels"><span onClick={toggleNav}>Hotels</span></Link>
                <Link href="/flights"><span onClick={toggleNav}>Flights</span></Link>
                <Link href="/login"><span onClick={toggleNav}>Login</span></Link>
                <Link href="/signup"><span onClick={toggleNav}>SignUp</span></Link>
            </nav>
        </header>
       
            <div className="privacy-container">
                <h1 className="privacy-title">Privacy Policy</h1>
                <div className="privacy-content">
                    <p className="effective-date">Effective date: 8th March, 2024</p>
                    <h2 className="section-title">1. Introduction</h2>
                    <p>Welcome to BookYatra. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our service and informs you about your privacy rights.</p>
                    <h2 className="section-title">2. Information Collection and Use</h2>
                    <p>We collect several different types of information for various purposes to provide and improve our service to you, including making travel information accessible.</p>
                    <h2 className="section-title">3. Types of Data Collected</h2>
                    <p><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.</p>
                    <p><strong>Usage Data:</strong> Usage Data is collected automatically when using the service.</p>
                    <p><strong>Tracking Technologies and Cookies:</strong> We use cookies and similar tracking technologies to track activity on our service and store certain information.</p>
                    <h2 className="section-title">4. Use of Your Personal Data</h2>
                    <p>BookYatra may use Personal Data for various purposes including to provide and maintain our service, to contact you, and for other legal requirements and purposes.</p>
                    <h2 className="section-title">5. Security of Your Personal Data</h2>
                    <p>The security of your personal data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
                    <h2 className="section-title">6. Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <h2 className="section-title">7. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, you can contact us at: info@bookyatra.com</p>
                </div>
            </div>
        </div>
    );
}
export default PrivacyPolicy;
