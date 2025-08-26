import React from 'react';
import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import Services from './assets/components/Services';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Journey from './assets/components/Journey';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;