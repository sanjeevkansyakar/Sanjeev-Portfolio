"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="relative mb-48 max-w-[63rem] text-center leading-8 sm:mb-44 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>

            <div className="flex flex-col md:flex-row w-full gap-6 p-3 sm:p-6">
                <div className="rounded-3xl w-full p-6 text-2xl leading-10 bg-primary md:w-1/2 dark:bg-tertiary">
                    🌟 Hi there! I&#8217;m{" "}
                    <span className="italic">Sanjeev Kansyakar</span>, a{" "}
                    <span className="font-semibold">full-stack developer</span>{" "}
                    with expertise in{" "}
                    <span className="font-medium">ReactJS</span>,{" "}
                    <span className="font-medium">JavaScript</span> and the{" "}
                    <span className="font-medium">MERN stack</span>.
                    <br />
                    <br />I graduated with degree in{" "}
                    <span className="italic">Computer Science</span>, and my
                    journey into programming began as a pursuit of my{" "}
                    <span className="font-medium">love for technology</span>.
                    <br />
                    <br />I spend my time creating and learning about new things
                    with code. When I'm not immersed in code, you can find me
                    exploring new places, indulging in movies, or enjoying a
                    game of cricket with my friends 👯‍♂️.
                </div>
                <div className="flex flex-col gap-6 md:w-1/2 rounded-3xl ">
                    <div className="max-md:h-[33rem] h-[33rem]">
                        <Image
                            src="/about.jpg"
                            alt="about image"
                            fill
                            quality={95}
                            className="!relative object-cover rounded-3xl"
                        />
                    </div>
                    <div className="rounded-3xl p-6 text-2xl leading-10 bg-primary dark:bg-tertiary">
                        Let&#8217;s connect and weave some magic together! ✨
                    </div>
                </div>
            </div>

            <Image
                src="/down-arrow.png"
                alt="down arrow"
                width={200}
                height={200}
                className="absolute -bottom-56 left-[35%] h-72"
            />
        </motion.section>
    );
}
