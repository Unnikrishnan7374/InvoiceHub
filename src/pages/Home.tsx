import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/css';

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeTab, setActiveTab] = useState('Launch');
  const [readMoreBasic, setReadMoreBasic] = useState(false);
  const [readMorePremium, setReadMorePremium] = useState(false);
  const [compareCollapsed, setCompareCollapsed] = useState(true);
    



  
  const banners = [
    {
      bg: "images/banner-1.jpg",
      laptop: "images/expanding_laptop.png",
      title: "Simplify Invoicing. Accelerate Payments",
      desc: "Professional estimates, invoices, bills, and payments — all managed in one intelligent platform.",
      theme: ""
    },
    {
      bg: "images/banner-2.jpg",
      laptop: "images/BanPhone.png", // uses phone image
      title: "Work from Anywhere, Anytime.",
      desc: "Secure cloud-based access to your financial operations from any device. Stay in control wherever business takes you.",
      theme: "slide-2"
    },
    {
      bg: "images/banner-3.jpg",
      laptop: "images/banner-3.1.png",
      title: "Secure, Tax-Ready, Built to Scale",
      desc: "Tax automation, role-based security, and scalable workflows designed for growing businesses.",
      theme: ""
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.marquee-slider', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      speed: 12000,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section id="home" className="banner bannerNew">
        <div id="full-slider-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
          <div id="homeslider" style={{ width: '100%', height: '650px', position: 'relative' }}>
            {banners.map((ban, idx) => (
              <div 
                key={idx} 
                className={`ls-slide ${ban.theme} ${idx === activeBanner ? 'active-slide' : 'inactive-slide'}`}
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  transition: 'opacity 1s ease-in-out',
                  opacity: idx === activeBanner ? 1 : 0,
                  zIndex: idx === activeBanner ? 2 : 1,
                  display: idx === activeBanner ? 'block' : 'none'
                }}
              >
                <img src={ban.bg} className="ls-bg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <img 
                  className="ls-l" 
                  style={{ top: '80px', left: 'auto', right: '7%', position: 'absolute', zIndex: 99 }}
                  src={ban.laptop} 
                  alt="" 
                />
                <div className="ls-l sub-head sub-ban" style={{ top: '180px', left: '50px', position: 'absolute', zIndex: 99 }}>
                  <h2>{ban.title}</h2>
                  <p>{ban.desc}</p>
                  <Link to="/register" className="themeBtn">
                    Start Free Trial <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features hmefeatures">
        <h2>Key Features</h2>
        <div className="circle-wrapper"></div>
        <div className="pattern"></div>
        <ul>
          <li>
            <Link to="/features/customer-vendor-management">
              <div className="image"><img src="images/icons/fea-icon-1.png" className="img-fluid" alt="Customer Management" /></div>
              <h3>Customer & Vendor Management</h3>
            </Link>
          </li>
          <li>
            <Link to="/features/estimates-invoicing-workflow">
              <div className="image"><img src="images/icons/fea-icon-2.png" className="img-fluid" alt="Estimates" /></div>
              <h3>Estimates & Invoicing</h3>
            </Link>
          </li>
          <li>
            <Link to="/features/payments-partial-payments">
              <div className="image"><img src="images/icons/fea-icon-4.png" className="img-fluid" alt="Payments" /></div>
              <h3>Payments & Payables</h3>
            </Link>
          </li>
          <li>
            <Link to="/features/smart-invoice-capture">
              <div className="image"><img src="images/icons/fea-icon-6.png" className="img-fluid" alt="OCR Capture" /></div>
              <h3>Smart Invoice Capture</h3>
            </Link>
          </li>
          <li>
            <Link to="/features/tax-automation">
              <div className="image"><img src="images/icons/fea-icon-7.png" className="img-fluid" alt="Tax Automation" /></div>
              <h3>Tax Automation</h3>
            </Link>
          </li>
          <li>
            <Link to="/features/reports-insights">
              <div className="image"><img src="images/icons/fea-icon-8.png" className="img-fluid" alt="Reports" /></div>
              <h3>Reports & Insights</h3>
            </Link>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <div className="homeabt clearfix">
        <div className="right">
          <h2>About Invoice Hub</h2>
          <p><strong>A Smarter Way to Manage Your Financial Operations</strong></p>
          <p>Invoice Hub is a comprehensive financial workflow platform designed to simplify billing, payables, tax compliance, and reporting for modern businesses.</p>
          <p>From estimates to payments, everything is connected in one structured system — helping you reduce manual effort, improve accuracy, and gain full financial visibility.</p>
          <Link to="/about" className="themeBtn"> View More <span class="material-symbols-outlined">arrow_forward</span> </Link>
        </div>
        <div className="left">
          <img src="images/registerPge.png" className="img-fluid" alt="Register Screen" />
        </div>
      </div>

      {/* Why Choose Invoice HUB */}
      <section className="invoice hmeinvoice clearfix">
        <div className="right">
          <h2>Why choose Invoice HUB?</h2>
          <p><strong>Designed for Control, Built for Growth</strong></p>
          <ul className="ticklist">
            <li><i className="bi bi-check2"></i> Automated workflows that reduce manual effort</li>
            <li><i className="bi bi-check2"></i> US tax-ready architecture</li>
            <li><i className="bi bi-check2"></i> Real-time dashboards and reporting</li>
            <li><i className="bi bi-check2"></i> Secure role-based access controls</li>
            <li><i className="bi bi-check2"></i> Scalable for startups and growing businesses</li>
            <li><i className="bi bi-check2"></i> Audit-ready financial records</li>
            <li><i className="bi bi-check2"></i> Monitor real-time revenue and cash flow insights</li>
          </ul>
          <p>InvoiceHub transforms complex financial operations into a structured, efficient, and scalable system.</p>
        </div>
        <div className="left">
          <ul>
            <li><img src="images/hmegrid-1.jpg" className="img-fluid" alt="" /></li>
            <li><img src="images/hmegrid-2.jpg" className="img-fluid" alt="" /></li>
            <li><img src="images/hmegrid-3.jpg" className="img-fluid" alt="" /></li>
          </ul>
        </div>
      </section>

      {/* Step by Step Tabbed Section */}
      <div className="stepsHome clearfix">
        <h2>Step-by-Step Guide to Creating Invoices Easily</h2>
        <div className="left">
          <ul className="tabs nav nav-tabs clearfix left-sub">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Launch' ? 'active' : ''}`} onClick={() => setActiveTab('Launch')}>
                Launch Invoice HUB
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Customer' ? 'active' : ''}`} onClick={() => setActiveTab('Customer')}>
                Customer Creation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Product' ? 'active' : ''}`} onClick={() => setActiveTab('Product')}>
                Product & Service Creation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Estimation' ? 'active' : ''}`} onClick={() => setActiveTab('Estimation')}>
                Estimation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Approve' ? 'active' : ''}`} onClick={() => setActiveTab('Approve')}>
                Approve or Reject
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Invoice' ? 'active' : ''}`} onClick={() => setActiveTab('Invoice')}>
                Invoice Generation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 'Payment' ? 'active' : ''}`} onClick={() => setActiveTab('Payment')}>
                Payment Tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="tab-content clearfix">
            {activeTab === 'Launch' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 1</h6>
                  <p><strong>Log In to Your Invoice HUB Account</strong></p>
                  <ul className="ticklist">
                    <li>Access Invoice HUB securely from any device and get started instantly.</li>
                    <li>Your dashboard gives a clear overview of your business from the moment you log in — no setup, no learning curve.</li>
                  </ul>
                </div>
                <div className="rtimg"><img src="images/step-1.png" className="img-fluid" alt="Step 1" /></div>
              </div>
            )}
            {activeTab === 'Customer' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 2</h6>
                  <p><strong>Add Customer Details</strong></p>
                  <ul className="ticklist">
                    <li>Create and manage your customers in one centralized place.</li>
                    <li>Store billing details, contact information, and customer history to make every future invoice faster and more accurate.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-2.png" className="img-fluid" alt="Step 2" />
                  <img src="images/step-2.1.png" className="img-fluid second" alt="Step 2 details" />
                </div>
              </div>
            )}
            {activeTab === 'Product' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 3</h6>
                  <p><strong>Select Products</strong></p>
                  <ul className="ticklist">
                    <li>Add your products or services with pricing and tax details once.</li>
                    <li>Reuse them across estimates and invoices to save time and avoid manual errors.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-3.png" className="img-fluid" alt="Step 3" />
                  <img src="images/step-3.1.png" className="img-fluid second" alt="Step 3 details" />
                </div>
              </div>
            )}
            {activeTab === 'Estimation' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 4</h6>
                  <p><strong>Estimation</strong></p>
                  <ul className="ticklist">
                    <li>Generate professional estimates or quotations in just a few clicks.</li>
                    <li>Customize document names, formats, and values to match your business style and customer expectations.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-4.png" className="img-fluid" alt="Step 4" />
                  <img src="images/step-4.1.png" className="img-fluid second" alt="Step 4 details" />
                </div>
              </div>
            )}
            {activeTab === 'Approve' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 5</h6>
                  <p><strong>Approve or Reject</strong></p>
                  <ul className="ticklist">
                    <li>Track the status of every estimate with complete clarity.</li>
                    <li>Once approved, estimates move seamlessly to invoicing — no duplication, no rework.</li>
                  </ul>
                </div>
                <div className="rtimg"><img src="images/step-5.png" className="img-fluid" alt="Step 5" /></div>
              </div>
            )}
            {activeTab === 'Invoice' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 6</h6>
                  <p><strong>Invoice Generation</strong></p>
                  <ul className="ticklist">
                    <li>Create invoices instantly from approved estimates or directly from products.</li>
                    <li>US sales tax is applied automatically, ensuring accuracy and compliance every time.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-6.png" className="img-fluid" alt="Step 6" />
                  <img src="images/step-6.1.png" className="img-fluid second" alt="Step 6 details" />
                </div>
              </div>
            )}
            {activeTab === 'Payment' && (
              <div className="tab-pane fade show active">
                <div className="lftcntnt">
                  <h6>Step : 7</h6>
                  <p><strong>Payment Tracking</strong></p>
                  <ul className="ticklist">
                    <li>Record payments as they are received and monitor outstanding balances easily.</li>
                    <li>Get a clear view of paid, pending, and overdue invoices to stay in control of your cash flow.</li>
                  </ul>
                </div>
                <div className="rtimg">
                  <img src="images/step-7.png" className="img-fluid" alt="Step 7" />
                  <img src="images/step-7.1.png" className="img-fluid second" alt="Step 7 details" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing clearfix" id="Pricing">
        <div className="pricing-wrapper">
          <h2 className="themehead"><span>Simple Pricing Smart Features</span></h2>
          <p className="subText">Affordable plans that grow with your business.</p>
          
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="price-box silver">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Trial</h3>
                  <div className="heading-sub-title">
                    <p>Limited Time Offer</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">$0</p>
                    <p className="duration">/month</p>
                  </div>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><i className="fas fa-check"></i> Easy onboarding</li>
                    <li><i className="fas fa-check"></i> Invoice & Estimate creation</li>
                    <li><i className="fas fa-check"></i> Customer management</li>
                    <li><i className="fas fa-check"></i> Product & service catalog</li>
                    <li><i className="fas fa-check"></i> US sales tax (basic)</li>
                    <li><i className="fas fa-check"></i> PDF invoice export</li>
                    <li><i className="fas fa-check"></i> Basic reports</li>
                    <li><i className="fas fa-check"></i> Email support</li>
                  </ul>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn silverBtn">Start Trial</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="price-box gold">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Basic</h3>
                  <h6 className="mostreco">Most Popular</h6>
                  <div className="heading-sub-title">
                    <p>Invoice HUB Core Suite</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">$35</p>
                    <p className="duration">/month</p>
                  </div>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><i className="fas fa-check"></i> Everything in Trial</li>
                    <li><i className="fas fa-check"></i> Advanced invoice & estimate templates</li>
                    <li><i className="fas fa-check"></i> Dynamic document naming</li>
                    <li><i className="fas fa-check"></i> US sales tax (state-based)</li>
                    <li><i className="fas fa-check"></i> Bills & expense tracking</li>
                    <li><i className="fas fa-check"></i> Payments tracking</li>
                    <li><i className="fas fa-check"></i> Vendor management</li>
                    
                    {readMoreBasic && (
                      <>
                        <li><i className="fas fa-check"></i> Report center (sales, tax, payments)</li>
                        <li><i className="fas fa-check"></i> Excel & PDF exports</li>
                        <li><i className="fas fa-check"></i> Role-based user access</li>
                        <li><i className="fas fa-check"></i> Audit logs (standard)</li>
                      </>
                    )}
                  </ul>
                  <span className="ReadMore xtra-cntnt" onClick={() => setReadMoreBasic(!readMoreBasic)}>
                    {readMoreBasic ? 'Read Less' : 'Read More'}
                  </span>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn goldBtn">Start Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 last">
              <div className="price-box premium">
                <div className="price-title clearfix">
                  <h3 className="heading-title">Professional</h3>
                  <div className="heading-sub-title">
                    <p>The Ultimate Management Experience</p>
                  </div>
                  <div className="price-rate">
                    <p className="price">$65</p>
                    <p className="duration">/month</p>
                  </div>
                </div>
                <div className="service-feature">
                  <ul className="service-feature-list">
                    <li><i className="fas fa-check"></i> Everything in Basic</li>
                    <li><i className="fas fa-check"></i> Advanced US sales tax configuration</li>
                    <li><i className="fas fa-check"></i> Location-based tax rules</li>
                    <li><i className="fas fa-check"></i> Custom business configuration</li>
                    <li><i className="fas fa-check"></i> Advanced inventory management</li>
                    <li><i className="fas fa-check"></i> Profit & expense analytics</li>
                    
                    {readMorePremium && (
                      <>
                        <li><i className="fas fa-check"></i> Advanced audit & activity center</li>
                        <li><i className="fas fa-check"></i> Priority onboarding assistance</li>
                        <li><i className="fas fa-check"></i> Data migration support</li>
                        <li><i className="fas fa-check"></i> Priority support</li>
                      </>
                    )}
                  </ul>
                  <span className="ReadMoreOne xtra-cntnt" onClick={() => setReadMorePremium(!readMorePremium)}>
                    {readMorePremium ? 'Read Less' : 'Read More'}
                  </span>
                </div>
                <div className="buy-btn-wrapper">
                  <button className="themeBtn premiumBtn">Start Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="text-center">
            <button 
              className={`themeBtn comparebtn ${compareCollapsed ? 'collapsed' : ''}`}
              onClick={() => setCompareCollapsed(!compareCollapsed)}
            >
              Compare all features <i className={`bi ${compareCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'}`}></i>
            </button>
          </div>

          {!compareCollapsed && (
            <div className="compareFuatures">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"><h3>Features</h3></th>
                    <th scope="col"><h3 className="text-xl">Trial</h3></th>
                    <th scope="col"><h3 className="text-xl">Basic</h3></th>
                    <th scope="col"><h3>Professional</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Invoice & Estimation</td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Dynamic Document Naming</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>US Sales Tax Configuration</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Customer Management</td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Vendor Management</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Bills & Expenses</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Payments Tracking</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Product & Inventory</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Report Center</td>
                    <td><span>Basic</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Export (PDF / Excel)</td>
                    <td><span>PDF</span></td>
                    <td><span>PDF + Excel</span></td>
                    <td><span>PDF + Excel</span></td>
                  </tr>
                  <tr>
                    <td>Audit Logs</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span>Standard</span></td>
                    <td><span>Advanced</span></td>
                  </tr>
                  <tr>
                    <td>Data Migration Support</td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined closeIcn">check_indeterminate_small</span></td>
                    <td><span className="material-symbols-outlined">check</span></td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td><span>Email</span></td>
                    <td><span>Email</span></td>
                    <td><span>Priority</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Invoice Templates Section */}
      <section className="invoice two clearfix">
        <div className="right">
          <h2>Choose Your Perfect Invoice Template</h2>
          <p>Select from beautifully designed invoice templates that match your brand, customize colors and layout, and create professional invoices instantly.</p>
          <ul className="ticklist">
            <li><strong>Invoice Templates</strong><br />- Perfect for billing clients quickly and clearly</li>
            <li><strong>Estimation Templates</strong><br />- Share accurate quotes and convert them into invoices instantly</li>
          </ul>
        </div>
        <div className="left">
          <div className="swiper marquee-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><a href="images/pdf-1.1.png" target="_blank"><img src="images/pdf-1.png" alt="PDF Template 1" className="img-fluid" /></a></div>
              <div className="swiper-slide"><a href="images/pdf-2.1.png" target="_blank"><img src="images/pdf-2.png" alt="PDF Template 2" className="img-fluid" /></a></div>
              <div className="swiper-slide"><a href="images/pdf-3.1.png" target="_blank"><img src="images/pdf-3.png" alt="PDF Template 3" className="img-fluid" /></a></div>
              <div className="swiper-slide"><a href="images/pdf-2.1.png" target="_blank"><img src="images/pdf-2.png" alt="PDF Template 4" className="img-fluid" /></a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
