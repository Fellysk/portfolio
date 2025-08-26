import React from 'react';
import { Palette, TrendingUp, Code, Megaphone, Users, BarChart3, Download } from 'lucide-react';
import cvFile from '../felistus-gomba-cv.pdf';

const Services = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Felistus_Gomba_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design Services',
      description: 'Creating intuitive and engaging user experiences through thoughtful design and user-centered research.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing strategies that drive growth and maximize your online presence.',
      features: ['SEO & SEM', 'Content Strategy', 'Social Media Marketing', 'Analytics & Optimization']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications with modern technologies and best practices.',
      features: ['Frontend Development', 'Performance Optimization', 'Mobile Responsive']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="text-orange-400">SERVICES</span>
            <span className="text-gray-400"> | </span>
            <span className="text-white">PROVIDE</span>
          </h2>
          <button 
            onClick={handleDownloadCV}
            className="cv-download-btn"
            title="Download my CV"
          >
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">
                {service.title}
              </h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <div className="service-feature-dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
