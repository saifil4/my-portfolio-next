


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';

export default function Work() {
  return (
      <div className='bg-gray-900 p-6' >
        <h1 className='text-4xl text-gray-100 font-bold'>My work</h1>
        {
          ProjectsData.map((project, index) => (
            <Card key={index} project={project} />
          ))
        }
      </div>
  );
}

