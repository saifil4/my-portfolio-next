"use client";
import React from "react";
import Button from "@/components/ui/Button";

import { OuterContainer, FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";

export default function Contact() {
    return (
        <OuterContainer>
            <FlexContainer>
                <MaxWidthContainer>
                    <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                        Contact me
                    </h1>
                    <ContactForm />
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>
    );
}


const ContactForm = () => {
    return (
      <form className='flex gap-2 mt-5 flex-col'>
        <textarea className="shadow appearance-none bg-black border-gray-800 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" rows={4} placeholder="Type your message" />
        <Button onClick={() => { }} text="Send" />
      </form>
    );
  };
  

