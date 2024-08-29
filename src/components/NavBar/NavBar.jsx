import React, { useState, useEffect } from 'react';
import { faCalendar, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    return (
        <div className="navbar">
            <div className={`nav-top ${scrolled ? 'hidden' : ''}`}>
                <div className="div1">
                    <div className="conect1">
                        <FontAwesomeIcon icon={faEnvelope} color='red' />
                        <span>info@company.com</span>
                    </div>
                    <div className="conect2">
                        <FontAwesomeIcon icon={faMap} color='red' />
                        <span>Sunny Isles Beach FL 33160</span>
                    </div>
                </div>
                <div className="div2">
                    <div className="icon1"><FontAwesomeIcon icon={faFacebook} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faTwitter} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faLinkedin} color='white' /></div>
                    <div className="icon1"><FontAwesomeIcon icon={faInstagram} color='white' /></div>
                </div>
            </div>
            <div className={`nav-bottom ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo">
                    <h1>VILLA</h1>
                </div>
                <div className={`nav-link ${isOpen ? 'open' : ''}`}>
                    <ul className={isOpen ? 'open' : ''}>
                        <li>
                            <Link
                                to="/"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/properties"
                                className={activeLink === '/properties' ? 'active' : ''}
                                onClick={() => handleLinkClick('/properties')}
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/property-details"
                                className={activeLink === '/property-details' ? 'active' : ''}
                                onClick={() => handleLinkClick('/property-details')}
                            >
                                Property Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={activeLink === '/contact' ? 'active' : ''}
                                onClick={() => handleLinkClick('/contact')}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li className={`active-link ${activeLink === '/schedule' ? 'active' : ''}`}>
                            <div className="link-icon">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                            <Link
                                to="/schedule"
                                onClick={() => handleLinkClick('/schedule')}
                            >
                                Schedule a visit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar active"></span>
                    <span className="bar"></span>
                    <span className="bar active"></span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

