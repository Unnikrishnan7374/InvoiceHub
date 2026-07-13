import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
      'intro', 'Definitions', 'accounts', 'use-of-service',
      'TenantResponsibilities', 'CustomerData', 'ThirdPartyServices',
      'IntellectualProperty', 'Warranties', 'Liability',
      'Suspension', 'GeneralTerms', 'contact'
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
          <h2>Terms of Service</h2>
          <p> Effective Date: <strong>January 1, 2026</strong></p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
      </section>

      <div className="privacy-plcy clearfix termsPge" style={{ padding: '40px 15px', maxWidth: 'none', margin: '0 auto' }}>
        {/* <h2>Invoice HUB Terms Agreement</h2> */}
        <div className="authPage">
          <div className="containers">
            <div className="wrapper">
              <div className="sidebar">
                <div className="toc">
                  <h3>Contents</h3>
                  <ul>
                    <li>
                      <a href="#intro" className={activeSection === "intro" ? "active" : ""} onClick={(e) => scrollToSection(e, "intro")}>Introduction </a>
                    </li>
                    <li>
                      <a href="#Definitions" className={activeSection === "Definitions" ? "active" : ""} onClick={(e) => scrollToSection(e, "Definitions")}>
                        1. Definitions
                      </a>
                    </li>
                    <li>
                      <a href="#accounts" className={activeSection === "accounts" ? "active" : ""} onClick={(e) => scrollToSection(e, "accounts")}>
                        2. Accounts and Subscription </a>
                    </li>
                    <li>
                      <a href="#use-of-service" className={activeSection === "use-of-service" ? "active" : ""} onClick={(e) => scrollToSection(e, "use-of-service")} >
                        3. Subscription Fees and Billing
                      </a>
                    </li>
                    <li>
                      <a href="#TenantResponsibilities" className={activeSection === "TenantResponsibilities" ? "active" : ""} onClick={(e) => scrollToSection(e, "TenantResponsibilities")}>
                        4. Tenant Responsibilities
                      </a>
                    </li>
                    <li>
                      <a href="#CustomerData" className={activeSection === "CustomerData" ? "active" : ""} onClick={(e) => scrollToSection(e, "CustomerData")} >
                        5. Customer Data and Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#ThirdPartyServices" className={activeSection === "ThirdPartyServices" ? "active" : ""} onClick={(e) => scrollToSection(e, "ThirdPartyServices")}>
                        6. Third-Party Services
                      </a>
                    </li>
                    <li>
                      <a href="#IntellectualProperty" className={activeSection === "IntellectualProperty" ? "active" : ""} onClick={(e) => scrollToSection(e, "IntellectualProperty")}>
                        7. Intellectual Property </a>
                    </li>
                    <li>
                      <a href="#Warranties" className={activeSection === "Warranties" ? "active" : ""} onClick={(e) => scrollToSection(e, "Warranties")}>
                        8. Disclaimer of Warranties
                      </a>
                    </li>
                    <li>
                      <a href="#Liability" className={activeSection === "Liability" ? "active" : ""} onClick={(e) => scrollToSection(e, "Liability")} >
                        9. Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a href="#Suspension" className={activeSection === "Suspension" ? "active" : ""} onClick={(e) => scrollToSection(e, "Suspension")} >
                        10. Suspension and Termination
                      </a>
                    </li>
                    <li>
                      <a href="#GeneralTerms" className={activeSection === "GeneralTerms" ? "active" : ""} onClick={(e) => scrollToSection(e, "GeneralTerms")} >
                        11. General Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={(e) => scrollToSection(e, "contact")}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <div className="card" id="intro">
                  <h2>Introduction</h2>
                  <p>These Terms of Service ("Terms") govern your access to and use of InvoiceHub, a cloud-based invoicing platform operated by OfficeHub Inc. ("OfficeHub", "we", "our", or "us").</p>
                  <p>By creating an account, purchasing a subscription, or accessing or using InvoiceHub, you agree to be bound by these Terms. If you are accepting these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In such cases, "you" and "your" refer to that entity. </p>
                  <p>If you do not agree to these Terms, you must not use InvoiceHub. Your use of InvoiceHub is also subject to our Privacy Policy and any additional policies referenced in these Terms. </p>
                </div>

                <div className="card" id="Definitions">
                  <h2>1. Definitions</h2>
                  <p>For purposes of these Terms: </p>
                  <ul>
                    <li><strong>InvoiceHub</strong> means the InvoiceHub software platform, website, applications, APIs, and related services provided by OfficeHub Inc. </li>
                    <li><strong>Tenant</strong> means the business, organization, or legal entity that subscribes to InvoiceHub. </li>
                    <li><strong>Authorized User</strong> means any employee, contractor, or representative authorized by the Tenant to access InvoiceHub. </li>
                    <li><strong>End Customer</strong>  means a customer of the Tenant who receives an estimate, invoice, or payment request through InvoiceHub. End Customers are not parties to these Terms. </li>
                    <li><strong>Customer Data</strong> means all information, documents, files, invoices, estimates, contacts, payment records, and other content submitted to InvoiceHub by or on behalf of the Tenant.</li>

                  </ul>
                </div>

                <div className="card" id="accounts">
                  <h2>2. Accounts and Subscription</h2>
                  <p>To access InvoiceHub, the Tenant must create an account and provide accurate, complete, and current information. The Tenant is responsible for maintaining the confidentiality of account credentials and for all activities that occur under its account. The Tenant shall ensure that only Authorized Users access the Service and that each Authorized User complies with these Terms.</p>
                  <p>Subject to compliance with these Terms and payment of applicable subscription fees, OfficeHub Inc. grants the Tenant a limited, non-exclusive, non-transferable, revocable license to access and use InvoiceHub for its internal business operations during the active subscription period.
                    OfficeHub Inc. reserves the right to suspend or terminate accounts that violate these Terms or applicable law.</p>
                </div>

                <div className="card" id="use-of-service">
                  <h2>3. Subscription Fees and Billing</h2>
                  <p>InvoiceHub is provided on a subscription basis. By subscribing to the Service, the Tenant agrees to pay all applicable subscription fees and taxes associated with the selected subscription plan.
                    Subscription fees are billed in advance using the payment method provided by the Tenant. Unless otherwise agreed in writing, all fees are non-refundable and exclusive of applicable taxes. </p>
                  <p>Subscriptions may automatically renew at the end of each billing period unless cancelled before the renewal date. The Tenant may cancel the subscription at any time; however, cancellation will take effect at the end of the current subscription term unless otherwise required by applicable law.
                    If a payment cannot be processed or remains overdue, OfficeHub Inc. may suspend or terminate access to the Service until all outstanding amounts have been paid. </p>
                  <p>Online payments received from the Tenant's customers are governed by the <strong>Invoice Hub Payment Terms</strong> and are processed by authorized third-party payment providers.</p>
                </div>

                <div className="card" id="TenantResponsibilities">
                  <h2>4. Tenant Responsibilities</h2>
                  <p>The Tenant is responsible for its use of InvoiceHub and for ensuring that all Authorized Users comply with these Terms.</p>
                  <p>The Tenant agrees to:</p>
                  <ul>
                    <li>Maintain accurate account and billing information. </li>
                    <li>Protect account credentials and prevent unauthorized access. </li>
                    <li>Ensure that Customer Data entered into the Service is accurate and lawfully obtained. </li>
                    <li>Use the Service only for legitimate business purposes and in compliance with applicable laws and regulations. </li>
                    <li>Promptly notify OfficeHub Inc. of any suspected unauthorized access or security incident involving its account. </li>
                  </ul>
                  <h3>The Tenant shall not:</h3>
                  <ul>
                    <li>Use the Service for fraudulent, illegal, or deceptive activities. </li>
                    <li>Attempt to gain unauthorized access to the Service or another Tenant's account. </li>
                    <li>Reverse engineer, copy, modify, or distribute the Service except as permitted by applicable law. </li>
                    <li>Upload or transmit malicious software, viruses, or harmful code. </li>
                    <li>Interfere with the security, integrity, or availability of the Service. </li>
                  </ul>
                  <p>The Tenant is solely responsible for the activities of its Authorized Users and for all content submitted through its account. </p>
                </div>

                <div className="card" id="CustomerData">
                  <h2>5. Customer Data and Privacy</h2>
                  <p>The Tenant retains ownership of all Customer Data stored or processed through InvoiceHub. OfficeHub Inc. will access, process, and store Customer Data only as necessary to provide, maintain, secure, and improve the Service, or as required by applicable law.</p>
                  <p>The Tenant is responsible for ensuring that it has obtained all necessary rights, permissions, and consents required to collect, store, and process Customer Data using InvoiceHub.
                    The collection and processing of personal information are governed by the <strong>Invoice Hub Privacy Policy</strong>, which forms part of these Terms.
                    Both the Tenant and OfficeHub Inc. agree to protect confidential information received from the other party and to use such information only for purposes related to the Service.</p>
                </div>

                <div className="card" id="ThirdPartyServices">
                  <h2>6.  Third-Party Services</h2>
                  <p>InvoiceHub may integrate with third-party services, including payment providers, accounting platforms, cloud hosting providers, and email service providers.
                    These services are operated independently and are governed by their own terms and privacy policies. </p>
                  <p>OfficeHub Inc. is not responsible for the availability, performance, security, or practices of third-party services. The Tenant's use of such services is at its own discretion and subject to the applicable third-party terms. </p>
                </div>

                <div className="card" id="IntellectualProperty">
                  <h2>7.  Intellectual Property</h2>
                  <p>InvoiceHub, including its software, website, applications, documentation, trademarks, logos, designs, and all related intellectual property, is owned by or licensed to OfficeHub Inc. and is protected by applicable intellectual property laws.</p>
                  <p>Except for the limited right to use the Service under these Terms, no ownership rights are granted to the Tenant.
                    Any feedback, suggestions, or ideas provided by the Tenant regarding InvoiceHub may be used by OfficeHub Inc. without restriction or obligation to provide compensation.</p>
                </div>

                <div className="card" id="Warranties">
                  <h2>8. Disclaimer of Warranties</h2>
                  <p>InvoiceHub is provided on an <strong>"AS IS" and "AS AVAILABLE"</strong> basis.</p>
                  <p>To the fullest extent permitted by applicable law, OfficeHub Inc. disclaims all warranties, whether express, implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability.</p>
                  <p>While OfficeHub Inc. uses commercially reasonable efforts to maintain the reliability and security of the Service, we do not guarantee that the Service will be uninterrupted, error-free, or suitable for every business requirement.</p>
                </div>

                <div className="card" id="Liability">
                  <h2>9. Limitation of Liability</h2>
                  <p>To the maximum extent permitted by applicable law, OfficeHub Inc. shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from or relating to the use of, or inability to use, Invoice Hub. </p>
                  <p>This includes, but is not limited to:</p>
                  <ul>
                    <li>Loss of profits or revenue;  </li>
                    <li>Loss of business opportunities;  </li>
                    <li>Loss or corruption of data;  </li>
                    <li>Business interruption; or  </li>
                    <li>Claims arising from third-party services.  </li>
                  </ul>
                  <p>Except where prohibited by law, OfficeHub Inc.'s total liability under these Terms shall not exceed the subscription fees paid by the Tenant during the six (6) months preceding the event giving rise to the claim.</p>
                </div>

                <div className="card" id="Suspension">
                  <h2>10. Suspension and Termination</h2>
                  <p>OfficeHub Inc. may suspend or terminate the Tenant's access to InvoiceHub if: </p>
                  <ul>
                    <li>Subscription fees remain unpaid;   </li>
                    <li>The Tenant materially breaches these Terms; </li>
                    <li>The Service is used for unlawful or fraudulent activities;  </li>
                    <li>Continued access poses a security risk; or  </li>
                    <li>Suspension or termination is required by applicable law.</li>
                  </ul>
                  <p>The Tenant may cancel its subscription at any time. Cancellation does not relieve the Tenant of any outstanding payment obligations incurred before the effective date of termination.
                    Upon termination, OfficeHub Inc. may retain or delete Customer Data in accordance with the InvoiceHub Privacy Policy and applicable legal requirements.</p>
                </div>
                <div className="card" id="GeneralTerms">
                  <h2>11. General Terms</h2>
                  <p>These Terms, together with the InvoiceHub Privacy Policy and any applicable Subscription Agreement or Order Form, constitute the entire agreement between the Tenant and OfficeHub Inc. regarding the use of InvoiceHub.
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.  </p>
                  <p>OfficeHub Inc. may update these Terms from time to time. Any material changes will be posted on the InvoiceHub website or communicated through the Service. Continued use of InvoiceHub after such changes become effective constitutes acceptance of the revised Terms.
                    These Terms shall be governed by the laws of the <strong>State of Washington, United States</strong>, without regard to its conflict of law principles. </p>
                </div>

                <div className="contact-box" id="contact">
                  <h2>Contact Us</h2>
                  <p>If you have any questions regarding these Terms of Service, please contact: </p>
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
