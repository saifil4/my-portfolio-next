


import { Spotlight } from '@/components/ui/Spotlight';
import React from "react";
import { LampDemo } from '@/components/ui/Lamp';
// import { Spotlight } from "../ui/spotlight";
import Card from '@/components/ui/Card';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { ProjectsData } from '@/data';

export default function Home() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#00B5D8"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hello, I am Saifil <br /> A Software Engineer
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out of
            copy.
          </p>
        </div>
      </div>
      <div className='bg-gray-900 p-6' >
        <h1 className='text-4xl text-gray-100 font-bold'>My work</h1>
        {
          ProjectsData.map((project, index) => (
            <Card project={project} />
          ))
        }
      </div>
      <LampDemo />
    </>

  );
}

