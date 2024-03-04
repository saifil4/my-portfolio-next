import { HoverEffect } from "@/components/ui/CardsHoverEffect";
import Title from "@/components/ui/Title";

export function Skills() {
    return (
        <div className="max-w-5xl mx-auto p-12">
            <Title>What I can do</Title>
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Design",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Frontend",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Backend",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    }
];
