import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Nav_Bar/NavBar';
import { About } from './components/About/about';
import { useEffect, useState } from 'react';
import { Skills } from './components/Skills/skills';
import { GoToTop } from './components/GoToTop/GoToTop';
import { Projects } from './components/Projects/projects';
import { ContactForm } from './components/ContactForm/contact-form';
import { Footer } from './components/Footer/footer';

function App() {
  
  return (
    <div className="App">
      {/* //Navigation Bar */}
      <GoToTop/>
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
