

import React from "react";
import Hero from './home/Hero';
import Work from './home/Work';
import About from "./home/About";
import Testimonials from "./home/Testimonials";


export default function Home() {
  return (
    <div>
      <div className="bg-slate-50 md:p-12 px-4">
        <Hero />
        <Work />
      </div>
      <div className="bg-primary-darker md:p-12 px-4">
        <Testimonials />
      </div>
      <div className="bg-slate-50 md:p-12 px-4">
        <About />
      </div>
    </div>
  );
}

