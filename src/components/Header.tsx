"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { trackConversion } from '@/utils/gtag';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdown(prev => prev === name ? null : name);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            
    <header className="header-area style-2">
        <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
            <div className="logo-and-menu-area">
                <Link href="/" className="header-logo" onClick={handleLinkClick}>
                    <img src="/images/header-logo2.svg" alt="" />
                </Link>
                <div className={`main-menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                    <div className="mobile-logo-area d-xl-none d-flex align-items-center justify-content-between">
                        <Link href="/" className="mobile-logo-wrap" onClick={handleLinkClick}>
                            <img src="/images/header-logo2.svg" alt="" />
                        </Link>
                        <div className="menu-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li>
                            <Link href="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link href="/#routes" onClick={handleLinkClick}>Popular Routes</Link>
                            <i 
                                className={`bi bi-chevron-down dropdown-icon ${activeDropdown === 'routes' ? 'active' : ''}`}
                                onClick={(e) => toggleDropdown('routes', e)}
                            ></i>
                            <ul className="sub-menu" style={{ display: activeDropdown === 'routes' ? 'block' : undefined }}>
                                <li><Link href="/routes/patna-to-darbhanga-taxi" onClick={handleLinkClick}>Patna to Darbhanga Taxi</Link></li>
                                <li><Link href="/routes/patna-to-muzaffarpur-taxi" onClick={handleLinkClick}>Patna to Muzaffarpur Taxi</Link></li>
                                <li><Link href="/routes/patna-to-gaya-taxi" onClick={handleLinkClick}>Patna to Gaya Taxi</Link></li>
                                <li><Link href="/routes/patna-to-madhubani-taxi" onClick={handleLinkClick}>Patna to Madhubani Taxi</Link></li>
                                <li><Link href="/routes/patna-to-samastipur-taxi" onClick={handleLinkClick}>Patna to Samastipur Taxi</Link></li>
                                <li><Link href="/routes/darbhanga-to-patna-taxi" onClick={handleLinkClick}>Darbhanga to Patna Taxi</Link></li>
                                <li><Link href="/routes/danapur-to-patna-taxi" onClick={handleLinkClick}>Danapur to Patna Taxi</Link></li>
                                <li><Link href="/routes/danapur-to-darbhanga-taxi" onClick={handleLinkClick}>Danapur to Darbhanga Taxi</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <Link href="/#services" onClick={handleLinkClick}>Taxi Services</Link>
                            <i 
                                className={`bi bi-chevron-down dropdown-icon ${activeDropdown === 'services' ? 'active' : ''}`}
                                onClick={(e) => toggleDropdown('services', e)}
                            ></i>
                            <ul className="sub-menu" style={{ display: activeDropdown === 'services' ? 'block' : undefined }}>
                                <li><Link href="/services/one-way-taxi" onClick={handleLinkClick}>One-Way Taxi</Link></li>
                                <li><Link href="/services/round-trip-taxi" onClick={handleLinkClick}>Round Trip Taxi</Link></li>
                                <li><Link href="/services/outstation-taxi" onClick={handleLinkClick}>Outstation Taxi</Link></li>
                                <li><Link href="/services/patna-airport-taxi" onClick={handleLinkClick}>Patna Airport Taxi</Link></li>
                                <li><Link href="/services/darbhanga-airport-taxi" onClick={handleLinkClick}>Darbhanga Airport Taxi</Link></li>
                                <li><Link href="/services/gaya-airport-taxi" onClick={handleLinkClick}>Gaya Airport Taxi</Link></li>
                                <li><Link href="/services/patna-junction-taxi" onClick={handleLinkClick}>Patna Junction Taxi</Link></li>
                                <li><Link href="/services/rajendra-nagar-terminal-taxi" onClick={handleLinkClick}>Rajendra Nagar Terminal Taxi</Link></li>
                                <li><Link href="/services/danapur-railway-station-taxi" onClick={handleLinkClick}>Danapur Railway Station Taxi</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <Link href="/#packages" onClick={handleLinkClick}>Tour Packages</Link>
                            <i 
                                className={`bi bi-chevron-down dropdown-icon ${activeDropdown === 'packages' ? 'active' : ''}`}
                                onClick={(e) => toggleDropdown('packages', e)}
                            ></i>
                            <ul className="sub-menu" style={{ display: activeDropdown === 'packages' ? 'block' : undefined }}>
                                <li><Link href="/packages/bodh-gaya-tour" onClick={handleLinkClick}>Bodh Gaya Tour</Link></li>
                                <li><Link href="/packages/rajgir-tour" onClick={handleLinkClick}>Rajgir Tour</Link></li>
                                <li><Link href="/packages/nalanda-tour" onClick={handleLinkClick}>Nalanda Tour</Link></li>
                                <li><Link href="/packages/vaishali-tour" onClick={handleLinkClick}>Vaishali Tour</Link></li>
                                <li><Link href="/packages/madhubani-tour" onClick={handleLinkClick}>Madhubani Tour</Link></li>
                                <li><Link href="/packages/darbhanga-heritage-tour" onClick={handleLinkClick}>Darbhanga Heritage Tour</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="contact-area d-xl-none d-flex">
                        <div className="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M15.5646 11.7424L13.3317 9.50954C12.5343 8.7121 11.1786 9.03111 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.55261 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2512 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className="content">
                            <span>Need Help?</span>
                            <a href="tel:+918102550190">+91 81025 50190</a>
                        </div>
                    </div>
                    <a onClick={trackConversion} href="https://wa.me/918102550190?text=Hello%20Taxi%20Service%20Bihar%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" className="primary-btn1 black-bg d-xl-none d-flex">
                        <span>
                            <svg width="15" height="15" fill="currentColor" className="bi bi-whatsapp me-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79 1.01h.007c4.368 0 7.927-3.558 7.93-7.93a7.897 7.897 0 0 0-2.33-5.593l.04-.025zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.203c-.2-.1-.1.201-.299.1-.599-.3-1.04-.74-1.34-1.34-.1-.2.05-.3.15-.4l.45-.45c.1-.1.1-.2 0-.3L9.344 6.07c-.1-.1-.2-.1-.3 0l-.5.5c-.1.1-.15.25-.1.35.3.9 1.1 2.2 2.1 2.8.1.05.25.05.35-.05l.5-.5c.1-.1.2-.1.3 0l2.3 2.1c.1.1.1.2 0 .3l-.45.45c-.1.1-.25.15-.35.1z"/>
                            </svg>
                            WhatsApp
                        </span>
                        <span>
                            <svg width="15" height="15" fill="currentColor" className="bi bi-whatsapp me-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79 1.01h.007c4.368 0 7.927-3.558 7.93-7.93a7.897 7.897 0 0 0-2.33-5.593l.04-.025zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.203c-.2-.1-.1.201-.299.1-.599-.3-1.04-.74-1.34-1.34-.1-.2.05-.3.15-.4l.45-.45c.1-.1.1-.2 0-.3L9.344 6.07c-.1-.1-.2-.1-.3 0l-.5.5c-.1.1-.15.25-.1.35.3.9 1.1 2.2 2.1 2.8.1.05.25.05.35-.05l.5-.5c.1-.1.2-.1.3 0l2.3 2.1c.1.1.1.2 0 .3l-.45.45c-.1.1-.25.15-.35.1z"/>
                            </svg>
                            WhatsApp
                        </span>
                    </a>
                </div>
            </div>
            <div className="nav-right">
                <div className="contact-and-search-area">
                    <div className="contact-area d-xl-flex d-none">
                        <div className="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M15.5646 11.7424L13.3317 9.50954C12.5343 8.7121 11.1786 9.03111 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.55261 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2512 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className="content">
                            <span>Need Help?</span>
                            <a href="tel:+918102550190">+91 81025 50190</a>
                        </div>
                    </div>
                    <div className="search-bar">
                        <div className="search-btn">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M15.7417 14.6098L13.486 12.3621C14.7088 10.8514 15.3054 8.9291 15.1526 6.99153C14.9998 5.05396 14.1093 3.24888 12.6648 1.94851C11.2203 0.648146 9.33193 -0.0483622 7.38901 0.00261294C5.44609 0.0535881 3.59681 0.84816 2.22248 2.22248C0.84816 3.59681 0.0535881 5.44609 0.00261294 7.38901C-0.0483622 9.33193 0.648146 11.2203 1.94851 12.6648C3.24888 14.1093 5.05396 14.9998 6.99153 15.1526C8.9291 15.3054 10.8514 14.7088 12.3621 13.486L14.6098 15.7417C14.6839 15.8164 14.7721 15.8757 14.8692 15.9161C14.9664 15.9566 15.0705 15.9774 15.1758 15.9774C15.281 15.9774 15.3852 15.9566 15.4823 15.9161C15.5794 15.8757 15.6676 15.8164 15.7417 14.6098ZM1.62572 7.60368C1.62572 6.42135 1.97632 5.26557 2.63319 4.2825C3.29005 3.29943 4.22368 2.53322 5.31601 2.08076C6.40834 1.62831 7.61031 1.50992 8.76992 1.74058C9.92953 1.97124 10.9947 2.54059 11.8307 3.37662C12.6668 4.21266 13.2361 5.27783 13.4668 6.43744C13.6974 7.59705 13.579 8.79902 13.1266 9.89134C12.6741 10.9837 11.9079 11.9173 10.9249 12.5742C9.94178 13.231 8.78601 13.5816 7.60368 13.5816C6.01822 13.5816 4.49771 12.9518 3.37662 11.8307C2.25554 10.7096 1.62572 9.18913 1.62572 7.60368Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className="search-input">
                            <div className="search-close"></div>
                            <form>
                                <div className="search-group">
                                    <div className="form-inner2">
                                        <input type="text" placeholder="Search Taxi Route (e.g. Patna to Darbhanga)" />
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </div>
                                </div>
                                <div className="quick-search">
                                    <ul>
                                        <li>Quick Book :</li>
                                        <li><a onClick={trackConversion} href="https://wa.me/918102550190?text=Book%20Patna%20to%20Darbhanga%20Taxi">Patna to Darbhanga,</a></li>
                                        <li><a onClick={trackConversion} href="https://wa.me/918102550190?text=Book%20Patna%20to%20Muzaffarpur%20Taxi">Patna to Muzaffarpur,</a></li>
                                        <li><a onClick={trackConversion} href="https://wa.me/918102550190?text=Book%20Patna%20to%20Gaya%20Taxi">Patna to Gaya,</a></li>
                                        <li><a onClick={trackConversion} href="https://wa.me/918102550190?text=Book%20Danapur%20to%20Patna%20Taxi">Danapur to Patna,</a></li>
                                        <li><a onClick={trackConversion} href="https://wa.me/918102550190?text=Book%20Danapur%20to%20Darbhanga%20Taxi">Danapur to Darbhanga</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <a onClick={trackConversion} href="https://wa.me/918102550190?text=Hello%20Taxi%20Service%20Bihar%2C%20I%20want%20to%20book%20a%20taxi." target="_blank" rel="noopener noreferrer" className="primary-btn1 black-bg d-xl-flex d-none">
                    <span>
                        <svg width="15" height="15" fill="currentColor" className="bi bi-whatsapp me-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79 1.01h.007c4.368 0 7.927-3.558 7.93-7.93a7.897 7.897 0 0 0-2.33-5.593l.04-.025zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.203c-.2-.1-.1.201-.299.1-.599-.3-1.04-.74-1.34-1.34-.1-.2.05-.3.15-.4l.45-.45c.1-.1.1-.2 0-.3L9.344 6.07c-.1-.1-.2-.1-.3 0l-.5.5c-.1.1-.15.25-.1.35.3.9 1.1 2.2 2.1 2.8.1.05.25.05.35-.05l.5-.5c.1-.1.2-.1.3 0l2.3 2.1c.1.1.1.2 0 .3l-.45.45c-.1.1-.25.15-.35.1z"/>
                        </svg>
                        WhatsApp
                    </span>
                    <span>
                        <svg width="15" height="15" fill="currentColor" className="bi bi-whatsapp me-1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79 1.01h.007c4.368 0 7.927-3.558 7.93-7.93a7.897 7.897 0 0 0-2.33-5.593l.04-.025zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.203c-.2-.1-.1.201-.299.1-.599-.3-1.04-.74-1.34-1.34-.1-.2.05-.3.15-.4l.45-.45c.1-.1.1-.2 0-.3L9.344 6.07c-.1-.1-.2-.1-.3 0l-.5.5c-.1.1-.15.25-.1.35.3.9 1.1 2.2 2.1 2.8.1.05.25.05.35-.05l.5-.5c.1-.1.2-.1.3 0l2.3 2.1c.1.1.1.2 0 .3l-.45.45c-.1.1-.25.15-.35.1z"/>
                        </svg>
                        WhatsApp
                    </span>
                </a>
                <div className="sidebar-button mobile-menu-btn" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
                    <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z">
                        </path>
                        <path
                            d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z">
                        </path>
                        <path
                            d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </header>
    <div className="top-offer-text-slider-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="top-offer-text-slider-wrap">
                        <div className="slider-btn top-offer-text-slider-prev">
                            <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.42865 10.4085C8.69396 8.57179 5.02049 6.73505 2.81641 6.00036C5.02049 5.26567 8.32661 4.16363 9.42865 1.5922"
                                    strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                        </div>
                        <div className="swiper top-offer-text-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a onClick={trackConversion} href="https://wa.me/918102550190">24x7 Taxi Service in Patna, Darbhanga, Gaya & All Districts of Bihar. <strong>Call Now!</strong></a>
                                </div>
                                <div className="swiper-slide">
                                    <a onClick={trackConversion} href="https://wa.me/918102550190">Reliable Airport Pickup & Drop. <strong>Book Instantly on WhatsApp</strong></a>
                                </div>
                                <div className="swiper-slide">
                                    <a onClick={trackConversion} href="https://wa.me/918102550190">Affordable One-Way & Round-Trip Fares with <strong>Verified Drivers</strong></a>
                                </div>
                            </div>
                        </div>
                        <div className="slider-btn top-offer-text-slider-next">
                            <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.57141 10.4085C2.3061 8.57179 5.97957 6.73505 8.18366 6.00036C5.97957 5.26567 2.67345 4.16363 1.57141 1.5922"
                                    strokeWidth="2" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
    );
}
