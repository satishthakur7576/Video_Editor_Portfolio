import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, Phone, MapPin, Linkedin, Github, Instagram,
  User, FileText, Briefcase, BookOpen, Send,
  Layout, Code, Smartphone, Camera,
  Download, ExternalLink, ChevronRight, X, Sparkles
} from 'lucide-react';
import { Tab, Service, TimelineItem, Skill, Project, BlogPost } from './types';
import { CursorGlow, Magnetic, SectionWrapper, Parallax } from './components/Effects';

// --- Constants ---

const PROJECTS: Project[] = [
  {
    id: 'cad-modeling',
    title: '3D CAD Modeling \u2013 Mechanical Components',
    category: '3D CAD Modeling',
    image: 'https://picsum.photos/seed/cad/800/600',
    description: 'Designed 3D part models and multi-component assemblies using SolidWorks, applying GD&T principles and generating production-ready engineering drawings with proper tolerances and annotations.',
    technologies: ['SolidWorks', '3D Modeling', 'GD&T', 'Assemblies'],
    gallery: ['https://picsum.photos/seed/cad1/800/600', 'https://picsum.photos/seed/cad2/800/600']
  },
  {
    id: '2d-drafting',
    title: '2D Engineering Drafting',
    category: '2D Drafting',
    image: 'https://picsum.photos/seed/draft/800/600',
    description: 'Created detailed 2D mechanical drawings including cross-sections, exploded views, and bill of materials (BOM) for machine components using AutoCAD Mechanical.',
    technologies: ['AutoCAD Mechanical', '2D Drafting', 'BOM', 'Cross-sections'],
    gallery: ['https://picsum.photos/seed/draft1/800/600', 'https://picsum.photos/seed/draft2/800/600']
  },
  {
    id: 'python-automation',
    title: 'Python Automation Scripts',
    category: 'Automation Scripts',
    image: 'https://picsum.photos/seed/python/800/600',
    description: 'Developed Python scripts for logical problem-solving and basic task automation, building a foundation for data-driven engineering workflows and process optimization.',
    technologies: ['Python', 'Scripting', 'Automation', 'Data Processing'],
    gallery: ['https://picsum.photos/seed/python1/800/600', 'https://picsum.photos/seed/python2/800/600']
  }
];

// --- Components ---

const Typewriter = ({ texts, speed = 50, delayBetween = 2000 }: { texts: string[]; speed?: number; delayBetween?: number }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = texts[textIndex];
    const updatedText = isDeleting
      ? fullText.substring(0, displayedText.length - 1)
      : fullText.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [displayedText, isDeleting, textIndex, texts, delayBetween]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, speed]);

  return (
    <span className="primary-text font-bold">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-1 h-5 ml-1 bg-primary-start align-middle"
      />
    </span>
  );
};

const IconSidebar = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (t: Tab) => void }) => {
  const tabs: { name: Tab, icon: React.ReactNode }[] = [
    { name: 'About', icon: <User size={20} /> },
    { name: 'Resume', icon: <FileText size={20} /> },
    { name: 'Portfolio', icon: <Briefcase size={20} /> },
    { name: 'Blog', icon: <BookOpen size={20} /> },
    { name: 'Contact', icon: <Mail size={20} /> },
  ];
  const navigate = useNavigate();

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.name);
    navigate('/');
  };

  const location = useLocation();
  const isProjectModal = location.pathname.startsWith('/project/');

  return (
    <aside className={`w-full lg:w-20 bg-bg-card/80 backdrop-blur-2xl border border-border-dark rounded-[2rem] py-6 px-4 flex lg:flex-col items-center justify-center gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-fit lg:sticky lg:top-[50vh] lg:-translate-y-1/2 z-40 transition-opacity duration-300 ${isProjectModal ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab)}
            className={`relative p-3 rounded-xl transition-all duration-300 group ${isActive ? 'bg-primary-start/10 text-primary-start shadow-[0_0_15px_rgba(0,229,255,0.2)]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            title={tab.name}
          >
            {tab.icon}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 border border-primary-start/30 rounded-xl pointer-events-none"
              />
            )}
          </button>
        );
      })}
    </aside>
  );
};

