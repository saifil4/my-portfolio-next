'use client'
import Button from "@/components/ui/Button";
import GitHubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { MaxWidthContainer, FlexContainer, OuterContainer } from "@/components/layouts/Containers";

export function About() {
    return (
        <OuterContainer>
            <FlexContainer>
                <MaxWidthContainer>
                    <div className="grid md:grid-cols-2 md:grid-rows-5 grid-cols-1 gap-4 text-white h-full">
                        <div className="row-span-4">
                            <Box>
                                <img src="/images/saifil.png" alt="me" className="h-lg" />
                            </Box>
                        </div>
                        <div className="col-start-1 row-start-5">
                            <Box>
                                <Button onClick={() => { }} text='Download Resume' />
                            </Box>
                        </div>
                        <div className="row-span-3 col-start-2 row-start-1">
                            <Box>
                                <p>
                                    Hi, I am Saifil, A Front-end developer based in Toronto. I have 4 years of experience working with start-ups, building and delivering quality web products built in JavaScript and Frameworks like React and Angular. I love trying out new things and am constantly learning. Apart from my work, I love playing chess and ping pong and hold an interest in sustainable development, especially in the space of architecture.
                                </p>
                            </Box>
                        </div>
                        <div className="row-span-2 col-start-2 row-start-4">
                            <Box>
                                <div className='flex justify-center items-center gap-1 flex-col mt-2'>
                                    <p className="font-bold text-xl">Saifil Momin</p>
                                    <a className="underline text-cyan-400" href="mailto:saifilmomin4@gmail.com">saifilmomin4@gmail.com</a>

                                </div>

                                <br />
                                <div className='flex justify-center mt-5 gap-3'>
                                    <GitHubIcon size={24} color='white' />
                                    <LinkedInIcon size={24} color='white' />
                                </div>
                            </Box>
                        </div>
                    </div>
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>

    );
}

const Box = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rounded-xl md:m-3 w-full h-full shadow p-6 bg-gradient-to-b from-black to-slate-900 drop-shadow-xl border border-slate-800">
            {children}
        </div>
    );
}


export default About;