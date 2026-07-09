// ============================================================
//  SEARCH DATA — Single Place to Edit for Blogs & FAQs
//  Update this file to add/edit/remove search entries.
//  Blogs use "category": "Blog"  → url points to the blog page
//  FAQs  use "category": "FAQ"   → url points to faq.html#anchor
// ============================================================

const searchData = [

    // ─────────────────────────────────────────────────────────
    // BLOGS  (add / edit blog entries here)
    // ─────────────────────────────────────────────────────────
    {
        title: "Getting Started with Invoice Hub",
        content: "Managing invoices, bills, taxes, and payments doesn’t need to be complicated. Invoice Hub simplifies financial workflows by bringing estimates, invoices, vendor bills, OCR automation, and tax configuration",
        url: "blogs/gettingstarted.html",
        category: "Blog",
        date: "January 10, 2025"
    },
    {
        title: "How to Manage Customers and Vendors",
        content: "Accurate customer and vendor management is the backbone of efficient financial operations. Disorganized records, missing compliance documents",
        url: "blogs/managecustomersandvendors.html",
        category: "Blog",
        date: "January 20, 2025"
    },
    {
        title: "Compliance Management",
        content: "Vendor compliance in the United States isn’t optional — it’s mandatory. From collecting W-9 forms to determining 1099 eligibility and tracking insurance documents",
        url: "blogs/compliancemanagement.html",
        category: "Blog",
        date: "February 5, 2025"
    },
    {
        title: "Creating Estimates and Managing Approvals",
        content: "In any business, the journey from proposal to payment begins with a clear estimate. Without structured pricing and formal approval",
        url: "blogs/estimates_managingapprovals.html",
        category: "Blog",
        date: "February 15, 2025"
    },
    {
        title: "Creating and Sending Professional Invoices",
        content: "Creating accurate and professional invoices is essential for maintaining strong customer relationships and ensuring timely payments",
        url: "blogs/creatingandsending.html",
        category: "Blog",
        date: "March 3, 2025"
    },
    {
        title: "Smart Bills & OCR Automation",
        content: "Managing vendor bills manually can slow down operations and increase the risk of costly errors. From entering invoice details to tracking due dates and recording payments",
        url: "blogs/smartbills_OCRautomation.html",
        category: "Blog",
        date: "March 18, 2025"
    },
    {
        title: "Tax Automation",
        content: "Navigating sales tax regulations in the United States can be complex. Tax rates vary not only by state but also by county, city, and special jurisdictions.",
        url: "blogs/zipcode_taxautomation.html",
        category: "Blog",
        date: "April 2, 2025"
    },
    {
        title: "Custom Templates & Branding",
        content: "Every document your business sends represents your brand. Estimates, invoices, and financial communications are not just transactional records",
        url: "blogs/customtemplates.html",
        category: "Blog",
        date: "April 20, 2025"
    },
    {
        title: "Reports & Dashboards",
        content: "Accurate financial visibility is essential for sustainable business growth. Without structured reporting, businesses struggle to track receivables",
        url: "blogs/reports_dashboards.html",
        category: "Blog",
        date: "May 8, 2025"
    },

    // ─────────────────────────────────────────────────────────
    // FAQs — General  (add / edit FAQ entries here)
    // ─────────────────────────────────────────────────────────
    {
        title: "What is Invoice Hub?",
        content: "Invoice Hub is a cloud-based invoicing, billing, and expense management platform designed for US-based businesses. It helps manage customers, vendors, estimates, invoices, bills, payments, OCR automation, tax calculation, and reporting in one system.",
        url: "faq.html#faq-what-is",
        category: "FAQ"
    },
    {
        title: "Who can use Invoice Hub?",
        content: "Invoice Hub is suitable for: Small and medium-sized businesses, Service-based companies, Product-based businesses, Agencies, freelancers, and growing enterprises.",
        url: "faq.html#faq-who-can-use",
        category: "FAQ"
    },
    {
        title: "Is Invoice Hub cloud-based?",
        content: "Yes. Invoice Hub is a fully cloud-based platform that can be accessed securely from anywhere with an internet connection.",
        url: "faq.html#faq-cloud-based",
        category: "FAQ"
    },

    // FAQs — Account & Setup
    {
        title: "How do I get started with Invoice Hub?",
        content: "You can sign up for a free trial, set up your business profile, configure taxes, add customers and products, and start creating estimates and invoices within minutes.",
        url: "faq.html#faq-get-started",
        category: "FAQ"
    },
    {
        title: "Can I customize Invoice Hub for my business?",
        content: "Yes. Invoice Hub supports custom templates, branding, tax rules, payment modes, and master data configuration to match your business needs.",
        url: "faq.html#faq-customize",
        category: "FAQ"
    },

    // FAQs — Estimates & Invoices
    {
        title: "Can customers approve or reject estimates?",
        content: "Yes. Customers can approve or decline estimates. Once approved, estimates can be converted into invoices instantly.",
        url: "faq.html#faq-approve-estimates",
        category: "FAQ"
    },
    {
        title: "Can I attach documents to invoices and estimates?",
        content: "Yes. You can upload and attach contracts, receipts, or supporting files to estimates, invoices, and bills.",
        url: "faq.html#faq-attach-documents",
        category: "FAQ"
    },

    // FAQs — Payments
    {
        title: "Does Invoice Hub support partial payments?",
        content: "Yes. Invoice Hub allows both full and partial payments and automatically tracks outstanding balances.",
        url: "faq.html#faq-partial-payments",
        category: "FAQ"
    },
    {
        title: "Will I receive notifications for unpaid invoices?",
        content: "Yes. Invoice Hub sends automated reminders for pending and overdue customer payments.",
        url: "faq.html#faq-unpaid-notifications",
        category: "FAQ"
    },

    // FAQs — Bills & Vendors
    {
        title: "Can I manage vendor bills in Invoice Hub?",
        content: "Yes. Invoice Hub includes a dedicated Bills module where you can add vendors, upload bills, track due dates, and manage payables.",
        url: "faq.html#faq-vendor-bills",
        category: "FAQ"
    },
    {
        title: "Will I get notified when a bill payment is due?",
        content: "Yes. Invoice Hub sends alerts when bill due dates approach or when payments become overdue.",
        url: "faq.html#faq-bill-due",
        category: "FAQ"
    },

    // FAQs — OCR & Automation
    {
        title: "What is OCR invoice capture?",
        content: "OCR (Optical Character Recognition) automatically extracts data from uploaded vendor invoices, reducing manual entry.",
        url: "faq.html#faq-ocr",
        category: "FAQ"
    },
    {
        title: "Can I edit OCR-captured data?",
        content: "Yes. All OCR-captured data can be reviewed and edited before saving.",
        url: "faq.html#faq-ocr",
        category: "FAQ"
    },

    // FAQs — Tax & Compliance
    {
        title: "How does ZIP-code based tax calculation work?",
        content: "Invoice Hub applies tax rules based on the customer's ZIP code, automatically calculating applicable state and local taxes.",
        url: "faq.html#faq-tax-zip",
        category: "FAQ"
    },
    {
        title: "Is Invoice Hub suitable for US tax requirements?",
        content: "Yes. Invoice Hub is built specifically for US businesses and supports complex tax scenarios.",
        url: "faq.html#faq-us-tax",
        category: "FAQ"
    },

    // FAQs — Reports & Data
    {
        title: "What kind of reports are available?",
        content: "Invoice Hub provides reports for invoices, payments, bills, taxes, and overall cash flow.",
        url: "faq.html#faq-reports",
        category: "FAQ"
    },
    {
        title: "Can I export reports?",
        content: "Yes. Reports can be exported for accounting, auditing, or internal analysis.",
        url: "faq.html#faq-export-reports",
        category: "FAQ"
    },

    // FAQs — Security & Support
    {
        title: "Is my data secure?",
        content: "Yes. Invoice Hub uses secure cloud infrastructure, role-based access, and industry-standard security practices.",
        url: "faq.html#faq-security",
        category: "FAQ"
    },
    {
        title: "How can I contact support?",
        content: "You can reach our support team via email, help desk, or in-app support. Our team is committed to timely and reliable assistance.",
        url: "faq.html#faq-contact-support",
        category: "FAQ"
    },
    {
        title: "Do you provide onboarding or training?",
        content: "Yes. We offer onboarding assistance, documentation, and guided support to help you get started quickly.",
        url: "faq.html#faq-contact-support",
        category: "FAQ"
    }
];
