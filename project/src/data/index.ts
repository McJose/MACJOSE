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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product catalog, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'AI Content Generator',
    description: 'An application that uses AI to generate content based on user prompts, including text, images, and code snippets.',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Project Management System',
    description: 'A comprehensive project management system with task tracking, team collaboration, and reporting features.',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    technologies: ['Socket.io', 'React', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: '#',
    repoUrl: '#',
  },
];