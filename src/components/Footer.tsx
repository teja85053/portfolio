import React from 'react';
import { socialLinks } from '../data';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-white mb-2">
                Y Praveen Teja
              </div>
              <p className="text-gray-200 dark:text-gray-300 text-sm">
                Creating meaningful digital experiences
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map(link => {
                const IconComponent = (LucideIcons as any)[
                  link.icon.charAt(0).toUpperCase() + link.icon.slice(1)
                ];
                
                return (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-purple-800/30 dark:bg-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-colors duration-300"
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <hr className="my-8 border-white/10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 dark:text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} Y Praveen Teja. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;