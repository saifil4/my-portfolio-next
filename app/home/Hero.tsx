'use client'
import React from "react";
import { FlexContainer } from "@/components/layouts/Containers";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <FlexContainer className='h-[calc(100vh/1.5)]'>
            <div className="mx-auto w-full pt-20 md:pt-0">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 2, stiffness: 200}}
                    className="text-4xl md:text-9xl font-bold uppercase text-slate-900">
                    Hello, <br />I am Saifil Momin
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 2, stiffness: 200}}
                    className="font-light md:text-3xl py-4 text-black">
                    I am a <Highlighted>Software Developer</Highlighted>  and I create things for the <Highlighted>web.</Highlighted>
                </motion.h2>
                {/* <button className="rounded-full border-2 border-black px-5 py-3 font-semibold">
                        Contact me
                    </button> */}
            </div>
        </FlexContainer>
    );
}

const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.span 
            initial={{ color: "black", textDecoration: "none", fontWeight: "normal"}}
            animate={{ color: "green", textDecoration: "underline", fontWeight: "semibold"}}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut"}}
        className="underline underline-offset-4 text-accent-1 font-medium">
            {children}
        </motion.span>
    )
}

