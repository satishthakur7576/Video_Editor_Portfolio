import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Mail, Phone, Github, Instagram, Youtube, Twitter, Linkedin, Menu, X, ExternalLink, Code, Download, Send, Globe, Sun, Play, MonitorPlay, Film, PenTool, Layers, Clapperboard, Video, Scissors, Camera, Palette, Wand2, Gamepad2, MapPin
} from 'lucide-react';
import { CursorGlow, Magnetic, SectionWrapper, AnimatedBackground } from './components/Effects';

// --- Data ---
const SKILLS = [
  { 
    name: 'Premiere Pro', 
    experience: '3+ Years', 
    techniques: 'Color Grading, Motion Tracking, Pacing', 
    color: 'from-[#ea77ff] to-[#9999ff]',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" className="w-12 h-12" />
  },
  { 
    name: 'After Effects', 
    experience: '2.5+ Years', 
    techniques: 'VFX, Rotoscoping, Kinetic Typography', 
    color: 'from-[#9999ff] to-[#00005b]',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" alt="After Effects" className="w-12 h-12" />
  },
  { 
    name: 'Photoshop', 
    experience: '3+ Years', 
    techniques: 'Compositing, Typography, Color Theory', 
    color: 'from-[#31a8ff] to-[#001e36]',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" className="w-12 h-12" />
  },
  { 
    name: 'Cinematic Editing', 
    experience: '150+ Videos', 
    techniques: 'Storytelling, Sound Sync, Flow', 
    color: 'from-pink-500 to-purple-500',
    icon: <Film className="w-10 h-10 text-white" />
  },
  { 
    name: 'Gaming Content', 
    experience: '2 Channels', 
    techniques: 'Highlight Reels, Montages, Shorts', 
    color: 'from-cyan-400 to-blue-600',
    icon: <Gamepad2 className="w-10 h-10 text-white" />
  },
  { 
    name: 'Thumbnail Design', 
    experience: 'High CTR', 
    techniques: 'A/B Testing, Layouts, Branding', 
    color: 'from-orange-400 to-red-500',
    icon: <Palette className="w-10 h-10 text-white" />
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Cinematic & Anime Edits',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop', // Anime aesthetic placeholder
    tags: ['Premiere Pro', 'After Effects', 'Volt Edits'],
    description: 'Dynamic pacing, smooth transitions, and visual storytelling focused on audience retention for the dedicated Volt Edits YouTube channel.',
    link: 'https://youtube.com/@volt.editsz'
  },
  {
    id: 2,
    title: 'Gaming Content & Shorts',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop', // Gaming aesthetic placeholder
    tags: ['Premiere Pro', 'Sound Design', 'VOLT444'],
    description: 'High-energy gameplay videos, short reels, and social media content tailored to gaming audiences with precise beat-matching.',
    link: 'https://youtube.com/@_volt_444_'
  },
  {
    id: 3,
    title: 'High-CTR Thumbnails',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop', // Graphic design placeholder
    tags: ['Photoshop', 'Graphic Design'],
    description: 'Engaging custom thumbnails designed in Adobe Photoshop to drastically increase click-through rates and channel discoverability.',
    link: 'https://instagram.com/volt.editsz'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'work', 'channels', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Channels', href: '#channels' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#1A1F2E]/60 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <a href="#home" className="text-xl font-black text-white flex items-center gap-1 tracking-tighter">
          SATISH<span className="text-primary-start">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm transition-colors ${activeSection === link.href.substring(1) ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Magnetic strength={0.3}>
            <a href="#contact" className="px-6 py-2 bg-primary-start text-bg-dark font-black rounded-full hover:brightness-110 transition-all text-sm uppercase tracking-wide inline-block">
              Hire Me
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#1A1F2E]/90 backdrop-blur-3xl border border-white/5 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white font-bold p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-3 bg-primary-start text-bg-dark font-black rounded-xl w-full text-center uppercase inline-block">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

const SocialLinks = () => (
  <div className="flex items-center gap-4 mb-10">
    <a href="https://instagram.com/volt.editsz" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.4)]" title="Instagram">
      <Instagram size={22} />
    </a>
    <a href="https://youtube.com/@volt.editsz" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.4)]" title="Volt Edits YouTube">
      <Youtube size={22} />
    </a>
    <a href="https://youtube.com/@_volt_444_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]" title="VOLT444 YouTube">
      <Gamepad2 size={22} />
    </a>
  </div>
);

