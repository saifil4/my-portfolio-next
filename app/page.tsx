

import React from "react";
import Hero from './home/Hero';
import Work from './home/Work';
import Skills from "./home/Skills";
import About from "./home/About";
import Testimonials from "./home/Testimonials";
import { OuterContainer } from "@/components/layouts/Containers";


export default function Home() {
  return (
    <>
      <div className="h-[50rem] w-full bg-black bg-dot-white/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Hero />
      </div>
      <OuterContainer className="bg-slate-950">
        <Work />
        <Skills />
      </OuterContainer>
      <Testimonials />
      <About />
    </>
  );
}

