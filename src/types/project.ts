export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  startDate: Date;
  status: 'completed' | 'in-progress' | 'archived';
}
