"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";

import { GoArrowUpRight } from "react-icons/go";
import { projectsData } from "@/lib/data";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="flex flex-col-reverse md:flex-row justify-center items-center  p-3 sm:p-6 gap-4 bg-primary md:max-w-[63rem] border border-black/5 rounded-3xl relative md:h-[32rem] hover:bg-secondary transition dark:text-black dark:bg-darkBG dark:hover:bg-white/20">
                <div className="flex flex-col justify-center w-full md:w-2/5 bg-[#c2ffd48e] rounded-3xl h-full dark:bg-tertiary">
                    <h3 className="text-3xl font-outfit font-semibold p-4">
                        {title}
                    </h3>
                    <ul className="flex flex-wrap gap-2 p-4">
                        {tags.map((tag, index) => (
                            <li
                                className="px-3 bg-black/[0.8] py-1 text-xs uppercase tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <p className=" leading-relaxed line-clamp-7 text-gray-900 text-lg p-4">
                        {description}
                    </p>
                </div>
                <div className="flex w-full max-sm:h-[350px] max-md:h-[450px] md:w-3/5 md:h-full ">
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        fill
                        quality={95}
                        className="!relative object-cover
                            transition 
                            group-hover:scale-[1.02] rounded-3xl"
                    />

                    <Link href={link} target="_blank">
                        <div className="absolute btn-hover flex justify-center items-center z-50 -top-10 -right-10 rounded-full bg-[#181b2e] w-[140px] h-[140px] text-white text-lg font-semibold dark:bg-darkBlack dark:before:bg-tertiary dark:text-black dark:hover:text-white dark:hover:border-white">
                            Live Site{" "}
                            <span className="pl-2">
                                <GoArrowUpRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
}

export default Project;
