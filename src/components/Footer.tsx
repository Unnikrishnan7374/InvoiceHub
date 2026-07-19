import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../css/scss/Footer.scss';

// Import MUI Icons
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import RequestQuoteTwoToneIcon from '@mui/icons-material/RequestQuoteTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyText from './common/copydata';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToSection = (sectionId: string, targetRoute?: string) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const route = targetRoute || '/';
    const isOnRoute = location.pathname === route;

    if (isOnRoute) {
      doScroll();
    } else {
      // Store scroll target so the destination page can pick it up after mounting
      sessionStorage.setItem('pendingScrollTo', sectionId);
      navigate(route);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-premium" id="footer">
        <div className="footer-container">
          {/* Column 1: Brand Info */}
          {/* <div className="footer-col brand-col">
            <div className="footer-logo">
              <h2>INVOICE <span>HUB 360</span></h2>
            </div>
            <p className="brand-desc">
              Create, manage, and track invoices effortlessly. Save time. Get paid faster. Grow your business.
            </p>

            <div className="social-links-wrapper">
              <h4>Follow us</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter"><TwitterIcon /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube"><YouTubeIcon /></a>
              </div>
            </div>
          </div> */}

          {/* Column 2: Quick Links & Help Center Row */}
          <div className="footer-links-row">
            <div className="footer-col links-col">
              <h3 className="footer-col-title">QUICK <span>LINKS</span></h3>
              <ul className="footer-links-list">
                <li><ChevronRightIcon className="link-arrow" /><Link to="/">Home</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/about">About Us</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/features">Features</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><a href="/#Pricing" onClick={(e) => { e.preventDefault(); scrollToSection('Pricing'); }}>Pricing</a></li>
                <li><ChevronRightIcon className="link-arrow" /><a href="/#Testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('Testimonials'); }}>Testimonials</a></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/login">Login</Link></li>
              </ul>
            </div>

            <div className="footer-col links-col">
              <h3 className="footer-col-title">Who It’s <span>For</span></h3>
              <ul className="footer-links-list">
                <li><ChevronRightIcon className="link-arrow" /><Link to="">Retail</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="">Professional Services</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="">Manufacturing</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="">HealthCare</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="">Construction</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="">Non-Profit</Link></li>
              </ul>
            </div>

            <div className="footer-col links-col">
              <h3 className="footer-col-title">Help <span>Center</span></h3>
              <ul className="footer-links-list">
                <li><ChevronRightIcon className="link-arrow" /><Link to="/support">Support</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/faq">FAQ</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/blogs">Blog</Link></li>
                <li><ChevronRightIcon className="link-arrow" /><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('InvoiceTemplates', '/about'); }}>Invoice Templates</a></li>
                <li><ChevronRightIcon className="link-arrow" /><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Features */}
          {/* <div className="footer-col features-col">
            <h3 className="footer-col-title">Popular <span>features</span></h3>
            <ul className="footer-features-list">
              <li><ReceiptLongTwoToneIcon className="feature-icon" /><Link to="/features/estimates-invoicing-workflow">Invoice Management</Link></li>
              <li><RequestQuoteTwoToneIcon className="feature-icon" /><Link to="/features/estimates-invoicing-workflow">Estimation & Quotes</Link></li>
              <li><PaymentsTwoToneIcon className="feature-icon" /><Link to="/features/payments-partial-payments">Payment Tracking</Link></li>
              <li><PieChartTwoToneIcon className="feature-icon" /><Link to="/features/payments-partial-payments">Expense Management</Link></li>
              <li><GroupTwoToneIcon className="feature-icon" /><Link to="/features/customer-vendor-management">Client Management</Link></li>
              <li><AssessmentTwoToneIcon className="feature-icon" /><Link to="/features/reports-insights">Reports & Analytics</Link></li>
            </ul>
          </div> */}

          {/* Column 4: Contact Cards */}
          <div className="footer-col cards-col">
            <h3 className="footer-col-title">CONTACT <span>US ON</span></h3>
            <div className="contact-cards-list">
              <div className="contact-card">
                <a className="card-icon-box-link" href="https://www.google.com/maps/search/?api=1&query=1+Lake+Bellevue+Dr,+Ste+209,+Bellevue,+WA+98005" target="_blank" rel="noopener noreferrer">
                  <div className="card-icon-box">
                    <LocationOnTwoToneIcon />
                  </div>
                </a>
                <div className="card-text hover">
                  <a className='me-2' href="https://www.google.com/maps/search/?api=1&query=1+Lake+Bellevue+Dr,+Ste+209,+Bellevue,+WA+98005" target="_blank" rel="noopener noreferrer">
                    1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005
                  </a>
                  <CopyText value="1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005" />
                </div>
              </div>
              <div className="contact-card">
                <a className="card-icon-box-link" href="tel:(425) 519-9030">
                  <div className="card-icon-box">
                    <PhoneTwoToneIcon />
                  </div>
                </a>
                <div className="card-text">
                  <a className='me-2' href="tel:(425) 519-9030">(425) 519-9030</a>
                  <CopyText value="4255199030" />
                </div>
              </div>
              <div className="contact-card">
                <a className="card-icon-box-link" href="mailto:support@invoicehub360.com">
                  <div className="card-icon-box">
                    <MailTwoToneIcon />
                  </div>
                </a>
                <div className="card-text">
                  <a className='me-2' href="mailto:support@invoicehub360.com">support@invoicehub360.com</a>
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
            </div>
            <div className="copyrights-right">
              <span> © {currentYear} <Link to="/" className="rightsLinks">INVOICE HUB 360</Link>. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <div id="toTop" style={{ display: 'block', opacity: 1 }} onClick={scrollToTop}>
          <p><i className="bi bi-arrow-up-circle" aria-hidden="true"></i></p>
        </div>
      )}
    </>
  );
}
