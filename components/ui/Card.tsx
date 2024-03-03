import React, { ReactNode } from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-gray-950 -50 grid grid-cols-4">
            <div className="col-span-3">
                <Image
                    src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="500"
                    width="500"
                    // className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
                    alt="thumbnail"
                />
            </div>
            <div className="col-span-1 align-top">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {children}
                </p>
            </div>

        </div>
    );
};

export default Card;