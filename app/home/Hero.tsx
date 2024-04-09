'use client'
import { Spotlight } from '@/components/ui/Spotlight';
import React from "react";
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <div className="h-[calc(100vh_-_2rem)] w-full rounded-md flex items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#00B5D8"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Hello, I am Saifil <br /> A Software Engineer <br/> Based in Toronto
                </h1>
                <br/>
                <div className='flex justify-center'>
                    <Button onClick={() => { }} text='Download Resume' />
                </div>
            </div>
        </div>
    );
}