const ProjectModal = ({ projects }: { projects: Project[] }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
      onClick={() => navigate('/')}
    >
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center text-white transition-all z-[110] border border-white/10 shadow-2xl group hover:scale-110 active:scale-95"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-bg-card border border-border-dark w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 sm:p-12">
          <div className="aspect-video rounded-[2rem] overflow-hidden mb-10 bg-border-dark shadow-2xl border border-white/5 relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>

              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <Sparkles size={20} className="text-primary-start" />
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-video rounded-2xl overflow-hidden bg-border-dark border border-white/5 shadow-xl group cursor-zoom-in">
                      <img src={img} alt={`${project.title} ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-4">Category</h4>
                <p className="text-primary-start font-medium">{project.category}</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-border-dark/50 border border-white/5 rounded-xl text-xs font-medium text-gray-300 hover:text-primary-start hover:border-primary-start/30 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Magnetic strength={0.2}>
                <button className="w-full py-4 primary-gradient text-bg-dark font-bold rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-start/20 active:scale-95">
                  <ExternalLink size={18} />
                  Live Preview
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Sections ---

const AboutSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-16">
        <Parallax offset={20}>
          <div className="relative mb-8 group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-primary-start/50 shadow-[0_0_30px_rgba(0,229,255,0.3)] bg-border-dark flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/richard/200/200"
                alt="Satish Thakur"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-primary-start/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full pointer-events-none" />
          </div>
        </Parallax>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Hi, I'm <span className="text-primary-start">Satish Thakur</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-light text-gray-300 mb-8 flex items-center justify-center gap-2"
        >
          I'm a <Typewriter texts={['Mechanical Engineer', 'CAD Designer', 'Python Developer']} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-gray-400 leading-relaxed mb-10 max-w-2xl px-4"
        >
          Final-year B.Tech Mechanical Engineering student with hands-on CAD experience in SolidWorks and AutoCAD. 
          I create detailed 3D models, responsive mechanical designs, and use Python for automation.
          Passionate about clean engineering and optimized workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 items-center"
        >
          <Magnetic strength={0.3}>
            <button className="px-6 py-3 bg-primary-start text-bg-dark font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
              View My Work
            </button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <button className="px-6 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-white/5 transition-all">
              Download CV
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

const ResumeSection = () => {
  const skills: Skill[] = [
    { name: 'React', percentage: 90 },
    { name: 'Tailwind', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'Vue', percentage: 95 },
  ];

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-square rounded-[3rem] bg-border-dark flex items-center justify-center relative shadow-2xl border border-white/5 overflow-hidden group">
             <img src="https://picsum.photos/seed/skills/800/800" alt="Skills" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-primary-start/10 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Skills
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-12">
            I'm a passionate web developer with over 3 years of experience creating modern, responsive web applications. I specialize in frontend development using cutting-edge technologies to deliver exceptional user experiences.
          </p>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-bold text-gray-300 flex items-center gap-3">
                    <Code size={16} className="text-primary-start" />
                    {skill.name}
                  </span>
                  <span className="text-sm text-primary-start font-medium">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-bg-dark rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full bg-primary-start shadow-[0_0_15px_rgba(0,229,255,0.8)] rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/40" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          My Portfolio
        </h2>
        <p className="text-sm md:text-base text-gray-400">
          A collection of my recent projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-[#141922] border border-white/5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all flex flex-col hover:border-primary-start/30"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative aspect-[4/3] bg-border-dark overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-start/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col bg-[#1A1F2E]">
                <h4 className="text-base font-bold mb-2 text-white group-hover:text-primary-start transition-colors line-clamp-1">{project.title}</h4>
                <p className="text-xs text-gray-400 line-clamp-2 mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#141922] border border-white/5 rounded-full text-[10px] font-medium text-gray-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#141922] border border-white/5 rounded-full text-[10px] font-medium text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

const BlogSection = () => {
  const posts: BlogPost[] = [
    {
      title: 'Design Conferences In 2022',
      category: 'Design',
      date: 'Feb 23, 2022',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: 'https://picsum.photos/seed/conf/600/400'
    },
    {
      title: 'Best Fonts Every Designer',
      category: 'Design',
      date: 'Feb 23, 2022',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      image: 'https://picsum.photos/seed/fonts/600/400'
    },
    {
      title: 'Design Digest #80',
      category: 'Design',
      date: 'Feb 23, 2022',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam.',
      image: 'https://picsum.photos/seed/digest/600/400'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h2 className="text-3xl font-bold mb-10 relative inline-block">
        Blog
        <div className="absolute -bottom-2 left-0 w-12 h-1.5 primary-gradient rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-bg-card border border-border-dark rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span>{post.category}</span>
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{post.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary-start transition-colors">{post.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{post.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/satishthakur7576@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <h2 className="text-3xl font-bold mb-8 relative inline-block">
        Contact
        <div className="absolute -bottom-2 left-0 w-12 h-1.5 primary-gradient rounded-full" />
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden h-80 border border-border-dark grayscale brightness-50 contrast-125"
      >
        <iframe
          src="https://maps.google.com/maps?q=Jorhat,%20Assam&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8">Contact Form</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl font-sm font-medium">
              Message sent! Check your email inbox to verify FormSubmit if this is the first ever send.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-sm font-medium">
              Something went wrong. Please email directly!
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              className="w-full px-6 py-4 bg-transparent border border-border-dark rounded-2xl focus:outline-none focus:border-primary-start transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full px-6 py-4 bg-transparent border border-border-dark rounded-2xl focus:outline-none focus:border-primary-start transition-colors"
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-6 py-4 bg-transparent border border-border-dark rounded-2xl focus:outline-none focus:border-primary-start transition-colors resize-none"
          />
          <div className="flex justify-end">
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 px-8 py-4 primary-gradient text-bg-dark font-bold rounded-2xl hover:brightness-110 transition-all group shadow-lg active:shadow-none disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.section>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About': return <AboutSection />;
      case 'Resume': return <ResumeSection />;
      case 'Portfolio': return <PortfolioSection />;
      case 'Blog': return <BlogSection />;
      case 'Contact': return <ContactSection />;
    }
  };

  return (
    <HashRouter>
      <CursorGlow />
      <div className="min-h-screen py-8 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center lg:items-start relative z-10">
        <IconSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 w-full bg-bg-card/90 backdrop-blur-2xl border border-border-dark rounded-[2.5rem] flex flex-col min-h-[700px] relative shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="p-8 lg:p-16 flex-1">
            <AnimatePresence mode="wait">
              <div key={activeTab}>
                {renderContent()}
              </div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <Parallax offset={-100}>
          <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary-start/5 rounded-full blur-[120px]" />
        </Parallax>
        <Parallax offset={150}>
          <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-primary-end/5 rounded-full blur-[150px]" />
        </Parallax>
      </div>

      <AnimatePresence>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectModal projects={PROJECTS} />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}
