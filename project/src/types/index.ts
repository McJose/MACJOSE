export interface SkillItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  position: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface NavLink {
  id: string;
  title: string;
  path: string;
}