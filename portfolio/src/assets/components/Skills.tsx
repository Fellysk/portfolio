import React, { useState } from 'react';
import { Code, Palette, TrendingUp, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Figma',
      percentage: 90,
      color: 'bg-orange-400'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: 'Meta Suite',
      percentage: 95,
      color: 'bg-blue-400'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: 'Google Analytics',
      percentage: 90,
      color: 'bg-green-400'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: 'Google Ads',
      percentage: 98,
      color: 'bg-yellow-400'
    }
  ];

  const toolsGrid = [
    { name: 'Figma', color: 'bg-purple-600' },
    { name: 'Meta', color: 'bg-blue-600' },
    { name: 'Google Analytics', color: 'bg-green-600' },
    { name: 'Adobe XD', color: 'bg-pink-600' },
    { name: 'Photoshop', color: 'bg-blue-500' },
    { name: 'Illustrator', color: 'bg-orange-500' },
    { name: 'Canva', color: 'bg-cyan-500' }
  ];

  const additionalSkills = [
    {
      icon: <Code className="w-6 h-6" />,
      name: 'React',
      percentage: 85,
      color: 'bg-blue-400'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: 'Adobe Creative Suite',
      percentage: 92,
      color: 'bg-purple-400'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: 'SEO Optimization',
      percentage: 88,
      color: 'bg-green-400'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      name: 'Data Analysis',
      percentage: 90,
      color: 'bg-yellow-400'
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: 'JavaScript',
      percentage: 80,
      color: 'bg-orange-400'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: 'Brand Strategy',
      percentage: 94,
      color: 'bg-pink-400'
    }
  ];

  const additionalTools = [
    { name: 'WordPress', color: 'bg-blue-700' },
    { name: 'Mailchimp', color: 'bg-yellow-600' },
    { name: 'HubSpot', color: 'bg-orange-600' },
    { name: 'Sketch', color: 'bg-yellow-500' },
    { name: 'InVision', color: 'bg-pink-500' },
    { name: 'Trello', color: 'bg-blue-400' },
    { name: 'Slack', color: 'bg-purple-500' },
    { name: 'Zoom', color: 'bg-blue-500' }
  ];

  const toggleSkillsView = () => {
    setShowAllSkills(!showAllSkills);
  };

  return (
    <section className="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-subtitle">My Favorite Tools</h2>
          <h3 className="skills-title">
            Exploring the <span className="text-orange-400">Tools</span> Behind My Work
          </h3>
        </div>

        {/* Skills Progress Bars */}
        <div className="skills-grid">
          {skillCategories.map((skill, index) => (
            <div 
              key={index}
              className="skill-card"
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
              
              <div className="skill-progress">
                <div className="skill-progress-header">
                  <span className="skill-progress-label">Proficiency</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                
                <div className="skill-progress-bar">
                  <div 
                    className={`skill-progress-fill skill-progress-${skill.color.split('-')[1]}`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional Skills - Show when expanded */}
          {showAllSkills && additionalSkills.map((skill, index) => (
            <div 
              key={`additional-${index}`}
              className="skill-card skill-card-additional"
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
              
              <div className="skill-progress">
                <div className="skill-progress-header">
                  <span className="skill-progress-label">Proficiency</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                
                <div className="skill-progress-bar">
                  <div 
                    className={`skill-progress-fill skill-progress-${skill.color.split('-')[1]}`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="tools-section">
          <h4 className="tools-title">Tools & Technologies</h4>
          <div className="tools-grid">
            {toolsGrid.map((tool, index) => (
              <div 
                key={index}
                className={`tool-tag tool-${tool.color.split('-')[1]}`}
              >
                {tool.name}
              </div>
            ))}
            
            {/* Additional Tools - Show when expanded */}
            {showAllSkills && additionalTools.map((tool, index) => (
              <div 
                key={`additional-tool-${index}`}
                className={`tool-tag tool-${tool.color.split('-')[1]} tool-additional`}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-button">
          <button className="skills-view-all" onClick={toggleSkillsView}>
            {showAllSkills ? (
              <>
                Show Less
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                View All Skills
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;