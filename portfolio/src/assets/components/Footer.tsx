import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Star, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      
      // Show success toast
      const toast = document.createElement('div');
      toast.textContent = 'Successfully subscribed to newsletter!';
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
      setTimeout(() => {
        document.body.removeChild(toast);
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setIsSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
      
      // Show success toast
      const toast = document.createElement('div');
      toast.textContent = 'Message sent successfully! I\'ll get back to you soon.';
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
      setTimeout(() => {
        document.body.removeChild(toast);
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'UI/UX Design',
    'Digital Marketing',
    'Web Development',
    'Brand Strategy',
    'SEO & Analytics',
    'Social Media Marketing'
  ];

  return (
    <footer id="contact" className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Section */}
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="text-orange-400">Fely</span>
                <span className="text-yellow-400">.</span>
              </div>
              <p className="footer-description">
                Digital Marketing Strategist & UI/UX Designer passionate about creating 
                engaging digital experiences that drive results and connect brands with their audiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>gombafelly@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>0774226870</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="footer-contact-section">
          <div className="footer-contact-card">
            <h4 className="footer-contact-title">Get In Touch</h4>
            <p className="footer-contact-description">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="form-input"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="form-textarea"
                rows={4}
                required
              />
              <button type="submit" className="form-submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-card">
            <h4 className="footer-newsletter-title">Stay Updated</h4>
            <p className="footer-newsletter-description">
              Subscribe to get the latest updates on my projects, design insights, and digital marketing tips.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-button">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-grid">
            <p className="footer-copyright">
              © 2025 Felistus Gomba. All rights reserved. Designed with ❤️ in Zimbabwe.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
              <div className="footer-status">
                <Star className="footer-status-icon" />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;