import React from "react";
import { FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Hero() {
    return (
        <FlexContainer className='h-[calc(100vh/1.5)]'>
                <div className="mx-auto w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-9xl font-bold text-left uppercase">
                        Hello, <br/>I am Saifil Momin
                    </h1>
                    <h2 className="font-light text-base md:text-3xl py-4 text-cente text-black">
                        I am a Software Developer and I create things for the web.
                    </h2>
                    <button className="rounded-full border-2 border-black px-5 py-3 font-semibold">
                        Contact me
                    </button>
                </div>
        </FlexContainer>
    );
}

