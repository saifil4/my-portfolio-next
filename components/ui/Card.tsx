import React, { ReactNode } from 'react';
import Image from 'next/image';
import { IProject } from '@/data';

interface CardProps {
    project: IProject;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (

        <div className="rounded-lg overflow-hidden md:mb-6 mb-6 linear-gradient bg-gradient-to-b from-black to-slate-900 drop-shadow-xl border border-slate-900">
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
                <div className='flex gap-3 justify-end mt-5'>
                    <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 text-white text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="mr-2" viewBox="0 0 1792 1792">
                            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                        </svg>
                        GitHub
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