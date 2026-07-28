export interface Project {
  title: string;

  description: string;

  image: string;

  github: string;

  live?: string;

  technologies: string[];

  category: string;

  featured?: boolean;
}