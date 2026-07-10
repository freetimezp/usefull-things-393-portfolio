import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

import projectImg1 from '/images/project-1.jpg';
import projectImg2 from '/images/project-2.jpg';
import projectImg3 from '/images/project-3.jpg';
import projectImg4 from '/images/project-4.jpg';

const projectsData: ProjectType[] = [
  {
    imgSrc: projectImg1,
    title: 'Full stack app',
    tags: ['API', 'Development'],
    projectLink: 'https://render.com/',
  },
  {
    imgSrc: projectImg2,
    title: 'Full stack app',
    tags: ['API', 'Development'],
    projectLink: 'https://render.com/',
  },
  {
    imgSrc: projectImg3,
    title: 'Full stack app',
    tags: ['API', 'Development'],
    projectLink: 'https://render.com/',
  },
  {
    imgSrc: projectImg4,
    title: 'Full stack app',
    tags: ['API', 'Development'],
    projectLink: 'https://render.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2018 – 2020',
    title: 'Bachelor of Computer Science',
    institute: 'National University of Technology',
    desc: 'Focused on front-end development, UI design, and web application architecture.',
  },
  {
    year: '2021 – 2022',
    title: 'Frontend Development Bootcamp',
    institute: 'Udemy / Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2023',
    title: 'Advanced UI/UX Design Course',
    institute: 'Design+Code',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2021 – 2022',
    title: 'Frontend Developer Intern',
    institute: 'PixelForge Studio',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
  {
    year: '2022 – Present',
    title: 'UI Engineer',
    institute: 'Freelance / Remote Work',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
];

import iconFigma from '/images/tools/figma.svg';
import iconCss from '/images/tools/css3.svg';
import iconTailwindcss from '/images/tools/tailwindcss.svg';
import iconReact from '/images/tools/react.svg';
import iconJavascript from '/images/tools/javascript.svg';
import iconNodejs from '/images/tools/nodejs.svg';
import iconExpressjs from '/images/tools/expressjs.svg';
import iconMongodb from '/images/tools/mongodb.svg';

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: iconFigma,
  },
  {
    label: 'CSS',
    imgSrc: iconCss,
  },
  {
    label: 'Tailwind CSS',
    imgSrc: iconTailwindcss,
  },
  {
    label: 'React',
    imgSrc: iconReact,
  },
  {
    label: 'JavaScript',
    imgSrc: iconJavascript,
  },
  {
    label: 'Node.js',
    imgSrc: iconNodejs,
  },
  {
    label: 'Express.js',
    imgSrc: iconExpressjs,
  },
  {
    label: 'Mongodb',
    imgSrc: iconMongodb,
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Work was an absolute pleasure, attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. We consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'We brought my brand vision to life better than I could have imagined. This is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, Olexandra handled every detail flawlessly. problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend here for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
