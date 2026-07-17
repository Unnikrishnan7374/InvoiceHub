import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import faqsData from '../data/faqsData.json';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqSectionProps {
  className?: string;
}

export default function FaqSection({ className }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Flatten and get first 6 FAQs
  const faqList: FAQItem[] = faqsData.flatMap(cat =>
    cat.faqs.map(faq => ({ ...faq, category: cat.category }))
  ).slice(0, 6);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`faq-section ${className || ''}`} style={{
      padding: '30px 50px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @media (max-width: 991px) {
          .faq-section {
            padding: 60px 40px !important;
          }
        }
        @media (max-width: 576px) {
          .faq-section {
            padding: 50px 20px !important;
          }
        }
        .faq-item-button:hover {
          background-color: #f8faff !important;
          border-color: #cbdcf7 !important;
        }
        .faq-item-active {
          background-color: #f3f8ff !important;
          border-color: #1a73e8 !important;
          box-shadow: 0 10px 25px rgba(26, 115, 232, 0.05);
        }
      `}</style>
      <div className="container-fluid">
        {/* Centered Heading */}

        <h2 className="home-section-title">Frequently Asked <span>Questions</span></h2>

        {/* End-to-End Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'faq-item-active' : ''}`}
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <button
                  className="faq-item-button"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '22px 28px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: isOpen ? 'var(--theme-color, #1a73e8)' : '#1e293b',
                    paddingRight: '15px'
                  }}>
                    {faq.question}
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: isOpen ? 'var(--theme-color, #1a73e8)' : '#64748b',
                      flexShrink: 0
                    }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{
                    padding: '0 28px 22px 28px',
                    color: '#475569',
                    fontSize: '20px',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(226, 232, 240, 0.6)'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/faq"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              backgroundColor: 'var(--theme-color, #1a73e8)',
              color: '#fff',
              border: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(26, 115, 232, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(26, 115, 232, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(26, 115, 232, 0.3)';
            }}
          >
            <span>View All FAQs</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
