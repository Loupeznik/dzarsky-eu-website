import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ts3viewer',
    name: 'TS3Viewer',
    slug: 'ts3viewer',
    description:
      'Platform for viewing, monitoring and administering TeamSpeak 3 servers including a TS3AudioBot instance',
    longDescription:
      'A comprehensive web platform designed for managing TeamSpeak 3 servers and TS3AudioBot instances. Features include real-time server status monitoring, user management, and audio bot control functionalities.',
    image: '/images/projects/ts3viewer.png',
    technologies: ['typescript', 'react', 'csharp', 'sqlite', 'docker', 'tailwindcss'],
    githubUrl: 'https://github.com/loupeznik/ts3viewer2',
    featured: true,
    startDate: new Date('2022-04-23'),
    status: 'completed',
  },
  {
    id: 'rtl',
    name: 'Tennis league management app',
    slug: 'tennis-league-app',
    description:
      'A web application for managing tennis leagues, including player registrations, match scheduling, and score tracking',
    longDescription:
      'A full-featured web application that simplifies the management of tennis leagues. It allows administrators to handle player registrations, schedule matches, and track scores efficiently. The app provides an intuitive interface for both league organizers and players.',
    image: '/images/projects/rtl.png',
    technologies: [
      'laravel',
      'typescript',
      'react',
      'intertiajs',
      'mysql',
      'docker',
      'tailwindcss',
      'php',
      'kubernetes',
      'auth0',
    ],
    demoUrl: 'https://stage.rtl.dzarsky.eu',
    featured: true,
    startDate: new Date('2020-01-01'),
    status: 'in-progress',
  },
  {
    id: 'bwapi',
    name: 'RESTful Wedos API wrapper',
    slug: 'better-wapi',
    description:
      'A Golang wrapper for the Wedos API (WAPI), providing an easy-to-use RESTful API for managing domains, DNS records, and hosting services. Includes a Golang backend and a React frontend.',
    longDescription:
      'Better WAPI is a comprehensive Golang wrapper for the Wedos API (WAPI), designed to simplify the management of domains, DNS records, and hosting services. The project features a robust Golang backend that interacts with the Wedos API and a user-friendly React frontend for seamless user experience. It provides developers and administrators with an efficient way to automate and manage their Wedos services through a RESTful interface.',
    image: '/images/projects/better-wapi.png',
    technologies: ['go', 'react', 'typescript', 'docker', 'tailwindcss'],
    githubUrl: 'https://github.com/loupeznik/better-wapi',
    featured: true,
    startDate: new Date('2022-01-15'),
    status: 'in-progress',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    slug: 'portfolio',
    description: 'Personal portfolio website built with Astro and SolidJS',
    technologies: ['typescript', 'astro', 'solidjs', 'docker'],
    githubUrl: 'https://github.com/loupeznik/dzarsky-eu',
    demoUrl: 'https://dzarsky.eu',
    featured: false,
    startDate: new Date('2025-12-10'),
    status: 'completed',
  },
  {
    id: 'toggl-timeguru',
    name: 'Toggl TimeGuru',
    slug: 'toggl-timeguru',
    description: ' CLI tool for managing and analyzing Toggl Track time entries',
    technologies: ['rust', 'toggl-track-api'],
    githubUrl: 'https://github.com/loupeznik/toggl-timeguru',
    featured: false,
    startDate: new Date('2025-10-15'),
    status: 'in-progress',
  },
  {
    id: 'soosops',
    name: 'Airsoft Team Website',
    slug: 'soos-www',
    description: 'Website for the SOoS Airsoft team, built with Next.js and Tailwind CSS',
    longDescription:
      'The official website for the SOoS Airsoft team, showcasing team information, events, and media. Includes a member-only dashboard and administration. Build with HeroUI for a sleek and modern design.',
    image: '/images/projects/soosops.png',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'docker', 'kubernetes', 'auth0'],
    demoUrl: 'https://www.soosops.eu',
    featured: true,
    startDate: new Date('2024-05-08'),
    status: 'completed',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
