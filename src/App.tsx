import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Mail, Phone, Github, Instagram, Youtube, Twitter, Linkedin, Menu, X, ExternalLink, Code, Download, Send, Globe, Sun
} from 'lucide-react';
import { CursorGlow, Magnetic, SectionWrapper, AnimatedBackground } from './components/Effects';

// Custom SVG Icons for Brands
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="1em" height="1em">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.24-.02-.48-.02-.72 0-.25.01-.5.02-.75.18-2.31 1.63-4.39 3.69-5.49 1.17-.63 2.53-.94 3.86-.88.02 1.4.01 2.8.01 4.2-.74-.08-1.5.09-2.12.51-.76.51-1.25 1.35-1.31 2.27-.05.9.36 1.78 1.05 2.37.76.65 1.83.84 2.81.56 1.02-.29 1.8-1.15 2.05-2.18.06-.24.08-.49.08-.74V.02z" />
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF2D20" className="w-5 h-5">
    <path d="M22.6 10l-9.5-6c-1-.6-2.2-.6-3.2 0l-9.5 6C.1 10.2 0 10.6 0 11v8c0 .8.5 1.5 1.2 1.8l9.5 6c1 .6 2.2.6 3.2 0l9.5-6c.7-.4 1.2-1 1.2-1.8v-8c0-.4-.1-.8-.4-1zM12 23l-8.5-5.3V11.7L12 17.5l8.5-5.8v6L12 23zM12 16L3.5 10.2 12 4.9l8.5 5.3L12 16z" />
  </svg>
);

const FramerMotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0055FF" className="w-5 h-5">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" fill="#4FC08D" className="w-5 h-5">
    <path d="M14.28 1L12 4.95 9.72 1H2L12 18.29 22 1zM12 12L8.28 5.61H5.45L12 16.91l6.55-11.3h-2.83z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-5 h-5">
    <path d="M11.95 18c-5.71 0-10.42-2.13-10.42-4.75S6.24 8.5 11.95 8.5s10.42 2.13 10.42 4.75S17.66 18 11.95 18zm0-8.5c-4.94 0-8.92 1.68-8.92 3.75s3.98 3.75 8.92 3.75 8.92-1.68 8.92-3.75-3.98-3.75-8.92-3.75z" />
    <path d="M12.05 18.08c-2.85 2.47-5.18 5.6-5.18 8.67s1.42 4.25 3.17 4.25c1.75 0 4.09-1.18 5.18-8.67s-1.42-4.25-3.17-4.25zm-2.02 11.8c-.89 0-1.67-.6-1.67-2.75 0-2.31 1.76-4.92 4.03-7.1.58 4.29-1.47 9.85-2.36 9.85z" />
    <path d="M11.95 5.92C9.1 3.45 6.77.32 6.77-2.75s1.42-4.25 3.17-4.25c1.75 0 4.09 1.18 5.18 8.67S13.7 5.92 11.95 5.92zM9.93-5.88c-.89 0-1.67.6-1.67 2.75 0 2.31 1.76 4.92 4.03 7.1.58-4.29-1.47-9.85-2.36-9.85z" />
    <circle cx="12" cy="13.25" r="2.25" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="#38BDF8" className="w-5 h-5">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFCA28" className="w-5 h-5">
    <path d="M3.89 15.67l3.22-10.2c.2-.64 1.11-.64 1.32 0l1.43 4.54L3.89 15.67z" fill="#FFA000" />
    <path d="M12.43 8.16L10.36 4.1c-.26-.49-.97-.49-1.23 0l-1.07 2.06 4.37 2z" fill="#F57C00" />
    <path d="M3.89 15.67l7.56 14.15c.29.54 1.07.54 1.36 0l8.3-15.53-17.22 1.38z" fill="#FFCA28" />
    <path d="M21.11 14.29l-6.8-12.7c-.25-.48-.96-.48-1.22 0l-3.23 6.04 11.25 6.66z" fill="#FFA000" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="#3776AB" className="w-5 h-5">
    <path d="M11.95 1.54C5.64 1.54 5.64 4.36 5.64 4.36l.03 2.94h6.35v.42H4.45s-3.03-.13-3.03 4.37c0 4.5 2.65 4.35 2.65 4.35h1.86v-3.08s-.05-3.5 3.44-3.5h5.36s3.16.03 3.16-3.15V4.68s.16-3.14-5.94-3.14zm-1.69 1.95a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88z" fill="#387EB8"/>
    <path d="M12.18 22.46c6.31 0 6.31-2.82 6.31-2.82l-.03-2.94h-6.35v-.42h7.57s3.03.13 3.03-4.37c0-4.5-2.65-4.35-2.65-4.35h-1.86v3.08s.05 3.5-3.44 3.5H9.4s-3.16-.03-3.16 3.15v2.03s-.16 3.14 5.94 3.14zm1.69-1.95a.94.94 0 1 1 0-1.88.94.94 0 0 1 0 1.88z" fill="#FFE873"/>
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" fill="#646CFF" className="w-5 h-5">
    <path d="M23.16 3.1L21.32.83l-8.9 22.42h-1.12L2.57.83l-1.81 2.27L11.75 24l11.41-20.9zm-2.02.43l-9.35 17.5-9.28-17.5 1.4-1.74 7.88 15.17L19.73 1.8z" />
  </svg>
);