const FloatingIcon = ({ children, className, delay, duration, yOffset, rotateOffset }: any) => (
  <motion.div
    animate={{ 
      y: [0, yOffset, 0],
      rotate: [0, rotateOffset, 0]
    }}
    transition={{ 
      repeat: Infinity, 
      duration: duration || 5, 
      ease: "easeInOut",
      delay: delay || 0
    }}
    className={`absolute z-20 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${className}`}
  >
    {children}
  </motion.div>
);

const Marquee = () => {
  const text = "CINEMATIC EDITING • GAMING CONTENT • THUMBNAIL DESIGN • SHORT-FORM VIDEOS • SOUND SYNC • ";
  return (
    <div className="w-full bg-primary-start py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10 -rotate-2 scale-110 mt-10 mb-10 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
      <motion.div
        className="text-bg-dark font-black text-2xl tracking-widest flex items-center gap-10"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const wordVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section id="home" className="min-h-screen pt-40 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1 pb-20">
        <div className="z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <SocialLinks />
          </motion.div>
          
          <motion.h1 
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tighter flex flex-wrap gap-x-4"
          >
            <motion.span variants={wordVars} className="block">SATISH</motion.span>
            <motion.span variants={wordVars} className="text-transparent bg-clip-text bg-gradient-to-r from-primary-start via-pink-500 to-purple-500 block">
              THAKUR
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-400 text-xl mb-12 max-w-lg leading-relaxed font-light"
          >
            Engineering precision meets cinematic storytelling. Helping gaming and anime channels maximize retention through high-energy edits, flawless sound design, and data-driven thumbnails.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Magnetic strength={0.2}>
              <a href="#projects" className="px-10 py-5 bg-primary-start text-bg-dark font-black rounded-full hover:brightness-110 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] uppercase tracking-widest text-sm">
                <Play size={20} className="fill-bg-dark" />
                View Projects
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#contact" className="px-10 py-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Let's Collab
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <FloatingIcon className="top-10 -left-4 text-pink-500" delay={0} duration={6} yOffset={-20} rotateOffset={15}>
            <Clapperboard size={28} />
          </FloatingIcon>
          <FloatingIcon className="top-40 -right-8 text-cyan-400" delay={1.5} duration={7} yOffset={25} rotateOffset={-20}>
            <Scissors size={28} />
          </FloatingIcon>
          <FloatingIcon className="bottom-20 -left-12 text-primary-start" delay={0.5} duration={5.5} yOffset={15} rotateOffset={10}>
            <Gamepad2 size={28} />
          </FloatingIcon>
          <FloatingIcon className="bottom-10 right-4 text-purple-400" delay={2} duration={8} yOffset={-25} rotateOffset={-15}>
            <MonitorPlay size={28} />
          </FloatingIcon>
          <FloatingIcon className="top-0 right-10 text-yellow-400 w-12 h-12" delay={1} duration={4} yOffset={10} rotateOffset={30}>
            <Film size={20} />
          </FloatingIcon>

          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full max-w-[650px] aspect-square relative z-0"
          >
            <img 
              src="/hero_avatar_transparent.png" 
              alt="Satish Thakur Avatar" 
              className="w-full h-full object-contain contrast-125 saturate-150 brightness-105" 
              style={{ filter: 'drop-shadow(0 0 50px rgba(249,115,22,0.5)) drop-shadow(0 0 100px rgba(236,72,153,0.3))' }}
            />
          </motion.div>
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1 relative"
        >
           <motion.div 
             animate={{ y: [-15, 15, -15] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
             className="w-full max-w-[650px] mx-auto aspect-square relative z-0"
           >
            <img 
              src="/project2.png" 
              alt="Digital Artist Avatar" 
              className="w-full h-full object-contain contrast-125 saturate-150 brightness-105" 
              style={{ filter: 'drop-shadow(0 0 50px rgba(249,115,22,0.4)) drop-shadow(0 0 100px rgba(168,85,247,0.3))' }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 z-10"
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">THE <span className="text-primary-start">ENGINEER'S</span> CUT</h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-light text-xl">
            I am a final-year Mechanical Engineering student at Golaghat Engineering College (Assam, India) with a deep passion for visual storytelling. I apply an engineering mindset—precision, adaptability, and an ability to learn fast—to video editing. My goal is always to maximize audience engagement and retention through dynamic pacing and sound synchronization.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12 text-center lg:text-left">
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">150+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Videos Edited</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">3+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years Exp.</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">10K+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Subscribers</p>
            </div>
          </div>

          <a href="#experience" className="px-10 py-5 border border-primary-start/50 bg-primary-start/10 text-primary-start font-black rounded-full hover:bg-primary-start hover:text-bg-dark transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(249,115,22,0.15)] inline-block">
            View My Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Content Creator & Video Editor',
      company: 'Volt Edits (YouTube)',
      date: '2023 - Present',
      points: [
        'Produced cinematic edits, anime edits, and short-form content for a dedicated YouTube audience.',
        'Focused on dynamic pacing, smooth transitions, and visual storytelling to maximize audience engagement and retention.',
        'Managed end-to-end content production pipeline from raw footage to final upload-ready videos using Adobe Premiere Pro and After Effects.'
      ]
    },
    {
      role: 'Gaming Content Editor',
      company: 'VOLT444 (YouTube)',
      date: '2023 - Present',
      points: [
        'Edited gameplay videos, short reels, and social media content tailored to gaming audiences.',
        'Designed engaging thumbnails using Adobe Photoshop to increase click-through rates and channel discoverability.',
        'Applied precise sound synchronization and beat-matching techniques to enhance viewer experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">PROFESSIONAL <span className="text-primary-start">EXPERIENCE</span></h2>
          <p className="text-gray-400 font-light text-xl">My ongoing journey as a creator and editor.</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:border-primary-start/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <p className="text-primary-start font-bold uppercase tracking-wider text-sm mt-1">{exp.company}</p>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium text-sm whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
              <ul className="space-y-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4 text-gray-400 font-light leading-relaxed">
                    <span className="text-primary-start mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-start/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">THE <span className="text-primary-start">ARSENAL</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-xl">
            My creative stack. High-end tools and techniques engineered for maximum viewer retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.color} rounded-[2rem] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`}></div>
              
              <div className="relative bg-[#0a0f18]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 h-full shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:bg-[#111724]">
                
                {/* Background Watermark Icon */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-500 group-hover:scale-110 pointer-events-none scale-[3]">
                  {skill.icon}
                </div>
                
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-[#0a0f18] rounded-2xl flex items-center justify-center">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-2xl tracking-tight mb-1">{skill.name}</h3>
                    <div className="text-primary-start font-bold uppercase tracking-widest text-xs">{skill.experience}</div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="mt-6 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    <span className="text-white/40 font-medium text-xs uppercase tracking-widest block mb-3">Key Techniques</span>
                    <div className="flex flex-wrap gap-2">
                      {skill.techniques.split(', ').map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 font-light shadow-sm group-hover:bg-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedWorkSection = () => {
  const videos = [
    { id: 'jfKfPfyJRdk', title: 'Cinematic Edit Showcase' },
    { id: 'dQw4w9WgXcQ', title: 'High-Energy Gaming Montage' },
    { id: 'jfKfPfyJRdk', title: 'Anime Edit Mastery' }
  ];

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">FEATURED <span className="text-primary-start">WORK</span></h2>
          <p className="text-gray-400 font-light text-xl max-w-2xl mx-auto">Watch my best edits directly. No redirects, just pure cinematic pacing and flawless sound design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((vid, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/50 border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="aspect-video relative bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{vid.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ThumbnailGallerySection = () => {
  const thumbnails = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <section id="thumbnails" className="py-32 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">HIGH-CTR <span className="text-primary-start">THUMBNAILS</span></h2>
          <p className="text-gray-400 font-light text-xl max-w-2xl mx-auto">Custom designs engineered in Photoshop to drastically increase click-through rates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {thumbnails.map((thumb, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.2)] hover:border-primary-start/40 transition-all"
            >
              <img src={thumb} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChannelsSection = () => {
  return (
    <section id="channels" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">FEATURED <span className="text-primary-start">CHANNELS</span></h2>
          <p className="text-gray-400 font-light text-xl">The platforms where I actively produce and edit content.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 max-w-6xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden group hover:border-primary-start/30 transition-colors flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(249,115,22,0.1)] cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100 contrast-110 saturate-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 pr-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] uppercase tracking-wider font-bold px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-[#0a0f18] to-transparent">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{project.title}</h3>
                <p className="text-base text-gray-400 mb-10 flex-1 font-light leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 text-center text-sm font-black bg-primary-start text-bg-dark rounded-xl hover:brightness-110 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <Play size={18} className="fill-bg-dark" /> View Channel
                  </button>
                  <button className="w-14 h-14 flex items-center justify-center border border-white/10 bg-white/[0.02] rounded-xl text-white hover:border-white/30 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:satishthakur7576@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            className="w-full max-w-[550px] aspect-square relative"
          >
            <img 
              src="/project3.png" 
              alt="Contact Avatar" 
              className="w-full h-full object-contain contrast-125 saturate-150 brightness-105" 
              style={{ filter: 'drop-shadow(0 0 50px rgba(249,115,22,0.4)) drop-shadow(0 0 80px rgba(249,115,22,0.2))' }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">LET'S <span className="text-primary-start">ROLL</span></h2>
            <p className="text-gray-400 text-xl font-light mb-8">Ready to start your next visual project? Drop a message.</p>
            
            <div className="flex flex-col gap-4 text-gray-300 font-medium">
              <a href="mailto:satishthakur7576@gmail.com" className="flex items-center gap-3 hover:text-primary-start transition-colors">
                <Mail className="text-primary-start" size={20} /> satishthakur7576@gmail.com
              </a>
              <a href="tel:+919954072642" className="flex items-center gap-3 hover:text-primary-start transition-colors">
                <Phone className="text-primary-start" size={20} /> +91-9954072642
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-start" size={20} /> Assam, India
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="firstName" onChange={handleChange} type="text" placeholder="First Name" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
              <input required name="lastName" onChange={handleChange} type="text" placeholder="Last Name" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required name="email" onChange={handleChange} type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
              <input name="phone" onChange={handleChange} type="tel" placeholder="Phone Number" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
            </div>
            <textarea required name="message" onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all resize-none placeholder-gray-600 font-light text-lg"></textarea>
            <button type="submit" className="w-full py-5 bg-primary-start text-bg-dark font-black rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              {status === 'success' ? 'Message Sent!' : <><Send size={22} /> Send Brief</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#05080f] py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <a href="#home" className="text-4xl font-black text-white flex items-center justify-center md:justify-start gap-1 tracking-tighter">
            SATISH<span className="text-primary-start">.</span>
          </a>
          <p className="text-sm text-gray-500 mt-3 font-light tracking-wide">Video Editor & Content Creator</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-400 font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-primary-start transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-start transition-colors">Story</a>
          <a href="#projects" className="hover:text-primary-start transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary-start transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com/volt.editsz" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Instagram size={20} /></a>
          <a href="https://youtube.com/@volt.editsz" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Youtube size={20} /></a>
          <a href="mailto:satishthakur7576@gmail.com" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Mail size={20} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-16 font-medium tracking-widest uppercase">
        &copy; 2026 Satish Thakur. Crafted with precision.
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
    <div className="bg-[#0a0f18] min-h-screen text-gray-300 font-sans selection:bg-primary-start selection:text-bg-dark">
      <AnimatedBackground />
      <CursorGlow />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-primary-end to-primary-start origin-left z-[9999]" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <FeaturedWorkSection />
        <ThumbnailGallerySection />
        <ChannelsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
