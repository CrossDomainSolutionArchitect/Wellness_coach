import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">About Indabentle Consulting</h1>
          <p className="page-description">
            We are dedicated to providing impeccable intervention to ensure fully functioning individuals and organizations
          </p>
        </div>

        <div className="vision-mission-grid">
          <div className="vision-box">
            <h3 className="box-title">Our Vision</h3>
            <p className="box-text">
              To provide impeccable intervention to ensure fully functioning individuals and organisations, creating workplaces where people thrive and businesses succeed.
            </p>
          </div>

          <div className="mission-box">
            <h3 className="box-title">Our Mission</h3>
            <p className="box-text">
              To empower organizations through comprehensive HR solutions, wellness programs, and organizational development strategies that drive sustainable growth and employee fulfillment.
            </p>
          </div>
        </div>

        <div className="why-choose-box">
          <h2 className="why-choose-title">Why Choose Indabentle?</h2>
          <div className="features-grid">
            {[
              'Comprehensive HR and Wellness Solutions',
              'Expert Organizational Development',
              'Customized Training Programs',
              'Evidence-Based Assessments',
              'Professional Coaching Services',
              'Results-Driven Approach'
            ].map((item, i) => (
              <div key={i} className="feature-item">
                <CheckCircle className="feature-icon" size={20} />
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;