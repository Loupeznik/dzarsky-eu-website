export interface Skill {
  id: string;
  name: string;
  logo: string;
  yearsOfExperience: number;
  category: 'language' | 'framework' | 'tool' | 'cloud';
  projectLink?: string;
}
