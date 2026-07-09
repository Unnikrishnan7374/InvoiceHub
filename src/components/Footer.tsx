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
      <footer className="clearfix mbl-scrl" id="footer">
        <div className="footer-grid">
          <div className="left">
            <div className="footerlist">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><a href="/#Pricing">Pricing</a></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footerlist">
              <h3><Link to="/features">Features</Link></h3>
              <ul>
                <li><Link to="/features/customer-vendor-management">Customer & Vendor Management</Link></li>
                <li><Link to="/features/estimates-invoicing-workflow">Estimates & Invoicing</Link></li>
                <li><Link to="/features/payments-partial-payments">Payments & Payables</Link></li>
                <li><Link to="/features/smart-invoice-capture">Smart Invoice Capture</Link></li>
                <li><Link to="/features/tax-automation">Tax Automation</Link></li>
                <li><Link to="/features/reports-insights">Reports & Insights</Link></li>
              </ul>
            </div>
            <div className="footerlist">
              <h3><Link to="/blogs">Blogs</Link></h3>
              <ul>
                <li><Link to="/blogs/getting-started">Getting Started with Invoice Hub</Link></li>
                <li><Link to="/blogs/manage-customers-vendors">Manage Customers and Vendors</Link></li>
                <li><Link to="/blogs/compliance-management">Compliance Management</Link></li>
                <li><Link to="/blogs/smart-bills-ocr-automation">Smart Bills & OCR Automation</Link></li>
                <li><Link to="/blogs/custom-templates">Custom Templates</Link></li>
                <li><Link to="/blogs" className="more">More Blogs <i className="material-symbols-outlined">arrow_forward</i></Link></li>
              </ul>
            </div>
            <div className="footerlist">
              <h3>Get In Touch</h3>
              <ul className="addresslist">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                    <span className="copyText">1 Lake Bellevue Dr., Ste 209<br /> Bellevue, WA 98005</span>
                    <CopyText value="1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005" />
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                    <a href="tel:(425) 519-9030" className="copyText">(425) 519-9030</a>
                    <CopyText value="4255199030" />
                  </div>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                    <a href="mailto:support@invoicehub.com" className="copyText">support@invoicehub.com</a>
                    <i
                      className="far fa-copy copyBtn"
                      aria-hidden="true"
                      onClick={() => handleCopy("support@invoicehub.com", "email")}
                      style={{ cursor: 'pointer', marginLeft: '8px' }}
                    ></i>
                    <span className={`toast ${activeToastType === 'email' ? 'show' : ''}`}>Email Copied!</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyrights">
          <Link to="/privacy-policy" className="privacylink">Privacy Policy</Link>
          {' '} | {' '}
          <Link to="/terms" className="privacylink">Terms of Service</Link>
          {' '} © {currentYear} <Link to="/" className="rightsLinks">Invoice HUB</Link>. All Rights Reserved.
        </p>
      </footer>

      {showScrollTop && (
        <div id="toTop" style={{ display: 'block', opacity: 1 }} onClick={scrollToTop}>
          <p><i className="bi bi-arrow-up-circle" aria-hidden="true"></i></p>
        </div>
      )}
    </>
  );
}
