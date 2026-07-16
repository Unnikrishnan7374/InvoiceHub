import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeTab, setActiveTab] = useState('Launch');
  const [readMoreBasic, setReadMoreBasic] = useState(false);
  const [readMorePremium, setReadMorePremium] = useState(false);
  const [compareCollapsed, setCompareCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAnnual, setIsAnnual] = useState(false);

  const templates = [
    { src: 'images/pdf-1.png', full: 'images/pdf-1.1.png', title: 'Professional Clean Template', desc: 'Standard business layout with clear table formatting, professional corporate typography, and structured totals.' },
    { src: 'images/pdf-2.png', full: 'images/pdf-2.1.png', title: 'Modern Corporate Template', desc: 'Minimalist corporate styling with a top banner, accent colors, and custom grid borders for items.' },
    { src: 'images/pdf-3.png', full: 'images/pdf-3.1.png', title: 'Creative Business Template', desc: 'Creative, colorful layout suitable for designers, freelancers, agencies, and modern tech startups.' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.location.hash === '#Pricing') {
      const element = document.getElementById('Pricing');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveTemplate((prev) => (prev + 1) % templates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, templates.length]);

  const nextTemplate = () => {
    setActiveTemplate((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setActiveTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };





  const banners = [
    {
      bg: "images/banner-5.jpg",
      laptop: "images/laptop.png",
      title: <>The Smart Way to Run Your  <span>Billing Operations</span></>,
      desc: "Professional estimates, invoices, bills, and payments — all managed in one intelligent platform.",
      theme: ""
    },
    {
      bg: "images/banner-4.jpg",
      title: <>Simplify Invoicing. Accelerate <span>Payments</span>.</>,
      desc: "Professional estimates, invoices, bills, and payments — all managed in one intelligent platform.",
      theme: "slide-2"
    },
    {
      bg: "images/banner-3.jpg",
      laptop: "images/banner-3.1.png",
      title: <>Secure, Tax-Ready, <span>Built to Scale </span>.</>,
      desc: "Tax automation, role-based security, and scalable workflows designed for growing businesses.",
      theme: "slide-3"
    },
    {
      bg: "images/banner-2.jpg",
      laptop: "images/expanding_laptop.png", // uses phone image
      title: <>Work from Anywhere, <span>Anytime</span>.</>,
      desc: "Secure cloud-based access to your financial operations from any device. Stay in control wherever business takes you.",
      theme: "slide-2"
    }

  ];

  const nextSlide = () => {
    setActiveBanner((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeBanner, isHovered]);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.marquee-slider', {
      modules: [Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      speed: 12000,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    // Initialize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
      Hash: false,
    });

    return () => {
      swiper.destroy();
      Fancybox.destroy();
    };
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section id="home" className="banner bannerNew">
        <div
          id="full-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* LayerSlider Active Progress Indicator (Circular Timer) */}
          <div className="ls-circle-timer" style={{ display: 'block' }}>
            <div className="ls-loading-indicator" key={activeBanner} style={{ width: '100%', height: '100%' }}>
              <svg className="timer-svg" viewBox="0 0 46 46" style={{ width: '100%', height: '100%', display: 'block' }}>
                <circle cx="23" cy="23" r="18" className="timer-bg" />
                <circle cx="23" cy="23" r="18" className="timer-progress" />
                <circle cx="23" cy="23" r="8" className="timer-center" />
              </svg>
            </div>
          </div>

          <div id="homeslider" style={{ width: '100%', position: 'relative' }}>
            {banners.map((ban, idx) => (
              <div
                key={idx}
                className={`ls-slide ${ban.theme} ${idx === activeBanner ? 'active-slide' : 'inactive-slide'}`}
              >
                <img src={ban.bg} className="ls-bg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img
                  className="ls-l"
                  style={{ top: '100px', left: 'auto', right: '7%', position: 'absolute', zIndex: 99 }}
                  src={ban.laptop}
                  alt=""
                />
                <div className="ls-l sub-head sub-ban" style={{ top: '180px', left: '50px', position: 'absolute', zIndex: 99 }}>
                  <h2>{ban.title}</h2>
                  <p>{ban.desc}</p>
                  <Link to="/register" className="themeBtn">
                    Start Free Trial <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="slider-arrow prev-arrow"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            className="slider-arrow next-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Bullet Indicators */}
          <div className="slider-bullets">
            {banners.map((_, idx) => (
              <button
                key={idx}
                className={`slider-bullet ${idx === activeBanner ? 'active' : ''}`}
                onClick={() => setActiveBanner(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features hmefeatures">
        <h2 className="home-section-title pt-2">Our Standard <span>Features</span></h2>
        <ul className="features-grid">
          <li>
            <Link to="/features/customer-vendor-management" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-users"></i>
                    </div>
                    <h3>Customer & Vendor Management</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/features/estimates-invoicing-workflow" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </div>
                    <h3>Estimates & Invoicing</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/features/payments-partial-payments" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <h3>Payments & Payables</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>
                </div>

              </div>
            </Link>
          </li>
          <li>
            <Link to="/features/smart-invoice-capture" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-qrcode"></i>
                    </div>
                    <h3>Smart Invoice Capture</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/features/tax-automation" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-percent"></i>
                    </div>
                    <h3>Tax Automation</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>

                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/features/reports-insights" className="feature-card-link">
              <div className="feature-card">
                <div className="feature-info">
                  <div className="feature-header">
                    <div className="feature-icon-wrapper">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3>Reports & Insights</h3>
                    <span className="read-more-btn">Read More <span className="arrow">→</span></span>
                  </div>

                </div>
              </div>
            </Link>
          </li>
        </ul>
        <a className="themeBtn" href="/features" data-discover="true"> View More Features <span className="material-symbols-outlined">arrow_forward</span> </a>
      </section>

      {/* About Section */}
      <div className="homeabt clearfix">
        <div className="right">
          <h2 className="home-section-title">About <span>Invoice HUB 360</span></h2>
          <p><strong>A Smarter Way to Manage Your Financial Operations</strong></p>
          <p>Invoice HUB 360 streamlines billing, payables, tax compliance, and financial reporting for modern businesses.</p>
          {/* <p>From estimates to payments, everything is connected in one structured system — helping you reduce manual effort, improve accuracy, and gain full financial visibility.</p> */}
          {/* About Stats Strip */}
          <div className="about-stats-strip">
            <div className="about-stats-container">
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="about-stat-value">60% Faster Workflow</h3>
                {/* <p className="about-stat-desc">With the simple app, work smarter, not harder.</p> */}
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="about-stat-value">2× Faster Payments</h3>
                {/* <p className="about-stat-desc">Get paid up to 9 days sooner.</p> */}
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="about-stat-value">Compatible with All Devices</h3>
                {/* <p className="about-stat-desc">Invoice HUB 360 simplifies business tracking on mobile and web.</p> */}
              </div>
            </div>
          </div>
          <div className="view-button">
            <Link to="/about" className="themeBtn"> View More <span className="material-symbols-outlined">arrow_forward</span> </Link>
          </div>
        </div>
        <div className="left">
          <img src="images/about.webp" className="img-fluid" loading="lazy" alt="about" />
        </div>
      </div>


      {/* Why Choose Invoice HUB */}
      <section className="invoice hmeinvoice clearfix">
        <div className="right">
          <h2 className="home-section-title">Why choose <span>Invoice HUB 360</span></h2>
          <p><strong>Designed for Control, Built for Growth</strong></p>
          <ul className="ticklist">
            <li><i className="bi bi-check2"></i> Automated workflows that reduce manual effort</li>
            <li><i className="bi bi-check2"></i> US tax-ready architecture</li>
            <li><i className="bi bi-check2"></i> Real-time dashboards and reporting</li>
            <li><i className="bi bi-check2"></i> Secure role-based access controls</li>
            <li><i className="bi bi-check2"></i> Scalable for startups and growing businesses</li>
            <li><i className="bi bi-check2"></i> Audit-ready financial records</li>
            <li><i className="bi bi-check2"></i> Monitor real-time revenue and cash flow insights</li>
          </ul>
          <p><strong>Invoice HUB 360</strong> transforms complex financial operations into a structured, efficient, and scalable system.</p>
        </div>
        <div className="left">
          <ul>
            <li><img src="images/hmegrid-1.jpg" className="img-fluid" alt="" /></li>
            <li><img src="images/hmegrid-2.jpg" className="img-fluid" alt="" /></li>
            <li><img src="images/hmegrid-3.jpg" className="img-fluid" alt="" /></li>
          </ul>
        </div>
      </section>

      {/* Step by Step Tabbed Section */}
      <div className="stepsHome-header text-center" style={{ padding: '0 40px', marginTop: '60px' }}>
        <h2 className="home-section-title" style={{ marginBottom: '15px' }}>Step-by-Step <span>Guide</span></h2>
      </div>
      <div className="stepsHome clearfix pb-2" style={{ paddingTop: '15px' }}>
        <div className="left">
          <ul className="tabs nav nav-tabs clearfix left-sub">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Launch' ? 'active' : ''}`} onClick={() => setActiveTab('Launch')}>
                1. Launch Invoice HUB 360
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Customer' ? 'active' : ''}`} onClick={() => setActiveTab('Customer')}>
                2. Customer Creation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Product' ? 'active' : ''}`} onClick={() => setActiveTab('Product')}>
                3. Product & Service Creation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Estimation' ? 'active' : ''}`} onClick={() => setActiveTab('Estimation')}>
                4. Estimation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Approve' ? 'active' : ''}`} onClick={() => setActiveTab('Approve')}>
                5. Approve or Reject
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Invoice' ? 'active' : ''}`} onClick={() => setActiveTab('Invoice')}>
                6. Invoice Generation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Payment' ? 'active' : ''}`} onClick={() => setActiveTab('Payment')}>
                7. Payment Tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="tab-content clearfix">
            {activeTab === 'Launch' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 1</h6>
                  <p><strong>Log In to Your Invoice HUB 360 Account</strong></p>
                  <ul className="ticklist">
                    <li>Access Invoice HUB 360 securely from any device and get started instantly.</li>
                    <li>Your dashboard gives a clear overview of your business from the moment you log in — no setup, no learning curve.</li>
                  </ul>
                </div>
                <div className="rtimg"><img src="images/step-1.png" className="img-fluid" alt="Step 1" /></div>
              </div>
            )}
            {activeTab === 'Customer' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 2</h6>
                  <p><strong>Add Customer Details</strong></p>
                  <ul className="ticklist">
                    <li>Create and manage your customers in one centralized place.</li>
                    <li>Store billing details, contact information, and customer history to make every future invoice faster and more accurate.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-2.png" className="img-fluid" alt="Step 2" />
                  <img src="images/step-2.1.png" className="img-fluid second" alt="Step 2 details" />
                </div>
              </div>
            )}
            {activeTab === 'Product' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 3</h6>
                  <p><strong>Select Products</strong></p>
                  <ul className="ticklist">
                    <li>Add your products or services with pricing and tax details once.</li>
                    <li>Reuse them across estimates and invoices to save time and avoid manual errors.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-3.png" className="img-fluid" alt="Step 3" />
                  <img src="images/step-3.1.png" className="img-fluid second" alt="Step 3 details" />
                </div>
              </div>
            )}
            {activeTab === 'Estimation' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 4</h6>
                  <p><strong>Estimation</strong></p>
                  <ul className="ticklist">
                    <li>Generate professional estimates or quotations in just a few clicks.</li>
                    <li>Customize document names, formats, and values to match your business style and customer expectations.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-4.png" className="img-fluid" alt="Step 4" />
                  <img src="images/step-4.1.png" className="img-fluid second" alt="Step 4 details" />
                </div>
              </div>
            )}
            {activeTab === 'Approve' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 5</h6>
                  <p><strong>Approve or Reject</strong></p>
                  <ul className="ticklist">
                    <li>Track the status of every estimate with complete clarity.</li>
                    <li>Once approved, estimates move seamlessly to invoicing — no duplication, no rework.</li>
                  </ul>
                </div>
                <div className="rtimg"><img src="images/step-5.png" className="img-fluid" alt="Step 5" /></div>
              </div>
            )}
            {activeTab === 'Invoice' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 6</h6>
                  <p><strong>Invoice Generation</strong></p>
                  <ul className="ticklist">
                    <li>Create invoices instantly from approved estimates or directly from products.</li>
                    <li>US sales tax is applied automatically, ensuring accuracy and compliance every time.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-6.png" className="img-fluid" alt="Step 6" />
                  <img src="images/step-6.1.png" className="img-fluid second" alt="Step 6 details" />
                </div>
              </div>
            )}
            {activeTab === 'Payment' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 7</h6>
                  <p><strong>Payment Tracking</strong></p>
                  <ul className="ticklist">
                    <li>Record payments as they are received and monitor outstanding balances easily.</li>
                    <li>Get a clear view of paid, pending, and overdue invoices to stay in control of your cash flow.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-7.png" className="img-fluid" alt="Step 7" />
                  <img src="images/step-7.1.png" className="img-fluid second" alt="Step 7 details" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing clearfix" id="Pricing">
        <div className="pricing-wrapper">
          <div className='text-center'>
            <h2 className="home-section-title">Powerful Features. Simple Pricing</h2>
          </div>

          {/* Pricing Toggle Pill Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{
              backgroundColor: 'rgba(26, 115, 232, 0.06)',
              borderRadius: '30px',
              display: 'inline-flex',
              padding: '6px',
              border: '1px solid rgba(26, 115, 232, 0.1)',
              position: 'relative'
            }}>
              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  padding: '10px 28px',
                  borderRadius: '24px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: !isAnnual ? '#fff' : 'transparent',
                  color: !isAnnual ? 'var(--theme-color)' : '#555',
                  boxShadow: !isAnnual ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.25s ease',
                  outline: 'none'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  padding: '10px 28px',
                  borderRadius: '24px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: isAnnual ? '#fff' : 'transparent',
                  color: isAnnual ? 'var(--theme-color)' : '#555',
                  boxShadow: isAnnual ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.25s ease',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Annual
                <span style={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(40, 167, 69, 0.15)',
                  color: '#28a745',
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}>
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="price-box silver">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Trial</h3>
                  <div className="heading-sub-title">
                    <p>Limited Time Offer</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">$0</p>
                    <p className="duration">{isAnnual ? '/year' : '/month'}</p>
                  </div>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><DoneTwoToneIcon className="pricing-icon" /> Easy onboarding</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Invoice & Estimate creation</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Customer management</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Product & service catalog</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> US sales tax (basic)</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> PDF invoice export</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Basic reports</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Email support</li>
                  </ul>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn silverBtn">Get Start Now <DoubleArrowOutlinedIcon className="btn-arrow" /></button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="price-box gold">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Basic</h3>
                  <h6 className="mostreco">Most Popular</h6>
                  <div className="heading-sub-title">
                    <p>Invoice HUB 360 Core Suite</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">{isAnnual ? '$12' : '$15'}</p>
                    <p className="duration">/month</p>
                  </div>
                  <p style={{ fontSize: '11px', color: '#888', margin: '4px 0 0 0', textAlign: 'center' }}>
                    {isAnnual ? 'Billed annually ($144/yr)' : 'Billed monthly'}
                  </p>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><DoneTwoToneIcon className="pricing-icon" /> Everything in Trial</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Advanced invoice & estimate templates</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Dynamic document naming</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> US sales tax (state-based)</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Bills & expense tracking</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Payments tracking</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Vendor management</li>

                    {readMoreBasic && (
                      <>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Report center (sales, tax, payments)</li>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Excel & PDF exports</li>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Role-based user access</li>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Audit logs (standard)</li>
                      </>
                    )}
                  </ul>
                  <span className="ReadMore xtra-cntnt" onClick={() => setReadMoreBasic(!readMoreBasic)}>
                    {readMoreBasic ? 'Read Less' : 'Read More'}
                  </span>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn goldBtn">Get Start Now <DoubleArrowOutlinedIcon className="btn-arrow" /></button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 last">
              <div className="price-box premium">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Professional</h3>
                  <div className="heading-sub-title">
                    <p>The Ultimate Management Experience</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">{isAnnual ? '$39' : '$45'}</p>
                    <p className="duration">/month</p>
                  </div>
                  <p style={{ fontSize: '11px', color: '#888', margin: '4px 0 0 0', textAlign: 'center' }}>
                    {isAnnual ? 'Billed annually ($468/yr)' : 'Billed monthly'}
                  </p>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><DoneTwoToneIcon className="pricing-icon" /> Everything in Basic</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Advanced US sales tax configuration</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Location-based tax rules</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Custom business configuration</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Advanced inventory management</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Profit & expense analytics</li>
                    <li><DoneTwoToneIcon className="pricing-icon" /> Advanced audit & activity center</li>

                    {readMorePremium && (
                      <>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Priority onboarding assistance</li>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Data migration support</li>
                        <li><DoneTwoToneIcon className="pricing-icon" /> Priority support</li>
                      </>
                    )}
                  </ul>
                  <span className="ReadMoreOne xtra-cntnt" onClick={() => setReadMorePremium(!readMorePremium)}>
                    {readMorePremium ? 'Read Less' : 'Read More'}
                  </span>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn premiumBtn">Get Start Now <DoubleArrowOutlinedIcon className="btn-arrow" /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="text-center">
            <button
              className={`themeBtn comparebtn ${compareCollapsed ? 'collapsed' : ''}`}
              onClick={() => setCompareCollapsed(!compareCollapsed)}
            >
              Compare All Features <i className={`bi ${compareCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'}`}></i>
            </button>
          </div>

          {!compareCollapsed && (
            <div className="compareFuatures">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"><h3>Features</h3></th>
                    <th scope="col">
                      <h3 className="text-xl">Trial</h3>
                      <div className="th-price">$0 <span className="th-duration">/month</span></div>
                      <div style={{ marginTop: '10px' }}>
                        <button className="compare-btn-outline">Get Start Now</button>
                      </div>
                    </th>
                    <th scope="col">
                      <h3 className="text-xl">Basic</h3>
                      <div className="th-price">
                        {isAnnual ? '$12' : '$15'} <span className="th-duration">/month</span>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <button className="compare-btn-outline">Get Start Now</button>
                      </div>
                    </th>
                    <th scope="col">
                      <h3>Professional</h3>
                      <div className="th-price">
                        {isAnnual ? '$39' : '$45'} <span className="th-duration">/month</span>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <button className="compare-btn-outline">Get Start Now</button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Invoice & Estimation</td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Dynamic Document Naming</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>US Sales Tax Configuration</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Customer Management</td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Vendor Management</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Bills & Expenses</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Payments Tracking</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Product & Inventory</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Report Center</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Export (PDF / Excel)</td>
                    <td><span>PDF</span></td>
                    <td><span>PDF + Excel</span></td>
                    <td><span>PDF + Excel</span></td>
                  </tr>
                  <tr>
                    <td>Audit Logs</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Data Migration Support</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td><span>Email</span></td>
                    <td><span>Email</span></td>
                    <td><span>Priority</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Invoice Templates Section */}
      <section className="invoice two clearfix" style={{
        padding: '0px 15px',
        borderRadius: '24px',
        margin: '0',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '40px',
      }}>
        {/* On Mobile, show heading first */}
        {isMobile && (
          <div style={{ width: '100%', textAlign: 'center', padding: '30px 20px 0 20px' }}>
            <h2 className="home-section-title" style={{ margin: 0 }}>
              Choose Your Perfect <span>Template</span>
            </h2>
          </div>
        )}
        {/* Left Side: Dynamic 3D Cover Flow Carousel */}
        <div className="left" style={{
          flex: '1.2',
          minWidth: '320px',
          width: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          float: 'none'
        }}>
          {/* 3D Cover Flow Perspective Container */}
          <div style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            position: 'relative',
            width: '100%',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            marginBottom: '20px'
          }}>
            {templates.map((tpl, index) => {
              let offset = index - activeTemplate;
              if (offset < -1) offset += templates.length;
              if (offset > 1) offset -= templates.length;

              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              let transformString = '';
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                transformString = 'rotateY(0deg) scale(1.15) translateZ(80px)';
                zIndex = 10;
                opacity = 1;
              } else if (isLeft) {
                transformString = 'rotateY(40deg) scale(0.85) translateX(-140px) translateZ(-60px)';
                zIndex = 5;
                opacity = 0.75;
              } else if (isRight) {
                transformString = 'rotateY(-40deg) scale(0.85) translateX(140px) translateZ(-60px)';
                zIndex = 5;
                opacity = 0.75;
              }

              return (
                <div
                  key={index}
                  onClick={() => setActiveTemplate(index)}
                  style={{
                    position: 'absolute',
                    width: '185px',
                    height: '260px',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease, z-index 0.5s',
                    transform: transformString,
                    zIndex: zIndex,
                    opacity: opacity,
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 20px 40px rgba(26, 115, 232, 0.15)' : '0 10px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    backgroundColor: '#fff',
                    padding: '8px',
                    border: isActive ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.06)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <a
                    href={tpl.full}
                    data-fancybox="gallery"
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveTemplate(index);
                      }
                    }}
                    style={{ width: '100%', height: '100%', display: 'block', borderRadius: '10px', overflow: 'hidden' }}
                  >
                    <img
                      src={tpl.src}
                      alt={tpl.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '10px' }}
                    />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Music style play controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <button
              onClick={prevTemplate}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#666',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
                outline: 'none',
                padding: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-color)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>skip_previous</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                backgroundColor: 'var(--theme-color)',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px var(--theme-color-light)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                outline: 'none',
                padding: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = '#135cb3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'var(--theme-color)';
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              onClick={nextTemplate}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#666',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
                outline: 'none',
                padding: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-color)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>skip_next</span>
            </button>
          </div>
        </div>

        {/* Right Side: Informational Features Content (Hidden on Mobile) */}
        {!isMobile && (
          <div className="right" style={{
            flex: '1',
            minWidth: '320px',
            width: 'auto',
            padding: '20px',
            float: 'none'
          }}>
            <h2 className="home-section-title">
              Choose Your Perfect <span>Template</span>
            </h2>
            <p style={{ color: '#555', marginBottom: '25px' }}>
              Select from beautifully designed templates that match your brand. Customize colors, layouts, and typography to build trust with professional billing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{
                display: 'flex',
                gap: '15px',
                backgroundColor: '#fff',
                padding: '18px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease',
                cursor: 'default'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--theme-color-light)',
                  color: 'var(--theme-color)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 'bold', color: '#222', margin: '0 0 4px 0' }}>Invoice Templates</h5>
                  <p style={{ fontSize: '15px', color: '#666', margin: 0, lineHeight: '1.4' }}>
                    Perfect for billing clients quickly, clearly, and conforming to local US tax regulations.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '15px',
                backgroundColor: '#fff',
                padding: '18px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease',
                cursor: 'default'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--theme-color-light)',
                  color: 'var(--theme-color)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span className="material-symbols-outlined">rate_review</span>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 'bold', color: '#222', margin: '0 0 4px 0' }}>Estimation Templates</h5>
                  <p style={{ fontSize: '15px', color: '#666', margin: 0, lineHeight: '1.4' }}>
                    Share accurate quotes, manage approval workflows, and convert them to invoices with a click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
