import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      anime({
        targets: textRef.current,
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutElastic(1, .8)'
      });
    }

    // Background particles animation
    const createParticles = () => {
      if (!heroRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('absolute', 'rounded-full', 'bg-mecha-glow');
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        heroRef.current.appendChild(particle);
        
        anime({
          targets: particle,
          translateX: () => anime.random(-50, 50),
          translateY: () => anime.random(-50, 50),
          opacity: () => anime.random(0.1, 0.7),
          duration: () => anime.random(2000, 5000),
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutSine'
        });
      }
    };

    createParticles();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white">MECHA</span>
          <span className="text-mecha-accent">DEV</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-exo text-mecha-glow mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Engineering the Future with Code and Creativity
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button 
            className="px-8 py-3 bg-mecha-accent text-mecha-primary font-orbitron font-bold rounded-lg hover:bg-mecha-glow transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ff9d" }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE MY WORK
          </motion.button>
          <motion.button 
            className="px-8 py-3 border-2 border-mecha-glow text-mecha-glow font-orbitron font-bold rounded-lg hover:bg-mecha-glow hover:text-mecha-primary transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00d4ff" }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT ME
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff9d" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;