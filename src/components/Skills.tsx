import React from 'react';
import { skills, services } from '../data';
import { Skill, Service } from '../types';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
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
          <h2 className="text-3xl font-bold mb-4 text-white">Skills & Services</h2>
          <p className="text-gray-200 dark:text-gray-300">
            My technical expertise and the services I offer to help bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-20">
          <motion.h3 
            className="text-xl font-bold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h3 
            className="text-xl font-bold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Services
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-300 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-purple-800/30 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white dark:bg-white"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const IconComponent = (LucideIcons as any)[
    service.icon.charAt(0).toUpperCase() + service.icon.slice(1)
  ];

  return (
    <motion.div 
      className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-purple-800/30 dark:bg-gray-800 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white group-hover:text-purple-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {IconComponent && <IconComponent size={24} className="text-white group-hover:text-purple-900 transition-colors duration-300" />}
      </motion.div>
      <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-200">{service.description}</p>
    </motion.div>
  );
};

export default Skills;