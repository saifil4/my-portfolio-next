import React from "react";

export default function Hero({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-lg md:text-xl font-bold uppercase">
            {children}
        </h1>
    );
}

