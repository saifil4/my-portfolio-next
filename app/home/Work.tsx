

'use client'
import React from "react";
import { motion } from "framer-motion";
import Card from '@/components/ui/Card';
import { ProjectsData } from '@/data';
import Title from '@/components/ui/Title';
import { FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Work() {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 2, stiffness: 200}}
            >
                <Title >Projects</Title>
                <br />
                <div className="flex flex-col justify-center items-center bg-primary-light rounded-lg">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:p-12 p-4">
                        {ProjectsData.map((project, index) => (
                            <Card key={index} project={project} />
                        ))}
                    </div>
                </div>
            </motion.div>

        </>

    );
}

