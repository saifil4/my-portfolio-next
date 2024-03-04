"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";
import { LampEffect } from "@/components/ui/Lamp";

export default function Contact() {
    return (
        <LampEffect>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                    Contact me
                </h1>
                <ContactForm />
            </motion.div>

        </LampEffect>
    );
}

