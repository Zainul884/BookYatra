"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const teamMembers = [
  { name: 'Mosmee Desai', role: 'Lead Developer', imageUrl: '/Images Capstone/mos2.JPG', bio: 'Mosmee is a UI/UX guru, crafting intuitive interfaces.' },
  { name: 'Karm Desai', role: 'Lead Developer', imageUrl: '/Images Capstone/Karm.jpg', bio: 'Karm is a passionate coder with a love for agile methodologies.' },
  { name: 'Zainul Malik', role: 'Lead Developer', imageUrl: '/Images Capstone/Zain.jpg', bio: 'Zainul is an expert in cloud solutions and scalable architectures.' },
  { name: 'Sourabh Thakur', role: 'Lead Developer', imageUrl: '/Images Capstone/Sourabh.jpg', bio: 'Sourabh is our security expert, keeping our data safe and sound.' },
  { name: 'Prit Patel', role: 'Lead Developer', imageUrl:'/Images Capstone/prit.jpg', bio: 'Prit brings innovative ideas to the team, focusing on user experience.' },
  { name: 'Pranjal Jain', role: 'Lead Developer', imageUrl: '/images/profile3.png', bio: 'Prit brings innovative ideas to the team, focusing on user experience.' },
  
];


export default function About() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {setIsNavExpanded(!isNavExpanded);}

    return (
        <div className="about-page">
           
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
                <nav className={`nav-links1 ${isNavExpanded ? 'nav-expanded' : ''}`}>
                    <Link href="/homepage" onClick={toggleNav}>Home</Link>
                    <Link href="/hotels" onClick={toggleNav}>Hotels</Link>
                    <Link href="/flights" onClick={toggleNav}>Flights</Link>
                    <Link href="/login" onClick={toggleNav}>Login</Link>
                    <Link href="/signup" onClick={toggleNav}>SignUp</Link>
                </nav>
            </header>
            <div className="about-mission-values-container">
                <h1>About Us</h1>
                <p>We are passionate about providing the best travel experience for our customers. Discover how we make your trips memorable.</p>
                
                <div className="mission-values">
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>To offer seamless and affordable travel solutions, enriching your journey with memorable experiences.</p>
                </section>
                <section className="values-section">
                    <h2>Our Values</h2>
                    <ul>
                    <li>Customer Focus - We put your needs first.</li>
                    <li>Innovation - We embrace change and creativity.</li>
                    <li>Integrity - We believe in honesty and transparency.</li>
                    </ul>
                </section>
                </div>
            </div>
            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-member-card">
                        <div className="image-container">
                            <img
                            src={member.imageUrl}
                            alt={member.name}
                            layout="responsive"
                            />
                        </div>
                        <h3>{member.name}</h3>
                        <p className="role">{member.role}</p>
                        <p className="bio">{member.bio}</p>
                        </div>
                        ))}
                </div>
            </section>
        </div>
    );
}

