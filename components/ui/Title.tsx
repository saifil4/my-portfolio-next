import React from "react";

export default function Hero({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-4xl md:text-7xl md:leading-relaxed font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {children}
        </h1>
    );
}

