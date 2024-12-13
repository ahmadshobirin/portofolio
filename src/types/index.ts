export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
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