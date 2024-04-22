


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';
import { FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Work() {
    return (
        <>
            <Title >Projects</Title>
            <br />
            <div className="flex flex-col justify-center items-center bg-black rounded-lg">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 p-12">
                    {ProjectsData.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </div>
        </>

    );
}

