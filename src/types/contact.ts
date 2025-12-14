export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactConfig {
  availability: 'available' | 'limited' | 'unavailable';
  availabilityMessage: string;
  responseTime: string;
}
