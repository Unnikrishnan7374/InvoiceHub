import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = React.useState('intro');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'collect', 'use', 'payment', 'sharing', 'rights', 'cookies', 'changes', 'contact'];
      const scrollPosition = window.scrollY + 120; // headerOffset (100px) + buffer (20px)

      let currentSection = sections[0];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to highlight the correct section on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Privacy Policy</h2>
          <p> Effective Date: <strong>January 1, 2026</strong></p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </section>

      <div className="privacy-plcy clearfix" style={{ padding: '40px 15px' }}>
        <div className="authPage">
          {/* <section className="top">
            <h1>Privacy Policy</h1>
            <p>
              InvoiceHub by OfficeHub Inc.
              <br />
              Effective Date: <strong>January 1, 2026</strong>
            </p>
          </section> */}
          <div className="containers">
            <div className="wrapper">
              <div className="sidebar">
                <div className="toc">
                  <h3>Contents</h3>
                  <ul>
                    <li>
                      <a
                        href="#intro"
                        className={activeSection === "intro" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "intro")}
                      >
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#collect"
                        className={activeSection === "collect" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "collect")}
                      >
                        1. Information We Collect
                      </a>
                    </li>
                    <li>
                      <a
                        href="#use"
                        className={activeSection === "use" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "use")}
                      >
                        2. How We Use Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="#payment"
                        className={activeSection === "payment" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "payment")}
                      >
                        3. Payment Information & Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sharing"
                        className={activeSection === "sharing" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "sharing")}
                      >
                        4. Information Sharing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#rights"
                        className={activeSection === "rights" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "rights")}
                      >
                        5. Data Retention & Rights
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookies"
                        className={activeSection === "cookies" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "cookies")}
                      >
                        6. Cookies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#changes"
                        className={activeSection === "changes" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "changes")}
                      >
                        7. Policy Changes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={(e) => scrollToSection(e, "contact")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <div className="card" id="intro">
                  <h2>Introduction</h2>
                  <p>OfficeHub Inc. ("OfficeHub", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect personal information when you use InvoiceHub, visit our website, or access invoices, estimates, and payment pages generated through our Service. </p>
                  <p>By using InvoiceHub, you agree to the collection and use of information in accordance with this Privacy Policy. </p>
                </div>

                <div className="card" id="collect">

                  <h2>1. Information We Collect</h2>
                  <p>To provide and improve InvoiceHub, we collect information necessary to operate our Services. </p>

                  <h3>Account Information</h3>
                  <p>When a business registers for InvoiceHub, we collect information required to create and manage the account, provide customer support, process subscriptions, and communicate with users.  </p>

                  <h3>Invoice and Payment Information</h3>
                  <p>InvoiceHub processes invoice, customer, billing, and payment-related information on behalf of the businesses using our Service. Payment transactions are securely processed by authorized third-party payment providers. </p>

                  <h3>Usage Information</h3>
                  <p>We automatically collect limited technical information, such as browser, device, IP address, and usage data, to improve security, monitor system performance, and enhance the user experience. </p>

                </div>

                <div className="card" id="use">
                  <h2>2. How We Use Information</h2>
                  <p>We use the information we collect to: </p>
                  <ul>

                    <li>Provide, operate, and maintain Invoice Hub.</li>
                    <li>Authenticate users and secure accounts.</li>
                    <li>Process subscriptions and online payments.</li>
                    <li>Deliver invoices, estimates, notifications, and other communications. </li>
                    <li>Respond to customer support requests. </li>
                    <li>Improve the performance, reliability, and security of our Services. </li>
                    <li>Detect, prevent, and investigate fraud, abuse, and unauthorized access. </li>
                    <li>Comply with applicable legal and regulatory obligations. </li>
                  </ul>
                  <div className="notice">
                    <strong>Important:</strong> We do <strong>not sell or rent</strong> your personal information.
                  </div>
                </div>

                <div className="card" id="payment">
                  <h2>3. Payment Information & Security</h2>
                  <p>InvoiceHub supports secure online payments through trusted third-party payment providers.  </p>
                  <p>OfficeHub Inc. does not store sensitive payment information such as:  </p>
                  <ul>
                    <li>Full credit or debit card numbers</li>
                    <li>Card security codes (CVV)</li>
                    <li>Bank account numbers</li>
                    <li>Bank routing numbers</li>
                  </ul>
                  <p>Payment information is processed directly by PCI DSS-compliant payment providers.  </p>
                  <p>We use commercially reasonable administrative, technical, and organizational safeguards to protect the information we process, including secure communications, access controls, monitoring, and regular security updates. While we strive to protect your information, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>
                </div>

                <div className="card" id="sharing">
                  <h2>4. Information Sharing</h2>
                  <p>We do not sell your personal information. </p>
                  <p>We may share information only when necessary to: </p>
                  <ul>
                    <li>Provide and support InvoiceHub. </li>
                    <li>Process payments through authorized payment providers. </li>
                    <li>Work with trusted service providers that assist with hosting, email delivery, customer support, and system operations. </li>
                    <li>Comply with applicable laws, regulations, or lawful requests from government authorities. </li>
                    <li>Protect the rights, property, or security of OfficeHub Inc., our users, or others.</li>
                    <li>Support a merger, acquisition, or transfer of our business. </li>
                  </ul>
                  <p>Third-party service providers may access information only as necessary to perform services on our behalf and are expected to protect it appropriately.</p>
                </div>

                <div className="card" id="rights">

                  <h2>5. Data Retention and Your Rights</h2>

                  <p>We retain information only for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements.  </p>
                  <p>Where permitted by applicable law, you may request access to, correction of, or deletion of your personal information. </p>
                  <p>If your personal information was provided by a business using InvoiceHub, you should first contact that business regarding your request. </p>
                </div>

                <div className="card" id="cookies">

                  <h2>6. Cookies</h2>

                  <p>Invoice Hub uses cookies and similar technologies to maintain secure sessions, remember user preferences, improve website performance, and understand how our Services are used. </p>
                  <p>You can control cookies through your browser settings. For additional information, please refer to our Cookie Policy. </p>


                </div>

                <div className="card" id="changes">

                  <h2>7. Changes to this Privacy Policy</h2>

                  <p>We may update this Privacy Policy from time to time. Any changes will become effective when published on the InvoiceHub website. Continued use of InvoiceHub after the effective date of the revised Privacy Policy constitutes acceptance of the updated Policy.  </p>
                  <p>If you have questions regarding this Privacy Policy, please contact: </p>
                </div>

                <div className="contact-box" id="contact">
                  <h2>Contact Us</h2>
                  <p> If you have questions regarding this Privacy Policy, please contact us.</p>
                  <p><strong>OfficeHub Inc.</strong> </p>
                  <p>📧 Email:<a href="mailto:support@invoicehub360.com">support@invoicehub360.com</a> </p>
                  {/* <p>🌐 Website:
                                                    <a href="https://www.invoicehub360.com" target="_blank">
                                                        www.invoicehub360.com
                                                    </a>
                                                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
