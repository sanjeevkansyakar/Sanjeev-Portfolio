"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-tertiary"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}
