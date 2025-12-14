export interface Skill {
  id: string;
  name: string;
  logo: string;
  yearsOfExperience: number;
  category: 'language' | 'framework' | 'tool' | 'cloud';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  projectLink?: string;
}
