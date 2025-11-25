import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-mecha-secondary relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">ABOUT</span>
          <span className="text-mecha-accent"> ME</span>
        </motion.h2>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-mecha-accent/20 rounded-full flex items-center justify-center animate-float">
                <div className="w-64 h-64 bg-mecha-glow/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-mecha-primary border-4 border-mecha-accent rounded-full flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-mecha-accent to-mecha-glow rounded-full flex items-center justify-center">
                        <span className="text-4xl font-orbitron">🤖</span>
                      </div>
                      <h3 className="font-orbitron text-mecha-accent">MECHA DEV</h3>
                      <p className="text-xs font-exo mt-2">AI & Robotics Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 border-2 border-mecha-glow/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <h3 className="text-2xl font-orbitron text-mecha-glow mb-6">The Mind Behind the Machine</h3>
            <p className="text-lg font-exo mb-6 leading-relaxed">
              I am a passionate developer with a futuristic vision, blending cutting-edge technology 
              with elegant design. My approach combines the precision of engineering with the 
              creativity of art to build digital experiences that feel both advanced and intuitive.
            </p>
            <p className="text-lg font-exo mb-6 leading-relaxed">
              With expertise in modern web technologies and a fascination for robotics and AI, 
              I create solutions that push boundaries while maintaining flawless functionality 
              and user experience.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
            >
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Technologies', value: '15+' },
                { label: 'AI Models', value: '10+' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 border border-mecha-glow/30 rounded-lg bg-mecha-primary/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: '#00ff9d' }}
                >
                  <div className="text-2xl font-orbitron text-mecha-accent">{stat.value}</div>
                  <div className="text-sm font-exo mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;