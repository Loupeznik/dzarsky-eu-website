import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description:
      'A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard',
    longDescription:
      'Built a complete e-commerce solution from scratch using modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, order tracking, and comprehensive admin panel.',
    image: '/images/projects/ecommerce.png',
    technologies: ['typescript', 'react', 'docker', 'azure'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    demoUrl: 'https://demo.example.com',
    featured: true,
    startDate: new Date('2023-01-01'),
    status: 'completed',
  },
  {
    id: 'project-2',
    name: 'Task Management App',
    slug: 'task-management',
    description: 'A collaborative task management application with real-time updates and team features',
    longDescription:
      'Developed a Kanban-style task management tool with real-time collaboration features. Users can create boards, organize tasks, assign team members, and track progress.',
    image: '/images/projects/task-app.png',
    technologies: ['typescript', 'react', 'python'],
    githubUrl: 'https://github.com/yourusername/task-app',
    demoUrl: 'https://tasks.example.com',
    featured: true,
    startDate: new Date('2022-06-01'),
    status: 'completed',
  },
  {
    id: 'project-3',
    name: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'A beautiful weather dashboard with forecasts, maps, and historical data visualization',
    technologies: ['javascript', 'react'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: true,
    startDate: new Date('2022-01-01'),
    status: 'completed',
  },
  {
    id: 'project-4',
    name: 'Portfolio Website',
    slug: 'portfolio',
    description: 'Personal portfolio website built with Astro and SolidJS',
    technologies: ['typescript', 'astro', 'solidjs', 'docker'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    demoUrl: 'https://dzarsky.eu',
    featured: false,
    startDate: new Date('2024-01-01'),
    status: 'completed',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
