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
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import PercentTwoToneIcon from '@mui/icons-material/PercentTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import HistoryTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import WarehouseTwoToneIcon from '@mui/icons-material/WarehouseTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import SwapHorizTwoToneIcon from '@mui/icons-material/SwapHorizTwoTone';
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import CookieBanner from '../components/CookieBanner';
import CtaBanner from '../components/common/CtaBanner';
import { Testimonials } from '../components/Testimonials';

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
    { src: 'images/pdf-1.webp', full: 'images/pdf-1.1.webp', title: 'Professional Clean Template', desc: 'Standard business layout with clear table formatting, professional corporate typography, and structured totals.' },
    { src: 'images/pdf-2.webp', full: 'images/pdf-2.1.webp', title: 'Modern Corporate Template', desc: 'Minimalist corporate styling with a top banner, accent colors, and custom grid borders for items.' },
    { src: 'images/pdf-3.webp', full: 'images/pdf-3.1.webp', title: 'Creative Business Template', desc: 'Creative, colorful layout suitable for designers, freelancers, agencies, and modern tech startups.' }
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
      laptop: "images/laptop.webp",
      title: <>The Smart Way to Run Your  <span>Billing Operations</span></>,
      desc: "Professional estimates, invoices, bills, and payments — all managed in one intelligent platform.",
      theme: "slide-1"
    },
    {
      bg: "images/banner-4.jpg",
      title: <>Simplify Invoicing. Accelerate <span>Payments</span>.</>,
      desc: "Professional estimates, invoices, bills, and payments — all managed in one intelligent platform.",
      theme: "slide-2"
    },
    {
      bg: "images/banner-3.jpg",
      laptop: "images/banner-3.1.webp",
      title: <>Secure, Tax-Ready, <span>Built to Scale </span>.</>,
      desc: "Tax automation, role-based security, and scalable workflows designed for growing businesses.",
      theme: "slide-3"
    },
    {
      bg: "images/banner-2.jpg",
      laptop: "images/expanding_laptop.webp", // uses phone image
      title: <>Work from Anywhere, <span>Anytime</span>.</>,
      desc: "Secure cloud-based access to your financial operations from any device. Stay in control wherever business takes you.",
      theme: "slide-4"
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
                      <span className="material-symbols-outlined">group</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-8.webp" className="img-fluid" loading="lazy" alt="Customer &amp; Vendor Management" />
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
                      <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-13.webp" className="img-fluid" loading="lazy" alt="Estimates & Invoicing" />
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
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-5.webp" className="img-fluid" loading="lazy" alt="Payments & Payables" />
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
                      <span className="material-symbols-outlined">qr_code_scanner</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-6.webp" className="img-fluid" loading="lazy" alt="Smart Invoice Capture" />
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
                      <span className="material-symbols-outlined">percent</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-7.webp" className="img-fluid" loading="lazy" alt="Tax Automation" />
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
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div className="feaImage">
                      <img src="/images/blogs/blogimg-12.webp" className="img-fluid" loading="lazy" alt="Reports & Insights" />
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
          <h2 className="home-section-title">About <span>Us</span></h2>
          <p><strong>A Smarter Way to Manage Your Financial Operations</strong></p>
          <p>Empowering businesses with a modern invoicing platform that simplifies financial workflows and enhances operational efficiency.</p>
          {/* <p>From estimates to payments, everything is connected in one structured system — helping you reduce manual effort, improve accuracy, and gain full financial visibility.</p> */}
          {/* About Stats Strip */}
          <div className="about-stats-strip">
            <div className="about-stats-container">
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="about-stat-content">
                  <h3 className="about-stat-value">Save Valuable Time</h3>
                  <p className="about-stat-desc">Automate repetitive tasks and reduce manual errors.</p>
                </div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <div className="about-stat-content">
                  <h3 className="about-stat-value">Get Paid Faster</h3>
                  <p className="about-stat-desc">Send professional invoices and accept payments online.</p>
                </div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div className="about-stat-content">
                  <h3 className="about-stat-value">Stay Compliant</h3>
                  <p className="about-stat-desc">Ensure tax compliance and maintain accurate financial records.</p>
                </div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <span className="material-symbols-outlined">bar_chart</span>
                </div>
                <div className="about-stat-content">
                  <h3 className="about-stat-value">Make Smarter Decisions</h3>
                  <p className="about-stat-desc">Real-time reports and insights to help your business grow.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="abtview-button">
            <Link to="/about" className="themeBtn"> Learn More About Us <span className="material-symbols-outlined">arrow_forward</span> </Link>
          </div>
        </div>
        <div className="left">
          <img src="images/about.webp" className="img-fluid" loading="lazy" alt="about" />
        </div>
      </div>


      {/* Why Choose Invoice HUB */}
      <section className="why-trust-section">
        <div className="why-trust-container">
          {/* Left - Dashboard Mockup */}
          <div className="why-trust-left">
            <img src="images/whychhose.png" className="img-fluid" loading="lazy" alt="whychoose" />
          </div>

          {/* Right - Content */}
          <div className="why-trust-right">
            <h2 className="home-section-title">Built on Reliability. <span>Designed for Confidence.</span></h2>
            <p className="why-trust-desc">We combine robust technology with best practices to deliver a secure, reliable, and future-ready platform.</p>
            <div className="why-trust-grid">
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3>Secure by Design</h3>
                  <p>Enterprise-grade security to protect your data and financial operations.</p>
                </div>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <div>
                  <h3>Intelligent Automation</h3>
                  <p>Automated workflows that minimize manual work and reduce errors.</p>
                </div>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <div>
                  <h3>Real-Time Visibility</h3>
                  <p>Live dashboards and reports that help you stay informed and make better decisions.</p>
                </div>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">open_in_full</span>
                </div>
                <div>
                  <h3>Built to Scale</h3>
                  <p>A flexible platform that adapts to your business as you grow.</p>
                </div>
              </div>
            </div>
            {/* Trust Strip */}
            <div className="trust-strip">
              <div className="trust-strip-item">
                <span className="material-symbols-outlined">task_alt</span>
                <strong>99.9%</strong>
                <span>Uptime Reliability</span>
              </div>
              <div className="trust-strip-item">
                <span className="material-symbols-outlined">lock</span>
                <strong>Bank-Level</strong>
                <span>Data Security</span>
              </div>
              <div className="trust-strip-item">
                <span className="material-symbols-outlined">shield</span>
                <strong>Compliance</strong>
                <span>Audit Ready</span>
              </div>
              <div className="trust-strip-item">
                <span className="material-symbols-outlined">groups</span>
                <strong>Trusted by</strong>
                <span>Growing Businesses</span>
              </div>
            </div>
            <img src="images/whychhose.png" className="img-fluid mblimg" loading="lazy" alt="whychoose" />
          </div>
        </div>


      </section>

      {/* Step by Step Guide Section */}
      <section className="process-guide-section" id="Guide">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '30px' }}>
            <h2 className="home-section-title">Your Journey to <span>Smarter Invoicing</span></h2>
            {/* <p style={{ color: '#666', fontSize: '17px', marginTop: '10px' }}> 
              How Invoice HUB 360 helps you manage billing operations seamlessly.
            </p> */}
          </div>

          <div className="process-flow-container">
            {/* Curvy Connecting Line SVG */}
            <svg className="process-flow-line" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path
                d="M 0 190 C 150 190, 300 45, 500 45 C 700 45, 850 110, 1000 110"
                fill="none"
                stroke="url(#process-grad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10, 8"
              />
              <defs>
                <linearGradient id="process-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--theme-color)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--theme-color)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--theme-color)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Step 1 */}
            <div className="process-step step-1">
              <div className="step-content">
                <div className="step-number-bg">1</div>
                <h3>Sign Up</h3>
                <p>Create your free INVOICE HUB 360 account in seconds. Access your secure billing dashboard instantly from any device.</p>
              </div>
              <div className="step-node">
                <div className="node-hexagon">
                  <div className="node-icon-inner">
                    <span className="material-symbols-outlined">person_add</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step step-2">
              <div className="step-node">
                <div className="node-hexagon">
                  <div className="node-icon-inner">
                    <span className="material-symbols-outlined">edit_document</span>
                  </div>
                </div>
              </div>
              <div className="step-content">
                <div className="step-number-bg">2</div>
                <h3>Customize & Create</h3>
                <p>Set up customer profiles and catalog, customize invoice styles. Draft professional estimates and invoices with auto-calculated US sales tax.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step step-3">
              <div className="step-node">
                <div className="node-hexagon">
                  <div className="node-icon-inner">
                    <span className="material-symbols-outlined">schedule_send</span>
                  </div>
                </div>
              </div>
              <div className="step-content">
                <div className="step-number-bg">3</div>
                <h3>Get Paid</h3>
                <p>Deliver invoices to customers via email, track approval, record payments, and monitor cash flow insights in real-time.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="pricing clearfix" id="Pricing">
        <div className="pricing-wrapper">
          <div className='text-center'>
            <h2 className="home-section-title">Powerful Features. <span>Simple Pricing</span></h2>
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
                    <li><SpeedTwoToneIcon className="pricing-icon" /> Easy onboarding</li>
                    <li><DescriptionTwoToneIcon className="pricing-icon" /> Invoice & Estimate creation</li>
                    <li><PeopleTwoToneIcon className="pricing-icon" /> Customer management</li>
                    <li><CategoryTwoToneIcon className="pricing-icon" /> Product & service catalog</li>
                    <li><PercentTwoToneIcon className="pricing-icon" /> US sales tax (basic)</li>
                    <li><PictureAsPdfTwoToneIcon className="pricing-icon" /> PDF invoice export</li>
                    <li><BarChartTwoToneIcon className="pricing-icon" /> Basic reports</li>
                    <li><EmailTwoToneIcon className="pricing-icon" /> Email support</li>
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
                    <p>INVOICE HUB 360 Core Suite</p>
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
                    <li><StarTwoToneIcon className="pricing-icon" /> Everything in Trial</li>
                    <li><DashboardTwoToneIcon className="pricing-icon" /> Advanced invoice & estimate templates</li>
                    <li><DriveFileRenameOutlineTwoToneIcon className="pricing-icon" /> Dynamic document naming</li>
                    <li><PercentTwoToneIcon className="pricing-icon" /> US sales tax (state-based)</li>
                    <li><AccountBalanceWalletTwoToneIcon className="pricing-icon" /> Bills & expense tracking</li>
                    <li><PaymentsTwoToneIcon className="pricing-icon" /> Payments tracking</li>
                    <li><StorefrontTwoToneIcon className="pricing-icon" /> Vendor management</li>

                    {readMoreBasic && (
                      <>
                        <li><AssessmentTwoToneIcon className="pricing-icon" /> Report center (sales, tax, payments)</li>
                        <li><FileDownloadTwoToneIcon className="pricing-icon" /> Excel & PDF exports</li>
                        <li><AdminPanelSettingsTwoToneIcon className="pricing-icon" /> Role-based user access</li>
                        <li><HistoryTwoToneIcon className="pricing-icon" /> Audit logs (standard)</li>
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
                    <li><StarTwoToneIcon className="pricing-icon" /> Everything in Basic</li>
                    <li><PercentTwoToneIcon className="pricing-icon" /> Advanced US sales tax configuration</li>
                    <li><LocationOnTwoToneIcon className="pricing-icon" /> Location-based tax rules</li>
                    <li><SettingsTwoToneIcon className="pricing-icon" /> Custom business configuration</li>
                    <li><WarehouseTwoToneIcon className="pricing-icon" /> Advanced inventory management</li>
                    <li><TrendingUpTwoToneIcon className="pricing-icon" /> Profit & expense analytics</li>
                    <li><ListAltTwoToneIcon className="pricing-icon" /> Advanced audit & activity center</li>

                    {readMorePremium && (
                      <>
                        <li><SupportAgentTwoToneIcon className="pricing-icon" /> Priority onboarding assistance</li>
                        <li><SwapHorizTwoToneIcon className="pricing-icon" /> Data migration support</li>
                        <li><HeadsetMicTwoToneIcon className="pricing-icon" /> Priority support</li>
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

      {/* Testimonials Section Component */}
      <Testimonials />

      <CtaBanner />

      {/* Cookie Consent Banner - shown only on Home page */}
      <CookieBanner />
    </div>
  );
}
