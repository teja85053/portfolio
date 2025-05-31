import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-blue-800/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-gray-200 dark:text-gray-300 mb-4 leading-relaxed">
               I'm a dedicated full-stack developer and cybersecurity enthusiast with hands-on experience building secure, scalable, and intelligent web applications. 
               My work spans across domains like AI/ML, network security, and data-driven product development — with a strong focus on solving real-world problems through code.
              </p>
              <p className="text-gray-200 dark:text-gray-300 mb-6 leading-relaxed">
                With a solid foundation in computer science and a track record of impactful academic and personal projects — 
                from anomaly detection using machine learning to mental health platforms and car rental systems — I bring both technical depth and practical execution to every challenge. 
                I believe in continuous learning, purpose-driven innovation, and the power of skills over scores.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">Location</h3>
                  <p className="text-gray-200 dark:text-gray-300">Vijayawada, India</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">Experience</h3>
                  <p className="text-gray-200 dark:text-gray-300">I'm Fresher</p>
                  <p className="text-gray-200 dark:text-gray-300">I have completed several projects during my studies, focusing on web development and Machine Learning.</p>
                  <p className="text-gray-200 dark:text-gray-300">Worked as an intern and built a live web application for a local business, enhancing their online presence using React.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">Email</h3>
                  <p className="text-gray-200 dark:text-gray-300">tejapraveen8505@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">Phone</h3>
                  <p className="text-gray-200 dark:text-gray-300">+91 8309229740</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-purple-800/30 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="src/images/teja.jpg" 
                    alt="Designer at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-4">
                  <p className="text-white font-medium text-center">
                    "Technology is a tool. Vision turns it into a solution. Passion turns it into impact."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;