import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogsData.json';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  isCompact?: boolean;
  isSmall?: boolean;
  onSelectBlog?: () => void;
  style?: React.CSSProperties;
}

export default function BlogSearch({
  searchQuery,
  onSearchChange,
  placeholder = "Search Blogs...",
  isCompact = false,
  isSmall = false,
  onSelectBlog,
  style
}: BlogSearchProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchChange(value);
    setShowDropdown(!!value.trim());
  };

  const handleClear = () => {
    onSearchChange('');
    setShowDropdown(false);
  };

  const filteredBlogs = blogsData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    blog.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.overview.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  if (isCompact) {
    return (
      <div 
        ref={wrapperRef} 
        className="breadcrumb-search-wrapper" 
        style={{ 
          position: 'relative', 
          width: '100%',
          display: 'flex', 
          alignItems: 'center',
          ...style
        }}
      >
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            if (searchQuery.trim()) {
              setShowDropdown(true);
            }
          }}
          placeholder={placeholder} 
          style={{
            width: '100%',
            padding: '6px 35px 6px 35px',
            borderRadius: '20px',
            border: '1px solid #ced4da',
            fontSize: '14px',
            outline: 'none',
            height: '32px',
            color: '#333'
          }}
        />
        <i className="fa fa-search" style={{ position: 'absolute', left: '12px', top: '9px', color: '#888', fontSize: '14px' }}></i>
        {searchQuery && (
          <span 
            className="fa fa-times" 
            onClick={handleClear}
            style={{ 
              cursor: 'pointer', 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: '16px',
              zIndex: 10
            }}
          ></span>
        )}

        {/* Suggestions Dropdown for Compact Search */}
        {searchQuery.trim() && showDropdown && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              width: '350px',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              zIndex: 1000,
              maxHeight: '300px',
              overflowY: 'auto',
              marginTop: '5px',
              padding: '5px 0'
            }}
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Link 
                  key={blog.slug} 
                  to={`/blogs/${blog.slug}`}
                  onClick={() => {
                    setShowDropdown(false);
                    if (onSelectBlog) onSelectBlog();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 15px',
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
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={{
                      width: '45px',
                      height: '35px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }} 
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#1a73e8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {highlightText(blog.title, searchQuery)}
                    </h4>
                    <p style={{ margin: '1px 0 0', fontSize: '11px', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {highlightText(blog.preview, searchQuery)}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ padding: '15px 20px', textAlign: 'center', color: '#666', fontSize: '13px' }}>
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={wrapperRef}
      className="search-section" 
      style={{ 
        boxShadow: isSmall ? '0 4px 12px rgba(0,0,0,0.05)' : '0 10px 30px rgba(0,0,0,0.06)', 
        borderRadius: isSmall ? '8px' : '12px',
        border: isSmall ? '1px solid #ced4da' : 'none',
        ...style 
      }}
    >
      <div className="search-wrapper" style={{ position: 'relative' }}>
        <i 
          className="fa fa-search search-icon"
          style={isSmall ? {
            height: '38px',
            lineHeight: '38px',
            width: '40px',
            fontSize: '15px',
            top: '0px',
            borderRadius: '0px 8px 8px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
          } : undefined}
        ></i>
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            if (searchQuery.trim()) {
              setShowDropdown(true);
            }
          }}
          className="form-control" 
          placeholder={placeholder} 
          style={isSmall ? {
            height: '38px',
            fontSize: '14px',
            padding: '5px 45px 5px 15px',
            borderRadius: '8px 0 0 8px',
            border: 'none'
          } : undefined}
        />
        {searchQuery && (
          <span
            className="fa fa-times"
            onClick={handleClear}
            style={{ 
              cursor: 'pointer', 
              position: 'absolute', 
              right: isSmall ? '50px' : '60px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: isSmall ? '15px' : '18px',
              zIndex: 10
            }}
          ></span>
        )}

        {/* Suggestions Dropdown */}
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
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Link 
                  key={blog.slug} 
                  to={`/blogs/${blog.slug}`}
                  onClick={() => {
                    setShowDropdown(false);
                    if (onSelectBlog) onSelectBlog();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '12px 20px',
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
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={{
                      width: '60px',
                      height: '45px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }} 
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#1a73e8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {highlightText(blog.title, searchQuery)}
                    </h4>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {highlightText(blog.preview, searchQuery)}
                    </p>
                    <span style={{ fontSize: '10px', color: '#888', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>calendar_month</span> {blog.date}
                    </span>
                  </div>
                </Link>
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
  );
}
