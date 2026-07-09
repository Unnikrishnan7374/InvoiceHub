import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [activeToastType, setActiveToastType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setActiveToastType(type);
      setTimeout(() => setActiveToastType(''), 2000);
    });
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    const formatted = value.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => {
      return a ? `(${a}${b ? `) ${b}${c ? `-${c}` : ''}` : ''}` : '';
    });
    setPhone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
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

      <div className="contactpage">
        <div className="left">
          <h2>Our Location</h2>
          <p>Simply complete the form to reach us now. We’re happy to solve your messaging problem.</p>

          <ul className="boxes addresslist">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                <span className="copyText">1 Lake Bellevue Dr., Ste 209<br /> Bellevue, WA 98005</span>
                <i 
                  className="far fa-copy copyBtn" 
                  aria-hidden="true" 
                  onClick={() => handleCopy("1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005", "address")}
                  style={{ cursor: 'pointer', marginLeft: '8px' }}
                ></i>
                <span className={`toast ${activeToastType === 'address' ? 'show' : ''}`}>Address Copied!</span>
              </div>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                <a href="tel:4259478400" className="copyText">425.947.8400</a>
                <i 
                  className="far fa-copy copyBtn" 
                  aria-hidden="true" 
                  onClick={() => handleCopy("425.947.8400", "phone")}
                  style={{ cursor: 'pointer', marginLeft: '8px' }}
                ></i>
                <span className={`toast ${activeToastType === 'phone' ? 'show' : ''}`}>Phone Number Copied!</span>
              </div>
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <div className="adr clearfix" style={{ display: 'inline-block', position: 'relative' }}>
                <a href="mailto:support@invoicehub.com" className="copyText">support@invoicehub.com</a>
                <i 
                  className="far fa-copy copyBtn" 
                  aria-hidden="true" 
                  onClick={() => handleCopy("support@invoicehub.com", "email")}
                  style={{ cursor: 'pointer', marginLeft: '8px' }}
                ></i>
                <span className={`toast ${activeToastType === 'email' ? 'show' : ''}`}>Email Copied!</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Get in Touch</h2>
          <p>You can reach us anytime</p>
          <form onSubmit={handleSubmit} autoComplete="off" className="contactform">
            <div className="row">
              <div className="form-group col-md-12">
                <input 
                  type="text" 
                  className="form-control" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                <label className={name ? 'active' : ''}>Name <span className="asterisk">*</span></label>
              </div>
              <div className="form-group col-md-12">
                <input 
                  type="tel" 
                  className="form-control phone" 
                  value={phone} 
                  onChange={handlePhoneInput} 
                  required 
                />
                <label className={phone ? 'active' : ''}>Phone <span className="asterisk">*</span></label>
              </div>
              <div className="form-group col-md-12">
                <input 
                  type="email" 
                  className="form-control email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <label className={email ? 'active' : ''}>Email <span className="asterisk">*</span></label>
              </div>
              <div className="form-group col-md-12">
                <textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  className="form-control" 
                  required
                ></textarea>
                <label className={message ? 'active' : ''}>Message <span className="asterisk">*</span></label>
              </div>
              <button type="submit" className="submit btn-animate">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
