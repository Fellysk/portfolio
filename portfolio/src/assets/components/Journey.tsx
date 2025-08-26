import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Journey = () => {
  const education = [
    {
      institution: 'Chinhoyi University Of Technology',
      degree: 'Bachelor\'s Degree - Procurement Management',
      period: '2019 - 2023',
      description: 'Focused on supply chain management, procurement strategies, and business operations.',
      type: 'education'
    },
    {
      institution: 'Uncommon.Org',
      degree: 'International Digital Marketing Certificate',
      period: '2024 - 2025',
      description: 'Comprehensive digital marketing training covering SEO, SEM, social media marketing, and analytics.',
      type: 'education'
    }
  ];

  const experience = [
    {
      company: 'Ministry of Transport and Infrastructure Development',
      position: 'Procurement Assistant Intern',
      period: '2022 - 2023',
      description: 'Assisted in procurement processes, managed supplier relationships, and supported infrastructure development projects in Harare.',
      type: 'experience'
    },
    {
      company: 'Matsmart Hardware',
      position: 'Branch Manager',
      period: '2023 - 2024',
      description: 'Managed daily operations, supervised staff, handled customer relations, and oversaw inventory management for hardware retail operations.',
      type: 'experience'
    },
    {
      company: 'Nyanzvi Zw',
      position: 'Digital Marketing Manager',
      period: '2025 - June 2025',
      description: 'Leading digital marketing strategies for developing business, managing social media campaigns, and driving online growth initiatives.',
      type: 'experience'
    }
  ];

  return (
    <section className="journey">
      <div className="journey-container">
        {/* Section Header */}
        <div className="journey-header">
          <h2 className="journey-subtitle">My Educational & Work</h2>
          <h3 className="journey-title">
            My Academic & <span className="text-orange-400">Professional Journey</span>
          </h3>
        </div>

        <div className="journey-grid">
          {/* Education Section */}
          <div>
            <div className="journey-section-header">
              <div className="journey-section-icon">
                <GraduationCap />
              </div>
              <h4 className="journey-section-title">Education</h4>
            </div>

            <div className="journey-items">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="journey-item"
                >
                  <div className="journey-item-header">
                    <h5 className="journey-item-company">{edu.institution}</h5>
                    <span className="journey-item-period">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                  
                  <h6 className="journey-item-position">{edu.degree}</h6>
                  <p className="journey-item-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="journey-section-header">
              <div className="journey-section-icon">
                <Briefcase />
              </div>
              <h4 className="journey-section-title">Experience</h4>
            </div>

            <div className="journey-items">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="journey-item"
                >
                  <div className="journey-item-header">
                    <h5 className="journey-item-company">{exp.company}</h5>
                    <span className="journey-item-period journey-item-period-experience">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <h6 className="journey-item-position">{exp.position}</h6>
                  <p className="journey-item-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="journey-cta">
          <div className="journey-cta-card">
            <h4 className="journey-cta-title">Ready to Work Together?</h4>
            <p className="journey-cta-description">
              Let's discuss how my expertise in digital marketing and UI/UX design can help bring your vision to life.
            </p>
            <button className="journey-cta-button">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;