// --- Data ---
const SKILLS = [
  { name: 'laravel', percentage: 95, icon: <LaravelIcon /> },
  { name: 'framer_motion', percentage: 80, icon: <FramerMotionIcon /> },
  { name: 'vue', percentage: 88, icon: <VueIcon /> },
  { name: 'React', percentage: 89, icon: <ReactIcon /> },
  { name: 'Tailwind CSS', percentage: 92, icon: <TailwindIcon /> },
  { name: 'firebase.js', percentage: 85, icon: <FirebaseIcon /> },
  { name: 'Python', percentage: 77, icon: <PythonIcon /> },
  { name: 'vite', percentage: 90, icon: <ViteIcon /> },
];

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: 'https://picsum.photos/seed/ecom/600/400',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'Full-featured e-commerce platform with payment gateway integration.'
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    image: 'https://picsum.photos/seed/fit/600/400',
    tags: ['React Native', 'Firebase'],
    description: 'Mobile fitness app with workout plans and progress tracking.'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    image: 'https://picsum.photos/seed/ai/600/400',
    tags: ['Python', 'OpenAI', 'React'],
    description: 'AI-powered content generation tool for marketers and bloggers.'
  },
  {
    id: 4,
    title: 'Crypto Dashboard',
    image: 'https://picsum.photos/seed/crypto/600/400',
    tags: ['Vue.js', 'Chart.js', 'API'],
    description: 'Real-time crypto tracking dashboard with interactive charts.'
  },
  {
    id: 5,
    title: 'Task Management',
    image: 'https://picsum.photos/seed/task/600/400',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'Collaborative task management system for remote teams.'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    image: 'https://picsum.photos/seed/real/600/400',
    tags: ['React', 'Tailwind', 'Firebase'],
    description: 'Virtual real estate platform with 3D property tours.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#1A1F2E]/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <a href="#home" className="text-xl font-bold text-white flex items-center gap-1">
          Portfolio<span className="text-primary-start">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Sun size={18} className="text-gray-300" />
          </button>
          <button className="px-6 py-2 bg-primary-start text-bg-dark font-bold rounded-full hover:brightness-110 transition-all text-sm">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1A1F2E] border border-white/5 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-3 bg-primary-start text-bg-dark font-bold rounded-xl w-full text-center">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

const SocialLinks = () => (
  <div className="flex items-center gap-4 mb-8">
    <a href="#" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
      <Instagram size={20} />
    </a>
    <a href="#" className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white hover:scale-110 transition-transform border border-white/10">
      <TikTokIcon className="w-5 h-5" />
    </a>
    <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-white hover:scale-110 transition-transform border border-white/10">
      <Github size={20} />
    </a>
    <a href="#" className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
      <Youtube size={20} />
    </a>
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SocialLinks />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm Satish Thakur
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut aperiam quia dignissimos corrupti, hic fugit, eveniet reprehenderit possimus voluptatum tenetur provident consequuntur!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Magnetic strength={0.2}>
              <a href="#" className="px-8 py-4 bg-primary-start text-bg-dark font-bold rounded-full hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                <Download size={20} />
                Download CV
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[500px] aspect-square relative drop-shadow-2xl">
            <img src="/hero_avatar.png" alt="Hero Avatar" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1 relative"
        >
           <div className="w-full max-w-[500px] mx-auto aspect-square relative drop-shadow-2xl">
            <img src="/about_avatar.png" alt="About Avatar" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit expedita blanditiis temporibus nostrum nulla fugit consequuntur! Ullam earum perspiciatis sit ea, asperiores dolorum illum temporibus quidem? Iusto, officia mollita!
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-primary-start mb-1">5+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Education</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-start mb-1">10+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-start mb-1">100+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</p>
            </div>
          </div>

          <button className="px-8 py-3 border border-gray-600 text-white font-bold rounded-full hover:bg-white/5 transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1F2E] border border-white/5 rounded-2xl p-6 hover:border-primary-start/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center border border-white/5">
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium">{skill.name}</h3>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-500">Proficiency</span>
                  <span className="text-primary-start font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary-start rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400">A showcase of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1F2E] border border-white/5 rounded-2xl overflow-hidden group hover:border-primary-start/30 transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1">{project.description}</p>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 py-2 text-center text-sm font-medium border border-gray-600 rounded-lg text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <Code size={16} /> Code
                  </a>
                  <a href="#" className="flex-1 py-2 text-center text-sm font-bold bg-primary-start text-bg-dark rounded-lg hover:brightness-110 transition-colors flex items-center justify-center gap-2">
                    <Globe size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-primary-start text-bg-dark font-bold rounded-full hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <ExternalLink size={18} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative drop-shadow-2xl flex justify-center"
        >
          <div className="w-full max-w-[400px] aspect-square">
            <img src="/contact_avatar.png" alt="Contact Avatar" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">Let's discuss your project</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-[#1A1F2E] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-start/50 transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full bg-[#1A1F2E] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-start/50 transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email Address" className="w-full bg-[#1A1F2E] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-start/50 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-[#1A1F2E] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-start/50 transition-colors" />
            </div>
            <textarea placeholder="Your Message" rows={5} className="w-full bg-[#1A1F2E] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-start/50 transition-colors resize-none"></textarea>
            <button className="w-full py-4 bg-primary-start text-bg-dark font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f141e] py-10 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#home" className="text-2xl font-bold text-white flex items-center gap-1">
            Portfolio<span className="text-primary-start">.</span>
          </a>
          <p className="text-sm text-gray-500 mt-2">Full Stack Developer & UI/UX Designer</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; 2026 Satish Thakur. All rights reserved.
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg-dark min-h-screen text-gray-300 font-sans selection:bg-primary-start selection:text-bg-dark">
      <AnimatedBackground />
      <CursorGlow />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-start origin-left z-[9999]" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
