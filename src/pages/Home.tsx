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
import FaqSection from '../components/FaqSection';

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
  const [activeFeature, setActiveFeature] = useState(0);

  const templates = [
    { src: 'images/pdf-1.webp', full: 'images/pdf-1.1.webp', title: 'Professional Clean Template', desc: 'Standard business layout with clear table formatting, professional corporate typography, and structured totals.' },
    { src: 'images/pdf-2.webp', full: 'images/pdf-2.1.webp', title: 'Modern Corporate Template', desc: 'Minimalist corporate styling with a top banner, accent colors, and custom grid borders for items.' },
    { src: 'images/pdf-3.webp', full: 'images/pdf-3.1.webp', title: 'Creative Business Template', desc: 'Creative, colorful layout suitable for designers, freelancers, agencies, and modern tech startups.' }
  ];

  const featuresList = [
    {
      title: "Customer & Vendor Management",
      icon: "contacts",
      link: "/features/customer-vendor-management",
      accentBg: "var(--theme-color)",
      img: "images/Features/3667.webp",
      heading: "Stronger client relations",
      desc: "Maintain complete ledger details for customers and vendors. Track outstanding balances and view detailed statements of accounts.",
      card1Img: "images/VectorImg/vec325.png",
      card2Img: "images/VectorImg/vec324.png",
      card1Pos: { left: '355px', top: '40px', width: '250px' },
      card2Pos: { left: '310px', bottom: '40px', width: '400px' }
    }, {
      title: "Estimates & Invoicing",
      icon: "receipt_long",
      link: "/features/estimates-invoicing-workflow",
      accentBg: "var(--theme-color)",
      img: "images/Features/blogimg-3.webp",
      heading: "Win more work",
      desc: "Win 2x more work with professional-looking estimates and INVOICE HUB 360's easy-to-use customer communication tools.",
      card1Img: "images/VectorImg/vec321.png",
      card2Img: "images/VectorImg/vec323.png",
      card1Pos: { left: '356px', top: '40px', width: '321px' },
      card2Pos: { left: '310px', bottom: '20px', width: '260px' }
    },
    {
      title: "Payments & Payables",
      icon: "payments",
      link: "/features/payments-partial-payments",
      accentBg: "var(--theme-color)",
      img: "images/Features/194651.webp",
      heading: "Get paid faster",
      desc: "Receive credit card and bank payments online instantly. Send automated late payment reminders and offer partial payment plans.",
      card1Img: "images/VectorImg/vec456.png",
      card2Img: "images/VectorImg/vec455.png",
      card1Pos: { left: '348px', top: '40px', width: '280px' },
      card2Pos: { left: '310px', bottom: '50px', width: '220px' }
    },

    {
      title: "Smart Invoice Capture",
      icon: "qr_code_scanner",
      link: "/features/smart-invoice-capture",
      accentBg: "var(--theme-color)",
      img: "images/Features/65489.webp",
      heading: "Capture costs instantly",
      desc: "Extract data from paper receipts automatically using intelligent OCR technology. Eliminate manual bookkeeping errors.",
      card1Img: "images/VectorImg/664456.png",
      card2Img: "images/VectorImg/vec323.png",
      card1Pos: { left: '400px', top: '40px', width: '280px' },
      card2Pos: { left: '310px', bottom: '50px', width: '220px' }
    },
    {
      title: "Tax Automation",
      icon: "percent",
      link: "/features/tax-automation",
      accentBg: "var(--theme-color)",
      img: "images/Features/6668.webp",
      heading: "Simplify tax filing",
      desc: "Auto-calculate sales tax based on state rules and coordinates. Export tax summary reports instantly for stress-free IRS audits.",
      card1Img: "images/VectorImg/99876.png",
      card2Img: "images/VectorImg/14536.png",
      card1Pos: { left: '388px', top: '40px', width: '210px' },
      card2Pos: { left: '310px', bottom: '50px', width: '290px' }
    },
    {
      title: "Reports & Insights",
      icon: "trending_up",
      link: "/features/reports-insights",
      accentBg: "var(--theme-color)",
      img: "images/Features/34976.webp",
      heading: "Track cash flows",
      desc: "Gain deep visibility into payment collections, open invoice balances, tax liabilities, and product performance from a single dashboard.",
      card1Img: "images/VectorImg/668898.png",
      card2Img: "images/VectorImg/668899.png",
      card1Pos: { left: '348px', top: '40px', width: '280px' },
      card2Pos: { left: '310px', bottom: '50px', width: '280px' }
    }
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

      {/* Features Section */}
      <section className="features-showcase-section hmefeatures desktop-only">
        <div className="">
          <div className="row align-items-center">

            {/* Left Side: Features Tab List & Detailed Content */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 features-left">
              <h2 className="home-section-title">Our Standard <span>Features</span></h2>

              {/* Tab Menus */}
              <div className="features-nav">
                {featuresList.map((feat, idx) => (
                  <button
                    key={idx}
                    className={`feature-nav-item ${idx === activeFeature ? 'active' : ''}`}
                    onClick={() => setActiveFeature(idx)}
                    type="button"
                  >
                    <span className="material-symbols-outlined nav-icon">{feat.icon}</span>
                    <span className="nav-title">{feat.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Feature Detail Content Card */}

            </div>

            {/* Right Side: The Themed Composed Illustration */}
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 features-right">
              <div className="illustration-wrapper">

                {/* Accent Background Block */}
                <div
                  className="accent-bg-block"
                  style={{ backgroundColor: featuresList[activeFeature].accentBg }}
                />

                {/* Render all slides, showing/hiding them with beautiful slider transitions */}
                {featuresList.map((feat, idx) => {
                  let slideClass = '';
                  if (idx === activeFeature) {
                    slideClass = 'active';
                  } else if (idx < activeFeature) {
                    slideClass = 'prev';
                  } else {
                    slideClass = 'next';
                  }

                  return (
                    <div key={idx} className={`feature-slide ${slideClass}`}>
                      {/* Circular Masked Image */}
                      <div className="circle-image-container">
                        <img
                          src={feat.img}
                          alt={feat.title}
                          className="circle-masked-img"
                          loading="lazy"
                        />
                      </div>

                      {/* Floating Card 1 (UI Estimate/Invoice Details Image) */}
                      <div className="floating-ui-card card-details" style={feat.card1Pos}>
                        <div className="floating-card-inner">
                          <img
                            src={feat.card1Img}
                            alt="Estimate details card"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </div>
                      </div>

                      {/* Floating Card 2 (Status Notification Image) */}
                      <div className="floating-ui-card card-status" style={feat.card2Pos}>
                        <div className="floating-card-inner">
                          <img
                            src={feat.card2Img}
                            alt="Status badge"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}


                {/* Next & Previous Controls with Slide Count */}
                <div className="features-controls-wrapper">
                  <div className="features-nav-arrows">
                    <button
                      type="button"
                      className="nav-arrow prev"
                      onClick={() => setActiveFeature((prev) => (prev === 0 ? featuresList.length - 1 : prev - 1))}
                      aria-label="Previous Feature"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      className="nav-arrow next"
                      onClick={() => setActiveFeature((prev) => (prev === featuresList.length - 1 ? 0 : prev + 1))}
                      aria-label="Next Feature"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                  <div className="features-slide-count">
                    {String(activeFeature + 1).padStart(2, '0')} / {String(featuresList.length).padStart(2, '0')}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="mobile-features-layout">
        <div className="container">
          <h2 className="home-section-title text-center">Our Standard <span>Features</span></h2>
          <div className="mobile-features-cards">
            {featuresList.map((feat, idx) => (
              <div key={idx} className="mobile-feature-card">
                <div className="card-left-content">
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                  <Link to={feat.link} className="learn-more-btn">
                    Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
                  </Link>
                </div>
                <div className="card-right-image">
                  <img src={feat.img} alt={feat.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Invoice HUB */}
      <section className="why-trust-section">
        <div className="why-trust-container">
          {/* Left - Dashboard Mockup */}
          <div className="why-trust-left">
            <img src="images/whychhose.png" className="img-fluid" loading="lazy" alt="whychoose" />
          </div>

          {/* Right - Content */}
          <div className="why-trust-right">
            <h2 className="home-section-title">Why Businesses <span>Trust Us</span></h2>
            <p className="why-trust-desc">Built to simplify invoicing with the security and reliability your business can depend on.</p>
            <div className="why-trust-grid">
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h3>Secure</h3>
                <p>Your data is safe with enterprise-grade security.</p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <h3>Automated</h3>
                <p>Smart workflows save time and reduce manual work.</p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3>Real-Time</h3>
                <p>Live insights to track invoices and cash flow at a glance.</p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">open_in_full</span>
                </div>
                <h3>Scalable</h3>
                <p>Flexible platform that grows with your business.</p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">fact_check</span>
                </div>
                <h3>Compliant</h3>
                <p>Stay audit-ready with accurate and reliable data.</p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-card-icon">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3>Trusted</h3>
                <p>Built for reliability you can count on, every day.</p>
              </div>
            </div>

            <img src="images/whychhose.png" className="img-fluid mblimg" loading="lazy" alt="whychoose" />
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



      {/* Testimonials Section Component */}
      <Testimonials />

      {/* FAQ Section Component */}
      <FaqSection />

      <CtaBanner />

      {/* Cookie Consent Banner - shown only on Home page */}
      <CookieBanner />
    </div>
  );
}
