import React from "react";
import { OuterContainer, FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Hero() {
    return (
        <OuterContainer className='md:h-[calc(100vh_-_10rem)] h-[calc(70vh_-_0rem)'>
            <FlexContainer className='h-full'>
                <MaxWidthContainer>
                    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Hello, I am Saifil
                        </h1>
                        <h2 className="font-extralight text-base md:text-4xl text-neutral-200 py-4 text-center">
                            I am a Front end Developer <br />who constantly seeks to improve and learn new things.
                        </h2>
                    </div>
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>
    );
}

