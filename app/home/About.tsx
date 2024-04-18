'use client'
import GitHubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { MaxWidthContainer, FlexContainer, OuterContainer } from "@/components/layouts/Containers";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function About() {
    return (
        <OuterContainer>
            <FlexContainer>
                <MaxWidthContainer>
                    <div className="grid md:grid-cols-2 md:grid-rows-5 grid-cols-1 gap-4 text-white h-full">
                        <div className="row-span-4">
                            <Box>
                                <img src="/images/saifil.png" alt="me"/>
                            </Box>
                        </div>
                        <div className="md:col-start-1 md;row-start-5">
                            <Box>
                                <div className="flex justify-center items-center h-full">
                                    Download Resume
                                </div>
                            </Box>
                        </div>
                        <div className="md:row-span-3 md:col-start-2 md:row-start-1">
                            <Box>
                                <p>
                                    Hi, I am Saifil, A Front-end developer based in Toronto. I have 4 years of experience working with start-ups, building and delivering quality web products built in JavaScript and Frameworks like React and Angular. I love trying out new things and am constantly learning. Apart from my work, I love playing chess and ping pong and hold an interest in sustainable development, especially in the space of architecture.
                                </p>
                            </Box>
                        </div>
                        <div className="md:row-span-2 md:col-start-2 md:row-start-4">
                            <Box className="bg-theme-gradient">
                                <div className='flex justify-center items-center gap-5 flex-col h-full'>
                                    <p className="font-bold text-xl">Saifil Momin</p>
                                    <a className="underline text-cyan-400" href="mailto:saifilmomin4@gmail.com">saifilmomin4@gmail.com</a>
                                    <div className='flex justify-center gap-3'>
                                        <a target="blank" href="https://github.com/saifil4/">
                                            <GitHubIcon size={24} color='white' />
                                        </a>
                                        <a href="https://www.linkedin.com/in/saifil-momin/">
                                            <LinkedInIcon size={24} color='white' />
                                        </a>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>

    );
}

const Box = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={
            cn(
                "rounded-xl md:m-3 w-full h-full shadow p-6 bg-gradient-to-b from-slate-800 to-slate-900 drop-shadow-xl border border-slate-800",
                className
            )
        }>
            {children}
        </div>
    );
}


export default About;