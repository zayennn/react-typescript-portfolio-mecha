import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationExperience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.S. Computer Science & Robotics',
      institution: 'Neo Tokyo Institute of Technology',
      period: '2018 - 2022',
      description: 'Specialized in AI, machine learning, and robotic systems design. Graduated with honors.'
    },
    {
      degree: 'Advanced Web Development Certification',
      institution: 'Cyber Academy',
      period: '2022 - 2023',
      description: 'Focused on modern frameworks, responsive design, and performance optimization.'
    }
  ];

  const experience = [
    {
      position: 'Senior Frontend Engineer',
      company: 'OmniCorp Industries',
      period: '2023 - Present',
      description: 'Leading development of next-generation UI systems for robotic control interfaces.'
    },
    {
      position: 'Full Stack Developer',
      company: 'NexGen Robotics',
      period: '2022 - 2023',
      description: 'Developed web applications for monitoring and controlling robotic systems in real-time.'
    },
    {
      position: 'AI Research Intern',
      company: 'Aether Systems',
      period: '2021 - 2022',
      description: 'Contributed to computer vision projects and neural network implementations.'
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-mecha-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">EDUCATION &</span>
          <span className="text-mecha-accent"> EXPERIENCE</span>
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-orbitron text-mecha-glow mb-8 flex items-center">
              <span className="mr-3">🎓</span> Education
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-mecha-accent/30"></div>
              
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="flex relative"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mecha-accent flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-mecha-primary"></div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-mecha-primary/50 p-6 rounded-xl border border-mecha-glow/20 hover:border-mecha-accent transition-all duration-300">
                      <h4 className="text-xl font-orbitron text-white mb-1">{edu.degree}</h4>
                      <p className="font-exo text-mecha-glow mb-2">{edu.institution}</p>
                      <span className="inline-block px-3 py-1 bg-mecha-accent/20 text-mecha-accent rounded-full text-sm font-exo mb-3">
                        {edu.period}
                      </span>
                      <p className="font-exo text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-orbitron text-mecha-glow mb-8 flex items-center">
              <span className="mr-3">⚙️</span> Experience
            </h3>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-mecha-glow/30"></div>
              
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="flex relative"
                  variants={itemVariantsRight}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mecha-glow flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-mecha-primary"></div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-mecha-primary/50 p-6 rounded-xl border border-mecha-glow/20 hover:border-mecha-accent transition-all duration-300">
                      <h4 className="text-xl font-orbitron text-white mb-1">{exp.position}</h4>
                      <p className="font-exo text-mecha-accent mb-2">{exp.company}</p>
                      <span className="inline-block px-3 py-1 bg-mecha-glow/20 text-mecha-glow rounded-full text-sm font-exo mb-3">
                        {exp.period}
                      </span>
                      <p className="font-exo text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;