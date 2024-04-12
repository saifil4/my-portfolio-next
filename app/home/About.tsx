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
                    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4 text-white h-full">
                        <div className="md:row-span-2">
                            <Box>
                                <img src="/images/saifil.png" alt="me" className="h-lg" />
                                <div className='flex justify-center items-center gap-1 flex-col mt-2'>
                                    <p className="font-bold text-xl">Saifil Momin</p>
                                    <a className="underline text-cyan-400" href="mailto:saifilmomin4@gmail.com">saifilmomin4@gmail.com</a>
                                    <Button onClick={() => { }} text='Download Resume' />
                                </div>

                                <br />
                                <div className='flex justify-center mt-5 gap-3'>
                                    <GitHubIcon size={24} color='white' />
                                    <LinkedInIcon size={24} color='white' />
                                </div>
                            </Box>
                        </div>
                        <div >
                            <Box>
                                <h1 className="text-3xl font-bold mb-5">About</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis blanditiis architecto iste. Sit distinctio a sapiente repudiandae beatae eaque. Dolorum unde provident eum dolore debitis pariatur, quis assumenda rem voluptatem.
                                </p>
                            </Box>
                        </div>
                        <div className="md:col-start-2">
                            <Box>
                                <h1 className="text-3xl font-bold mb-5">Recent Experience</h1>
                                <ul>
                                    <li>Frontend Developer at Company</li>
                                    <li>Backend Developer at Company</li>
                                    <li>Fullstack Developer at Company</li>
                                </ul>
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