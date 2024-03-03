export interface IProject {
    name: string,
    description: string,
    links: Array<Link>,
    stacks: Array<string>,
    poster: string
}

interface Link {
    name: string,
    icon: string,
    url: string
}

export const ProjectsData: Array<IProject> = [
    {
        name: 'Agile board',
        links: [
            {
                name: 'Git',
                icon: '',
                url: 'https://github.com/saifil4/agile-board'
            },
            {
                name: 'Live',
                icon: '',
                url: 'https://serene-heyrovsky-9dffc5.netlify.app/'
            }
        ],
        poster: '/images/agile-board/poster-image.svg',
        description: `Front End implementation of a Scrum board built with React and Redux where tasks can be prioritized and labeled based on user's requirements.`,
        stacks: [
            'React', 'Redux', 'JavaScript', 'Bootsrap', 'React Beautiful dnd'
        ],
    },
    {
        name: 'Covid-Tracker',
        links: [
            {
                name: 'Git',
                icon: '',
                url: 'https://github.com/saifil4/covid-tracker'
            },
            {
                name: 'Live',
                icon: '',
                url: 'https://covid-tracker-jade-nu.vercel.app/'
            }
        ],
        poster: '/images/covid-tracker/poster-image.svg',
        description: `Created a COVID-19 tracker by integrating disease.sh API to visualize global stats and vaccination efforts in different parts of the world.`,
        stacks: [
            'React', 'JavaScript', 'Bootsrap', 'Leaflet JS', 'Disease.sh API'
        ],
    },
    {
        name: 'Portfolio Website',
        links: [
            {
                name: 'Git',
                icon: '',
                url: 'https://github.com/saifil4/saifil-portfolio'
            },
            {
                name: 'Live',
                icon: '',
                url: 'http://saifilmomin.com/'
            }
        ],
        poster: '/images/portfolio/poster-image.svg',
        description: `A website to demonstrate my skills and projects and a medium for people to view my projects and contact me to collaborate on projects.`,
        stacks: [
            'React', 'Chakra UI', 'TypeScript', 'Next JS'
        ]
    },
    {
        name: 'Lines and Boxes',
        links: [
            {
                name: 'Git',
                icon: '',
                url: 'https://github.com/saifil4/dotsandboxes'
            },
            {
                name: 'Live',
                icon: '',
                url: 'https://dotsandboxes.vercel.app/'
            }
        ],
        poster: '/images/lines-and-boxes/splash.png',
        description: 'Lines and boxes is a fun little game you can play with your friends. It comprises of lines you can click to enable them, and the line which closes a box is considered captured which awards 1 point to the player',
        stacks: [
            'React'
        ],
    },
];