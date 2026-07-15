import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/scss/Footer.scss';
import CopyText from './common/copydata';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeToastType, setActiveToastType] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setActiveToastType(type);
      setToastMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} Copied!`);
      setTimeout(() => {
        setActiveToastType('');
        setToastMessage('');
      }, 2000);
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-premium" id="footer">
        <div className="footer-container">
          {/* Left section: Quick Links */}
          <div className="footer-section footer-links-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-horizontal-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/suport">Support</Link></li>
              <li><a href="/#Pricing">Pricing</a></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Vertical divider line */}
          <div className="footer-divider"></div>

          {/* Right section: Contact Info */}
          <div className="footer-section footer-contact-section">
            <h3 className="footer-title">Invoice HUB 360</h3>
            <div className="footer-contact-details">
              <div className="contact-item address-item">
                <i className="fas fa-map-marker-alt"></i>
                <span className="copyText">1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005</span>
                <CopyText value="1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005" />
              </div>
              <div className="contact-sub-items">
                <div className="contact-item phone-item">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:(425) 519-9030" className="copyText">(425) 519-9030</a>
                  <CopyText value="4255199030" />
                </div>
                <div className="contact-item email-item">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:support@invoicehub360.com" className="copyText">support@invoicehub360.com</a>
                  <CopyText value="support@invoicehub360.com" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyrights bar */}
        <div className="footer-copyrights">
          <div className="copyrights-container">
            <div className="copyrights-left">
              <Link to="/privacy-policy" className="copyright-link">Privacy Policy</Link>
              <span className="copyright-separator">|</span>
              <Link to="/terms" className="copyright-link">Terms of Service</Link>
              <span className="copyright-separator">|</span>
              <Link to="/cookie-policy" className="copyright-link">Cookie Policy</Link>
              <span className="copyright-separator">|</span>
            </div>
            <div className="copyrights-right">
              <span> © {currentYear} <Link to="/" className="rightsLinks">Invoice HUB 360</Link>. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <div id="toTop" style={{ display: 'block', opacity: 1 }} onClick={scrollToTop}>
          <p><i className="bi bi-arrow-up-circle" aria-hidden="true"></i></p>
        </div>
      )
      }
    </>
  );
}
