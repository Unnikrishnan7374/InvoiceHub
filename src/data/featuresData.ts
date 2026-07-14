export const featuresData = [
  {
    slug: "customer-vendor-management",
    title: "Customer & Vendor Management",
    tagline: "Invoice Hub centralizes customer and vendor management, simplifying billing, expense tracking, and financial workflows.",
    image: "/images/blogs/blogimg-8.png",
    sections: [
      {
        title: "Customer Management",
        list: [
          "Create and maintain complete customer profiles",
          "Store billing and shipping addresses",
          "Manage contact details, notes, and payment terms",
          "Quickly select customers while creating estimates and invoices"
        ]
      },
      {
        title: "Vendor Management",
        list: [
          "Create and manage vendor profiles",
          "Maintain vendor contact information and payment terms",
          "Link vendors directly to bills and expenses",
          "Track vendor-related transactions easily"
        ]
      }
    ],
    benefits: [
      "Eliminates duplicate data entry",
      "Ensures consistent customer and vendor records",
      "Improves operational efficiency across billing workflows"
    ],
    prev: "reports-insights",
    next: "estimates-invoicing-workflow"
  },
  {
    slug: "estimates-invoicing-workflow",
    title: "Estimates & Invoicing",
    tagline: "Invoice Hub simplifies the process of creating professional estimates and converting them into invoices. Businesses can manage pricing, approvals, and billing within a unified workflow.",
    image: "/images/blogs/blogimg-13.png",
    sections: [
      {
        title: "Key Capabilities",
        list: [
          "Create, edit, and duplicate estimates",
          "Add products or services with pricing and tax calculations",
          "Apply discounts and additional charges",
          "Attach supporting documents to estimates"
        ]
      },
      {
        title: "Approval Process",
        list: [
          "Send estimates directly to customers via email",
          "Customers can approve or decline estimates",
          "Approved estimates can be converted into invoices instantly"
        ]
      }
    ],
    benefits: [
      "Faster customer approvals",
      "Clear quotation records",
      "Reduced billing disputes"
    ],
    prev: "customer-vendor-management",
    next: "payments-partial-payments"
  },
  {
    slug: "payments-partial-payments",
    title: "Payments & Payables",
    tagline: "Invoice Hub supports flexible payment tracking and vendor payment management, allowing businesses to monitor receivables and payables from a single platform.",
    image: "/images/blogs/blogimg-5.png",
    sections: [
      {
        title: "Key Capabilities",
        list: [
          "Record full or partial customer payments",
          "Automatically track outstanding balances",
          "Support multiple payment methods",
          "Maintain complete payment history for every invoice"
        ]
      }
    ],
    benefits: [
      "Clear visibility of receivables",
      "Improved cash flow management",
      "Accurate financial records"
    ],
    prev: "estimates-invoicing-workflow",
    next: "smart-invoice-capture"
  },
  {
    slug: "smart-invoice-capture",
    title: "Smart Invoice Capture",
    tagline: "Invoice Hub uses Optical Character Recognition (OCR) technology to extract invoice details automatically from uploaded vendor documents, reducing manual data entry.",
    image: "/images/blogs/blogimg-6.png",
    sections: [
      {
        title: "How It Works",
        list: [
          "Upload vendor invoice documents into the Bills module",
          "OCR extracts key invoice data including Vendor Name, Invoice Number, Invoice Date, Line Items, Tax, and Total Amounts",
          "Users review and confirm extracted data before saving"
        ]
      }
    ],
    benefits: [
      "Saves time during bill entry",
      "Reduces manual data errors",
      "Eliminates repetitive data entry tasks"
    ],
    prev: "payments-partial-payments",
    next: "tax-automation"
  },
  {
    slug: "tax-automation",
    title: "Tax Automation",
    tagline: "Invoice Hub supports automated tax calculation designed to handle complex US tax structures and multi-rate scenarios.",
    image: "/images/blogs/blogimg-7.png",
    sections: [
      {
        title: "Key Capabilities",
        list: [
          "Configure tax rules based on ZIP codes",
          "Automatically apply state and local taxes",
          "Support multiple tax rates and combinations"
        ]
      }
    ],
    benefits: [
      "Accurate tax calculation",
      "Reduced compliance risk",
      "Eliminates manual tax maintenance"
    ],
    prev: "smart-invoice-capture",
    next: "reports-insights"
  },
  {
    slug: "reports-insights",
    title: "Reports & Insights",
    tagline: "Invoice Hub provides powerful reporting tools that give businesses complete visibility into financial performance and operational activity.",
    image: "/images/blogs/blogimg-12.png",
    sections: [
      {
        title: "Available Insights",
        list: [
          "Outstanding invoices",
          "Pending and overdue bills",
          "Payment summaries",
          "Tax reports",
          "Cash flow overview"
        ]
      }
    ],
    benefits: [
      "Data-driven decision making",
      "Clear financial transparency",
      "Improved planning and forecasting"
    ],
    prev: "tax-automation",
    next: "customer-vendor-management"
  }
];
