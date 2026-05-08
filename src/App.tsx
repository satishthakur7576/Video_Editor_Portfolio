import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Mail, Phone, Github, Instagram, Youtube, Twitter, Linkedin, Menu, X, ExternalLink, Code, Download, Send, Globe, Sun, Play, MonitorPlay, Film, PenTool, Layers, Clapperboard, Video, Scissors, Camera, Palette, Wand2
} from 'lucide-react';
import { CursorGlow, Magnetic, SectionWrapper, AnimatedBackground } from './components/Effects';

// Custom SVG Icons for Creative Tools
const PremiereIcon = () => (
  <svg viewBox="0 0 24 24" fill="#9999FF" className="w-6 h-6">
    <path d="M0 0h24v24H0V0z" fill="#00005B"/>
    <path d="M6.2 16.5v-9h4.8c1.3 0 2.2.3 2.8.8.7.6 1 1.4 1 2.5 0 1.1-.3 1.9-1 2.5-.6.6-1.6.8-2.8.8H8.5v2.4H6.2zm2.3-4.2h2.2c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.4-.4H8.5v3.2z" fill="#E685FF"/>
    <path d="M15.5 16.5v-6.6h2.2v1.1c.3-.5.7-.8 1.2-1 .5-.2 1-.3 1.5-.3v2.3c-.2 0-.4-.1-.7-.1-.6 0-1.1.2-1.5.5-.4.4-.6 1-.6 1.7v2.4h-2.1z" fill="#E685FF"/>
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#9999FF" className="w-6 h-6">
    <path d="M0 0h24v24H0V0z" fill="#00005B"/>
    <path d="M9.8 16.5l-1.3-3.6H4.3l-1.2 3.6H1l5.5-13h2.3l5.3 13H9.8zm-2-5.4l-1.4-3.9c-.1-.2-.6-.3-1h-.1c-.1.4-.2.8-.3 1l-1.4 3.9h3.5z" fill="#D291FF"/>
    <path d="M14.5 16.5v-9h5.6v2H16.8v1.6h2.8v1.8h-2.8v1.8h3.1v1.8h-5.4z" fill="#D291FF"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="#31A8FF" className="w-6 h-6">
    <path d="M0 0h24v24H0V0z" fill="#001E36"/>
    <path d="M6.2 16.5v-9h4.8c1.3 0 2.2.3 2.8.8.7.6 1 1.4 1 2.5 0 1.1-.3 1.9-1 2.5-.6.6-1.6.8-2.8.8H8.5v2.4H6.2zm2.3-4.2h2.2c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.4-.4H8.5v3.2z" fill="#31A8FF"/>
    <path d="M19.7 13.9c0 1-.3 1.7-.8 2.3-.6.6-1.4.9-2.5.9-.6 0-1.1-.1-1.6-.3-.5-.2-.9-.6-1.1-1l1.5-1.4c.4.5.8.7 1.3.7.3 0 .5-.1.7-.2.1-.1.2-.3.2-.5 0-.2-.1-.4-.3-.5-.1-.1-.6-.3-1.4-.5-1.1-.3-1.8-.7-2.2-1.1-.4-.4-.6-1-.6-1.7 0-.9.3-1.6.9-2.1.6-.5 1.4-.8 2.3-.8.6 0 1.1.1 1.6.3.5.2.9.5 1.2.9l-1.6 1.3c-.3-.4-.7-.5-1.2-.5-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5 0 .2.1.3.3.4.1.1.5.3 1.3.5 1.1.3 1.8.7 2.2 1.1.4.4.6 1 .6 1.7z" fill="#31A8FF"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A00" className="w-6 h-6">
    <path d="M0 0h24v24H0V0z" fill="#330000"/>
    <path d="M6 16.5V7.5h2.3v9H6z" fill="#FF9A00"/>
    <path d="M7.1 6.3c-.4 0-.8-.1-1.1-.4-.3-.3-.4-.6-.4-1.1 0-.4.1-.8.4-1.1.3-.3.7-.4 1.1-.4s.8.1 1.1.4c.3.3.4.7.4 1.1 0 .4-.1.8-.4 1.1-.3.3-.7.4-1.1.4z" fill="#FF9A00"/>
    <path d="M12.4 16.5V7.5h2.3v9h-2.3z" fill="#FF9A00"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M8 12.5a4 4 0 1 0 0-8h4v8H8z" fill="#F24E1E"/>
    <path d="M12 4.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="#FF7262"/>
    <path d="M12 12.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="#A259FF"/>
    <path d="M8 20.5a4 4 0 1 0 0-8h4v8H8z" fill="#1ABCFE"/>
    <path d="M12 20.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#0ACF83"/>
  </svg>
);

