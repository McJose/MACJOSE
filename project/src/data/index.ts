import { NavLink, ProjectItem, SkillItem } from '../types';
import { Code, Database, Globe, Layout, Server, Terminal } from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Home',
    path: '#home',
  },
  {
    id: 'about',
    title: 'About',
    path: '#about',
  },
  {
    id: 'skills',
    title: 'Skills',
    path: '#skills',
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '#projects',
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '#contact',
  },
];

export const skillItems: SkillItem[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Expertise in building modern, responsive web applications with HTML, CSS, and JavaScript.',
    icon: 'Globe',
    position: 1,
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Building robust server-side applications and APIs with Node.js and other backend technologies.',
    icon: 'Server',
    position: 2,
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Proficient in Python programming with experience in web development, data analysis, and automation.',
    icon: 'Terminal',
    position: 3,
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    description: 'Experience with AI and machine learning technologies, implementing intelligent solutions to complex problems.',
    icon: 'Brain',
    position: 4,
  },
  {
    id: 'laravel',
    name: 'Laravel',
    description: 'Building robust PHP applications with Laravel framework, including RESTful APIs and web applications.',
    icon: 'Database',
    position: 5,
  },
  {
    id: 'react',
    name: 'React',
    description: 'Creating dynamic and responsive user interfaces with React and its ecosystem.',
    icon: 'Code',
    position: 6,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Strong foundation in JavaScript programming, including ES6+ features and modern development patterns.',
    icon: 'FileCode',
    position: 7,
  },
  {
    id: 'ui-design',
    name: 'UI Design',
    description: 'Designing intuitive and visually appealing user interfaces with attention to user experience.',
    icon: 'Layout',
    position: 8,
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Digital Attachment tracking and Evaluation system',
    description: 'A full-featured  system with student and lecturer authentication, attachment tracking, and evaluation processing.',
    technologies: ['Laravel', 'Node.js', 'MySQL', 'PHP', 'JavaScript'],
    image: '../src/Attachment.png',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Face Recognition System',
    description: 'A face recognition system that allows one to register a face id and login to an account using the same face id.',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    image: '../src/face-auth.png',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Secure Systems company website',
    description: 'A company website for Secure Systems.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '../src/secure-systems.png',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Portfolio',
    description: 'A portfolio website to showcase my skills and projects.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '../src/Portfolio1.png',
    demoUrl: 'https://mcjose.github.io/Portfolio.html',
    repoUrl: '#',
  },
];