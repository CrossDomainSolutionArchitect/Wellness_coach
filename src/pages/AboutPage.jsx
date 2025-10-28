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

        {/* Our Story Section */}
        <div className="our-story-section">
          <h2 className="story-title">Our Story</h2>
          <div className="story-content">
            <p className="story-text">
              Indabentle Consulting was founded with a singular vision: to transform the way organizations approach human capital management. We believe that the success of any organization is intrinsically linked to the well-being and development of its people.
            </p>
            <p className="story-text">
              Our team of experienced consultants brings together decades of expertise in HR management, organizational psychology, wellness coaching, and business strategy. We have worked with organizations across various industries, helping them build cultures of excellence, resilience, and continuous growth.
            </p>
            <p className="story-text">
              At Indabentle, we don't just provide services – we build partnerships. We take the time to understand your unique challenges, organizational culture, and goals. This allows us to deliver tailored solutions that create lasting, meaningful change.
            </p>
          </div>
        </div>

        {/* Team Values Section */}
        <div className="team-values-section">
          <h2 className="values-section-title">What Drives Us</h2>
          <div className="values-cards-grid">
            <div className="value-detail-card">
              <div className="value-detail-icon">🎯</div>
              <h3 className="value-detail-title">Excellence</h3>
              <p className="value-detail-text">
                We are committed to delivering the highest quality of service in everything we do, continuously improving and innovating our approaches.
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">🤝</div>
              <h3 className="value-detail-title">Partnership</h3>
              <p className="value-detail-text">
                We believe in building long-term relationships based on trust, collaboration, and mutual success with our clients.
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">💡</div>
              <h3 className="value-detail-title">Innovation</h3>
              <p className="value-detail-text">
                We embrace new ideas and cutting-edge methodologies to provide solutions that are effective and forward-thinking.
              </p>
            </div>
            <div className="value-detail-card">
              <div className="value-detail-icon">❤️</div>
              <h3 className="value-detail-title">Empathy</h3>
              <p className="value-detail-text">
                We approach every engagement with genuine care for people's well-being and a deep understanding of organizational challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;