import React, { Component } from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm border-slate-600">
           {text}
        </button>
    );
};

export default Button;


