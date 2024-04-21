export interface IProject {
    name: string,
    description: string,
    github: string,
    live: string,
    stacks: Array<string>,
    poster: string
}


export const ProjectsData: Array<IProject> = [
    {
        name: 'Agile board',
        github: 'https://github.com/saifil4/agile-board',
        live: 'https://serene-heyrovsky-9dffc5.netlify.app/',
        poster: '/images/agile-board/poster-image.svg',
        description: `Front End implementation of a Scrum board built with React and Redux where tasks can be prioritized and labeled based on user's requirements.`,
        stacks: [
            'React', 'Redux', 'JavaScript', 'React Bootstrap', 'React Beautiful dnd'
        ],
    },
    {
        name: 'Portfolio Website',
        github: 'https://github.com/saifil4/saifil-portfolio',
        live: 'http://saifilmomin.com/',
        poster: '/images/portfolio/poster-image.svg',
        description: `A website to demonstrate my skills and projects and a medium for people to view my projects and contact me to collaborate on projects.`,
        stacks: [
            'React', 'Chakra UI', 'TypeScript', 'Next JS'
        ]
    },
    {
        name: 'Lines and Boxes',
        github: 'https://github.com/saifil4/dotsandboxes',
        live: 'https://dotsandboxes.vercel.app/',
        poster: '/images/lines-and-boxes/splash.png',
        description: 'Lines and boxes is a fun little game you can play with your friends. It comprises of lines you can click to enable them, and the line which closes a box is considered captured which awards 1 point to the player',
        stacks: [
            'React'
        ],
    },
];