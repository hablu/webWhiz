import React from 'react';
import Services from '../Services/Services';
import Banner from '../../Components/Banner/Banner';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';
import Skills from './Skills/Skills';

const Home = () => {
  return (
    <div>
      <Banner />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Blog />
      <Skills />
    </div>
  );
};

export default Home;