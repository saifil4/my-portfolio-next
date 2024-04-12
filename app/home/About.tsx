import Title from "@/components/ui/Title";

export function About() {
    return (
        <div className="h-[calc(100vh_-_2rem)] mx-auto md:p-12 px-4 py-6 bg-gray-900">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 text-white h-full max-w-3xl">
                    <div className="row-span-2">
                        <div className="rounded-xl m-3 w-full h-full border-white/[0.2] border">

                        </div>
                    </div>
                    <div >
                        <div className="rounded-xl m-3 w-full h-full border-white/[0.2] border p-6">
                            <h1 className="text-3xl font-bold mb-5">About</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis blanditiis architecto iste. Sit distinctio a sapiente repudiandae beatae eaque. Dolorum unde provident eum dolore debitis pariatur, quis assumenda rem voluptatem.
                            </p>
                        </div>
                    </div>
                    <div className="col-start-2">
                        <div className="rounded-xl m-3 w-full h-full border-white/[0.2] border p-6">
                            <h1 className="text-3xl font-bold mb-5">Recent Experience</h1>
                            <ul>
                                <li>Frontend Developer at Company</li>
                                <li>Backend Developer at Company</li>
                                <li>Fullstack Developer at Company</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default About;