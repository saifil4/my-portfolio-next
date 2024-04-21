import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

export const FlexContainer: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            {/* Add your component content here */}
            {children}
        </div>
    );
};


export const MaxWidthContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-5xl">
            {children}
        </div>
    );
};

export const OuterContainer: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`my-5 md:p-12 px-4 ${className}`}>
            {children}
        </div>
    );
};