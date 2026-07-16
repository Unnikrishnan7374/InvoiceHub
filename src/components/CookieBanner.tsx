import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${visible ? 'cookie-banner--visible' : ''}`} role="alert">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <p>
            We use cookies to improve your experience on our site. By continuing to use our site,
            you accept our use of cookies.{' '}
            <Link to="/cookie-policy" className="cookie-banner__link">
              Cookie Policy
            </Link>{' '}
            &amp;{' '}
            <Link to="/privacy-policy" className="cookie-banner__link">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={handleAccept}
            aria-label="Accept cookies"
          >
            I Agree
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--decline"
            onClick={handleAccept}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
