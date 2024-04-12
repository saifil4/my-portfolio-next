

import React from "react";
import Hero from './home/Hero';
import Contact from './home/Contact';
import Work from './home/Work';
import { Skills } from "./home/Skills";
import About from "./home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}

