import React from 'react';
import { InfiniteMovingCards } from '@/components/layouts/moving-cards';
import Title from '@/components/ui/Title';

const testimonials = [
    {
        quote:
            "Saifil is a great team player to work with. Brings Exciting and Innovative Ideas constantly in the team to drive any project he's a part of. Has quality skills in UI/UX with a good amount of experience in designing Web pages for our product. He's Smart and thinks at right pace in the right place. It was a pleasure to work with him in all the projects we were in together.",
        name: "Rehban Khatri",
        title: "Senior Consultant at Celonis",
    },
    {
        quote:
            `
            Saifil is smart, creative and professional. He has helped shape the BPM-D App and has played a crucial role in designing the user interface.
He is dedicated and a pleasure to work with. He has been helpful, energetic and dedicated to all the work assigned to him and helped shaping the BPM-D India team.
I will be happy to recommend saifil to any organisation that appreciates creativity and needs design thinkers.

Wish him all the best for his higher studies, I am sure he will do well in his career.
            `,
        name: "Rakesh Gusain",
        title: "Director at Accenture",
    },
    {
        quote: `You rarely come across standout talent like Saifil. He expertly filled the role of User Experience Design Intern at Impactrio for my company’s "Impactraction," formerly "Wheel for Change" team. He, with other collaborators, took the idea of the solution and designed, wire framed, created the MVP of the app. Not only did Saifil show initiative in building out our UI/UX architecture from scratch, but he also played a huge role in bringing innovative features from a design perspective. He understood the framework of social innovation, did in-depth research, and provided effective solutions, especially on the onboarding process of a social entrepreneur. All in all, Saifil is a rock star and any organization would be lucky to have him!`,
        name: "Ashraful Hasan",
        title: "Founder at Impactrio",
    },
];

const Testimonials = () => {
    return (
        <div className='my-24'>
            <Title>Why me</Title>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>

    );
};

export default Testimonials;