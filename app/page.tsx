

import React from "react";
import Hero from './home/Hero';
import Contact from './home/Contact';
import Work from './home/Work';
import { Skills } from "./home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}

