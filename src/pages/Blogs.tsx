import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredBlogs(blogsData);
      return;
    }

    const filtered = blogsData.filter(blog => 
      blog.title.toLowerCase().includes(query.toLowerCase()) || 
      blog.preview.toLowerCase().includes(query.toLowerCase()) ||
      blog.overview.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredBlogs(blogsData);
  };

  return (
    <div>
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>Blogs</h2>
          <p>Insights, tips, and updates to help you manage billing smarter.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
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
            placeholder="Search Blogs..." 
          />
          {searchQuery && (
            <i 
              className="fa fa-times clear-icon" 
              onClick={clearSearch}
              style={{ cursor: 'pointer', position: 'absolute', right: '15px', top: '15px' }}
            ></i>
          )}
        </div>
      </div>

      <ul className="clearfix blogList" style={{ padding: '20px 15px', maxWidth: '1200px', margin: '0 auto' }}>
        {filteredBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link to={`/blogs/${blog.slug}`} className="nav-link">
              <div className="content clearfix">
                <h3>{blog.title}</h3>
                <p className="date"><i className="far fa-calendar-alt"></i> {blog.date}</p>
                <p>{blog.preview}</p>
                <span className="readmr themeBtn">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
              </div>
              <div className="blgimg">
                <img src={blog.image} className="img-fluid" alt={blog.title} />
              </div>
            </Link>
          </li>
        ))}

        {filteredBlogs.length === 0 && (
          <li style={{ textAlign: 'center', padding: '40px 0', width: '100%' }}>
            <h3>No blogs found matching "{searchQuery}"</h3>
          </li>
        )}
      </ul>
    </div>
  );
}
