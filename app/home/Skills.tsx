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
        title: "UI",
        skills: ["Tailwind CSS", "Figma", "D3.js", "Chakra JS"]
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
            <Title>What I work with</Title>
            <br />
            <FlexContainer>
                <MaxWidthContainer>
                    <ProjectList projects={projects} />
                </MaxWidthContainer>
            </FlexContainer>
        </OuterContainer>
    );
}


const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-4">
            {projects.map((item, j) => (
                <Card key={j}>
                    <h4 className="text-gray-400 font-semibold text-lg mb-1">
                        {item.title}
                    </h4>
                    <ul>
                        {item.skills.map((skill, i) => (
                            <li key={i} className="text-gray-300 font-normal leading[1.5] text-sm">
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
                <div className="md:p-6 p-4">{children}</div>
            </GradientContainer>
        </div>
    );
};
