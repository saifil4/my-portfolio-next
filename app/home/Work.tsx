


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';

export default function Work() {
    return (
        <div className='bg-gray-900 md:p-12 p-6' >
            <Title >Projects</Title>
            <br />
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-4xl">
                    {
                        ProjectsData.map((project, index) => (
                            <Card key={index} project={project} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

