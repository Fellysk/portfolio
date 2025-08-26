import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Download } from 'lucide-react';
import cvFile from '../felistus-gomba-cv.pdf';
import heroImage from '../hero-image.png';

const Hero = () => {
  const [downloadCount, setDownloadCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const fullText = 'Felistus Gomba';
  
  useEffect(() => {
    // Trigger animation immediately when component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Start typing animation after hello text appears
    const typingTimer = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 150);
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(typingTimer);
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Felistus_Gomba_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Simulate download tracking
    setDownloadCount(prev => prev + 1);
    
    // Show success message
    const toast = document.createElement('div');
    toast.textContent = 'CV Downloaded Successfully!';
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4ade80;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 9999;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  };
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background decorative elements */}
      <div className="hero-bg">
        <div className="hero-star-1">
          <Star size={24} fill="currentColor" />
        </div>
        <div className="hero-star-2">
          <Star size={16} fill="currentColor" />
        </div>
        <div className="hero-star-3">
          <Star size={20} fill="currentColor" />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-title">
              <h1 className="hero-title-1">
                <span className="text-orange-400">Hello</span>, I am
              </h1>
              <h2 className="hero-title-2">
                {displayText}
                {isTyping && <span className="typing-cursor">|</span>}
              </h2>
            </div>

            <p className="hero-description">
              Digital Marketing Strategist | UI/UX Designer passionate about 
              creating engaging digital experiences that connect brands with their 
              audiences through innovative design and strategic marketing.
            </p>

            <div className="hero-buttons">
              <button 
                className="hero-button-primary"
                onClick={scrollToProjects}>
                Discover More
                <ArrowRight size={20} />
              </button>
              <button 
                className="hero-button-secondary"
                onClick={handleDownloadCV}
              >
                <Download size={20} />
                Download CV {downloadCount > 0 && `(${downloadCount})`}
              </button>
              <a 
                href="https://www.linkedin.com/in/felistus-gomba-188648357" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button-linkedin"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number text-orange-400">2+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number text-yellow-400">10+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number text-green-400">98%</div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hero-image">
            <div className="hero-image-container">
              <img 
                src={heroImage} 
                alt="Felistus Gomba - Digital Marketing Strategist & UI/UX Designer" 
                className="hero-image-photo"
              />
              {/* Floating elements */}
              <div className="hero-floating-1">
                <Star size={20} fill="currentColor" />
              </div>
              <div className="hero-floating-2">
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
