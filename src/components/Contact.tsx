import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'mechadev@example.com',
      link: 'mailto:mechadev@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-ROBO',
      link: 'tel:+15551237626'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Neo Tokyo, Digital District',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🤖',
      url: '#',
      color: 'hover:text-mecha-accent'
    },
    {
      name: 'LinkedIn',
      icon: '⚙️',
      url: '#',
      color: 'hover:text-mecha-glow'
    },
    {
      name: 'Twitter',
      icon: '🔧',
      url: '#',
      color: 'hover:text-mecha-accent'
    },
    {
      name: 'Instagram',
      icon: '📡',
      url: '#',
      color: 'hover:text-mecha-glow'
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
    <section id="contact" className="py-20 bg-mecha-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">GET IN</span>
          <span className="text-mecha-accent"> TOUCH</span>
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-orbitron text-mecha-glow mb-8">Let's Build The Future Together</h3>
            <p className="font-exo text-lg mb-8 text-gray-300">
              Have a project in mind or want to discuss the possibilities of AI and robotics? 
              I'm always excited to collaborate on innovative projects that push technological boundaries.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="flex items-center p-4 bg-mecha-primary/50 rounded-xl border border-mecha-glow/20 hover:border-mecha-accent transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-2xl mr-4">{method.icon}</span>
                  <div>
                    <h4 className="font-orbitron text-white group-hover:text-mecha-accent transition-colors">
                      {method.title}
                    </h4>
                    <p className="font-exo text-mecha-glow">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div>
              <h4 className="font-orbitron text-mecha-glow mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-full bg-mecha-primary border border-mecha-glow/30 flex items-center justify-center text-xl transition-all ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="bg-mecha-primary/50 p-8 rounded-xl border border-mecha-glow/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-exo text-mecha-glow mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-mecha-secondary border border-mecha-glow/30 rounded-lg focus:border-mecha-accent focus:outline-none transition-colors font-exo text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-exo text-mecha-glow mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-mecha-secondary border border-mecha-glow/30 rounded-lg focus:border-mecha-accent focus:outline-none transition-colors font-exo text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-exo text-mecha-glow mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-mecha-secondary border border-mecha-glow/30 rounded-lg focus:border-mecha-accent focus:outline-none transition-colors font-exo text-white"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-exo text-mecha-glow mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-mecha-secondary border border-mecha-glow/30 rounded-lg focus:border-mecha-accent focus:outline-none transition-colors font-exo text-white resize-none"
                  placeholder="Describe your project or inquiry..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-mecha-accent to-mecha-glow text-mecha-primary font-orbitron font-bold rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 157, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.div 
          className="mt-16 pt-8 border-t border-mecha-glow/20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="font-exo text-gray-400">
            &copy; {new Date().getFullYear()} MechaDev. All systems operational. 
          </p>
          <p className="font-exo text-mecha-glow/70 mt-2">
            Engineered with precision in Neo Tokyo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;