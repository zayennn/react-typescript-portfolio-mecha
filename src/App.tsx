import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App bg-mecha-primary min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;