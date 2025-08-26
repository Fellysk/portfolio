import React from 'react';
import { MapPin, Award, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const platforms = [
    { name: 'Facebook', color: 'bg-blue-600' },
    { name: 'Instagram', color: 'bg-pink-500' },
    { name: 'LinkedIn', color: 'bg-blue-700' },
    { name: 'Twitter', color: 'bg-blue-400' },
    { name: 'Dribbble', color: 'bg-pink-400' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <div>
              <h2 className="about-title">
                <span className="text-white">WHO IS </span>
                <span className="text-orange-400">Felistus</span>
                <span className="text-yellow-400"> ?</span>
              </h2>
            </div>

            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate <span className="about-highlight">Digital Marketer</span>, 
                <span className="about-highlight"> UI/UX Designer</span>, and 
                <span className="about-highlight"> Supply Chain specialist</span> based in Zimbabwe.
              </p>

              <p className="about-paragraph">
                I'm dedicated to creating engaging digital experiences that connect brands with their 
                audiences. With years of experience, I bring a unique blend of creativity, 
                strategy, and problem-solving to every project.
              </p>

              <p className="about-paragraph">
                Experience: Living a unique blend of creativity, strategy, and innovation making an extriary project.
              </p>
            </div>

            <div className="about-platforms">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className={`platform-tag platform-${platform.name.toLowerCase()}`}
                >
                  {platform.name}
                </div>
              ))}
            </div>

            <div className="about-info">
              <div className="about-info-item">
                <MapPin size={18} />
                <span>Zimbabwe</span>
              </div>
              <div className="about-info-item">
                <Coffee size={18} />
                <span>Available for Freelance</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="about-image">
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <div className="about-image-text">FG</div>
              </div>
              
              {/* Floating achievement badge */}
              <div className="about-floating-1">
                <Award size={24} />
              </div>
              
              {/* Floating idea bulb */}
              <div className="about-floating-2">
                <Lightbulb size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;