import { useState, useEffect, useRef, ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-bg-dark">
      <div className="absolute top-[-10%] left-[-10%] mesh-blob-1" />
      <div className="absolute top-[40%] right-[-10%] mesh-blob-2" />
      <div className="absolute bottom-[-20%] left-[20%] mesh-blob-3" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
    </div>
  );
};

export const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfigGlow = { damping: 40, stiffness: 100 };
  const springConfigDot = { damping: 25, stiffness: 300 };
  
  const glowX = useSpring(mouseX, springConfigGlow);
  const glowY = useSpring(mouseY, springConfigGlow);
  
  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHovering(window.getComputedStyle(target).cursor === 'pointer' || target.closest('button, a') !== null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div 
        className="cursor-glow hidden md:block"
        style={{ 
          translateX: glowX, 
          translateY: glowY,
          left: -300,
          top: -300
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary-start rounded-full pointer-events-none z-[10000] mix-blend-screen hidden md:block"
        style={{
          translateX: dotX,
          translateY: dotY,
          left: -6,
          top: -6,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10001] hidden md:block"
          style={{
            translateX: dotX,
            translateY: dotY,
            left: -3,
            top: -3,
          }}
        />
      )}
    </>
  );
};

export const Magnetic = ({ children, strength = 0.5 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export const Parallax = ({ children, offset = 50 }: { children: ReactNode; offset?: number }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div style={{ y: scrollY * (offset / 1000) }}>
      {children}
    </motion.div>
  );
};
