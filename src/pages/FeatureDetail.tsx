import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link, useParams, Navigate } from 'react-router-dom';
import { featuresData } from '../data/featuresData';

export default function FeatureDetail() {
  const { slug } = useParams();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const feature = featuresData.find(f => f.slug === slug);

  useDocumentTitle(feature ? `${feature.title} | Features` : 'Features');

  if (!feature) {
    // Redirect to main features page if not found
    return <Navigate to="/features" replace />;
  }

  return (
    <div className="CustomerFea">
      <section className="dtlsban clearfix">
        <div className="dtlstext">
          <h2>{feature.title}</h2>
          <p>{feature.tagline}</p>
          <ul className="tabs nav nav-tabs clearfix">
            <li><Link to="/"><span className="material-symbols-outlined">home</span></Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to={`/features/${feature.slug}`}>{feature.title}</Link></li>
          </ul>
        </div>
      </section>

      <div className="customerMgmt">
        <div className="visionlst clearfix nice-scroll">
          <div className="contant">
            {feature.sections.map((sec, idx) => (
              <div key={idx}>
                <h2>{sec.title}</h2>
                <ul className="ticklist">
                  {sec.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <img src={feature.image} className="mbl img-fluid" alt={feature.title} style={{ borderRadius: '15px' }} />
          </div>
          <div className="ser-img" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <img src={feature.image} className="attachment-large size-large img-fluid" alt={feature.title} style={{ borderRadius: '15px' }} />
          </div>
        </div>
      </div>

      <div className="cta-section clearfix">
        <h3>Benefits</h3>
        <ul className="ticklist">
          {feature.benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
        <div className="prvnxt-art">
          <Link to={`/features/${feature.prev}`} className="prev" title="Previous Article">Prev</Link>
          <Link to={`/features/${feature.next}`} className="next" title="Next Article">Next</Link>
        </div>
      </div>

      {/* Side popup menu */}
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
              <h4>All Features</h4>
              <ul>
                {featuresData.map((f, idx) => (
                  <li key={idx} onClick={() => setIsSideMenuOpen(false)}>
                    <Link to={`/features/${f.slug}`}>{f.title}</Link>
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
