export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  processSteps?: string[];
}