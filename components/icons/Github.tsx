import React from 'react';

interface GitHubProps {
    size?: number;
    color?: string;
}

const GitHubIcon: React.FC<GitHubProps> = ({ size = 24, color = 'black' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
        >
            <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.8-1.4-2.7-.3-5.5-1.4-5.5-6.3 0-1.4.5-2.5 1.1-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.3.6.9 1.1 2 1.1 3.4 0 4.9-2.8 6-5.5 6.3.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
        </svg>
    );
};

export default GitHubIcon;