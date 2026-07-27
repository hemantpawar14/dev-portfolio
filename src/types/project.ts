export interface Project {
  id: number;

  title: string;

  description: string;

  image: string;

  github: string;

  live?: string;

  featured: boolean;

  technologies: string[];

  category:
    | "Linux"
    | "Cloud"
    | "DevOps"
    | "Networking"
    | "Automation";
}