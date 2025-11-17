import { backendProjects } from './projects/backend';
import { fullstackProjects } from './projects/fullstack';
import type { Project, CareerPosition } from '../types';

export const projects: Project[] = [
  ...backendProjects,
  ...fullstackProjects
];

export const careerPositions: CareerPosition[] = [
  {
    title: 'Software Engineer',
    company: 'Current Company',
    period: '2021 - Present',
    description: `In my capacity as a Backend Developer at Amartha, I shoulder diverse responsibilities including disbursement management, billing allocation,
    installment payment execution, and integration of payment gateways. My core emphasis revolves around meticulously developing and upholding the
    organization's backend systems, thus ensuring seamless and efficient workflow.`,
    technologies: ['Golang', 'Microservices', 'REST APIs', 'GRPC', 'Distributed Systems', 'PostgreSQL',],
  },
  {
    title: 'Backend Developer',
    company: 'Twiscode, Surabaya',
    period: '2020 - 2021',
    description: `I am a pivotal member of the Ecommerce Development team, serving with distinction as a Backend Developer. 
    My role spans crafting Restful/REST APIs and seamless integration with payment and logistics domains, all elegantly realized through Golang. 
    I also engage directly with clients, ensuring real-time alignment with their preferences, and champion pilot projects to elevate our development paradigm.`,
    technologies: ['Golang', 'OAuth2', 'Payment Gateway', 'Logistics API', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Part-time Trainer',
    company: 'Lazday',
    period: '2019 - 2021',
    description: `As a part-time trainer at Lazday, I delivered both video and written learning materials. 
    I designed and taught a Laravel full-stack course with a real case-study implementation, focusing on practical, production-ready patterns.
    This was before the AI era, so all content creation and course development were fully manual.`,
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Course Design', 'Video Production', 'Technical Writing'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Quantum Leap, Surabaya',
    period: '2017 - 2020',
    description: `In my early career, I led ERP and Trading programdevelopment for diverse sectors. As a skilled Full
          Stack Developer, I ensured timely project delivery, excelling in client, team, and managementcommunication. 
          I orchestrated system architecture using Laravel, Query, Ajax, MySQL, PostgreSQL, and managed AWS servers for monitoring and upgrades.`,
    technologies: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'AWS', "REST APIs"],
  }
];