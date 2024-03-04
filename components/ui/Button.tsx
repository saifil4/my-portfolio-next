import React, { Component } from 'react';
import { IconType } from "react-icons";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
        >
            {text}
        </button>
    );
};

export default Button;