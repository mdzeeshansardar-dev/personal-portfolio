import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Timeline />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
