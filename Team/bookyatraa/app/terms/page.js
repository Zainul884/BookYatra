"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


function TermsOfUse() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    const handleAccept = () => {
        console.log('Terms accepted');
        // Implement your logic here, e.g., navigate to a new page or update user state
    };

    const handleDecline = () => {
        console.log('Terms declined');
        // Implement your logic here, e.g., navigate back to home or show a message
    };

    return (
        
           <div className="landing-page">
            <header className="landingpage-header">
                <Link href="/">
                    <div className="logo">
                        <Image src="/Images Capstone/Logo For Landing Page.png" alt="BookYatra Logo" width={250} height={80} />
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
            <div className="terms-of-use-page">
            <div className="terms-container">
            <div className="terms-content">
                <h1>Terms of Use</h1>
                <div>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using the BookYatra website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
                    <h2>2. User Obligations</h2>
                    <p>You are responsible for ensuring that your use of the website complies with all laws, rules, and regulations applicable to you.</p>
                    <h2>3. Intellectual Property Rights</h2>
                    <p>All contents of the site, including but not limited to text, design, and images, are owned by BookYatra or its content providers.</p>
                    <h2>4. Disclaimer of Warranties</h2>
                    <p>The website and its content are provided on an "as is" basis. BookYatra makes no warranties regarding the accuracy or completeness of any content.</p>
                    <h2>5. Limitation of Liability</h2>
                    <p>BookYatra will not be liable for any indirect, incidental, or punitive damages arising out of your use or inability to use the website.</p>
                    <h2>6. Governing Law</h2>
                    <p>These terms are governed by the laws of the jurisdiction in which BookYatra is located, without regard to its conflict of law provisions.</p>
                    <h2>7. Amendments to Terms</h2>
                    <p>We may update these Terms of Use from time to time. We encourage you to periodically review this page for the latest information on our terms.</p>
                    <h2>8. Contact Information</h2>
                    <p>For any questions about these Terms, please contact us at support@bookyatra.com.</p>
                </div>
            </div>
            <div className="button-container">
                <button className="accept-button" onClick={handleAccept}>Accept</button>
                <button className="decline-button" onClick={handleDecline}>Decline</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default TermsOfUse;
