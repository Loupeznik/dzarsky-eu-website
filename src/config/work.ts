import type { WorkExperience } from '../types/work';

export const workExperiences: WorkExperience[] = [
  {
    id: 'work-1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company A',
    location: 'Remote',
    startDate: new Date('2022-01-01'),
    endDate: 'present',
    highlights: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Mentored team of 5 junior developers',
      'Improved application performance by 50% through optimization',
    ],
    technologies: ['typescript', 'react', 'docker', 'kubernetes', 'azure'],
    description:
      'Leading full-stack development initiatives and architecting scalable cloud solutions',
    companyUrl: 'https://example.com',
  },
  {
    id: 'work-2',
    title: 'Full Stack Developer',
    company: 'Startup B',
    location: 'Prague, Czech Republic',
    startDate: new Date('2020-03-01'),
    endDate: new Date('2021-12-31'),
    highlights: [
      'Built core product features using React and Node.js',
      'Implemented automated testing increasing code coverage to 85%',
      'Collaborated with design team to create responsive UI',
      'Integrated third-party payment systems',
    ],
    technologies: ['javascript', 'react', 'python', 'docker'],
    description:
      'Developed and maintained core product features in a fast-paced startup environment',
    companyUrl: 'https://example.com',
  },
  {
    id: 'work-3',
    title: 'Junior Developer',
    company: 'Software Agency C',
    location: 'Brno, Czech Republic',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2020-02-28'),
    highlights: [
      'Developed client websites and web applications',
      'Worked with various frontend frameworks',
      'Participated in code reviews and team meetings',
      'Learned best practices for software development',
    ],
    technologies: ['javascript', 'python', 'git'],
    description:
      'Started career building web applications and learning software development best practices',
  },
];
