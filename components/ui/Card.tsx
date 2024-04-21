import React, { ReactNode } from 'react';
import Image from 'next/image';
import { IProject } from '@/data';
import GitHubIcon from '../icons/Github';
import Live from '../icons/Live';

interface CardProps {
    project: IProject;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (

        <div>
            <div className='rounded-lg overflow-hidden'>
                <img src={project.poster} width="100%" alt="thumbnail" />
            </div>
            <div className='my-2'>
                {
                    project.stacks.map((stack, i) => (
                        <div key={i} className="inline-block text-gray-400 text-xs font-normal mr-1 mb-1 bg-gray-800 p-1 rounded-lg">
                            {stack}
                        </div>
                    ))
                }
            </div>
            <div>
                <b className="font-semibold mb-2 text-gray-200">
                    {project.name}
                </b>
                <p className="text-sm text-gray-400">
                    {project.description}
                </p>

                <div className='flex gap-3 mt-5'>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="py-1.5 px-3 max-w-md flex justify-center items-center bg-gray-800 text-white text-center rounded-lg text-sm">
                            <GitHubIcon />GitHub
                        </button>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="py-1.5 px-3 max-w-md flex justify-center items-center bg-gray-800 text-white text-center rounded-lg text-sm">
                            <Live />
                            Live
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;