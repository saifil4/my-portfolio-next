import React from 'react';

interface GradientContainerProps {
    children: React.ReactNode;
}

const GradientContainer: React.FC<GradientContainerProps> = ({ children }) => {

    return <div className='rounded-xl h-full w-full overflow-hidden bg-gradient-to-t from-slate-900 to-black shadow-lg text-white border border-slate-800'>{children}</div>;
};

export default GradientContainer;