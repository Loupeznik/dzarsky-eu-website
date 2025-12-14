import { siteConfig } from '../config/site';
import type { Project } from '../types/project';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      email: siteConfig.author.email,
      url: siteConfig.url,
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    url: siteConfig.url,
    jobTitle: 'Full Stack Developer',
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  };
}

export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies,
  };
}
