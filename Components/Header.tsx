"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import clsx from "clsx";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    const [isMobileNavActive, setIsMobileNavActive] = React.useState(false);
    return (
        <header className="z-[999] relative w-full">
            <motion.div
                className={clsx(
                    "fixed top-[2rem] sm:top-[3rem] right-8 sm:right-20 lg:h-[4.5rem] rounded-2xl border border-white border-opacity-40 bg-secondary lg:w-[29rem] transition-all duration-400 ease-in-out dark:border-tertiary dark:bg-darkBlack dark:text-white",
                    { "h-[350px]": isMobileNavActive }
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="lg:hidden w-full h-full flex flex-col justify-center items-center rounded-lg p-2">
                    <div className="w-full flex h-full justify-center gap-5 items-center text-md font-bold py-3 px-2 ">
                        {isMobileNavActive ? (
                            <span
                                className="cursor-pointer bg-gray-200 rounded-full p-2 dark:text-tertiary dark:bg-darkBG"
                                onClick={() => {
                                    setIsMobileNavActive(false);
                                }}
                            >
                                <RxCross2 />
                            </span>
                        ) : (
                            <span
                                className="cursor-pointer bg-gray-200 rounded-full p-2 dark:text-tertiary dark:bg-darkBG"
                                onClick={() => {
                                    setIsMobileNavActive(true);
                                }}
                            >
                                <CgMenu />
                            </span>
                        )}
                        <span className="dark:text-tertiary">MENU</span>
                    </div>
                    {isMobileNavActive && (
                        <>
                            {links.map((link) => (
                                <Link
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                        setIsMobileNavActive(false);
                                    }}
                                    className={clsx(
                                        "h-full w-full flex justify-center items-center transition-all duration-200 ease-in-out font-medium ",
                                        {
                                            "bg-gray-100 rounded-md -z-10 dark:bg-tertiary dark:text-black":
                                                link.name === activeSection,
                                        }
                                    )}
                                    key={link.hash}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            </motion.div>

            {/* ON Desktop */}
            <nav className="hidden h-[3.5rem] lg:flex fixed top-[0.15rem] right-24 py-2 sm:top-[3.9rem] sm:h-[initial] sm:py-0">
                <ul className="hidden lg:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-black hover:bg-white rounded-full transition dark:hover:text-black",
                                    {
                                        "text-black dark:text-darkBlack":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-tertiary"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 20,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
