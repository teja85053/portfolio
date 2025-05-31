export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}