const DaVinciIcon = () => (
  <svg viewBox="0 0 24 24" fill="#1ABCFE" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#1ABCFE" strokeWidth="2"/>
    <path d="M10 8l6 4-6 4V8z" fill="#1ABCFE"/>
  </svg>
);


// --- Data ---
const SKILLS = [
  { name: 'Premiere Pro', percentage: 95, icon: <PremiereIcon /> },
  { name: 'After Effects', percentage: 90, icon: <AfterEffectsIcon /> },
  { name: 'Photoshop', percentage: 88, icon: <PhotoshopIcon /> },
  { name: 'Illustrator', percentage: 85, icon: <IllustratorIcon /> },
  { name: 'DaVinci Resolve', percentage: 92, icon: <DaVinciIcon /> },
  { name: 'Figma', percentage: 85, icon: <FigmaIcon /> },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Neon Nights Ad Campaign',
    image: 'https://picsum.photos/seed/ad/600/400',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading'],
    description: 'A high-energy, fast-paced commercial edit for a streetwear clothing brand featuring aggressive motion graphics and cinematic color grading.'
  },
  {
    id: 2,
    title: 'Echoes - Short Film',
    image: 'https://picsum.photos/seed/film/600/400',
    tags: ['DaVinci Resolve', 'Sound Design'],
    description: 'Complete post-production, including raw footage ingestion, multi-cam editing, atmospheric sound design, and HDR color grading.'
  },
  {
    id: 3,
    title: 'Aura Brand Identity',
    image: 'https://picsum.photos/seed/brand/600/400',
    tags: ['Illustrator', 'Figma', 'Photoshop'],
    description: 'Comprehensive brand identity design from logo conception to digital assets, typography, and social media templates.'
  },
  {
    id: 4,
    title: 'Cyberpunk UI Elements',
    image: 'https://picsum.photos/seed/ui/600/400',
    tags: ['After Effects', 'Figma'],
    description: 'Designed and animated a suite of futuristic, sci-fi Heads Up Display (HUD) elements for a gaming live-stream overlay.'
  },
  {
    id: 5,
    title: 'Documentary Breakdown',
    image: 'https://picsum.photos/seed/doc/600/400',
    tags: ['Premiere Pro', 'Audio Mixing'],
    description: 'Edited a 20-minute mini-documentary focused on pacing, emotional narrative structuring, and dialogue cleanup.'
  },
  {
    id: 6,
    title: 'Festival Promo Video',
    image: 'https://picsum.photos/seed/fest/600/400',
    tags: ['Premiere', 'VFX', 'Motion Graphics'],
    description: 'A hype-reel promo featuring kinetic typography, speed-ramping, and seamless transitions to drive ticket sales.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="bg-[#1A1F2E]/60 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <a href="#home" className="text-xl font-black text-white flex items-center gap-1 tracking-tighter">
          CREATIVE<span className="text-primary-start">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Magnetic strength={0.3}>
            <button className="px-6 py-2 bg-primary-start text-bg-dark font-black rounded-full hover:brightness-110 transition-all text-sm uppercase tracking-wide">
              Hire Me
            </button>
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
          <button className="px-6 py-3 bg-primary-start text-bg-dark font-black rounded-xl w-full text-center uppercase">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

const SocialLinks = () => (
  <div className="flex items-center gap-4 mb-10">
    <a href="#" className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.4)]">
      <Instagram size={22} />
    </a>
    <a href="#" className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.4)]">
      <Youtube size={22} />
    </a>
    <a href="#" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]">
      <MonitorPlay size={22} />
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
  const text = "MOTION GRAPHICS • VFX • SOUND DESIGN • COLOR GRADING • CINEMATOGRAPHY • ";
  return (
    <div className="w-full bg-primary-start py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10 -rotate-2 scale-110 mt-10 mb-10 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
      <motion.div
        className="text-bg-dark font-black text-2xl tracking-widest flex items-center gap-10"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
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
  // Staggered text animation variants
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
            <motion.span variants={wordVars} className="block">CRAFTING</motion.span>
            <motion.span variants={wordVars} className="text-transparent bg-clip-text bg-gradient-to-r from-primary-start via-pink-500 to-purple-500 block">
              VISUAL
            </motion.span>
            <motion.span variants={wordVars} className="block">STORIES</motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-400 text-xl mb-12 max-w-lg leading-relaxed font-light"
          >
            I am a passionate Graphic Designer & Video Editor specializing in high-impact motion graphics, cinematic editing, and bold brand identities.
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
                View Showreel
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
          {/* Floating Web Inspiration Elements */}
          <FloatingIcon className="top-10 -left-4 text-pink-500" delay={0} duration={6} yOffset={-20} rotateOffset={15}>
            <Clapperboard size={28} />
          </FloatingIcon>
          <FloatingIcon className="top-40 -right-8 text-cyan-400" delay={1.5} duration={7} yOffset={25} rotateOffset={-20}>
            <Scissors size={28} />
          </FloatingIcon>
          <FloatingIcon className="bottom-20 -left-12 text-primary-start" delay={0.5} duration={5.5} yOffset={15} rotateOffset={10}>
            <Palette size={28} />
          </FloatingIcon>
          <FloatingIcon className="bottom-10 right-4 text-purple-400" delay={2} duration={8} yOffset={-25} rotateOffset={-15}>
            <MonitorPlay size={28} />
          </FloatingIcon>
          <FloatingIcon className="top-0 right-10 text-yellow-400 w-12 h-12" delay={1} duration={4} yOffset={10} rotateOffset={30}>
            <Wand2 size={20} />
          </FloatingIcon>

          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full max-w-[650px] aspect-square relative z-0"
          >
            <img 
              src="/hero_avatar_transparent.png" 
              alt="Creative Editor Avatar" 
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
              src="/about_avatar_transparent.png" 
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
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">THE <span className="text-primary-start">DIRECTOR'S</span> CUT</h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-light text-xl">
            Every frame tells a story, and every pixel matters. I merge technical precision with raw creative vision to produce stunning visuals. From cutting fast-paced social media ads to designing comprehensive brand identities, I ensure your message isn't just seen—it's felt.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12 text-center lg:text-left">
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">5+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years Editing</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">4K</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Resolution Mastery</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-start to-pink-500 mb-2">200+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Videos Delivered</p>
            </div>
          </div>

          <button className="px-10 py-5 border border-primary-start/50 bg-primary-start/10 text-primary-start font-black rounded-full hover:bg-primary-start hover:text-bg-dark transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(249,115,22,0.15)]">
            My Creative Process
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">ARSENAL</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-xl">
            The industry-standard software I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-3xl p-8 hover:border-primary-start/40 transition-colors group shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_rgba(249,115,22,0.15)] relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {skill.icon}
              </div>
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center border border-white/10 shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold text-xl">{skill.name}</h3>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-500 font-medium uppercase tracking-wider">Proficiency</span>
                  <span className="text-primary-start font-black">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-black/60 rounded-full overflow-hidden shadow-inner border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-pink-500 via-primary-end to-primary-start rounded-full relative"
                  >
                     <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-r from-transparent to-white/40" />
                  </motion.div>
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
    <section id="projects" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">FEATURED <span className="text-primary-start">WORK</span></h2>
          <p className="text-gray-400 font-light text-xl">A curated selection of my latest edits and designs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden group hover:border-primary-start/30 transition-colors flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_80px_rgba(249,115,22,0.1)] cursor-pointer"
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
                  <a href="#" className="flex-1 py-4 text-center text-sm font-black bg-primary-start text-bg-dark rounded-xl hover:brightness-110 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <Play size={18} className="fill-bg-dark" /> Watch
                  </a>
                  <a href="#" className="w-14 h-14 flex items-center justify-center border border-white/10 bg-white/[0.02] rounded-xl text-white hover:border-white/30 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Layers size={20} />
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
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
              src="/contact_avatar_transparent.png" 
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
            <p className="text-gray-400 text-xl font-light">Ready to start your next visual project? Drop a message.</p>
          </div>

          <form className="space-y-6 bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
              <input type="text" placeholder="Last Name" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all placeholder-gray-600 font-light text-lg" />
            </div>
            <textarea placeholder="Tell me about your project..." rows={5} className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-primary-start/50 focus:bg-black/60 transition-all resize-none placeholder-gray-600 font-light text-lg"></textarea>
            <button className="w-full py-5 bg-primary-start text-bg-dark font-black rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              <Send size={22} />
              Send Brief
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
            CREATIVE<span className="text-primary-start">.</span>
          </a>
          <p className="text-sm text-gray-500 mt-3 font-light tracking-wide">Director, Editor & Designer</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-400 font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-primary-start transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-start transition-colors">Story</a>
          <a href="#projects" className="hover:text-primary-start transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary-start transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Instagram size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Youtube size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-start hover:border-primary-start transition-all shadow-lg"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-16 font-medium tracking-widest uppercase">
        &copy; 2026 Creative Editor. Crafted with precision.
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
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
