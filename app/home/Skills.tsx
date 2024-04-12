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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6">
            {projects.map((item, j) => (
                <Card key={j}>
                    <h4 className="text-zinc-400 font-bold text-2xl tracking-wide mb-3">
                        {item.title}
                    </h4>
                    <ul>
                        {item.skills.map((skill, i) => (
                            <li key={i} className="text-zinc-500 text-lg font-light">
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
            className="rounded-xl h-full w-full p-4 overflow-hidden bg-gradient-to-b from-slate-900 to-black shadow-lg text-white border border-slate-900"
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
