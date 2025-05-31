import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-blue-800/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm transition-colors duration-300"
    >
     <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white-900 dark:text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="relative block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Building Future-Ready Solutions Through Code and Creativity
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-white transition-transform duration-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.span>
          <span className="block text-xl md:text-2xl font-medium mt-4 text-white-700 dark:text-gray-300">
            Full-Stack Developer | Innovator | AI & Cybersecurity Enthusiast
          </span>
        </motion.h1>
          <motion.p 
            className="text-xl text-white-600 dark:text-white-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           I'm a passionate full-stack developer and cybersecurity enthusiast, 
           creating impactful, data-driven web applications and intelligent systems with a 
           focus on functionality, performance, and user experience.
          </motion.p>
          <motion.button 
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 font-medium text-white-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            View My Work
            <ArrowDownCircle 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-y-1" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;