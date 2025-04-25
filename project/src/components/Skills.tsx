import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillItems } from '../data';
import { Brain, Code, Database, FileCode, Globe, Layout, Server, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(skillItems[0].id);
  
  useEffect(() => {
    // Reset to first skill every few seconds
    const interval = setInterval(() => {
      const currentIndex = skillItems.findIndex(skill => skill.id === activeSkill);
      const nextIndex = (currentIndex + 1) % skillItems.length;
      setActiveSkill(skillItems[nextIndex].id);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSkill]);
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-8 h-8 text-accent" />;
      case 'Server':
        return <Server className="w-8 h-8 text-accent" />;
      case 'Terminal':
        return <Terminal className="w-8 h-8 text-accent" />;
      case 'Brain':
        return <Brain className="w-8 h-8 text-accent" />;
      case 'Database':
        return <Database className="w-8 h-8 text-accent" />;
      case 'Code':
        return <Code className="w-8 h-8 text-accent" />;
      case 'FileCode':
        return <FileCode className="w-8 h-8 text-accent" />;
      case 'Layout':
        return <Layout className="w-8 h-8 text-accent" />;
      default:
        return <Code className="w-8 h-8 text-accent" />;
    }
  };
  
  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-container">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-gray-200 dark:border-primary-light border-dashed rounded-full"
        ></motion.div>
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 border border-gray-200 dark:border-primary-light border-dashed rounded-full"
        ></motion.div>
        
        {/* Circular skill items */}
        {skillItems.map((skill) => {
          // Calculate position around the circle
          const angle = (skill.position - 1) * (360 / skillItems.length);
          const radius = 250; // Radius of the circle
          
          // Convert angle to radians
          const angleInRadians = (angle * Math.PI) / 180;
          
          // Calculate x and y positions
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);
          
          return (
            <motion.div
              key={skill.id}
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                x: x,
                y: y,
              }}
              transition={{ 
                type: "spring", 
                duration: 0.8, 
                delay: skill.position * 0.1,
              }}
              whileHover={{ scale: 1.2 }}
              className={`skill-item flex items-center justify-center ${activeSkill === skill.id ? 'active' : ''}`}
              onClick={() => setActiveSkill(skill.id)}
            >
              <div className="flex items-center justify-center w-full h-full bg-white dark:bg-primary-light">
                {getIconComponent(skill.icon)}
              </div>
            </motion.div>
          );
        })}
        
        {/* Center content*/}
        <div className="relative z-10 w-52 h-52 bg-white dark:bg-primary-light rounded-full shadow-lg">
          <img 
            src="/Joseph.jpg" 
            alt="Joseph Makau" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        
        {/* Skill detail cards positioned outside the circle */}
        {skillItems.map((skill) => {
          const angle = (skill.position - 1) * (360 / skillItems.length);
          const angleInRadians = (angle * Math.PI) / 180;
          const radius = 350; // Slightly larger radius than the skill items
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);
          
          return (
            <motion.div
              key={skill.id}
              className={`skill-content ${activeSkill === skill.id ? 'active' : 'hidden'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: activeSkill === skill.id ? 1 : 0, 
                scale: activeSkill === skill.id ? 1 : 0.8 
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
            >
              <div className="bg-white dark:bg-primary-light p-6 rounded-lg shadow-lg max-w-md">
                <div className="flex items-center mb-4">
                  {getIconComponent(skill.icon)}
                  <h3 className="text-lg font-semibold ml-3">{skill.name}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
              
              {/* Line connecting skill to detail card */}
              {activeSkill === skill.id && (
                <motion.div
                  className="absolute w-1 h-1 bg-accent rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;