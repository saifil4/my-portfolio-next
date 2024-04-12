import Title from "@/components/ui/Title";
import { OuterContainer, FlexContainer, MaxWidthContainer } from "@/components/layouts/Containers";
import GradientContainer from "@/components/layouts/GradientContainer";

type Project = {
    title: string;
    skills: string[];
};

export const projects: Project[] = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "SQL"]

    },
    {
        title: "Frameworks",
        skills: ["Next JS", "Electron", "React",]
    },
    {
        title: "UI Libraries",
        skills: ["Chakra JS", "D3.js", "Tailwind CSS"]
    },
    {
        title: "State Management",
        skills: ["Context API", "Recoil", "Redux", "RxJS"]
    },
    {
        title: "Server",
        skills: ["Node.js", "Express"]
    },
    {
        title: "Database",
        skills: ["MySQL", "PostgresSQL"]
    }
];


export default function Skills() {
    return (
        <OuterContainer>
            <FlexContainer>
                <MaxWidthContainer>
                    <Title>What I work with</Title>
                    <br/>
                    <ProjectList projects={projects} />
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>
    );
}


const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((item, j) => (
                <Card key={j}>
                    <h4 className="text-zinc-400 font-bold text-xl mb-3">
                        {item.title}
                    </h4>
                    <ul>
                        {item.skills.map((skill, i) => (
                            <li key={i} className="text-zinc-400 font-light">
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
        <div className="h-full w-full">
            <GradientContainer>
                <div className="p-6">{children}</div>
            </GradientContainer>
        </div>
    );
};
