import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Neural Interface Dashboard',
      category: 'ai',
      description: 'A real-time dashboard for monitoring and controlling neural network training processes with 3D visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Three.js', 'TensorFlow', 'WebGL'],
      link: '#'
    },
    {
      id: 2,
      title: 'Automated Drone Control System',
      category: 'robotics',
      description: 'Web-based control system for autonomous drone fleets with live telemetry and path planning.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Node.js', 'WebRTC', 'ROS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mecha Design Studio',
      category: 'web',
      description: 'Interactive 3D configurator for custom mecha robots with real-time rendering and AR preview.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Blender', 'WebXR', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 4,
      title: 'AI-Powered Visual Assistant',
      category: 'ai',
      description: 'Computer vision application that provides real-time object recognition and contextual information.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      link: '#'
    },
    {
      id: 5,
      title: 'Robotic Arm Simulator',
      category: 'robotics',
      description: 'Browser-based simulation environment for programming and testing robotic arm movements.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Three.js', 'Physics.js', 'TypeScript'],
      link: '#'
    },
    {
      id: 6,
      title: 'Cyber Security Dashboard',
      category: 'web',
      description: 'Real-time monitoring dashboard for network security with threat detection and analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'D3.js', 'WebSocket', 'MongoDB'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'ai', label: 'AI & Machine Learning' },
    { key: 'robotics', label: 'Robotics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="py-20 bg-mecha-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">RECENT</span>
          <span className="text-mecha-accent"> PROJECTS</span>
        </motion.h2>
        
        <div ref={ref}>
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`px-6 py-2 rounded-full font-orbitron transition-all ${
                  activeFilter === filter.key
                    ? 'bg-mecha-accent text-mecha-primary'
                    : 'bg-mecha-secondary text-white border border-mecha-glow/30 hover:border-mecha-accent'
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-mecha-secondary rounded-xl overflow-hidden border border-mecha-glow/20 hover:border-mecha-accent transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-br from-mecha-accent/20 to-mecha-glow/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button 
                      className="px-6 py-2 bg-mecha-accent text-mecha-primary font-orbitron rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-orbitron text-white mb-2">{project.title}</h3>
                  <p className="font-exo text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-mecha-primary text-mecha-glow rounded-full text-xs font-exo"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <motion.a 
                      href={project.link}
                      className="text-mecha-accent font-exo flex items-center hover:text-mecha-glow transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                    
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-mecha-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-mecha-accent transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;