import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  subtitle: string;
  tech: string;
  image: string;
  tags: string[];
  highlight: string;
  path: string; 
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  projects: Project[];
}

export interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
  project: string;
}