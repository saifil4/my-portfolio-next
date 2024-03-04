"use client";
import React from "react";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center h-0">
            <div className="fixed inset-x-0 max-w-2xl mx-auto z-50 top-2">
                <nav className="relative rounded-full boder border-transparent bg-gray-950 drop-shadow shadow-input flex justify-center space-x-4 px-6 py-4 ">
                    <MenuItem item="Work" />
                    <MenuItem item="What can I do" />
                    <MenuItem item="Contact" />
                </nav>
            </div>
        </div>
    );
}


const MenuItem = ({ item }: { item: string }) => {
    return (
        <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer hover:opacity-[0.9] text-white"
        >
            {item}
        </motion.p>
    );
};

