import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchData } from '../data/searchData';

function AccordionItem({ title, id, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // If the URL hash matches this item's ID, open it
    if (location.hash === `#${id}`) {
      setIsOpen(true);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash, id]);

  return (
    <li>
      <button 
        id={id}
        className={`accordion border-0 ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <i className="fa fa-chevron-down" aria-hidden="true" style={{ display: isOpen ? 'none' : 'inline-block' }}></i>
        <i className="fa fa-chevron-up" aria-hidden="true" style={{ display: isOpen ? 'inline-block' : 'none' }}></i>
      </button>
      <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </div>
    </li>
  );
}

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.content.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>FAQ</h2>
          <p>Empowering businesses with simple, powerful invoicing solutions.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </section>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-wrapper" style={{ position: 'relative' }}>
          <i className="fa fa-search search-icon"></i>
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            className="form-control" 
            placeholder="Search Blogs & FAQs..." 
          />
          {searchQuery && (
            <i 
              className="fa fa-times clear-icon" 
              onClick={clearSearch}
              style={{ cursor: 'pointer', position: 'absolute', right: '15px', top: '15px' }}
            ></i>
          )}
        </div>
        
        {searchResults.length > 0 && (
          <div id="searchResults" className="search-results show">
            {searchResults.map((item, idx) => (
              <div key={idx} className="search-result-item">
                <Link to={item.url}>
                  <span className="category-badge">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </Link>
              </div>
            ))}
          </div>
        )}

        {searchQuery && searchResults.length === 0 && (
          <div id="searchResults" className="search-results show">
            <div className="search-no-results">No matches found for "{searchQuery}"</div>
          </div>
        )}
      </div>

      <div className="faq clearfix">
        <div className="faqlistone">
          <h3 id="faq-what-is">What is Invoice Hub?</h3>
          <p>
            Invoice Hub is a cloud-based invoicing, billing, and expense management platform designed
            for US-based businesses. It helps manage customers, vendors, estimates, invoices, bills,
            payments, OCR automation, tax calculation, and reporting in one system.
          </p>
        </div>

        <div className="faqlistone">
          <h3 id="faq-who-can-use">Who can use Invoice Hub?</h3>
          <ul className="faqaccordion">
            <AccordionItem title="Invoice Hub is suitable for:" id="faq-who-can-use-details">
              <ul className="ticklist">
                <li>Small and medium-sized businesses</li>
                <li>Service-based companies</li>
                <li>Product-based businesses</li>
                <li>Agencies, freelancers, and growing enterprises</li>
              </ul>
            </AccordionItem>
            
            <AccordionItem title="Is Invoice Hub cloud-based?" id="faq-cloud-based">
              <p>
                Yes. Invoice Hub is a fully cloud-based platform that can be accessed securely from
                anywhere with an internet connection.
              </p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Account & Setup</h3>
          <ul className="faqaccordion">
            <AccordionItem title="How do I get started with Invoice Hub?" id="faq-get-started">
              <p>
                You can sign up for a free trial, set up your business profile, configure taxes, add
                customers and products, and start creating estimates and invoices within minutes.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I customize Invoice Hub for my business?" id="faq-customize">
              <p>
                Yes. Invoice Hub supports custom templates, branding, tax rules, payment modes,
                and master data configuration to match your business needs.
              </p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Estimates & Invoices</h3>
          <ul className="faqaccordion">
            <AccordionItem title="Can customers approve or reject estimates?" id="faq-approve-estimates">
              <p>
                Yes. Customers can approve or decline estimates. Once approved, estimates can be
                converted into invoices instantly.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I attach documents to invoices and estimates?" id="faq-attach-documents">
              <p>
                Yes. You can upload and attach contracts, receipts, or supporting files to estimates,
                invoices, and bills.
              </p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Payments</h3>
          <ul className="faqaccordion">
            <AccordionItem title="Does Invoice Hub support partial payments?" id="faq-partial-payments">
              <p>
                Yes. Invoice Hub allows both full and partial payments and automatically tracks
                outstanding balances.
              </p>
            </AccordionItem>
            <AccordionItem title="Will I receive notifications for unpaid invoices?" id="faq-unpaid-notifications">
              <p>Yes. Invoice Hub sends automated reminders for pending and overdue customer payments.</p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Bills & Vendors</h3>
          <ul className="faqaccordion">
            <AccordionItem title="Can I manage vendor bills in Invoice Hub?" id="faq-vendor-bills">
              <p>
                Yes. Invoice Hub includes a dedicated Bills module where you can add vendors, upload
                bills, track due dates, and manage payables.
              </p>
            </AccordionItem>
            <AccordionItem title="Will I get notified when a bill payment is due?" id="faq-bill-due">
              <p>
                Yes. Invoice Hub sends alerts when bill due dates approach or when payments become
                overdue.
              </p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>OCR & Automation</h3>
          <ul className="faqaccordion">
            <AccordionItem title="What is OCR invoice capture?" id="faq-ocr">
              <p>
                OCR (Optical Character Recognition) automatically extracts data from uploaded vendor
                invoices, reducing manual entry.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I edit OCR-captured data?" id="faq-ocr-edit">
              <p>Yes. All OCR-captured data can be reviewed and edited before saving.</p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Tax & Compliance</h3>
          <ul className="faqaccordion">
            <AccordionItem title="How does ZIP-code based tax calculation work?" id="faq-tax-zip">
              <p>
                Invoice Hub applies tax rules based on the customer’s ZIP code, automatically calculating
                applicable state and local taxes.
              </p>
            </AccordionItem>
            <AccordionItem title="Is Invoice Hub suitable for US tax requirements?" id="faq-us-tax">
              <p>
                Yes. Invoice Hub is built specifically for US businesses and supports complex tax
                scenarios.
              </p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Reports & Data</h3>
          <ul className="faqaccordion">
            <AccordionItem title="What kind of reports are available?" id="faq-reports">
              <p>
                Invoice Hub provides reports for invoices, payments, bills, taxes, and overall cash flow.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I export reports?" id="faq-export-reports">
              <p>Yes. Reports can be exported for accounting, auditing, or internal analysis.</p>
            </AccordionItem>
          </ul>
        </div>

        <div className="faqlistone">
          <h3>Security & Support</h3>
          <ul className="faqaccordion">
            <AccordionItem title="Is my data secure?" id="faq-security">
              <p>
                Yes. Invoice Hub uses secure cloud infrastructure, role-based access, and
                industry-standard security practices.
              </p>
            </AccordionItem>
            <AccordionItem title="How can I contact support?" id="faq-contact-support">
              <p>
                You can reach our support team via email, help desk, or in-app support. Our team is
                committed to timely and reliable assistance.
              </p>
            </AccordionItem>
            <AccordionItem title="Do you provide onboarding or training?" id="faq-onboarding">
              <p>
                Yes. We offer onboarding assistance, documentation, and guided support to help you get
                started quickly.
              </p>
            </AccordionItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
