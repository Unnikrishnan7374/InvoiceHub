import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="about-cta-banner">
      <div className="cta-banner-content">
        <div className="cta-left">
          <h2>Ready to Transform Your Invoicing & Billing?</h2>
          <p>Experience the future of financial workflows with Invoice HUB 360. Simplify client billing, automate estimates, and optimize your business operations today!</p>
          <Link to="/register" className="cta-btn">
            Get Started <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="cta-right">
          <img src="/images/docsImages.webp" loading="lazy" alt="Invoice HUB documents preview" />
        </div>
      </div>
    </section>
  );
}
