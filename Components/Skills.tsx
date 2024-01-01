"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-3 sm:px-6"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.div
                        className=" borderBlack rounded-xl px-5 py-3 bg-primary dark:bg-darkBG dark:text-black"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <Image
                            src={skill.icon}
                            alt="image"
                            width={100}
                            height={100}
                        />
                        <p className="font-bold dark:text-tertiary">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </ul>
        </section>
    );
}
