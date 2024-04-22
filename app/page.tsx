

import React from "react";
import Hero from './home/Hero';
import Work from './home/Work';
import Skills from "./home/Skills";
import About from "./home/About";
import Testimonials from "./home/Testimonials";


export default function Home() {
  return (
    <div className="md:p-12 px-4 bg-white">
      <Hero />
      <Work />
      <Skills />
      <Testimonials />
      <About />
    </div>
  );
}

