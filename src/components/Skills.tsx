import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animate, stagger } from 'animejs';
import type { Target } from 'animejs';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      
      animate(skillBars, {
        width: (el: Target) => {
          const targetWidth = (el as HTMLElement).getAttribute('data-width');
          return targetWidth ? targetWidth : '0%';
        },
        duration: 1500,
        easing: 'easeOutElastic(1, .8)',
        delay: stagger(100)
      });
    }
  }, [inView]);

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      category: 'AI & Robotics',
      skills: [
        { name: 'TensorFlow', level: 70 },
        { name: 'PyTorch', level: 65 },
        { name: 'ROS', level: 60 },
        { name: 'Computer Vision', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-mecha-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">TECH</span>
          <span className="text-mecha-accent"> SKILLS</span>
        </motion.h2>
        
        <div ref={ref}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="bg-mecha-secondary rounded-xl p-6 border border-mecha-glow/20 hover:border-mecha-accent transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-orbitron text-mecha-glow mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4" ref={skillsRef}>
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="font-exo text-white">{skill.name}</span>
                        <span className="font-exo text-mecha-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-mecha-primary rounded-full overflow-hidden">
                        <div 
                          className="skill-bar h-full bg-gradient-to-r from-mecha-accent to-mecha-glow rounded-full"
                          data-width={`${skill.level}%`}
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-orbitron text-mecha-glow mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['UI/UX Design', '3D Modeling', 'IoT Development', 'Machine Learning', 'Cloud Computing', 'DevOps'].map((skill, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 bg-mecha-secondary border border-mecha-glow/30 rounded-full font-exo text-sm"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: '#00ff9d', 
                  color: '#0a0a0a',
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;