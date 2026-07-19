import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MobileBottomMenu() {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleQuickLinks = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickLinks((prev) => !prev);
  };

  const handleContactPopup = () => {
    setShowQuickLinks(false);
    window.dispatchEvent(new Event('toggle-contact-popover'));
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowQuickLinks(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="mobile-bottom-nav-bar">
      {/* Quick Links Dropdown Popup */}
      {showQuickLinks && (
        <div className="quick-links-dropdown-popup" ref={popupRef}>
          <div className="popup-header">
            <h4>Quick Navigation</h4>
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
            <li>
              <Link to="/blogs" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">article</span>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">quiz</span>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowQuickLinks(false)}>
                <span className="material-symbols-outlined">support_agent</span>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="popup-arrow"></div>
        </div>
      )}

      <div className="bottom-menu-pill">

        <button type="button" className={`menu-item-btn ${showQuickLinks ? 'active' : ''}`} onClick={handleQuickLinks} aria-label="Quick Links">
          <div className="icon-circle red-bg">
            <span className="material-symbols-outlined">format_list_bulleted</span>
          </div>
        </button>

        <Link to="/login" className="menu-item-btn" aria-label="Login" onClick={() => setShowQuickLinks(false)}>
          <div className="icon-circle red-bg">
            <span className="material-symbols-outlined">login</span>
          </div>
        </Link>

        <Link to="/register" className="menu-item-btn central-item try-free-btn" aria-label="Try for Free" onClick={() => setShowQuickLinks(false)}>
          <span>Try for free</span>
        </Link>

        <button type="button" className="menu-item-btn" onClick={handleContactPopup} aria-label="Contact Us">
          <div className="icon-circle red-bg">
            <span className="material-symbols-outlined">mail</span>
          </div>
        </button>

      </div>
    </div>
  );
}
