import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

export default function BlogDetail() {
  const { slug } = useParams();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    // Redirect to main blogs page if not found
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div className="gettingBlog">
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>{blog.title}</h2>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to={`/blogs/${blog.slug}`}>{blog.title}</Link></li>
          </ul>
          <div className="prvnxt-art">
            {blog.prev && (
              <Link to={`/blogs/${blog.prev}`} className="prev" title="Previous Article">Prev</Link>
            )}
            {blog.next && (
              <Link to={`/blogs/${blog.next}`} className="next" title="Next Article">Next</Link>
            )}
          </div>
        </div>
      </section>

      <section className="invoice clearfix blogtop" style={{ padding: '40px 15px' }}>
        <div className="right">
          <h2>Overview</h2>
          <p>{blog.overview}</p>
          <p>{blog.subtext}</p>
        </div>
        <div className="left">
          <img src={blog.overviewImage} className="img-fluid" alt="Blog Overview" />
        </div>
      </section>

      <section className="managecusOne" style={{ padding: '0 15px 40px 15px' }}>
        {blog.sections.map((sec: any, idx) => {
          if (sec.isTwoColumnList) {
            return (
              <div className="listone clearfix" key={idx} style={{ marginBottom: '30px', padding: '40px 35px' }}>
                {sec.heading && <h3>{sec.heading}</h3>}
                {sec.text && <p>{sec.text}</p>}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start', marginBottom: '25px' }}>
                  {/* Left columns container */}
                  <div style={{ flex: sec.image ? '2' : '1', minWidth: '300px', display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
                    {sec.columns.map((col: any, cIdx: number) => (
                      <div key={cIdx} style={{ flex: '1', minWidth: '240px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#111' }}>{col.title}</h4>
                        <ul className="ticklist">
                          {col.list.map((item: string, i: number) => (
                            <li key={i}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Right image container */}
                  {sec.image && (
                    <div style={{ flex: '1', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{
                        width: '100%',
                        height: '250px',
                        backgroundImage: `url(${sec.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }} />
                    </div>
                  )}
                </div>
                {sec.footerText && (
                  <p>
                    {sec.footerText}
                  </p>
                )}
              </div>
            );
          }
          return (
            <div className="listone clearfix" key={idx} style={{ marginBottom: '30px' }}>
              <div className="left">
                <h3>{sec.heading}</h3>
                <p>{sec.text}</p>
                <p style={{ fontWeight: '600' }}>{sec.subtext}</p>
                {sec.list && (
                  <ul className="ticklist">
                    {sec.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                <p>{sec.textone}</p>
              </div>
              {sec.image && (
                <div className="right" style={{ width: '100%', float: 'none', marginTop: '20px', textAlign: 'center' }}>
                  <img src={sec.image} className="img-fluid second" alt={sec.heading} style={{ maxWidth: '30%' }} />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Side popup menu for other blogs */}
      <div className="sideMnu">
        <button
          className="open-btn"
          onClick={() => setIsSideMenuOpen(true)}
        >
          <span className="material-symbols-outlined">menu_open</span>
        </button>

        <div className={`popup ${isSideMenuOpen ? 'active' : ''}`} id="sidePopup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setIsSideMenuOpen(false)}>✖</button>
            <div className="insideScroll">
              <h4>All Blogs</h4>
              <ul className="clearfix blogList">
                {blogsData.map((b, idx) => (
                  <li key={idx} onClick={() => setIsSideMenuOpen(false)} style={{ marginBottom: '15px' }}>
                    <Link to={`/blogs/${b.slug}`} className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={b.image} className="img-fluid" alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', marginRight: '10px', borderRadius: '4px' }} />
                      <div className="content clearfix">
                        <h5 style={{ fontSize: '14px', margin: 0, color: '#333' }}>{b.title}</h5>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
