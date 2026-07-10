import React from 'react';
import { Link } from 'react-router-dom';

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
        <section className="invoice clearfix">
          <div className="right">
            <h2>About Invoice Hub</h2>
            <p><strong>A Smarter Way to Manage Your Financial Operations</strong></p>
            <ul className="ticklist">
              <li>Invoice Hub is a comprehensive financial workflow platform designed to simplify billing, payables, tax compliance, and reporting for modern businesses.</li>
              <li>From estimates to payments, everything is connected in one structured system — helping you reduce manual effort, improve accuracy, and gain full financial visibility.</li>
            </ul>
          </div>
          <div className="left">
            <img src="images/expanding_laptop.png" className="img-fluid" alt="Invoice Hub Laptop Demo" />
          </div>
        </section>

        <div className="visionBlk">
          <div className="visionlst clearfix nice-scroll">
            <div className="contant mtMain lfmtmain active" style={{ backgroundColor: 'transparent' }}>
              <h2>Why Invoice Hub Exists</h2>
              <p><strong>Many businesses struggle with:</strong></p>
              <ul className="ticklist">
                <li>Manual invoice entry, Fragmented billing tools</li>
                <li>Inconsistent tax configuration, Limited financial reporting visibility</li>
              </ul>
              <p>InvoiceHub was built to centralize and automate financial operations — reducing complexity while increasing control and compliance.</p>
              <img src="images/whoweare.png" className="mbl img-fluid" alt="Why Invoice Hub Exists" />
            </div>
            <div className="ser-img mtMain rtmtmain active">
              <img src="images/whoweare.png" className="attachment-large size-large img-fluid" alt="Why Invoice Hub Exists Detail" />
            </div>
          </div>

          <section className="aboutFeatures">
            <div className="container-fluid">
              <div className="section-title">
                <h2>What Sets Invoicehub Apart</h2>
              </div>
              <div className="features-container">
                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  <h3>Unified Financial Operations</h3>
                  <p>Manage estimates, invoices, payments, vendor bills, and reporting within one connected system.</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h3>Intelligent Automation</h3>
                  <p>Reduce manual effort through automated invoice processing, payment tracking, and structured workflows.</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <h3>Real-Time Financial Visibility</h3>
                  <p>Gain instant insight into receivables, payables, cash flow, and operational performance.</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h3>Secure & Scalable Architecture</h3>
                  <p>Role-based access controls, cloud infrastructure, and reliable data protection built for growth.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="visionlst clearfix nice-scroll">
            <div className="contant mtMain lfmtmain active">
              <h2>Our Vision</h2>
              <p>To be a trusted financial workflow platform that enables businesses across the United States to operate with transparency, compliance, and scalable efficiency.</p>
              <p>We envision financial systems that are intelligent, structured, and growth-ready.</p>
              <img src="images/vision.png" className="mbl img-fluid" alt="Our Vision Mobile" />
            </div>
            <div className="ser-img mtMain rtmtmain active">
              <img src="images/vision.png" className="attachment-large size-large img-fluid" alt="Our Vision" />
            </div>
          </div>

          <div className="visionlst clearfix nice-scroll">
            <div className="contant mtMain rtmtmain active">
              <h2>Our Mission</h2>
              <p><strong>InvoiceHub is committed to:</strong></p>
              <ul className="ticklist">
                <li>Automating invoicing and payment lifecycle management</li>
                <li>Supporting accurate US tax handling</li>
                <li>Structuring vendor compliance and reporting processes</li>
                <li>Delivering reliable dashboards and financial insights</li>
                <li>Building scalable systems that evolve with growing businesses</li>
              </ul>
              <p>Our mission is to simplify financial operations without sacrificing control or compliance.</p>
              <img src="images/mission.png" className="mbl img-fluid" alt="Our Mission Mobile" />
            </div>
            <div className="ser-img mtMain lfmtmain active">
              <img src="images/mission.png" className="attachment-large size-large img-fluid" alt="Our Mission" />
            </div>
          </div>
        </div>

        <section className="abtbtm clearfix">
          <h2>Built for Scaling Businesses</h2>
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


        <section className="bottom-cta clearfix">
          <div className="container">
            <div className="logoimg">
              <img src="images/Logoimg.png" className="img-fluid" alt="Logo" />
            </div>
            <img src="images/bg_red.svg" className="img-fluid svgimg" alt="" />
            <div className="rtcntnt">
              <h4>Streamline your invoicing with Invoice HUB today! <Link to="/register" className="themeBtn">Get Started</Link></h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
