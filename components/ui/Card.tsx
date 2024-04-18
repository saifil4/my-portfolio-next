import React, { ReactNode } from 'react';
import Image from 'next/image';
import { IProject } from '@/data';
import GitHubIcon from '../icons/Github';

interface CardProps {
    project: IProject;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (

        <div className="rounded-lg overflow-hidden md:mb-6 mb-6 bg-gradient-to-b from-black to-slate-900 drop-shadow-xl border border-slate-800">
            <div>
                <img src={project.poster} width="100%" alt="thumbnail" />
            </div>
            <div className=" p-6">
                <b className="font-bold text-lg mb-2 text-gray-200">
                    {project.name}
                </b>
                <p className=" text-gray-400">
                    {project.description}
                </p>
                <div className='my-2'>
                    {
                        project.stacks.map((stack, i) => (
                            <div key={i} className="inline-block text-gray-400 text-sm font-normal mr-1 mb-1 bg-gray-800 p-1 rounded-lg">
                                {stack}
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-3 justify-end mt-5'>
                    <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 text-white text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">
                        <GitHubIcon />GitHub
                    </button>
                    <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 text-white text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='mr-2' width="20" height="20" viewBox="0 0 24 24">
                            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                        </svg>
                        Live
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;