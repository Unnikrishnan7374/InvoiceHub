import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../css/scss/Header.scss';

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // 'features' or 'support'
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [supportHoveredItem, setSupportHoveredItem] = useState<'blog' | 'faq'>('blog');
  const [featuresHoveredItem, setFeaturesHoveredItem] = useState<'customer' | 'estimates' | 'payments' | 'ocr' | 'tax' | 'reports'>('customer');
  const location = useLocation();
  const navigate = useNavigate();

  const featuresPreviewData = {
    customer: {
      title: 'Customer & Vendor Management',
      text: 'Maintain organized customer & vendor profiles, configure terms, and track activity.',
      image: '/images/Features/3667.webp'
    },
    estimates: {
      title: 'Estimates & Invoicing',
      text: 'Create structured pricing proposals, convert estimates, and manage billing workflows.',
      image: '/images/Features/blogimg-3.webp'
    },
    payments: {
      title: 'Payments & Payables',
      text: 'Record payments, track receivables, and monitor vendor bills dynamically.',
      image: '/images/Features/194651.webp'
    },
    ocr: {
      title: 'Smart Invoice Capture',
      text: 'Automate invoice data extraction using OCR technology to speed up entry.',
      image: '/images/Features/65489.webp'
    },
    tax: {
      title: 'Tax Automation',
      text: 'Configure automatic ZIP-code based tax rates for compliance and accuracy.',
      image: '/images/Features/6668.webp'
    },
    reports: {
      title: 'Reports & Insights',
      text: 'Gain real-time visibility into cash flow, outstanding balances, and taxes.',
      image: '/images/Features/34976.webp'
    }
  };

  // Contact pop-over form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
    setActiveSubmenu(null);
  }, [location.pathname]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactStatus('submitting');

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('https://formspree.io/f/xaqryjen', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setContactStatus('success');
        setContactName('');
        setContactPhone('');
        setContactEmail('');
        setContactMessage('');

        setTimeout(() => {
          setIsPopoverOpen(false);
          setContactStatus('idle');
        }, 3000);
      } else {
        setContactStatus('error');
      }
    } catch (err) {
      console.error(err);
      setContactStatus('error');
    }
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
                      <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive && location.hash !== '#Pricing') ? 'active' : ''}
                        onClick={(e) => {
                          if (location.pathname === '/') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            if (location.hash) {
                              window.history.pushState(null, '', '/');
                            }
                          }
                        }}
                      >
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
                                loading="lazy"
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
                      <Link
                        to="/#Pricing"
                        className={location.pathname === '/' && location.hash === '#Pricing' ? 'active' : ''}
                        onClick={(e) => {
                          if (location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById('Pricing');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                            navigate('/#Pricing');
                          }
                        }}
                      >
                        Pricing
                      </Link>
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
                                src={supportHoveredItem === 'blog' ? '/images/blog-bg.webp' : '/images/FAQ-bg2.webp'}
                                alt={supportHoveredItem}
                                loading="lazy"
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

                    <li className="login">
                      <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                        Login
                      </NavLink>
                    </li>

                    <li className="signup">
                      <NavLink to="/register" className="signup-btn-link">
                        Try for free <i className="ri-arrow-right-line" style={{ verticalAlign: 'middle', marginLeft: '4px' }}></i>
                      </NavLink>
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
            <form onSubmit={handleContactSubmit} className="validateForm">
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    disabled={contactStatus === 'submitting'}
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
                    disabled={contactStatus === 'submitting'}
                  />
                  <label className={contactPhone ? 'active' : ''}>Phone <span className="asterisk">*</span></label>
                  {contactPhone && contactPhone.replace(/\D/g, '').length < 10 && (
                    <span className="phone-validation-error" style={{ color: '#ff4d4f', fontSize: '11px', marginTop: '4px', display: 'block', fontWeight: '500', textAlign: 'left' }}>
                      Mobile number must have 10 digits
                    </span>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    disabled={contactStatus === 'submitting' || contactPhone.replace(/\D/g, '').length < 10}
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
                    disabled={contactStatus === 'submitting' || contactPhone.replace(/\D/g, '').length < 10}
                  ></textarea>
                  <label className={contactMessage ? 'active' : ''}>Message <span className="asterisk">*</span></label>
                </div>
                <div className="col-md-12" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="submit"
                    className="submit btn-animate"
                    disabled={contactStatus === 'submitting' || contactPhone.replace(/\D/g, '').length < 10}
                  >
                    {contactStatus === 'submitting' ? 'Sending...' : 'Send'}
                  </button>
                  {contactStatus === 'success' && (
                    <div style={{ color: '#28a745', fontSize: '12px', marginTop: '5px', fontWeight: '500', textAlign: 'center' }}>
                      Thank you! Message sent successfully.
                    </div>
                  )}
                  {contactStatus === 'error' && (
                    <div style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', fontWeight: '500', textAlign: 'center' }}>
                      Failed to send message. Please try again.
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
