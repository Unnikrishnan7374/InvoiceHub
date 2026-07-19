import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FeatureItem {
  title: string;
  link: string;
  desc: string;
  ticks: string[];
  img: string;
  card1Img: string;
  card2Img: string;
  card1Pos: React.CSSProperties;
  card2Pos: React.CSSProperties;
  accentBg: string;
  glowColor: string;
  hideCard1Img?: boolean;
  hideCard2Img?: boolean;
}

const featuresListData: FeatureItem[] = [
  {
    title: "Customer & Vendor Management",
    link: "/features/customer-vendor-management",
    desc: "Invoice Hub centralizes customer and vendor management, simplifying billing, expense tracking, and financial workflows.",
    ticks: [
      "Create and maintain complete customer profiles",
      "Store billing and shipping addresses",
      "Manage contact details, notes, and payment terms"
    ],
    img: "/images/Features/3667.webp",
    card1Img: "/images/VectorImg/vec325.webp",
    card2Img: "/images/VectorImg/vec324.webp",
    card1Pos: { left: '-15px', top: '15px', width: '130px' },
    card2Pos: { right: '-20px', bottom: '15px', width: '150px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  },
  {
    title: "Estimates & Invoicing",
    link: "/features/estimates-invoicing-workflow",
    desc: "Invoice Hub simplifies the process of creating professional estimates and converting them into invoices. Businesses can manage pricing, approvals, and billing within a unified workflow.",
    ticks: [
      "Create, edit, and duplicate estimates",
      "Add products or services with pricing and tax calculations",
      "Apply discounts and additional charges"
    ],
    img: "/images/Features/blogimg-3.webp",
    card1Img: "/images/VectorImg/vec321.webp",
    card2Img: "/images/VectorImg/vec323.webp",
    card1Pos: { left: '-20px', top: '20px', width: '140px' },
    card2Pos: { right: '-15px', bottom: '10px', width: '120px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  },
  {
    title: "Payments & Payables",
    link: "/features/payments-partial-payments",
    desc: "Invoice Hub supports flexible payment tracking and vendor payment management, allowing businesses to monitor receivables and payables from a single platform.",
    ticks: [
      "Record full or partial customer payments",
      "Automatically track outstanding balances",
      "Support multiple payment methods"
    ],
    img: "/images/Features/194651.webp",
    card1Img: "/images/VectorImg/vec456.webp",
    card2Img: "/images/VectorImg/vec455.webp",
    card1Pos: { left: '-15px', top: '12px', width: '140px' },
    card2Pos: { right: '-15px', bottom: '15px', width: '110px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  },
  {
    title: "Smart Invoice Capture",
    link: "/features/smart-invoice-capture",
    desc: "Invoice Hub uses Optical Character Recognition (OCR) technology to extract invoice details automatically from uploaded vendor documents, reducing manual data entry.",
    ticks: [
      "Upload vendor invoice documents into the Bills module",
      "OCR extracts key invoice data including merchant, date, tax, and total",
      "Users review and confirm extracted data before saving"
    ],
    img: "/images/Features/65489.webp",
    card1Img: "/images/VectorImg/664456.webp",
    card2Img: "/images/VectorImg/vec323.webp",
    card1Pos: { left: '-15px', top: '20px', width: '130px' },
    card2Pos: { right: '-15px', bottom: '15px', width: '110px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  },
  {
    title: "Tax Automation",
    link: "/features/tax-automation",
    desc: "Invoice Hub supports automated tax calculation designed to handle complex US tax structures and multi-rate scenarios.",
    ticks: [
      "Configure tax rules based on ZIP codes",
      "Automatically apply state and local taxes",
      "Support multiple tax rates and combinations"
    ],
    img: "/images/Features/6668.webp",
    card1Img: "/images/VectorImg/99876.webp",
    card2Img: "/images/VectorImg/14536.webp",
    card1Pos: { left: '-10px', top: '15px', width: '120px' },
    card2Pos: { right: '-25px', bottom: '15px', width: '140px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  },
  {
    title: "Reports & Insights",
    link: "/features/reports-insights",
    desc: "Invoice Hub provides powerful reporting tools that give businesses complete visibility into financial performance and operational activity.",
    ticks: [
      "Outstanding invoices",
      "Pending and overdue bills",
      "Payment summaries"
    ],
    img: "/images/Features/34976.webp",
    card1Img: "/images/VectorImg/668898.webp",
    card2Img: "/images/VectorImg/668899.webp",
    card1Pos: { left: '-15px', top: '12px', width: '130px' },
    card2Pos: { right: '-15px', bottom: '12px', width: '130px' },
    accentBg: "rgba(37, 99, 235, 0.15)",
    glowColor: "rgba(37, 99, 235, 0.25)"
  }
];

export default function Features() {
  const [showCard1, setShowCard1] = React.useState(true);
  const [showCard2, setShowCard2] = React.useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
          will-change: transform, opacity;
        }
        .scroll-animate.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Premium illustration styles */
        .fealist {
          padding: 60px 0;
        }

        .fealist .contant {
          width: 55%;
          padding-right: 40px;
        }

        .fealist:nth-child(even) .contant {
          padding-right: 0;
          padding-left: 40px;
        }

        .fealist .ser-img {
          width: 45%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 320px;
          overflow: visible;
          padding: 0;
        }

        .feature-ill-container {
          position: relative;
          width: 100%;
          max-width: 380px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-ill-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 30px;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        /* Decorative Grid Background inside the glow block */
        .feature-ill-bg::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        .fealist:hover .feature-ill-bg {
          transform: scale(1.04) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .feature-ill-circle {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
          border: 6px solid #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .fealist:hover .feature-ill-circle {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
        }

        .feature-ill-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .feature-ill-card {
          position: absolute;
          z-index: 3;
          border-radius: 12px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          background: #ffffff;
          padding: 4px;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .feature-ill-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .feature-ill-card.card-1 {
          animation: floatEffect1 6s ease-in-out infinite alternate;
        }

        .feature-ill-card.card-2 {
          animation: floatEffect2 6s ease-in-out infinite alternate;
        }

        .fealist:hover .feature-ill-card.card-1 {
          transform: scale(1.06) translate(-5px, -5px);
        }

        .fealist:hover .feature-ill-card.card-2 {
          transform: scale(1.06) translate(5px, 5px);
        }

        @keyframes floatEffect1 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(1.5deg); }
        }

        @keyframes floatEffect2 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(10px) rotate(-1.5deg); }
        }

        /* Illustration toggles styling */
        .features-control-panel {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          padding: 20px 24px;
          margin: 0 auto 40px;
          max-width: 600px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        }
        .features-control-panel .panel-title {
          font-weight: 600;
          font-size: 16px;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .features-control-panel .panel-title .material-symbols-outlined {
          color: var(--theme-color, #2563eb);
          font-size: 20px;
        }
        .features-control-panel .toggle-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .features-control-panel .toggle-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          user-select: none;
          transition: color 0.2s ease;
        }
        .features-control-panel .toggle-label:hover {
          color: var(--theme-color, #2563eb);
        }
        .features-control-panel .toggle-label input {
          display: none;
        }
        .features-control-panel .toggle-custom-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #cbd5e1;
          border-radius: 6px;
          position: relative;
          display: inline-block;
          transition: all 0.2s ease;
          background: #ffffff;
        }
        .features-control-panel .toggle-label input:checked + .toggle-custom-checkbox {
          background-color: var(--theme-color, #2563eb);
          border-color: var(--theme-color, #2563eb);
        }
        .features-control-panel .toggle-custom-checkbox::after {
          content: "";
          position: absolute;
          display: none;
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        .features-control-panel .toggle-label input:checked + .toggle-custom-checkbox::after {
          display: block;
        }

        /* Ensure images display properly on tablets/mobiles instead of hiding */
        @media (max-width: 991px) {
          .fealist .contant {
            width: 100% !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
            float: none !important;
            margin-bottom: 30px;
          }
          .fealist .ser-img {
            width: 100% !important;
            float: none !important;
            display: flex !important;
            justify-content: center;
          }
        }
      `}</style>

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
        {/* Toggle options control panel */}


        {featuresListData.map((feat, idx) => (
          <div key={idx} className="fealist clearfix scroll-animate">
            <Link to={feat.link} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="contant">
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
                <ul className="ticklist">
                  {feat.ticks.map((tick, tIdx) => (
                    <li key={tIdx}>{tick}</li>
                  ))}
                </ul>
                <span className="readmr">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
              </div>
              <div className="ser-img">
                <div className="feature-ill-container">
                  {/* Styled glow block with modern background effects */}
                  <div
                    className="feature-ill-bg"
                    style={{
                      backgroundColor: feat.accentBg,
                      boxShadow: `0 20px 40px -15px ${feat.glowColor}, inset 0 0 40px rgba(255, 255, 255, 0.4)`
                    }}
                  />

                  {/* Main Circular Image */}
                  <div className="feature-ill-circle">
                    <img src={feat.img} alt={feat.title} />
                  </div>

                  {/* Floating Overlays */}
                  {showCard1 && feat.card1Img && !feat.hideCard1Img && (
                    <div className="feature-ill-card card-1" style={feat.card1Pos}>
                      <img src={feat.card1Img} alt="Detail view" />
                    </div>
                  )}
                  {showCard2 && feat.card2Img && !feat.hideCard2Img && (
                    <div className="feature-ill-card card-2" style={feat.card2Pos}>
                      <img src={feat.card2Img} alt="Overlay status" />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
