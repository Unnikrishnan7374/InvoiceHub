import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/common/CtaBanner';
import MagicBento, { MagicBentoCard } from '../components/common/MagicBento';

export default function About() {
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
