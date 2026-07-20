import React, { useState, useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link, useLocation } from 'react-router-dom';
import faqsData from '../data/faqsData.json';

function AccordionItem({ title, id, isOpenByDefault = false, children }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const location = useLocation();


  // text
  useEffect(() => {
    if (isOpenByDefault) {
      setIsOpen(true);
    }
  }, [isOpenByDefault]);

  useEffect(() => {
    if (location.hash === `#${id}`) {
      setIsOpen(true);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [location.hash, id]);

  return (
    <li className="faq-accordion-item" style={{
      marginBottom: '15px',
      listStyle: 'none',
      backgroundColor: isOpen ? '#e6f2ff' : '#f3f8ff',
      borderRadius: '12px',
      border: '1px solid #d0e5ff',
      boxShadow: isOpen ? '0 10px 25px rgba(26, 115, 232, 0.08)' : '0 4px 12px rgba(26, 115, 232, 0.02)',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      <button
        id={id}
        className="accordion border-0"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '20px 24px',
          backgroundColor: isOpen ? '#e6f2ff' : '#f3f8ff',
          borderBottom: isOpen ? '1px solid #d0e5ff' : 'none',
          color: isOpen ? '#1a73e8' : '#2c3e50',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'left',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.2s ease'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className="material-symbols-outlined"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            color: '#1a73e8'
          }}
        >
          expand_more
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: '#fff'
        }}
      >
        <div className="faq-accordion-panel-content" style={{ padding: '20px 24px', color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>
    </li>
  );
}

export default function Faq() {
  useDocumentTitle('FAQ');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-wrapper')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = ['All', ...faqsData.map(item => item.category)];

  // Get matching items for search suggestion dropdown
  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return [];
    const suggestions: any[] = [];
    faqsData.forEach(cat => {
      cat.faqs.forEach(faq => {
        if (
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          suggestions.push({
            ...faq,
            category: cat.category
          });
        }
      });
    });
    return suggestions;
  };

  const suggestions = getSearchSuggestions();

  // Get filtered FAQs to display on the page
  const getFilteredFaqs = () => {
    return faqsData.map(cat => {
      const filteredFaqs = cat.faqs.filter(faq => {
        const matchesQuery = !searchQuery.trim() ||
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesQuery;
      });

      return {
        ...cat,
        faqs: filteredFaqs
      };
    }).filter(cat => {
      const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
      return matchesCategory && cat.faqs.length > 0;
    });
  };

  const filteredData = getFilteredFaqs();

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return <>{text}</>;
    const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} style={{ backgroundColor: 'yellow', color: '#000', padding: '0 2px', borderRadius: '2px' }}>{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
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
      <div className="search-section" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)', borderRadius: '12px' }}>
        <div className="search-wrapper" style={{ position: 'relative' }}>
          <i className="fa fa-search search-icon"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => {
              if (searchQuery.trim()) {
                setShowDropdown(true);
              }
            }}
            className="form-control"
            placeholder="Search FAQs..."
          />
          {searchQuery && (
            <i
              className="fa fa-times clear-icon"
              onClick={() => {
                setSearchQuery('');
                setShowDropdown(false);
              }}
              style={{ cursor: 'pointer', position: 'absolute', right: '15px', top: '15px' }}
            ></i>
          )}

          {/* Search Suggestions Dropdown */}
          {searchQuery.trim() && showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                zIndex: 1000,
                maxHeight: '350px',
                overflowY: 'auto',
                marginTop: '10px',
                padding: '5px 0'
              }}
            >
              {suggestions.length > 0 ? (
                suggestions.map((faq) => (
                  <a
                    key={faq.id}
                    href={`/faq#${faq.id}`}
                    onClick={() => setShowDropdown(false)}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(26, 115, 232, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#1a73e8' }}>
                        {highlightText(faq.question, searchQuery)}
                      </h4>
                      <span style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(26, 115, 232, 0.08)',
                        color: '#1a73e8',
                        fontWeight: '500'
                      }}>
                        {faq.category}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {highlightText(faq.answer, searchQuery)}
                    </p>
                  </a>
                ))
              ) : (
                <div style={{ padding: '15px 20px', textAlign: 'center', color: '#666', fontSize: '14px' }}>
                  No results found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Categories & Accordions Container */}
      <div className="faq-layout-container" style={{ width: '95%', margin: '30px auto', padding: '0 15px', display: 'flex', gap: '30px', alignItems: 'flex-start' }}>

        {/* Left Sidebar for Categories */}
        <div className="faq-sidebar" style={{
          width: '280px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          position: 'sticky',
          top: '20px',
          height: 'fit-content',
          backgroundColor: '#fff',
          padding: '20px 15px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
          border: '1px solid #edf2f7'
        }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '700',
            color: '#718096',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '15px',
            paddingLeft: '12px'
          }}>
            FAQ Categories
          </h4>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: isActive ? 'rgba(26, 115, 232, 0.08)' : 'transparent',
                  color: isActive ? '#1a73e8' : '#4a5568',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#f7fafc';
                    e.currentTarget.style.color = '#1a73e8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#4a5568';
                  }
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: isActive ? '#1a73e8' : '#a0aec0' }}>
                  {cat === 'All' ? 'grid_view' : 'folder'}
                </span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Right Content Area for Accordions */}
        <div className="faq-main-content" style={{ flex: 1, minWidth: 0 }}>
          {filteredData.length > 0 ? (
            filteredData.map((catGroup) => (
              <div key={catGroup.category} style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#2d3748',
                  marginBottom: '20px',
                  borderBottom: '2px solid #edf2f7',
                  paddingBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#1a73e8', fontSize: '22px' }}>topic</span>
                  {catGroup.category}
                </h3>
                <ul style={{ padding: 0, margin: 0 }}>
                  {catGroup.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      id={faq.id}
                      title={highlightText(faq.question, searchQuery)}
                      isOpenByDefault={!!searchQuery.trim()}
                    >
                      <p style={{ margin: 0 }}>{highlightText(faq.answer, searchQuery)}</p>
                    </AccordionItem>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#718096' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', marginBottom: '10px', color: '#cbd5e0' }}>
                search_off
              </span>
              <h3>No FAQ matches found</h3>
              <p style={{ fontSize: '14px', margin: '5px 0 0' }}>Try adjusting your keywords or selecting another category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
