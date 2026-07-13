import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchData } from '../data/searchData';

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

      <ul className="clearfix blogList">
        <li>
          <Link to="/blogs" className="nav-link">
            <div className="content clearfix">
              <h3>Blogs</h3>
              <p>Step-by-step guides and documentation to efficiently manage invoices, payments, bills, taxes, and account settings.</p>
              <span className="readmr themeBtn">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="blgimg">
              <img src="images/blog-4.jpg" className="img-fluid" alt="Blogs" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/faq" className="nav-link">
            <div className="content clearfix">
              <h3>FAQ</h3>
              <p>Find quick answers to commonly asked questions about estimates, invoices, payments, tax handling, compliance, and subscriptions.</p>
              <span className="readmr themeBtn">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
            </div>
            <div className="blgimg">
              <img src="images/menuImgsupport.png" className="img-fluid" alt="FAQ" />
            </div>
          </Link>
        </li>
      </ul>

      <section className="bottom-cta clearfix">
        <div className="container">
          <img src="images/bg_red.svg" className="img-fluid svgimg" alt="" />
          <div className="rtcntnt">
            <div className="logoimg">
              <img src="images/Logoimg.png" className="img-fluid" alt="Logo" />
            </div>
            <h4>Ready to streamline your business? <Link to="/contact" className="themeBtn btn-animate">Contact</Link></h4>
          </div>
        </div>
      </section>
    </div>
  );
}
