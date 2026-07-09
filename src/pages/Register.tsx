import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessCode: '',
    subdomain: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration submitted for "${formData.businessName}"! We will contact you soon.`);
    setFormData({
      businessName: '',
      businessCode: '',
      subdomain: '',
      email: '',
      country: '',
      address: '',
      city: '',
      state: '',
      postalCode: ''
    });
  };

  return (
    <div className="registerPge clearfix" style={{ minHeight: '80vh', padding: '100px 0' }}>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img src="images/ban-shape-7.png" className="shape-5" alt="" />
      <div className="signup-card clearfix" style={{ margin: '0 auto', float: 'none' }}>
        <h1>Create Your Account</h1>
        <p>Start creating smarter invoices in seconds.</p>

        <form onSubmit={handleSubmit} autoComplete="off" className="contactform">
          <div className="row">
            <div className="form-group col-md-6">
              <input 
                type="text" 
                className="form-control" 
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.businessName ? 'active' : ''}>Business Name <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-6">
              <input 
                type="text" 
                className="form-control" 
                name="businessCode"
                value={formData.businessCode}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.businessCode ? 'active' : ''}>Business Code <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-6">
              <input 
                type="text" 
                className="form-control" 
                name="subdomain"
                value={formData.subdomain}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.subdomain ? 'active' : ''}>Sub Domain Name <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-6">
              <input 
                type="email" 
                className="form-control email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.email ? 'active' : ''}>Business Email <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-6">
              <input 
                type="text" 
                className="form-control" 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.country ? 'active' : ''}>Country <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-6">
              <input 
                type="text" 
                className="form-control" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.address ? 'active' : ''}>Business Address <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-4">
              <input 
                type="text" 
                className="form-control" 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.city ? 'active' : ''}>City <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-4">
              <input 
                type="text" 
                className="form-control" 
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.state ? 'active' : ''}>State <span className="asterisk">*</span></label>
            </div>
            <div className="form-group col-md-4">
              <input 
                type="text" 
                className="form-control" 
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                required 
              />
              <label className={formData.postalCode ? 'active' : ''}>Postal Code <span className="asterisk">*</span></label>
            </div>
            <button type="submit" className="submit btn-animate btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
