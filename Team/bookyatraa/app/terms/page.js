"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const termsData = [
    {
        id: 1,
        title: "Acceptance of Terms",
        content: "By accessing and using the BookYatra website, you acknowledge that you have read, understood, and agree to be bound by these terms."
    },
    {
        id: 2,
        title: "User Obligations",
        content: "You are responsible for ensuring that your use of the website complies with all laws, rules, and regulations applicable to you."
    },
    {
        id: 3,
        title: "Intellectual Property Rights",
        content: "All contents of the site, including but not limited to text, design, and images, are owned by BookYatra or its content providers."
    },
    {
        id: 4,
        title: "Disclaimer of Warranties",
        content: "The website and its content are provided on an 'as is' basis. BookYatra makes no warranties regarding the accuracy or completeness of any content."
    },
    {
        id: 5,
        title: "Limitation of Liability",
        content: "BookYatra will not be liable for any indirect, incidental, or punitive damages arising out of your use or inability to use the website."
    },
    {
        id: 6,
        title: "Governing Law",
        content: "These terms are governed by the laws of the jurisdiction in which BookYatra is located, without regard to its conflict of law provisions."
    },
    {
        id: 7,
        title: "Amendments to Terms",
        content: "We may update these Terms of Use from time to time. We encourage you to periodically review this page for the latest information on our terms."
    },
    {
        id: 8,
        title: "Contact Information",
        content: "For any questions about these Terms, please contact us at support@bookyatra.com."
    }
];

function TermsOfUse() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [filteredTerms, setFilteredTerms] = useState(termsData);
    const [openTermId, setOpenTermId] = useState(null);

    useEffect(() => {
        const filtered = termsData
            .filter((term) => {
                return term.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .sort((a, b) => {
                if (sortOrder === 'ascending') {
                    return a.title.localeCompare(b.title);
                }
                if (sortOrder === 'descending') {
                    return b.title.localeCompare(a.title);
                }
                return 0;
            });
        setFilteredTerms(filtered);
    }, [searchTerm, sortOrder]);

    const toggleTerm = (id) => {
        setOpenTermId(openTermId === id ? null : id);
    };

    const handlePrint = () => {
        window.print();
    };

    const toggleNav = () => setIsNavExpanded(!isNavExpanded);

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
                    <Link href="/homepage"  onClick={toggleNav}>Home</Link>
                    <Link href="/hotels" onClick={toggleNav}>Hotel</Link>
                    <Link href="/flights" onClick={toggleNav}>Flights</Link>
                    <Link href="/login" onClick={toggleNav}>Login</Link>
                    <Link href="/signup"onClick={toggleNav}>SignUp</Link>
                </nav>
            </header>
            <div className="terms-of-use-page">
            <div className="terms-container">
            <h1 className="terms-heading">Terms of Use</h1>
            <div className="terms-controls">
                <input
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="terms-search-input"
                />
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="terms-sort-select"
                >
                    <option value="">Sort By</option>
                    <option value="ascending">Title Ascending</option>
                    <option value="descending">Title Descending</option>
                </select>
            </div>
            <div className="terms-list">
                {filteredTerms.map((term) => (
                    <div key={term.id} className="term-item">
                        <button className="term-title" onClick={() => toggleTerm(term.id)}>
                            {term.title}
                        </button>
                        {openTermId === term.id && (
                            <div className="term-content">
                                <p>{term.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={handlePrint} className="terms-print-button">
                Print
            </button>
        </div>
        </div>
        </div>
    );
};

export default TermsOfUse;