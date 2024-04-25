import exp from "constants";
import React from "react";

type TitleProps = {
    children: React.ReactNode;
    className?: string;
};


const Hero: React.FC<TitleProps> = ({ children, className }) => {
    return (
        <h1 className={`text-lg md:text-xl font-bold uppercase ${className || ''}`}>
            {children}
        </h1>
    );
}

export default Hero;

