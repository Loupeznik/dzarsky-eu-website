export const languages = {
  en: 'English',
} as const;

export const defaultLang = 'en';

export type Language = keyof typeof languages;

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Translations = {
  'nav.home': { en: 'Home' },
  'nav.skills': { en: 'Skills' },
  'nav.experience': { en: 'Experience' },
  'nav.projects': { en: 'Projects' },
  'nav.contact': { en: 'Contact' },
  'hero.greeting': { en: "Hi, I'm Dominik" },
  'hero.title': { en: 'Full Stack Developer' },
  'hero.description': {
    en: 'I build modern web applications with focus on performance and user experience',
  },
  'skills.title': { en: 'Skills & Technologies' },
  'skills.languages': { en: 'Languages' },
  'skills.frameworks': { en: 'Frameworks' },
  'skills.tools': { en: 'Tools' },
  'skills.cloud': { en: 'Cloud' },
  'skills.years': { en: 'years' },
  'experience.title': { en: 'Work Experience' },
  'experience.present': { en: 'Present' },
  'projects.title': { en: 'Featured Projects' },
  'projects.viewMore': { en: 'View All Projects' },
  'projects.technologies': { en: 'Technologies' },
  'projects.viewDemo': { en: 'View Demo' },
  'projects.viewCode': { en: 'View Code' },
  'contact.title': { en: 'Get In Touch' },
  'contact.availability': { en: 'Availability' },
  'contact.responseTime': { en: 'Response Time' },
  'contact.form.name': { en: 'Name' },
  'contact.form.email': { en: 'Email' },
  'contact.form.subject': { en: 'Subject' },
  'contact.form.message': { en: 'Message' },
  'contact.form.submit': { en: 'Send Message' },
  'contact.form.sending': { en: 'Sending...' },
  'contact.form.success': { en: 'Message sent successfully!' },
  'contact.form.error': { en: 'Failed to send message. Please try again.' },
  'footer.copyright': { en: 'All rights reserved' },
};

export function t(key: string, lang: Language = defaultLang): string {
  return translations[key]?.[lang] ?? key;
}
