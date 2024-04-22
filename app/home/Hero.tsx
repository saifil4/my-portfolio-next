import React from "react";
import { FlexContainer } from "@/components/layouts/Containers";

export default function Hero() {
    return (
        <FlexContainer className='h-[calc(100vh/1.5)]'>
                <div className="mx-auto w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-9xl font-bold uppercase text-slate-900">
                        Hello, <br/>I am Saifil Momin
                    </h1>
                    <h2 className="font-light md:text-3xl py-4 text-black">
                        I am a <Highlighted>Software Developer</Highlighted>  and I create things for the <Highlighted>web.</Highlighted>
                    </h2>
                    {/* <button className="rounded-full border-2 border-black px-5 py-3 font-semibold">
                        Contact me
                    </button> */}
                </div>
        </FlexContainer>
    );
}

const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="underline underline-offset-4 text-accent-1 font-medium">
            {children}
        </span>
    )
}

