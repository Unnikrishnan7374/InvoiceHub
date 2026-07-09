import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Features</h2>
          <p>Explore the features that make Invoice HUB the perfect billing and management suite.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/features">Features</Link></li>
          </ul>
        </div>
      </section>

      <section className="innerFeatures">
        <div className="fealist clearfix">
          <Link to="/features/customer-vendor-management">
            <div className="contant">
              <h4>Customer & Vendor Management</h4>
              <p>Invoice Hub centralizes customer and vendor management, simplifying billing, expense tracking, and financial workflows.</p>
              <ul className="ticklist">
                <li>Create and maintain complete customer profiles</li>
                <li>Store billing and shipping addresses</li>
                <li>Manage contact details, notes, and payment terms</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/customermgmt.png" className="img-fluid" alt="Customer & Vendor Management" />
            </div>
          </Link>
        </div>

        <div className="fealist clearfix">
          <Link to="/features/estimates-invoicing-workflow">
            <div className="contant">
              <h4>Estimates & Invoicing</h4>
              <p>Invoice Hub simplifies the process of creating professional estimates and converting them into invoices. Businesses can manage pricing, approvals, and billing within a unified workflow.</p>
              <ul className="ticklist">
                <li>Create, edit, and duplicate estimates</li>
                <li>Add products or services with pricing and tax calculations</li>
                <li>Apply discounts and additional charges</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/step-4.png" className="img-fluid" alt="Estimates & Invoicing" />
            </div>
          </Link>
        </div>

        <div className="fealist clearfix">
          <Link to="/features/payments-partial-payments">
            <div className="contant">
              <h4>Payments & Payables</h4>
              <p>Invoice Hub supports flexible payment tracking and vendor payment management, allowing businesses to monitor receivables and payables from a single platform.</p>
              <ul className="ticklist">
                <li>Record full or partial customer payments</li>
                <li>Automatically track outstanding balances</li>
                <li>Support multiple payment methods</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/paymentsFea.png" className="img-fluid" alt="Payments & Payables" />
            </div>
          </Link>
        </div>

        <div className="fealist clearfix">
          <Link to="/features/smart-invoice-capture">
            <div className="contant">
              <h4>Smart Invoice Capture</h4>
              <p>Invoice Hub uses Optical Character Recognition (OCR) technology to extract invoice details automatically from uploaded vendor documents, reducing manual data entry.</p>
              <ul className="ticklist">
                <li>Upload vendor invoice documents into the Bills module</li>
                <li>OCR extracts key invoice data including merchant, date, tax, and total</li>
                <li>Users review and confirm extracted data before saving</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/OCRInvoice.png" className="img-fluid" alt="Smart Invoice Capture" />
            </div>
          </Link>
        </div>

        <div className="fealist clearfix">
          <Link to="/features/tax-automation">
            <div className="contant">
              <h4>Tax Automation</h4>
              <p>Invoice Hub supports automated tax calculation designed to handle complex US tax structures and multi-rate scenarios.</p>
              <ul className="ticklist">
                <li>Configure tax rules based on ZIP codes</li>
                <li>Automatically apply state and local taxes</li>
                <li>Support multiple tax rates and combinations</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/ZIPCode_Automation.png" className="img-fluid" alt="Tax Automation" />
            </div>
          </Link>
        </div>

        <div className="fealist clearfix">
          <Link to="/features/reports-insights">
            <div className="contant">
              <h4>Reports & Insights</h4>
              <p>Invoice Hub provides powerful reporting tools that give businesses complete visibility into financial performance and operational activity.</p>
              <ul className="ticklist">
                <li>Outstanding invoices</li>
                <li>Pending and overdue bills</li>
                <li>Payment summaries</li>
              </ul>
              <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="ser-img">
              <img src="images/blog-1.jpg" className="img-fluid" alt="Reports & Insights" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
