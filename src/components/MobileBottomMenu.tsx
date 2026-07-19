import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MobileBottomMenu() {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleQuickLinks = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHelpCenter(false);
    setShowQuickLinks((prev) => !prev);
  };

  const handleHelpCenter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickLinks(false);
    setShowHelpCenter((prev) => !prev);
  };

  const handleContactPopup = () => {
    setShowQuickLinks(false);
    setShowHelpCenter(false);
    window.dispatchEvent(new Event('toggle-contact-popover'));
  };

  // Hide bottom menu only when scrolled to the bottom portion of the page
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Hide menu when within 100px of the bottom
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Listen to popover state from Header component
  useEffect(() => {
    const handlePopoverChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsPopoverOpen(customEvent.detail);
    };
    window.addEventListener('contact-popover-changed', handlePopoverChange);
    return () => {
      window.removeEventListener('contact-popover-changed', handlePopoverChange);
    };
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowQuickLinks(false);
        setShowHelpCenter(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`mobile-bottom-nav-bar ${!isMenuVisible ? 'nav-hidden' : ''}`}>
      {/* Quick Links Dropdown Popup */}
      {showQuickLinks && (
        <div className="quick-links-dropdown-popup" ref={popupRef}>
          <div className="popup-header">
            <h4>Quick Link</h4>
          </div>
          <ul className="popup-links-list">
            <li>
              <Link to="/" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">home</span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">info</span>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">star</span>
                Features
              </Link>
            </li>
            <li>
              <Link to="/#Pricing" onClick={() => {
                setShowQuickLinks(false);
                setTimeout(() => {
                  const el = document.getElementById('Pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}>
                <span className="material-symbols-outlined">payments</span>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="popup-arrow"></div>
        </div>
      )}

      {/* Help Center Dropdown Popup */}
      {showHelpCenter && (
        <div className="quick-links-dropdown-popup help-center-dropdown-popup" ref={popupRef}>
          <div className="popup-header">
            <h4>Help Center</h4>
          </div>
          <ul className="popup-links-list">
            <li>
              <Link to="/support" onClick={() => setShowHelpCenter(false)}>
                <span className="material-symbols-outlined">support_agent</span>
                Support
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setShowHelpCenter(false)}>
                <span className="material-symbols-outlined">quiz</span>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={() => setShowHelpCenter(false)}>
                <span className="material-symbols-outlined">article</span>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowHelpCenter(false)}>
                <span className="material-symbols-outlined">mail</span>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="popup-arrow help-center-arrow"></div>
        </div>
      )}

      <div className="bottom-menu-pill">
        {/* Item 1: Quick Link */}
        <button type="button" className={`menu-item-btn ${showQuickLinks ? 'active' : ''}`} onClick={handleQuickLinks} aria-label="Quick Links">
          <div className="item-wrapper">
            <div className="icon-box">
              <span className="material-symbols-outlined">grid_view</span>
            </div>
            <span className="item-label">Quick Link</span>
          </div>
        </button>

        <div className="menu-divider"></div>

        {/* Item 2: Help Center */}
        <button type="button" className={`menu-item-btn ${showHelpCenter ? 'active' : ''}`} onClick={handleHelpCenter} aria-label="Help Center">
          <div className="item-wrapper">
            <div className="icon-box">
              <span className="material-symbols-outlined">shield_question</span>
            </div>
            <span className="item-label">Help Center</span>
          </div>
        </button>

        <div className="menu-divider"></div>

        {/* Item 3: Try for Free (Central Pill) */}
        <Link to="/register" className="central-try-btn" aria-label="Try for Free" onClick={() => setShowQuickLinks(false)}>
          <span className="material-symbols-outlined">description</span>
          <span className="btn-text">TRY FOR FREE</span>
        </Link>

        <div className="menu-divider"></div>

        {/* Item 4: Login */}
        <Link to="/login" className="menu-item-btn" aria-label="Login" onClick={() => setShowQuickLinks(false)}>
          <div className="item-wrapper">
            <div className="icon-box">
              <span className="material-symbols-outlined">login</span>
            </div>
            <span className="item-label">Login</span>
          </div>
        </Link>

        <div className="menu-divider"></div>

        {/* Item 5: Message */}
        <button type="button" className={`menu-item-btn ${isPopoverOpen ? 'active' : ''}`} onClick={handleContactPopup} aria-label="Message">
          <div className="item-wrapper">
            <div className="icon-box">
              <span className={`material-symbols-outlined ${isPopoverOpen ? 'rotate-icon' : ''}`}>{isPopoverOpen ? 'close' : 'mail'}</span>
            </div>
            <span className="item-label">Message</span>
          </div>
        </button>
      </div>
    </div>
  );
}
