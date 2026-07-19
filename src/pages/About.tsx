import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CtaBanner from '../components/common/CtaBanner';
import MagicBento, { MagicBentoCard } from '../components/common/MagicBento';

export default function About() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const routeLocation = useLocation();

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
    const scrollTarget = sessionStorage.getItem('pendingScrollTo');
    if (scrollTarget) {
      sessionStorage.removeItem('pendingScrollTo');
      let attempts = 0;
      const maxAttempts = 20;
      const poll = setInterval(() => {
        attempts++;
        const el = document.getElementById(scrollTarget);
        if (el) {
          clearInterval(poll);
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts >= maxAttempts) {
          clearInterval(poll);
        }
      }, 100);
      return () => clearInterval(poll);
    }
  }, [routeLocation]);

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
  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>About Us</h2>
          <p>Empowering businesses with simple, powerful invoicing solutions.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </section>

      <div className="aboutPge">
        <div className="homeabt clearfix">
          <div className="right">
            <h2 className="home-section-title">About <span>Invoice HUB 360</span></h2>
            <p><strong>A Smarter Way to Manage Your Financial Operations</strong></p>
            <p>Invoice HUB 360 is a comprehensive financial workflow platform designed to simplify billing, payables, tax compliance, and reporting for modern businesses. From estimates to payments, everything is connected in one structured system — helping you reduce manual effort, improve accuracy, and gain full financial visibility.</p>

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
          </div>
          <div className="left">
            <img src="images/about.webp" className="img-fluid" loading="lazy" alt="about" />
          </div>
        </div>


        <div className="why-exists-banner">
          <div className="why-exists-top">
            <div className="why-exists-left">
              <h2 className="home-section-title mb-3">Why Invoice HUB 360 <span>Exists</span> </h2>
              <p className="why-sub">We built <strong>Invoice HUB 360</strong> to simplify financial operations so you can focus on what truly matters—your business.</p>
            </div>
            {/* <div className="why-exists-right">
              <img src="images/whoweare.png" className="img-fluid" alt="Why Invoice Hub Exists" />
            </div> */}
          </div>
          <div className="why-cards">
            <div className="why-card">
              <div className="why-card-icon"><span className="material-symbols-outlined">layers</span></div>
              <strong>One Platform</strong>
              <p>All your billing needs in one place</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon"><span className="material-symbols-outlined">settings</span></div>
              <strong>Automation</strong>
              <p>Work less, achieve more</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon"><span className="material-symbols-outlined">target</span></div>
              <strong>Accuracy</strong>
              <p>Fewer errors, more reliability</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon"><span className="material-symbols-outlined">visibility</span></div>
              <strong>Visibility</strong>
              <p>Real-time insights at your fingertips</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon"><span className="material-symbols-outlined">trending_up</span></div>
              <strong>Growth</strong>
              <p>Scalable solutions for every stage</p>
            </div>
          </div>
        </div>

        {/* Our Story / Our Mission / Our Vision */}
        <section className="vision-section">
          <MagicBento
            enableSpotlight={true}
            spotlightRadius={350}
            glowColor="132, 0, 255"
          >
            <div className="about-grid-container">
              <MagicBentoCard
                className="story-card"
                particleCount={15}
                glowColor="255, 255, 255"
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                enableStars={true}
                enableBorderGlow={true}
              >
                <div className="story-bg"></div>
                <div className="story-content">
                  <h2>Our Story</h2>
                  <p>Invoice HUB 360 started with a simple goal: to make financial management seamless and stress-free for growing businesses. We build intelligent tools that automate workflows, reduce errors, and give you clear financial visibility so you can focus on scaling.</p>
                </div>
              </MagicBentoCard>

              <div className="mission-vision-cards">
                <MagicBentoCard
                  className="about-card mission-card"
                  particleCount={10}
                  glowColor="26, 115, 232"
                  enableTilt={true}
                  enableMagnetism={true}
                  clickEffect={true}
                  enableStars={true}
                  enableBorderGlow={true}
                >
                  <h3>Our Mission</h3>
                  <p>
                    We simplify financial operations by automating invoicing, ensuring accurate US tax compliance, streamlining vendor management, delivering actionable insights, and building scalable solutions that grow with your business.
                  </p>
                </MagicBentoCard>

                <MagicBentoCard
                  className="about-card vision-card"
                  particleCount={10}
                  glowColor="255, 255, 255"
                  enableTilt={true}
                  enableMagnetism={true}
                  clickEffect={true}
                  enableStars={true}
                  enableBorderGlow={true}
                >
                  <h3>Our Vision</h3>
                  <p>
                    To be a trusted financial workflow platform that enables businesses across the United States to operate with transparency, compliance, and scalable efficiency. We envision financial systems that are intelligent, structured, and growth-ready.
                  </p>
                </MagicBentoCard>
              </div>
            </div>
          </MagicBento>
        </section>


        <section className="aboutFeatures">
          <div className="container-fluid">
            <div className="section-title pb-4">
              <h2 className="home-section-title">What Sets Invoice HUB 360 <span>Apart</span></h2>
            </div>
            <div className="features-container">
              <div className="feature-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3>Unified Financial Operations</h3>
                <p>Manage estimates, invoices, payments, vendor bills, and reporting within one connected system.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <h3>Intelligent Automation</h3>
                <p>Reduce manual effort through automated invoice processing, payment tracking, and structured workflows.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3>Real-Time Financial Visibility</h3>
                <p>Gain instant insight into receivables, payables, cash flow, and operational performance.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h3>Secure & Scalable Architecture</h3>
                <p>Role-based access controls, cloud infrastructure, and reliable data protection built for growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Invoice Templates Section */}
        <section className="invoice two clearfix" id="InvoiceTemplates" style={{
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
              <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .template-details-animate {
                  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
              `}</style>
              <h2 className="home-section-title">
                Choose Your Perfect <span>Template</span>
              </h2>
              <p style={{ color: '#555', marginBottom: '25px', lineHeight: '1.6' }}>
                Select from beautifully designed templates that match your brand. Customize colors, layouts, and typography to build trust with professional billing.
              </p>

              {/* Dynamic details of the active template with key to re-trigger animation */}
              <div 
                key={activeTemplate} 
                className="template-details-animate"
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--theme-color-light, rgba(26, 115, 232, 0.08))',
                    color: 'var(--theme-color, #1a73e8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                      {activeTemplate === 0 ? 'palette' : activeTemplate === 1 ? 'business_center' : 'brush'}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--theme-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Template {activeTemplate + 1} of {templates.length}
                    </span>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: '2px 0 0 0' }}>
                      {templates[activeTemplate].title}
                    </h4>
                  </div>
                </div>

                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                  {templates[activeTemplate].desc}
                </p>

                <div style={{
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '16px',
                  marginTop: '4px'
                }}>
                  <h5 style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0' }}>
                    Key Highlights
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(activeTemplate === 0 ? [
                      'Professional layouts', 'Structured tax lines', 'Perfect for corp invoices'
                    ] : activeTemplate === 1 ? [
                      'Header accent color', 'Minimal borders', 'Modern grid lines'
                    ] : [
                      'Creative colors', 'Startup friendly', 'Great for freelancers'
                    ]).map((highlight, index) => (
                      <span 
                        key={index}
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#475569',
                          backgroundColor: '#fff',
                          border: '1px solid #e2e8f0',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#10b981' }}>check_circle</span>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="abtbtm clearfix">
          <div className='pb-4'>
            <h2 className="home-section-title mb-3">Built for <span>Scaling Businesses</span></h2>
          </div>
          <div className="abtbtm-grid">
            <div className="list">
              <h3>Operational Efficiency</h3>
              <p>Accelerate billing and payment workflows while minimizing administrative overhead.</p>
            </div>
            <div className="list">
              <h3>Growth-Ready Platform</h3>
              <p>Scale from startup to expansion without changing systems.</p>
            </div>
            <div className="list">
              <h3>Compliance-Focused Design</h3>
              <p>Maintain structured records for reporting and regulatory clarity.</p>
            </div>
            <div className="list">
              <h3>Cloud-Based Accessibility</h3>
              <p>Secure access from any device, anytime.</p>
            </div>
          </div>
        </section>


        <CtaBanner />
      </div>
    </div>
  );
}
