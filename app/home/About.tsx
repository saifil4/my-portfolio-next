'use client'
import Button from "@/components/ui/Button";

export function About() {
    return (
        <div className="h-[calc(100vh_-_2rem)] mx-auto md:p-12 px-4 py-6 bg-gray-900">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 text-white h-full max-w-3xl">
                    <div className="row-span-2">
                        <Box>
                            <img src="/images/saifil.png" alt="me" className="h-lg" />
                            <div className='flex justify-center items-center gap-1 flex-col mt-2'>
                                <p className="font-bold text-xl">Saifil Momin</p>
                                <a className="underline text-cyan-400" href="mailto:saifilmomin4@gmail.com">saifilmomin4@gmail.com</a>
                                <Button onClick={() => { }} text='Download Resume' />
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
                    <div className="col-start-2">
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
            </div>

        </div>
    );
}

const Box = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rounded-xl m-3 w-full h-full shadow p-6 bg-black bg-opacity-15">
            {children}
        </div>
    );
}


export default About;