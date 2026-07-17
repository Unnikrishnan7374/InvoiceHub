import React from 'react';
import { Link } from 'react-router-dom';
import CursorGrid from './CursorGrid';
import BlurText from './BlurText';

export default function CtaBanner() {
  return (
    <section className="about-cta-banner">
      <CursorGrid
        cellSize={60}
        color="#ffffff"
        radius={150}
        holdTime={300}
        fadeDuration={600}
        maxOpacity={0.6}
        gridOpacity={0.08}
        className="cta-cursor-grid"
      />
      <div className="cta-banner-content" style={{ pointerEvents: 'none' }}>
        <div className="cta-left" style={{ pointerEvents: 'none' }}>
          <BlurText
            text="Ready to Transform Your Invoicing & Billing?"
            delay={80}
            animateBy="words"
            direction="top"
            as="h2"
            style={{ pointerEvents: 'none' }}
          />
          <p style={{ pointerEvents: 'none' }}>Experience the future of financial workflows with Invoice HUB 360. Simplify client billing, automate estimates, and optimize your business operations today!</p>
          <Link to="/register" className="cta-btn" style={{ pointerEvents: 'auto' }}>
            Get Started <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="cta-right" style={{ pointerEvents: 'none' }}>
          <img src="/images/docsImages.webp" loading="lazy" alt="Invoice HUB documents preview" style={{ pointerEvents: 'none' }} />
        </div>
      </div>
    </section>
  );
}
