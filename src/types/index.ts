export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  details?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    features: string[];
    technicalDetails: string[];
    demoUrl?: string;
    githubUrl?: string;
  };
}

export interface CareerPosition {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
}