"use client";

import React, { useState } from 'react';
import Link from 'next/link';

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
                        <li>
                            <Link href="/#areas" onClick={handleLinkClick}>Service Areas</Link>
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
                    <a href="#" className="primary-btn1 black-bg d-xl-none d-flex">
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M7.50105 7.78913C9.64392 7.78913 11.3956 6.03744 11.3956 3.89456C11.3956 1.75169 9.64392 0 7.50105 0C5.35818 0 3.60652 1.75169 3.60652 3.89456C3.60652 6.03744 5.35821 7.78913 7.50105 7.78913ZM14.1847 10.9014C14.0827 10.6463 13.9467 10.4082 13.7936 10.1871C13.0113 9.0306 11.8038 8.2653 10.4433 8.07822C10.2732 8.06123 10.0861 8.09522 9.95007 8.19727C9.23578 8.72448 8.38546 8.99658 7.50108 8.99658C6.61671 8.99658 5.76638 8.72448 5.05209 8.19727C4.91603 8.09522 4.72895 8.04421 4.5589 8.07822C3.19835 8.2653 1.97387 9.0306 1.20857 10.1871C1.05551 10.4082 0.919443 10.6633 0.817424 10.9014C0.766415 11.0034 0.783407 11.1225 0.834416 11.2245C0.970484 11.4626 1.14054 11.7007 1.2936 11.9048C1.53168 12.2279 1.78679 12.517 2.07592 12.7891C2.31401 13.0272 2.58611 13.2483 2.85824 13.4694C4.20177 14.4728 5.81742 15 7.48409 15C9.15076 15 10.7664 14.4728 12.1099 13.4694C12.382 13.2653 12.6541 13.0272 12.8923 12.7891C13.1644 12.517 13.4365 12.2279 13.6746 11.9048C13.8446 11.6837 13.9977 11.4626 14.1338 11.2245C14.2188 11.1225 14.2358 11.0034 14.1847 10.9014Z">
                                    </path>
                                </g>
                            </svg>
                            Login
                        </span>
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M7.50105 7.78913C9.64392 7.78913 11.3956 6.03744 11.3956 3.89456C11.3956 1.75169 9.64392 0 7.50105 0C5.35818 0 3.60652 1.75169 3.60652 3.89456C3.60652 6.03744 5.35821 7.78913 7.50105 7.78913ZM14.1847 10.9014C14.0827 10.6463 13.9467 10.4082 13.7936 10.1871C13.0113 9.0306 11.8038 8.2653 10.4433 8.07822C10.2732 8.06123 10.0861 8.09522 9.95007 8.19727C9.23578 8.72448 8.38546 8.99658 7.50108 8.99658C6.61671 8.99658 5.76638 8.72448 5.05209 8.19727C4.91603 8.09522 4.72895 8.04421 4.5589 8.07822C3.19835 8.2653 1.97387 9.0306 1.20857 10.1871C1.05551 10.4082 0.919443 10.6633 0.817424 10.9014C0.766415 11.0034 0.783407 11.1225 0.834416 11.2245C0.970484 11.4626 1.14054 11.7007 1.2936 11.9048C1.53168 12.2279 1.78679 12.517 2.07592 12.7891C2.31401 13.0272 2.58611 13.2483 2.85824 13.4694C4.20177 14.4728 5.81742 15 7.48409 15C9.15076 15 10.7664 14.4728 12.1099 13.4694C12.382 13.2653 12.6541 13.0272 12.8923 12.7891C13.1644 12.517 13.4365 12.2279 13.6746 11.9048C13.8446 11.6837 13.9977 11.4626 14.1338 11.2245C14.2188 11.1225 14.2358 11.0034 14.1847 10.9014Z">
                                    </path>
                                </g>
                            </svg>
                            Login
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
                                        d="M15.7417 14.6098L13.486 12.3621C14.7088 10.8514 15.3054 8.9291 15.1526 6.99153C14.9998 5.05396 14.1093 3.24888 12.6648 1.94851C11.2203 0.648146 9.33193 -0.0483622 7.38901 0.00261294C5.44609 0.0535881 3.59681 0.84816 2.22248 2.22248C0.84816 3.59681 0.0535881 5.44609 0.00261294 7.38901C-0.0483622 9.33193 0.648146 11.2203 1.94851 12.6648C3.24888 14.1093 5.05396 14.9998 6.99153 15.1526C8.9291 15.3054 10.8514 14.7088 12.3621 13.486L14.6098 15.7417C14.6839 15.8164 14.7721 15.8757 14.8692 15.9161C14.9664 15.9566 15.0705 15.9774 15.1758 15.9774C15.281 15.9774 15.3852 15.9566 15.4823 15.9161C15.5794 15.8757 15.6676 15.8164 15.7417 15.7417C15.8164 15.6676 15.8757 15.5794 15.9161 15.4823C15.9566 15.3852 15.9774 15.281 15.9774 15.1758C15.9774 15.0705 15.9566 14.9664 15.9161 14.8692C15.8757 14.7721 15.8164 14.6839 15.7417 14.6098ZM1.62572 7.60368C1.62572 6.42135 1.97632 5.26557 2.63319 4.2825C3.29005 3.29943 4.22368 2.53322 5.31601 2.08076C6.40834 1.62831 7.61031 1.50992 8.76992 1.74058C9.92953 1.97124 10.9947 2.54059 11.8307 3.37662C12.6668 4.21266 13.2361 5.27783 13.4668 6.43744C13.6974 7.59705 13.579 8.79902 13.1266 9.89134C12.6741 10.9837 11.9079 11.9173 10.9249 12.5742C9.94178 13.231 8.78601 13.5816 7.60368 13.5816C6.01822 13.5816 4.49771 12.9518 3.37662 11.8307C2.25554 10.7096 1.62572 9.18913 1.62572 7.60368Z">
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
                                        <li><a href="https://wa.me/918102550190?text=Book%20Patna%20to%20Darbhanga%20Taxi">Patna to Darbhanga,</a></li>
                                        <li><a href="https://wa.me/918102550190?text=Book%20Patna%20to%20Muzaffarpur%20Taxi">Patna to Muzaffarpur,</a></li>
                                        <li><a href="https://wa.me/918102550190?text=Book%20Patna%20to%20Gaya%20Taxi">Patna to Gaya,</a></li>
                                        <li><a href="https://wa.me/918102550190?text=Book%20Danapur%20to%20Patna%20Taxi">Danapur to Patna,</a></li>
                                        <li><a href="https://wa.me/918102550190?text=Book%20Danapur%20to%20Darbhanga%20Taxi">Danapur to Darbhanga</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <a href="#" className="primary-btn1 black-bg d-xl-flex d-none">
                    <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M7.50105 7.78913C9.64392 7.78913 11.3956 6.03744 11.3956 3.89456C11.3956 1.75169 9.64392 0 7.50105 0C5.35818 0 3.60652 1.75169 3.60652 3.89456C3.60652 6.03744 5.35821 7.78913 7.50105 7.78913ZM14.1847 10.9014C14.0827 10.6463 13.9467 10.4082 13.7936 10.1871C13.0113 9.0306 11.8038 8.2653 10.4433 8.07822C10.2732 8.06123 10.0861 8.09522 9.95007 8.19727C9.23578 8.72448 8.38546 8.99658 7.50108 8.99658C6.61671 8.99658 5.76638 8.72448 5.05209 8.19727C4.91603 8.09522 4.72895 8.04421 4.5589 8.07822C3.19835 8.2653 1.97387 9.0306 1.20857 10.1871C1.05551 10.4082 0.919443 10.6633 0.817424 10.9014C0.766415 11.0034 0.783407 11.1225 0.834416 11.2245C0.970484 11.4626 1.14054 11.7007 1.2936 11.9048C1.53168 12.2279 1.78679 12.517 2.07592 12.7891C2.31401 13.0272 2.58611 13.2483 2.85824 13.4694C4.20177 14.4728 5.81742 15 7.48409 15C9.15076 15 10.7664 14.4728 12.1099 13.4694C12.382 13.2653 12.6541 13.0272 12.8923 12.7891C13.1644 12.517 13.4365 12.2279 13.6746 11.9048C13.8446 11.6837 13.9977 11.4626 14.1338 11.2245C14.2188 11.1225 14.2358 11.0034 14.1847 10.9014Z">
                                </path>
                            </g>
                        </svg>
                        Login
                    </span>
                    <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M7.50105 7.78913C9.64392 7.78913 11.3956 6.03744 11.3956 3.89456C11.3956 1.75169 9.64392 0 7.50105 0C5.35818 0 3.60652 1.75169 3.60652 3.89456C3.60652 6.03744 5.35821 7.78913 7.50105 7.78913ZM14.1847 10.9014C14.0827 10.6463 13.9467 10.4082 13.7936 10.1871C13.0113 9.0306 11.8038 8.2653 10.4433 8.07822C10.2732 8.06123 10.0861 8.09522 9.95007 8.19727C9.23578 8.72448 8.38546 8.99658 7.50108 8.99658C6.61671 8.99658 5.76638 8.72448 5.05209 8.19727C4.91603 8.09522 4.72895 8.04421 4.5589 8.07822C3.19835 8.2653 1.97387 9.0306 1.20857 10.1871C1.05551 10.4082 0.919443 10.6633 0.817424 10.9014C0.766415 11.0034 0.783407 11.1225 0.834416 11.2245C0.970484 11.4626 1.14054 11.7007 1.2936 11.9048C1.53168 12.2279 1.78679 12.517 2.07592 12.7891C2.31401 13.0272 2.58611 13.2483 2.85824 13.4694C4.20177 14.4728 5.81742 15 7.48409 15C9.15076 15 10.7664 14.4728 12.1099 13.4694C12.382 13.2653 12.6541 13.0272 12.8923 12.7891C13.1644 12.517 13.4365 12.2279 13.6746 11.9048C13.8446 11.6837 13.9977 11.4626 14.1338 11.2245C14.2188 11.1225 14.2358 11.0034 14.1847 10.9014Z">
                                </path>
                            </g>
                        </svg>
                        Login
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
                                    <a href="https://wa.me/918102550190">24x7 Taxi Service in Patna, Darbhanga, Gaya & All Districts of Bihar. <strong>Call Now!</strong></a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="https://wa.me/918102550190">Reliable Airport Pickup & Drop. <strong>Book Instantly on WhatsApp</strong></a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="https://wa.me/918102550190">Affordable One-Way & Round-Trip Fares with <strong>Verified Drivers</strong></a>
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
