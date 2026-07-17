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
    <section className="faq-section" id="FaqSection">
      <div className="container-fluid">
        {/* Centered Heading */}
        <h2 className="home-section-title">Frequently Asked <span>Questions</span></h2>

        {/* End-to-End Questions List */}
        <div className="faq-list">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'faq-item-active' : ''}`}
              >
                <button
                  className="faq-item-button"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-question">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined faq-icon">
                    expand_more
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA Button */}
        <div className="faq-cta-wrapper">
          <Link
            to="/faq"
            className="btn btn-primary faq-cta-btn"
          >
            <span>View All FAQs</span>
            <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
