import React from 'react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = React.useState('intro');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  React.useEffect(() => {
    const sections = [
      'intro',
      'what-are-cookies',
      'how-we-use-cookies',
      'types-of-cookies',
      'managing-cookies',
      'changes-to-policy',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Cookie Policy</h2>
          <p>Effective Date: <strong>January 1, 2026</strong></p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </section>

      <div className="privacy-plcy clearfix" style={{ padding: '40px 15px' }}>
        <div className="authPage">
          <div className="containers">
            <div className="wrapper">
              <div className="sidebar">
                <div className="toc">
                  <h3>Contents</h3>
                  <ul>
                    <li>
                      <a href="#intro" className={activeSection === "intro" ? "active" : ""} onClick={(e) => scrollToSection(e, "intro")}>
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#what-are-cookies" className={activeSection === "what-are-cookies" ? "active" : ""} onClick={(e) => scrollToSection(e, "what-are-cookies")}>
                        1. What Are Cookies?
                      </a>
                    </li>
                    <li>
                      <a href="#how-we-use-cookies" className={activeSection === "how-we-use-cookies" ? "active" : ""} onClick={(e) => scrollToSection(e, "how-we-use-cookies")}>
                        2. How We Use Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#types-of-cookies" className={activeSection === "types-of-cookies" ? "active" : ""} onClick={(e) => scrollToSection(e, "types-of-cookies")}>
                        3. Types of Cookies We Use
                      </a>
                    </li>
                    <li>
                      <a href="#managing-cookies" className={activeSection === "managing-cookies" ? "active" : ""} onClick={(e) => scrollToSection(e, "managing-cookies")}>
                        4. Managing Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#changes-to-policy" className={activeSection === "changes-to-policy" ? "active" : ""} onClick={(e) => scrollToSection(e, "changes-to-policy")}>
                        5. Changes to this Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={(e) => scrollToSection(e, "contact")}>
                        6. Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="content">
                <div className="card" id="intro">
                  <h2>Introduction</h2>
                  <p>OfficeHub Inc. ("OfficeHub", "we", "our", or "us") uses cookies and similar technologies to provide, secure, and improve InvoiceHub.</p>
                  <p>This Cookie Policy explains how we use these technologies when you visit our website or use the InvoiceHub Service. It should be read together with our Privacy Policy.</p>
                </div>

                <div className="card" id="what-are-cookies">
                  <h2>1. What Are Cookies?</h2>
                  <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, maintain secure sessions, and improve your overall experience.</p>
                  <p>InvoiceHub also uses browser technologies such as Local Storage and Session Storage to temporarily store information that improves performance and supports certain application features.</p>
                </div>

                <div className="card" id="how-we-use-cookies">
                  <h2>2. How We Use Cookies</h2>
                  <p>We use cookies and browser storage to:</p>
                  <ul>
                    <li>Authenticate users and maintain secure login sessions.</li>
                    <li>Remember user preferences and settings.</li>
                    <li>Support onboarding and application functionality.</li>
                    <li>Improve performance and user experience.</li>
                    <li>Protect against fraud, unauthorized access, and other security threats.</li>
                  </ul>
                  <p>We do not use cookies to sell your personal information.</p>
                </div>

                <div className="card" id="types-of-cookies">
                  <h2>3. Types of Cookies We Use</h2>
                  <h3>Essential Cookies</h3>
                  <p>These cookies are required for InvoiceHub to function properly. They help authenticate users, maintain secure sessions, and provide access to protected areas of the application.</p>

                  <h3>Functional Cookies and Browser Storage</h3>
                  <p>These technologies remember user preferences, improve navigation, and support features such as onboarding progress, business context, and application settings. Disabling them may affect certain functionality but will not prevent access to the Service.</p>

                  <h3>Third-Party Cookies</h3>
                  <p>InvoiceHub integrates with trusted third-party services that may place cookies on your device, including:</p>
                  <ul>
                    <li><strong>Stripe</strong> – Secure payment processing and fraud prevention.</li>
                    <li><strong>Google</strong> – User authentication through Google Sign-In.</li>
                  </ul>
                  <p>These third parties manage their own cookies in accordance with their respective privacy policies.</p>
                </div>

                <div className="card" id="managing-cookies">
                  <h2>4. Managing Cookies</h2>
                  <p>Most web browsers allow you to:</p>
                  <ul>
                    <li>View and delete stored cookies.</li>
                    <li>Block or restrict cookies.</li>
                    <li>Clear browser storage, including Local Storage and Session Storage.</li>
                  </ul>
                  <p>Please note that disabling cookies or browser storage may affect certain features of InvoiceHub, including authentication, saved preferences, and application functionality.</p>
                </div>

                <div className="card" id="changes-to-policy">
                  <h2>5. Changes to this Cookie Policy</h2>
                  <p>We may update this Cookie Policy from time to time to reflect changes in our technology, business practices, or legal requirements. Any updates will become effective when published on the InvoiceHub website.</p>
                </div>

                <div className="contact-box" id="contact">
                  <h2>6. Contact Us</h2>
                  <p>If you have any questions about this Cookie Policy, please contact us:</p>
                  <p><strong>OfficeHub Inc.</strong></p>
                  <p>📧 Email: <a href="mailto:support@invoicehub360.com">support@invoicehub360.com</a></p>
                  {/* <p>🌐 Website:
                    <a href="https://www.invoicehub360.com" target="_blank" rel="noopener noreferrer">
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
