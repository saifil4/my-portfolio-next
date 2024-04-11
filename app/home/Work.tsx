


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';

export default function Work() {
    return (
        <div className='bg-gray-900 p-12' >
            <Title >Projects</Title>
            <br />
            <div className="grid grid-cols-2">
                {
                    ProjectsData.map((project, index) => (
                        <Card key={index} project={project} />
                    ))
                }
            </div>
        </div>
    );
}

