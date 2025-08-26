import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section for navigation highlighting
      const sections = ['home', 'services', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <span className="text-orange-400">Fely</span>
            <span className="text-yellow-400">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`nav-link ${activeSection === item.href.replace('#', '') ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="nav-button" onClick={handleContactClick}>
            Get In Touch
          </button>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu">
            <div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`mobile-menu-link ${activeSection === item.href.replace('#', '') ? 'mobile-menu-link-active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <button className="mobile-menu-button" onClick={handleContactClick}>
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;