"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Complete dataset for terms
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

const AccordionSection = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion-section">
            <button
                className="accordion-title"
                onClick={onClick}
            >
                {title}
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

function TermsOfUse() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(termsData);
    const [openSectionId, setOpenSectionId] = useState(null);
    const [sortOrder, setSortOrder] = useState('');
    
    const handlePrint = () => {
        window.print();
    };




    useEffect(() => {
        const filteredTerms = termsData.filter(term =>
            term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.content.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sort the results if a sortOrder is set
        if (sortOrder) {
            filteredTerms.sort((a, b) => {
                return sortOrder === 'ascending' 
                    ? a.title.localeCompare(b.title) 
                    : b.title.localeCompare(a.title);
            });
        }

        setSearchResults(filteredTerms);
    }, [searchTerm, sortOrder]);


    const toggleNav = () => setIsNavExpanded(!isNavExpanded);

    const toggleSection = (id) => setOpenSectionId(openSectionId === id ? null : id);

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
                <div className="terms-container ">
                    <div className="terms-content ">
                        <h1 >Terms of Use</h1>
                        <div clasname='term-search' >
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search terms..."
                            />
                        </div>
                            <select className="sort-order"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                >
                                <option value="">Sort By</option>
                                <option value="ascending">Title Ascending</option>
                                <option value="descending">Title Descending</option>
                            </select>
                    </div>
                   
                        {searchResults.map(({ id, title, content }) => (
                            <AccordionSection
                                key={id}
                                title={title}
                                content={content}
                                isOpen={openSectionId === id}
                                onClick={() => toggleSection(id)}
                            />
                        ))}
                        <button onClick={handlePrint} className="print-button">
                            Print 
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default TermsOfUse;
