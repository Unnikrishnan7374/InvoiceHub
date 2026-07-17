import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchData } from '../data/searchData';
import CtaBanner from '../components/common/CtaBanner';

export default function Support() {
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
    <div className="supportPge">
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Support</h2>
          <p>Search documentation, browse help articles, review FAQ, or contact our support team for assistance.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
      </section>

      {/* Search Section */}
      {/* <div className="search-section">
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
      </div> */}

      <div className="modern-support-container">
        <div className="modern-support-card">
          <Link to="/blogs" className="support-card-link">
            <div className="support-image-wrapper">
              <img src="/images/blog-bg.webp" loading="lazy" alt="Blog" />
            </div>
            <div className="support-overlay-box">
              <h3>Blog</h3>
              <p>Step-by-step guides and documentation to efficiently manage invoices, payments, bills, taxes, and account settings.</p>
              <span className="support-see-detail">
                View More <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="modern-support-card">
          <Link to="/faq" className="support-card-link">
            <div className="support-image-wrapper">
              <img src="/images/FAQ-bg2.webp" loading="lazy" alt="FAQ" />
            </div>
            <div className="support-overlay-box">
              <h3>FAQ</h3>
              <p>Find quick answers to commonly asked questions about estimates, invoices, payments, tax handling, compliance, and subscriptions.</p>
              <span className="support-see-detail">
                View More <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <CtaBanner />

    </div>
  );
}
