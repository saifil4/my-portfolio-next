import React, { ReactNode } from 'react';
import Image from 'next/image';
import { IProject } from '@/data';

interface CardProps {
    project: IProject;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (
        
        <div className=" rounded-lg overflow-hidden drop-shadow-xl m-6 bg-gray-950 -50 ">
            <div>
                <img src={project.poster} width="100%" alt="thumbnail" />
            </div>
            <div className=" p-6">
                <b className="font-bold text-xl mb-2 text-gray-200">
                    {project.name}
                </b>
                <p className=" text-gray-400">
                    {project.description}
                </p>
                <button>Learn more</button>
                {/* <p className="text-gray-700 text-base">
                    {children}
                </p> */}
            </div>

        </div>
    );
};

export default Card;