import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/scss/Login.scss';

export default function Login() {
  const [orgName, setOrgName] = useState('');

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (orgName.trim()) {
      window.open(`http://${orgName.trim()}.invoicehub360.com`, '_blank');
    }
  };

  return (
    <div>
      {/* Scroll-sticky Breadcrumb Banner */}
      <section className="dtlsban dtlsban-hide-banner clearfix">
        <div className="dtlstext">
          <ul className="tabs nav nav-tabs clearfix">
            <li>
              <Link to="/">
                <span className="material-symbols-outlined">home</span>
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Login Content (Full End-to-End Width) */}
      <section className="login-page-section">
        <div className="login-page-container">
          {/* Left Panel: Form */}
          <div className="login-form-panel">
            <div className="login-form-card">
              <h2 className="home-section-title">Log<span>In</span></h2>
              <p className="login-header-signup-link">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>

              <form onSubmit={handleLoginSubmit}>
                <div className="org-input-wrapper">
                  <div className="org-input-group">
                    <input
                      id="orgName"
                      type="text"
                      className="org-input-field"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="Enter your Org Name"
                      required
                      autoFocus
                    />
                    <span className="org-input-suffix">.invoiceHub360.com</span>
                  </div>
                </div>
                <button type="submit" className="org-submit-btn">
                  Continue
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Panel: About Page style image panel */}
          <div className="login-image-panel">
            <div className="login-image-wrapper">
              <img src="/images/about.webp" alt="Invoice HUB 360 Workspace" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
