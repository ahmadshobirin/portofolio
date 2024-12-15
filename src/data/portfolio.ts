import type { Project, CareerPosition, NavigationItem } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Backend',
    description: 'Developed a scalable e-commerce backend using Golang microservices.',
    technologies: ['Golang', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'A high-performance e-commerce platform built with microservices architecture, handling thousands of transactions daily with robust scalability and reliability.',
      challenges: [
        'Scaling the system to handle high concurrent users',
        'Implementing real-time inventory management',
        'Ensuring data consistency across microservices',
        'Optimizing database performance for large datasets'
      ],
      solutions: [
        'Implemented horizontal scaling using Kubernetes',
        'Used Redis for caching and real-time inventory updates',
        'Implemented saga pattern for distributed transactions',
        'Optimized database queries and implemented connection pooling'
      ],
      results: [
        '99.99% system uptime',
        '50% reduction in response time',
        'Successfully handling 10,000+ concurrent users',
        'Improved database performance by 40%'
      ],
      features: [
        'Order processing and management',
        'Inventory tracking system',
        'Payment gateway integration',
        'Real-time analytics dashboard',
        'Customer management system'
      ],
      technicalDetails: [
        'Microservices built with Golang',
        'gRPC for inter-service communication',
        'PostgreSQL for persistent storage',
        'Redis for caching and real-time updates',
        'Docker containers orchestrated with Kubernetes',
        'CI/CD pipeline with GitHub Actions'
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform'
    }
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    category: 'Full Stack',
    description: 'Built a customer relationship management system using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'A comprehensive CRM system that helps businesses manage customer relationships, track interactions, and analyze customer data effectively.',
      challenges: [
        'Complex user permission system',
        'Real-time updates and notifications',
        'Integration with external services',
        'Large-scale data migration from legacy system'
      ],
      solutions: [
        'Implemented role-based access control (RBAC)',
        'Used Vue.js with Vuex for real-time features',
        'Created modular API architecture',
        'Developed custom data migration tools'
      ],
      results: [
        'Reduced customer response time by 60%',
        'Improved team productivity by 40%',
        'Successfully migrated 1M+ customer records',
        'Achieved 95% user satisfaction rate'
      ],
      features: [
        'Customer contact management',
        'Task and reminder system',
        'Email campaign integration',
        'Custom reporting tools',
        'Document management'
      ],
      technicalDetails: [
        'Laravel 8 backend framework',
        'Vue.js 3 frontend framework',
        'MySQL database with optimized queries',
        'Redis for caching and queues',
        'REST API with OAuth2 authentication',
        'Docker containerization'
      ],
      demoUrl: 'https://crm-demo.yourdomain.com',
      githubUrl: 'https://github.com/yourusername/crm-system'
    }
  }
];

export const careerPositions: CareerPosition[] = [
  {
    title: 'Backend Developer',
    company: 'Current Company',
    period: '2022 - Present',
    description: 'Specializing in backend development, focusing on feature implementation and product improvement using Golang microservices.',
    technologies: ['Golang', 'Microservices', 'REST APIs']
  },
  {
    title: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL']
  }
];

export const navigationItems: NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Career', href: '#career' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  'PHP (Laravel, CodeIgniter)',
  'JavaScript',
  'Golang',
  'Microservices',
  'Backend Development',
  'Full-stack Development'
];