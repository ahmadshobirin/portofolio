import type { Project } from '../../types';

export const backendProjects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Backend',
    description: 'Developed a scalable e-commerce backend using Golang microservices.',
    technologies: ['Golang', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'A high-performance e-commerce platform built with microservices architecture, handling thousands of transactions daily.',
      challenges: [
        'Scaling the system to handle high concurrent users',
        'Implementing real-time inventory management',
        'Ensuring data consistency across microservices'
      ],
      solutions: [
        'Implemented horizontal scaling using Kubernetes',
        'Used Redis for caching and real-time inventory updates',
        'Implemented saga pattern for distributed transactions'
      ],
      results: [
        '99.99% system uptime',
        '50% reduction in response time',
        'Successfully handling 10,000+ concurrent users'
      ],
      features: [
        'Order processing and management',
        'Inventory tracking system',
        'Payment gateway integration'
      ],
      technicalDetails: [
        'Microservices built with Golang',
        'gRPC for inter-service communication',
        'PostgreSQL for persistent storage'
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform'
    }
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Service',
    category: 'Backend',
    description: 'Built a secure payment processing system with multiple provider integrations.',
    technologies: ['Node.js', 'TypeScript', 'RabbitMQ', 'MongoDB', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'A robust payment gateway service supporting multiple payment providers and handling high-volume transactions.',
      challenges: ['Payment provider integration', 'Transaction security', 'Scalability'],
      solutions: ['Modular architecture', 'Encryption standards', 'Message queuing'],
      results: ['99.9% uptime', 'PCI DSS compliance', '1M+ transactions processed'],
      features: ['Multi-provider support', 'Automated reconciliation', 'Real-time reporting'],
      technicalDetails: ['Event-driven architecture', 'Strong encryption', 'Automated testing'],
      githubUrl: 'https://github.com/yourusername/payment-gateway'
    }
  },
  {
    id: 'auth-service',
    title: 'Authentication Service',
    category: 'Backend',
    description: 'Developed a centralized authentication service with OAuth2 and OIDC support.',
    technologies: ['Java', 'Spring Boot', 'OAuth2', 'PostgreSQL', 'Redis'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Centralized authentication service supporting multiple authentication methods and SSO.',
      challenges: ['Security compliance', 'Multiple auth flows', 'Session management'],
      solutions: ['OAuth2 implementation', 'Token-based auth', 'Redis session store'],
      results: ['Reduced auth time by 60%', 'Enhanced security', 'Simplified integration'],
      features: ['SSO support', 'Multi-factor auth', 'Role-based access'],
      technicalDetails: ['JWT tokens', 'OAuth2 providers', 'Rate limiting'],
      githubUrl: 'https://github.com/yourusername/auth-service'
    }
  },
  {
    id: 'log-analytics',
    title: 'Log Analytics Platform',
    category: 'Backend',
    description: 'Created a distributed log analytics system processing terabytes of data daily.',
    technologies: ['Python', 'Elasticsearch', 'Kafka', 'Docker', 'Kubernetes'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Real-time log processing and analytics platform handling massive data volumes.',
      challenges: ['Data processing at scale', 'Real-time analytics', 'Storage optimization'],
      solutions: ['Stream processing', 'Distributed indexing', 'Data compression'],
      results: ['5TB daily processing', 'Sub-second query time', 'Cost reduction'],
      features: ['Real-time dashboards', 'Custom alerting', 'Data retention'],
      technicalDetails: ['ELK stack', 'Stream processing', 'Custom indexing'],
      githubUrl: 'https://github.com/yourusername/log-analytics'
    }
  },
  {
    id: 'notification-service',
    title: 'Notification Service',
    category: 'Backend',
    description: 'Built a scalable notification system supporting multiple channels.',
    technologies: ['Node.js', 'Redis', 'RabbitMQ', 'MongoDB', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Multi-channel notification service supporting email, SMS, and push notifications.',
      challenges: ['Provider integration', 'Delivery guarantees', 'Template management'],
      solutions: ['Queue-based delivery', 'Retry mechanisms', 'Template engine'],
      results: ['99% delivery rate', 'Reduced costs', 'Improved reliability'],
      features: ['Multi-channel support', 'Template management', 'Delivery tracking'],
      technicalDetails: ['Queue processing', 'Template engine', 'Provider SDKs'],
      githubUrl: 'https://github.com/yourusername/notification-service'
    }
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    category: 'Backend',
    description: 'Developed a high-performance API gateway with advanced features.',
    technologies: ['Golang', 'Redis', 'etcd', 'Docker', 'Kubernetes'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Modern API gateway with authentication, rate limiting, and request transformation.',
      challenges: ['Performance', 'Dynamic routing', 'Plugin system'],
      solutions: ['Custom router', 'Plugin architecture', 'Caching layer'],
      results: ['1ms latency', 'Flexible routing', 'Easy integration'],
      features: ['Rate limiting', 'Authentication', 'Request transformation'],
      technicalDetails: ['Custom router', 'Plugin system', 'Caching'],
      githubUrl: 'https://github.com/yourusername/api-gateway'
    }
  }
];