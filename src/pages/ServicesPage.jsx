import React from 'react';
import { Heart, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Employee Wellness',
      icon: Heart,
      description: 'Holistic wellness programs that support physical, mental, and emotional health in the workplace.',
      features: [
        'Wellness assessments and interventions',
        'Mental health support programs',
        'Work-life balance strategies',
        'Stress management workshops'
      ]
    },
    {
      title: 'Training & Development',
      icon: TrendingUp,
      description: 'Customized training programs designed to enhance skills and drive performance excellence.',
      features: [
        'Leadership development',
        'Skills enhancement training',
        'Professional development courses',
        'Team effectiveness programs'
      ]
    },
    {
      title: 'HR Recruitment & Assessments',
      icon: Users,
      description: 'Strategic recruitment and comprehensive assessment services to build high-performing teams.',
      features: [
        'Talent acquisition strategies',
        'Psychometric assessments',
        'Competency evaluations',
        'Selection and placement services'
      ]
    },
    {
      title: 'Coaching for Development',
      icon: Award,
      description: 'Professional coaching to unlock potential and accelerate personal and professional growth.',
      features: [
        'Executive coaching',
        'Career development coaching',
        'Performance coaching',
        'Leadership coaching programs'
      ]
    },
    {
      title: 'Organizational Development & Design',
      icon: TrendingUp,
      description: 'Strategic interventions to optimize organizational structure and enhance effectiveness.',
      features: [
        'Organizational structure design',
        'Change management',
        'Culture transformation',
        'Strategic planning facilitation'
      ]
    },
    {
      title: 'Job Profiling, Grading & Team Building',
      icon: Users,
      description: 'Comprehensive job analysis and team development to maximize organizational performance.',
      features: [
        'Job profiling and analysis',
        'Job grading and evaluation',
        'Compensation benchmarking',
        'Team building sessions'
      ]
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Our Services</h1>
          <p className="page-description">
            Comprehensive solutions to elevate your people and organization
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="service-card">
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, j) => (
                    <li key={j} className="service-feature-item">
                      <CheckCircle className="service-feature-icon" size={16} />
                      <span className="service-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;