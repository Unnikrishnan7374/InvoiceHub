import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../css/scss/Header.scss';

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // 'features' or 'support'
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();

  // Contact pop-over form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLoginDropdownOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (orgName.trim()) {
      window.open(`http://${orgName.trim()}.invoicehub360.com`, '_blank');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${contactName}! We'll respond as soon as we can.`);
    setContactName('');
    setContactPhone('');
    setContactEmail('');
    setContactMessage('');
    setIsPopoverOpen(false);
  };

  const toggleSubmenu = (menu) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  // Format US phone number in real-time
  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    const formatted = value.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => {
      return a ? `(${a}${b ? `) ${b}${c ? `-${c}` : ''}` : ''}` : '';
    });
    setContactPhone(formatted);
  };

  return (
    <>
      <header className={isHeaderFixed ? 'header-fixed' : ''}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo clearfix">
                <Link to="/">
                  <img src="/images/Logoimg.png" className="img-fluid" alt="Invoice HUB logo" />
                  <div className="logo-text">
                    <h1>Invoice HUB 360</h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-md-9 col-sm-6">
              <div className="menu-sec clearfix">
                <nav id="menu">
                  <div
                    id="burgernav"
                    className={isMobileMenuOpen ? 'open' : ''}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <span></span>
                  </div>

                  <ul className={isMobileMenuOpen ? 'open' : ''}>
                    <li className="has-sub">
                      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                      </NavLink>
                    </li>
                    <li className="has-sub">
                      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                      </NavLink>
                    </li>
                    <li className={`has-sub featmnu ${activeSubmenu === 'features' ? 'par-active' : ''}`}>
                      <NavLink to="/features" className={({ isActive }) => isActive ? 'active' : ''}>
                        Features
                      </NavLink>
                      <p
                        className={`submenu-button ${activeSubmenu === 'features' ? 'mobile-nav-minus' : 'mobile-nav-plus'}`}
                        onClick={() => toggleSubmenu('features')}
                      ></p>
                      <ul
                        className="inner-nav-div"
                        style={isMobile ? { display: activeSubmenu === 'features' ? 'block' : 'none' } : undefined}
                      >
                        <li>
                          <Link to="/features/customer-vendor-management">Customer & Vendor Management</Link>
                          <Link to="/features/estimates-invoicing-workflow">Estimates & Invoicing</Link>
                          <Link to="/features/payments-partial-payments">Payments & Payables</Link>
                          <Link to="/features/smart-invoice-capture">Smart Invoice Capture</Link>
                          <Link to="/features/tax-automation">Tax Automation</Link>
                          <Link to="/features/reports-insights">Reports & Insights</Link>
                        </li>
                        <li className="navsub feature-mnu">
                          <h6>Features</h6>
                          <p>Smart features simplify billing and business management.</p>
                        </li>
                      </ul>
                    </li>

                    <li className={`has-sub supportmnu ${activeSubmenu === 'support' ? 'par-active' : ''}`}>
                      <NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>
                        Support
                      </NavLink>
                      <p
                        className={`submenu-button ${activeSubmenu === 'support' ? 'mobile-nav-minus' : 'mobile-nav-plus'}`}
                        onClick={() => toggleSubmenu('support')}
                      ></p>
                      <ul
                        className="inner-nav-div"
                        style={isMobile ? { display: activeSubmenu === 'support' ? 'block' : 'none' } : undefined}
                      >
                        <li>
                          <Link to="/blogs">Team Blog</Link>
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li className="navsub feature-mnu">
                          <h6>Support</h6>
                          <p>Smart features simplify billing and business management.</p>
                        </li>
                      </ul>
                    </li>

                    <li className="has-sub">
                      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                        Contact
                      </NavLink>
                    </li>

                    <li className="signup">
                      <Link
                        to="/business-onboarding"
                        target="_blank"
                        rel="noopener noreferrer"> Sign Up</Link>
                    </li>

                    <li className={`login has-sub ${isLoginDropdownOpen ? 'show' : ''}`}>
                      <a
                        className="dropdown-toggle"
                        onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                        style={{ cursor: 'pointer' }}
                      >
                        Login
                      </a>
                      <div
                        className={`login-popup dropdown-menu ${isLoginDropdownOpen ? 'show' : ''}`}
                        style={{ display: isLoginDropdownOpen ? 'block' : 'none' }}
                      >
                        <form onSubmit={handleLoginSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              value={orgName}
                              onChange={(e) => setOrgName(e.target.value)}
                              placeholder=""
                              required
                            />
                            <p>.invoiceHub360.com</p>
                            <button type="submit">Go</button>
                            <label>Enter your Org Name (Ex: contoso)</label>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Pop-over Contact Form */}
      <div className={`pop-over ${isPopoverOpen ? 'popover-open' : ''}`}>
        <button
          tabIndex={0}
          type="button"
          className="popover-btn"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          {isPopoverOpen ? (
            <><span>✖</span></>
          ) : (
            <i className="fa fa-envelope"></i>
          )}
        </button>
        <div className="popover-body">
          <h6>Contact Us <span>We'll respond as soon as we can.</span></h6>
          <div className="contactform">
            <form action="https://formspree.io/f/xaqryjen" method="POST" className="validateForm">
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                  <label className={contactName ? 'active' : ''}>Name <span className="asterisk">*</span></label>
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="tel"
                    className="form-control phone"
                    value={contactPhone}
                    onChange={handlePhoneInput}
                    required
                  />
                  <label className={contactPhone ? 'active' : ''}>Phone <span className="asterisk">*</span></label>
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    className="form-control email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                  <label className={contactEmail ? 'active' : ''}>Email <span className="asterisk">*</span></label>
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="form-control"
                    required
                  ></textarea>
                  <label className={contactMessage ? 'active' : ''}>Message <span className="asterisk">*</span></label>
                </div>
                <button type="submit" className="submit btn-animate">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
