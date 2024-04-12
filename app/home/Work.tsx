


import React from "react";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';
import { OuterContainer, FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Work() {
    return (
        <OuterContainer>
            <Title >Projects</Title>
            <br />
            <FlexContainer>
                <MaxWidthContainer>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {ProjectsData.map((project, index) => (
                            <Card key={index} project={project} />
                        ))}
                    </div>
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>

    );
}

