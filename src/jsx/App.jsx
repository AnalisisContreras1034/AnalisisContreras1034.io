
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyMe from './sections/WhyMe';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Contact from './sections/Contact';

import '../css/reset.css';
import '../css/variables.css';
import '../css/layout.css';
import '../css/navbar.css';
import '../css/hero.css';
import '../css/about.css';
import '../css/services.css';
import '../css/projects.css';
import '../css/stack.css';
import '../css/contact.css';
import '../css/footer.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Projects />
      <Stack />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
