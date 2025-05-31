import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-blue-800/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Selected Works</h2>
          <p className="text-gray-200 dark:text-gray-300">
            A collection of my recent projects spanning various disciplines.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-white text-purple-900 dark:bg-white dark:text-gray-900'
                  : 'bg-purple-800/30 text-white dark:bg-gray-700 dark:text-gray-300 hover:bg-purple-700/40 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      className="group relative overflow-hidden bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <motion.a 
          href={project.link} 
          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ExternalLink size={18} className="text-white" />
        </motion.a>
      </div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="text-sm text-gray-300">{project.category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-white">{project.title}</h3>
        <p className="text-gray-200">{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Projects;