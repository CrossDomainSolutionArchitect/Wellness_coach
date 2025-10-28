import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    service: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '', service: '' });
  };

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-description">
            Ready to transform your organization? Contact us today for a consultation
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="contact-info-box">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Mail className="contact-icon" size={20} />
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">info@indabentle.co.za</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Phone className="contact-icon" size={20} />
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">+27 (0) XX XXX XXXX</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <MapPin className="contact-icon" size={20} />
                  </div>
                  <div className="contact-info-details">
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-text">South Africa</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="business-hours-box">
              <h3 className="business-hours-title">Business Hours</h3>
              <div className="business-hours-list">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="form-select"
                >
                  <option value="">Select a service...</option>
                  <option value="wellness">Employee Wellness</option>
                  <option value="training">Training & Development</option>
                  <option value="recruitment">HR Recruitment & Assessments</option>
                  <option value="coaching">Coaching for Development</option>
                  <option value="organizational">Organizational Development</option>
                  <option value="profiling">Job Profiling & Team Building</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;