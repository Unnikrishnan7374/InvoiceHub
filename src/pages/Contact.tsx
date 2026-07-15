import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyText from '../components/common/copydata';
import CtaBanner from '../components/common/CtaBanner';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    const formatted = value.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => {
      return a ? `(${a}${b ? `) ${b}${c ? `-${c}` : ''}` : ''}` : '';
    });
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch('https://formspree.io/f/xaqryjen', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Contact Us</h2>
          <p>We love our customers, so feel free to visit during normal business hours.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </section>

      <div className="contact-uplift-container">
        {/* Left Hero Card */}
        <div
          className="contact-hero-card"
          style={{ backgroundImage: `url('/images/contactImg-63.png')` }}
        >
          <div className="contact-hero-overlay"></div>

          {/* Address, Phone, Email Details ON left card */}
          <div className="contact-hero-details" style={{ marginBottom: '0' }}>
            <div className="detail-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Our Location</h4>
                <p>
                  <a href="https://www.google.com/maps/search/?api=1&query=1+Lake+Bellevue+Dr,+Ste+209,+Bellevue,+WA+98005" target="_blank" rel="noopener noreferrer">
                    1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005
                  </a><CopyText value="1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005" />
                </p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4>Phone Number</h4>
                <p>
                  <a href="tel:4255199030">(425) 519-9030</a>
                  <CopyText value="4255199030" />
                </p>
              </div>
            </div>

            <div className="detail-item">
              <div className="icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:support@invoicehub360.com">support@invoicehub360.com</a>
                  <CopyText value="support@invoicehub360.com" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="contact-form-card">
          {/* <div className="badge-container">
            <span className="sparkle">✦</span> Connect with Us
          </div> */}
          <h2 className="home-section-title">Get In <span>Touch</span></h2>

          <form onSubmit={handleSubmit} action="https://formspree.io/f/xaqryjen" method="POST">
            <div className="contact-form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row-two-col">
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(555) 555-5555"
                  value={phone}
                  onChange={handlePhoneInput}
                  required
                />
                {phone && phone.replace(/\D/g, '').length < 10 && (
                  <span className="phone-validation-error" style={{ color: '#ff4d4f', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '500' }}>
                    Mobile number must have 10 digits
                  </span>
                )}
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={phone.replace(/\D/g, '').length < 10}
                />
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your messages"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={phone.replace(/\D/g, '').length < 10}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'submitting' || phone.replace(/\D/g, '').length < 10}
            >
              {status === 'submitting' ? 'Sending...' : 'Send a message'}
            </button>
          </form>

          {status === 'success' && (
            <div className="form-status-msg success">
              Thank you! Your message has been sent successfully. We will get back to you shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="form-status-msg error">
              Oops! Something went wrong while sending your message. Please try again.
            </div>
          )}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}

