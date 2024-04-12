import Title from "@/components/ui/Title";

import github from '@/public/github.svg';

type Project = {
    title: string;
    description: string;
    skills: string[];
};

export const projects: Project[] = [
    {
        title: "Design",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "InDesign"]

    },
    {
        title: "Frontend",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "Backend",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        skills: ["Node.js", "Express", "MongoDB", "Firebase", "GraphQL", "REST API"]
    }
];


export function Skills() {
    return (
        <div className="h-[calc(100vh_-_2rem)] max-w-5xl mx-auto md:p-12 px-4 py-6">
            <Title>My Stack</Title>
            <ProjectList projects={projects} />
        </div>
    );
}


const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4">
            {projects.map((item) => (
                <Card>
                    <h4 className="text-zinc-400 font-bold text-3xl tracking-wide mb-3">
                        {item.title}
                    </h4>
                    <ul>
                        {item.skills.map((skill) => (
                            <li key={skill} className="text-zinc-300 text-lg">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </div>
    );
};

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-900 shadow-lg"
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
