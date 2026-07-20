import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import CopyText from '../components/common/copydata';
import CtaBanner from '../components/common/CtaBanner';

export default function Contact() {
  useDocumentTitle('Contact Us');
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
    setStatus("submitting");

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("https://formspree.io/f/xaqryjen", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      console.log("Status:", response.status);
      console.log("Response:", data);

      if (response.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert(JSON.stringify(data, null, 2));
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
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
          style={{ backgroundImage: `url('/images/contactImg-63.webp')` }}
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

          <div className="contactform">
            <form onSubmit={handleSubmit} className="validateForm">

              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="fullname">
                    Full Name <span className="asterisk">*</span>
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="phone">
                    Phone <span className="asterisk">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-control phone"
                    value={phone}
                    onChange={handlePhoneInput}
                    placeholder="(123) 456-7890"
                    required
                    disabled={status === 'submitting'}
                  />
                  {phone && phone.replace(/\D/g, '').length < 10 && (
                    <span className="phone-validation-error" style={{ color: '#ff4d4f', fontSize: '13px', marginTop: '4px', display: 'block', fontWeight: '500' }}>
                      Mobile number must have 10 digits
                    </span>
                  )}
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="email">
                    Email <span className="asterisk">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="support@invoicehub.com"
                    required
                    disabled={status === 'submitting' || phone.replace(/\D/g, '').length < 10}
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="message">
                    Message <span className="asterisk">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    disabled={status === 'submitting' || phone.replace(/\D/g, '').length < 10}
                  ></textarea>
                </div>

                <div className="col-md-12" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="submit"
                    className="submit btn-animate"
                    disabled={status === 'submitting' || phone.replace(/\D/g, '').length < 10}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send a message'}
                  </button>

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
            </form>
          </div>
        </div>

      </div>

      <CtaBanner />
    </div>
  );
}

