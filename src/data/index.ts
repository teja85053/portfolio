import { Project, Service, Skill, SocialLink } from '../types';
import mentalHealthImg from '../images/Mentalhealth.png';
import carRentalImg from '../images/car.png';
import anomalyDetectionImg from '../images/detection.png';
import videoTranscriptionImg from '../images/videototext.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    category: 'Web App',
    imageUrl: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A personal portfolio website to showcase my projects, skills, and experience.',
    link: 'https://github.com/teja85053/Portfolio.git'
  },
  {
    id: 2,
    title: 'Mental Health Platform',
    category: 'Web App',
    imageUrl: mentalHealthImg,
    description: 'A web application to support mental health awareness and connect users with resources and professionals(For educational purposes).',
    link: 'https://github.com/teja85053/mental_health_management_system.git'
  },
  {
    id: 3,
    title: 'Car Rental System',
    category: 'Web App',
    imageUrl: carRentalImg,
    description: 'A car rental system built with Java and MySQL, allowing users to book and manage car rentals online.',
    link: 'https://github.com/teja85053/eazycars.git'
  },
  {
    id: 4,
    title: 'Anomaly Detection ML',
    category: 'Machine Learning',
    imageUrl: anomalyDetectionImg,
    description: 'A machine learning project for detecting anomalies in datasets like KDD Cup 1999 using Machine Learning techniques.',
    link: 'https://github.com/teja85053/network_anomaly.git'
  },
  {
    id: 5,
    title: 'Video transcription tool',
    category: 'Web App',
    imageUrl: videoTranscriptionImg,
    description: 'A tool for transcribing video content into text, making it more accessible and easier to analyze.',
    link: 'https://github.com/teja85053/video-transcription-tool.git'
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Creating beautiful, intuitive designs that focus on user experience and engagement.',
    icon: 'palette'
  },
  {
    id: 2,
    title: 'Full Stack Development',
    description: 'Building responsive websites with clean code and modern technologies.',
    icon: 'code'
  },
  {
    id: 3,
    title: 'Machine Learning',
    description: 'Developing intelligent systems that learn and adapt to user needs.',
    icon: 'brain'
  },
  {
    id: 4,
    title: 'Coding & Programming',
    description: 'Expertise in various programming languages to create efficient and scalable applications.',
    icon: 'terminal'
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'HTML/CSS', level: 95 },
  { id: 2, name: 'JavaScript', level: 80 },
  { id: 3, name: 'React', level: 75 },
  { id: 4, name: 'Java', level: 80 },
  { id: 5, name: 'Python', level: 75 },
  { id: 6, name: 'My SQL', level: 75 }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'X (Twitter)',
    url: 'https://x.com/teja85053',
    icon: 'X'
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://www.instagram.com/teja85053?igsh=M2pmbHRpM2M0djI%3D&utm_source=qr',
    icon: 'instagram'
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yenuga-naga-venkata-sai-praveen-teja-785b29324/',
    icon: 'linkedin'
  },
  {
    id: 4,
    name: 'GitHub',
    url: 'https://github.com/teja85053/',
    icon: 'github'
  }
];