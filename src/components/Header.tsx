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

  const [activeFeatureHover, setActiveFeatureHover] = useState('default');
  const [activeSupportHover, setActiveSupportHover] = useState('default');

  const featureContent = {
    'customer-vendor': {
      title: 'Customer & Vendor',
      description: 'Store profiles, customize terms, manage vendor parameters, and view central business contacts.',
      image: '/images/customermgmt.png'
    },
    'estimates-invoicing': {
      title: 'Estimates & Invoicing',
      description: 'Draft quotes, create invoices from estimates, set up recurring bills, and trace items.',
      image: '/images/billspayables.png'
    },
    'payments-payables': {
      title: 'Payments & Payables',
      description: 'Accept bank/card collections, process payouts, track pending settlements, and monitor ledgers.',
      image: '/images/paymentsFea.png'
    },
    'smart-capture': {
      title: 'Smart OCR Capture',
      description: 'Instantly convert paper receipts and PDF supplier invoices into digitised documents.',
      image: '/images/OCRInvoice.png'
    },
    'tax-automation': {
      title: 'Tax Automation',
      description: 'Automate localized state-wise sales tax calculations and compliant report structures.',
      image: '/images/ZIPCode_Automation.png'
    },
    'reports-insights': {
      title: 'Reports & Insights',
      description: 'View custom balances, monthly revenue trends, accounts receivables, and audit trails.',
      image: '/images/notificationsalerts.png'
    },
    'default': {
      title: 'Features Hub',
      description: 'Explore tools designed to automate invoicing, tracking, and compliance.',
      image: '/images/menuImg.png'
    }
  };

  const supportContent = {
    'blog': {
      title: 'Team Blog',
      description: 'Browse standard guides, regulatory tax compliance updates, and platform release notes.',
      image: '/images/blog-1.jpg'
    },
    'faq': {
      title: 'FAQ Support',
      description: 'Get fast solutions to common queries about setup, permissions, calculations, and integrations.',
      image: '/images/menuImgsupport.png'
    },
    'default': {
      title: 'Support Hub',
      description: 'Access our detailed documentation and guides to resolve queries.',
      image: '/images/menuImgsupport.png'
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

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={(isHeaderFixed || !isHomePage) ? 'header-fixed' : ''}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo clearfix">
                <Link to="/">
                  <img src="/images/Logoimg.png" className="img-fluid" alt="Invoice HUB logo" />
                  <div className="logo-text">
                    <h1>Invoice HUB</h1>
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
                    <li 
                      className={`has-sub featmnu ${activeSubmenu === 'features' ? 'par-active' : ''}`}
                      onMouseLeave={() => setActiveFeatureHover('default')}
                    >
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
                        <li className="nav-links-col">
                          <Link 
                            to="/features/customer-vendor-management" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('customer-vendor')}
                          >
                            <div className="nav-icon-box"><i className="ri-group-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Customer & Vendor</span>
                              <span className="nav-link-desc">Manage clients and suppliers profiles</span>
                            </div>
                          </Link>
                          <Link 
                            to="/features/estimates-invoicing-workflow" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('estimates-invoicing')}
                          >
                            <div className="nav-icon-box"><i className="ri-file-list-3-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Estimates & Invoicing</span>
                              <span className="nav-link-desc">Create quotes and billing workflows</span>
                            </div>
                          </Link>
                          <Link 
                            to="/features/payments-partial-payments" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('payments-payables')}
                          >
                            <div className="nav-icon-box"><i className="ri-wallet-3-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Payments & Payables</span>
                              <span className="nav-link-desc">Record collections and track balances</span>
                            </div>
                          </Link>
                          <Link 
                            to="/features/smart-invoice-capture" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('smart-capture')}
                          >
                            <div className="nav-icon-box"><i className="ri-scan-2-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Smart Invoice Capture</span>
                              <span className="nav-link-desc">AI-powered OCR invoice extraction</span>
                            </div>
                          </Link>
                          <Link 
                            to="/features/tax-automation" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('tax-automation')}
                          >
                            <div className="nav-icon-box"><i className="ri-percent-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Tax Automation</span>
                              <span className="nav-link-desc">Configure automated state tax rules</span>
                            </div>
                          </Link>
                          <Link 
                            to="/features/reports-insights" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveFeatureHover('reports-insights')}
                          >
                            <div className="nav-icon-box"><i className="ri-bar-chart-box-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Reports & Insights</span>
                              <span className="nav-link-desc">Monitor cash flows and revenue analytics</span>
                            </div>
                          </Link>
                        </li>
                        <li className="navsub feature-mnu">
                          <h6>{featureContent[activeFeatureHover].title}</h6>
                          <p>{featureContent[activeFeatureHover].description}</p>
                          <div className="sidebar-image-container">
                            <img 
                              src={featureContent[activeFeatureHover].image} 
                              alt={featureContent[activeFeatureHover].title} 
                              className="sidebar-feature-img" 
                            />
                          </div>
                        </li>
                      </ul>
                    </li>
                    
                    <li 
                      className={`has-sub supportmnu ${activeSubmenu === 'support' ? 'par-active' : ''}`}
                      onMouseLeave={() => setActiveSupportHover('default')}
                    >
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
                        <li className="nav-links-col">
                          <Link 
                            to="/blogs" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveSupportHover('blog')}
                          >
                            <div className="nav-icon-box"><i className="ri-article-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">Team Blog</span>
                              <span className="nav-link-desc">Guides, news, and insights</span>
                            </div>
                          </Link>
                          <Link 
                            to="/faq" 
                            className="nav-item-link"
                            onMouseEnter={() => setActiveSupportHover('faq')}
                          >
                            <div className="nav-icon-box"><i className="ri-question-line"></i></div>
                            <div className="nav-text-box">
                              <span className="nav-link-title">FAQ</span>
                              <span className="nav-link-desc">Answers to common questions</span>
                            </div>
                          </Link>
                        </li>
                        <li className="navsub feature-mnu">
                          <h6>{supportContent[activeSupportHover].title}</h6>
                          <p>{supportContent[activeSupportHover].description}</p>
                          <div className="sidebar-image-container">
                            <img 
                              src={supportContent[activeSupportHover].image} 
                              alt={supportContent[activeSupportHover].title} 
                              className="sidebar-feature-img" 
                            />
                          </div>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="has-sub">
                      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                        Contact
                      </NavLink>
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

                    <li className="signup">
                      <Link to="/register">Sign Up</Link>
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
            <form onSubmit={handleContactSubmit} autoComplete="off" className="validateForm">
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
