import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for Email
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const emailUrl = `mailto:tejapraveen8505@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.open(emailUrl, '_blank');
    
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
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
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-200 dark:text-gray-300">
            Have a project in mind or want to talk? Feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:tejapraveen8505@gmail.com" className="text-white hover:text-gray-200 transition-colors">
                      tejapraveen8505@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Location</h4>
                    <p className="text-white">
                      Vijayawada, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
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
            </div>
            
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-purple-800/30 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-purple-800/30 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-800/30 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-purple-800/30 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`inline-block px-8 py-3 ${
                    formStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : formStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-white/20 hover:bg-white/30'
                  } text-white font-medium rounded-lg transition-colors duration-300`}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error. Try Again.'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;