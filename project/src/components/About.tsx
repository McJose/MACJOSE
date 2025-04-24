import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-accent" />
              Who I Am
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a passionate software engineer with a strong foundation in web development, 
              backend systems, and AI integration. My journey in software development began during 
              my university years, where I developed a deep interest in creating efficient and 
              elegant solutions to complex problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With experience across multiple technologies and frameworks, I bring a versatile 
              approach to development. I'm equally comfortable working on the frontend with React 
              or diving deep into backend systems with Laravel and Python.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              My goal is to build software that not only meets technical requirements but also 
              delivers exceptional user experiences. I'm constantly learning and exploring new 
              technologies to enhance my skills and expand my toolkit.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-accent" />
                Education
              </h3>
              
              <div className="bg-white dark:bg-primary-light p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Bachelor of Science in Software Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">Kisii University</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2021 - 2025</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-accent" />
                Certifications
              </h3>
              
              <div className="bg-white dark:bg-primary-light p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Full Stack Web Development</h4>
                <p className="text-gray-600 dark:text-gray-400">Mimo</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2022</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-accent" />
                Experience
              </h3>
              
              <div className="bg-white dark:bg-primary-light p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Software Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">Secure Systems</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2024 - Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;