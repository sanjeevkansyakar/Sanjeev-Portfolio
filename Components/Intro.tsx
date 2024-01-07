"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

// 3D text function
function Text3d({
    primary,
    secondary,
}: {
    primary: string;
    secondary: string;
}) {
    return (
        <div className={`${outfit.className} textContainer`}>
            <p className="primary dark:text-white">{primary}</p>

            <p className="secondary dark:text-tertiary">{secondary}</p>
        </div>
    );
}

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);

    const plane = useRef<HTMLDivElement | null>(null);

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const maxRotate = 45;

    const manageMouseMove = (e: React.MouseEvent) => {
        if (plane.current) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            const perspective = window.innerWidth * 4;
            const rotateX = maxRotate * x - maxRotate / 2;
            const rotateY = (maxRotate * y - maxRotate / 2) * -1;

            plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        }
    };

    return (
        <section
            ref={ref}
            id="home"
            className="relative mb-28 w-full min-h-srceen px-4 sm:px-10 text-center "
        >
            <motion.div
                className="group text-left bg-primary text-4xl sm:text-6xl font-extrabold my-4 py-4 sm:py-8 px-6 rounded-3xl dark:bg-darkBG"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <h2 className="bg-gradient-to-r from-[#516558] to-[#81dab0] text-transparent leading-[4.3rem] bg-clip-text dark:text-white">
                    Sanjee<span className="dark:text-tertiary">V</span>
                </h2>
            </motion.div>

            <div className="grid-container relative w-full h-full gap-4">
                <motion.div
                    className="bg-primary relative rounded-3xl item1 dark:bg-darkBG"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "tween",
                        delay: 0.1,
                    }}
                >
                    <Image
                        src="/hero.png"
                        alt="hero-image"
                        width={450}
                        height={450}
                        priority
                        className="object-cover w-full h-full max-h-[750px] !relative"
                    />
                </motion.div>

                <motion.div
                    className="bg-primary rounded-3xl item2 flex items-center justify-center py-3 dark:bg-darkBG"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "tween",
                        delay: 0.1,
                    }}
                >
                    <div
                        onMouseMove={(e) => {
                            manageMouseMove(e);
                        }}
                        className="containers flex-col"
                    >
                        <div ref={plane} className="bodys py-4 pb-8 px-4 ">
                            <Text3d primary={"Hello"} secondary={"Hello"} />

                            <Text3d
                                primary={"I'm Sanjeev"}
                                secondary={"I'm Sanjeev"}
                            />

                            <Text3d
                                primary={"Web Developer"}
                                secondary={"Web Developer"}
                            />
                        </div>

                        <div className="flex justify-end items-center gap-4 mx-4 mt-3">
                            <Link
                                href="#contact"
                                className="group bg-secondary sm:text-2xl font-semibold px-4 sm:px-12 py-2 sm:py-5 flex items-center gap-2 borderBlack rounded-[40px] outline-none focus:scale-110 hover:scale-105 active:scale-105 transition dark:bg-tertiary dark:text-darkBlack"
                                onClick={() => {
                                    setActiveSection("Contact");
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                Say Hii
                                <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
                            </Link>

                            <Link
                                className="group bg-white sm:text-2xl font-normal px-6 py-2 sm:px-12 sm:py-5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack  dark:text-tertiary dark:bg-darkBlack dark:border-2 dark:border-tertiary"
                                href="https://drive.google.com/file/d/1PNuLPWKa3KgV1Q4eiB8iCpXhLU1vIjtA/view?usp=sharing"
                                target="_blank"
                            >
                                Resume{" "}
                                <HiDownload className="opacity-70 dark:opacity-100 group-hover:translate-y-1 transition" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-3 sm:gap-7 px-4 py-4 min-[400px]:text-xl sm:text-2xl lg:text-4xl font-medium rounded-3xl item3 bg-primary dark:bg-darkBG"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "tween",
                        delay: 0.1,
                    }}
                >
                    <a
                        className="bg-secondary hover:text-white p-4 flex items-center gap-2 rounded-2xl focus:scale-[1.05] hover:scale-[1.05] hover:bg-[#52a580] active:scale-105 transition cursor-pointer borderBlack dark:bg-tertiary dark:text-darkBlack"
                        href="https://www.linkedin.com/in/sanjeev-kansyakar/"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="mailto:sanjeevkansyakar789@gmail.com"
                        className=" bg-secondary py-4 px-6 rounded-2xl hover:tracking-wide borderBlack hover:bg-[#52a580] hover:text-white transition-all duration-200 ease-in-out group dark:bg-darkBlack dark:text-tertiary dark:border-2 dark:border-tertiary"
                    >
                        @sanjeev.mail
                        <LiaTelegramPlane className="inline-block ml-2" />
                    </a>

                    <a
                        className="bg-secondary p-4 hover:text-white flex items-center gap-2 rounded-2xl focus:scale-[1.05] hover:scale-[1.05] hover:bg-[#52a580] active:scale-105 transition cursor-pointer borderBlack dark:bg-tertiary dark:text-darkBlack"
                        href="https://github.com/sanjeevkansyakar"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
