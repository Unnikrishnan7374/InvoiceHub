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
  const [supportHoveredItem, setSupportHoveredItem] = useState<'blog' | 'faq'>('blog');
  const [featuresHoveredItem, setFeaturesHoveredItem] = useState<'customer' | 'estimates' | 'payments' | 'ocr' | 'tax' | 'reports'>('customer');
  const location = useLocation();

  const featuresPreviewData = {
    customer: {
      title: 'Customer & Vendor Management',
      text: 'Maintain organized customer & vendor profiles, configure terms, and track activity.',
      image: '/images/blogs/blogimg-8.png'
    },
    estimates: {
      title: 'Estimates & Invoicing',
      text: 'Create structured pricing proposals, convert estimates, and manage billing workflows.',
      image: '/images/blogs/blogimg-13.png'
    },
    payments: {
      title: 'Payments & Payables',
      text: 'Record payments, track receivables, and monitor vendor bills dynamically.',
      image: '/images/blogs/blogimg-5.png'
    },
    ocr: {
      title: 'Smart Invoice Capture',
      text: 'Automate invoice data extraction using OCR technology to speed up entry.',
      image: '/images/blogs/blogimg-6.png'
    },
    tax: {
      title: 'Tax Automation',
      text: 'Configure automatic ZIP-code based tax rates for compliance and accuracy.',
      image: '/images/blogs/blogimg-7.png'
    },
    reports: {
      title: 'Reports & Insights',
      text: 'Gain real-time visibility into cash flow, outstanding balances, and taxes.',
      image: '/images/blogs/blogimg-12.png'
    }
  };

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
      <style>{`
        @keyframes dropdownFadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
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
                          <Link 
                            to="/features/customer-vendor-management"
                            onMouseEnter={() => setFeaturesHoveredItem('customer')}
                          >
                            Customer & Vendor Management
                          </Link>
                          <Link 
                            to="/features/estimates-invoicing-workflow"
                            onMouseEnter={() => setFeaturesHoveredItem('estimates')}
                          >
                            Estimates & Invoicing
                          </Link>
                          <Link 
                            to="/features/payments-partial-payments"
                            onMouseEnter={() => setFeaturesHoveredItem('payments')}
                          >
                            Payments & Payables
                          </Link>
                          <Link 
                            to="/features/smart-invoice-capture"
                            onMouseEnter={() => setFeaturesHoveredItem('ocr')}
                          >
                            Smart Invoice Capture
                          </Link>
                          <Link 
                            to="/features/tax-automation"
                            onMouseEnter={() => setFeaturesHoveredItem('tax')}
                          >
                            Tax Automation
                          </Link>
                          <Link 
                            to="/features/reports-insights"
                            onMouseEnter={() => setFeaturesHoveredItem('reports')}
                          >
                            Reports & Insights
                          </Link>
                        </li>
                        {!isMobile && (
                          <li 
                            className="navsub feature-mnu"
                            style={{
                              background: 'none',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                              padding: '15px'
                            }}
                          >
                            <div>
                              <h6 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1a73e8' }}>
                                {featuresPreviewData[featuresHoveredItem].title}
                              </h6>
                              <p style={{ fontSize: '13px', margin: 0, color: '#555', lineHeight: '1.4' }}>
                                {featuresPreviewData[featuresHoveredItem].text}
                              </p>
                            </div>
                            
                            <div style={{ overflow: 'hidden', borderRadius: '10px', marginTop: '10px', height: '140px', width: '100%' }}>
                              <img 
                                key={featuresHoveredItem}
                                src={featuresPreviewData[featuresHoveredItem].image} 
                                alt={featuresHoveredItem} 
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  borderRadius: '10px',
                                  animation: 'dropdownFadeInScale 0.35s ease-out forwards',
                                  display: 'block'
                                }} 
                              />
                            </div>
                          </li>
                        )}
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
                          <Link 
                            to="/blogs" 
                            onMouseEnter={() => setSupportHoveredItem('blog')}
                          >
                            Team Blog
                          </Link>
                          <Link 
                            to="/faq" 
                            onMouseEnter={() => setSupportHoveredItem('faq')}
                          >
                            FAQ
                          </Link>
                        </li>
                        {!isMobile && (
                          <li 
                            className="navsub feature-mnu"
                            style={{
                              background: 'none',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                              padding: '15px'
                            }}
                          >
                            <div>
                              <h6 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1a73e8' }}>
                                {supportHoveredItem === 'blog' ? 'Team Blog' : 'FAQ'}
                              </h6>
                              <p style={{ fontSize: '13px', margin: 0, color: '#555', lineHeight: '1.4' }}>
                                {supportHoveredItem === 'blog' 
                                  ? 'Read our latest articles, insights, and billing updates.' 
                                  : 'Find answers to frequently asked questions about Invoice Hub.'}
                              </p>
                            </div>
                            
                            <div style={{ overflow: 'hidden', borderRadius: '10px', marginTop: '10px', height: '140px', width: '100%' }}>
                              <img 
                                key={supportHoveredItem}
                                src={supportHoveredItem === 'blog' ? '/images/blog-bg.jpg' : '/images/FAQ-bg2.png'} 
                                alt={supportHoveredItem} 
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  borderRadius: '10px',
                                  animation: 'dropdownFadeInScale 0.35s ease-out forwards',
                                  display: 'block'
                                }} 
                              />
                            </div>
                          </li>
                        )}
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
                    name="name"
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
                    name="phone"
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
                    name="email"
                    className="form-control email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />
                  <label className={contactEmail ? 'active' : ''}>Email <span className="asterisk">*</span></label>
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    name="message"
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
