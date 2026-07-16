import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogsData.json';
import BlogSearch from '../components/BlogSearch';

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  const handleSearchChange = (query: string) => {
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
          <h2>Blogs</h2>
          <p>Insights, tips, and updates to help you manage billing smarter.</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>
      </section>

      {/* Search Section */}
      <BlogSearch
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        placeholder="Search Blogs..."
        style={{ margin: '15px auto', width: '95%' }}
      />

      <ul className="clearfix blogList" style={{ padding: '20px 15px', maxWidth: '1200px', margin: '0 auto' }}>
        {filteredBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link to={`/blogs/${blog.slug}`} className="nav-link">
              <div className="content clearfix">
                <h3>{highlightText(blog.title, searchQuery)}</h3>
                <p className="date"><i className="far fa-calendar-alt"></i> {blog.date}</p>
                <p>{highlightText(blog.preview, searchQuery)}</p>
                <span className="readmr themeBtn">Read more <i className="material-symbols-outlined">arrow_forward</i></span>
              </div>
              <div className="blgimg">
                <img src={blog.image} className="img-fluid" loading="lazy" alt={blog.title} />
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
