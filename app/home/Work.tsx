


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';

export default function Work() {
    return (
        <div className='bg-gray-900 p-12 grid grid-cols-2' >
            <Title >Projects</Title>
            <br/>
            {
                ProjectsData.map((project, index) => (
                    <Card key={index} project={project} />
                ))
            }
        </div>
    );
}

