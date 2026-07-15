import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyText from '../components/common/copydata';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    const formatted = value.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => {
      return a ? `(${a}${b ? `) ${b}${c ? `-${c}` : ''}` : ''}` : '';
    });
    setPhone(formatted);
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
          <p>Simply complete the form to reach us now. We're happy to solve your messaging problem.</p>

          <ul className="boxes addresslist">
            <li>
              <i className="fas fa-map-marker-alt adrico"></i>
              <p className="adr clearfix">
                <span className="copyText">1 Lake Bellevue Dr., Ste 209<br /> Bellevue, WA 98005</span>
                <CopyText value="1 Lake Bellevue Dr., Ste 209 Bellevue, WA 98005" />
              </p>
            </li>
            <li>
              <i className="fas fa-phone-alt adrico"></i>
              <p className="adr clearfix">
                <a href="tel:(425) 519-9030" className="copyText">(425) 519-9030</a>
                <CopyText value="4255199030" />
              </p>
            </li>
            <li>
              <i className="fa fa-envelope adrico" aria-hidden="true"></i>
              <p className="adr clearfix">
                <a href="mailto:support@invoicehub360.com" className="copyText">support@invoicehub360.com</a>
                <CopyText value="support@invoicehub360.com" />
              </p>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Get in Touch</h2>
          <p>You can reach us anytime</p>
          <form action="https://formspree.io/f/xaqryjen" method="POST" className="contactform">
            <div className="row">
              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="name"
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
                  name="phone"
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
                  name="email"
                  className="form-control email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className={email ? 'active' : ''}>Email <span className="asterisk">*</span></label>
              </div>
              <div className="form-group col-md-12">
                <textarea
                  name="message"
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
