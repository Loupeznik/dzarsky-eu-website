export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | 'present';
  highlights: string[];
  technologies: string[];
  description: string;
  companyUrl?: string;
}
