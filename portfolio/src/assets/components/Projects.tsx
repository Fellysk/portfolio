import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import screenshot1 from '../../assets/main.png';
import screenshot2 from '../../assets/mine.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Wibsite Cloud Marketing',
      category: 'UI/UX Design',
      type: 'Strategy',
      description: 'Comprehensive cloud marketing platform with advanced analytics and user-friendly interface design.',
      // image: screenshot1,
      tags: ['Figma', 'Strategy', 'UI/UX'],
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Campaign Strategy',
      category: 'Marketing',
      type: 'Strategy',
      description: 'Multi-channel marketing campaign strategy for e-commerce platform resulting in 200% growth.',
      image: screenshot2,
      tags: ['Digital Marketing', 'Analytics', 'Strategy'],
      link: '#'
    },
    {
      id: 3,
      title: 'Vinstus Casual Wear Campaign Strategy',
      category: 'UI/UX Design',
      type: 'Planning',
      description: 'Complete brand identity and digital campaign strategy for casual wear fashion brand.',
      image: screenshot1,
      tags: ['Branding', 'Campaign', 'UI/UX'],
      link: '#'
    },
    {
      id: 4,
      title: 'Forge Hardware Development',
      category: 'Web Development',
      type: 'Planning',
      description: 'Full-stack e-commerce website development for hardware retail business.',
      // image: screenshot2,
      tags: ['React', 'E-commerce', 'Full-stack'],
      link: '#'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="text-white">My Latest </span>
            <span className="text-orange-400">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
            >
              {/* Project Image */}
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div className="project-overlay">
                  <div className="project-overlay-buttons">
                    <button className="project-overlay-button">
                      <Eye className="project-overlay-icon" />
                    </button>
                    <button className="project-overlay-button">
                      <ExternalLink className="project-overlay-icon" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-tags-header">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <span className="project-type">
                    {project.type}
                  </span>
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="projects-button">
          <button className="projects-explore">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;