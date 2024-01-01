import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import infinity from "@/public/Infinity.webp";
import sumz from "@/public/Sum-z.webp";
import nextauth from "@/public/nextauth.png";

import css from "@/public/skills/css.png";
import git from "@/public/skills/git.png";
import html from "@/public/skills/html.png";
import javascript from "@/public/skills/javascript.png";
import mongodb from "@/public/skills/mongodb.png";
import nodejs from "@/public/skills/nodejs.png";
import reactjs from "@/public/skills/reactjs.png";
import redux from "@/public/skills/redux.png";
import tailwind from "@/public/skills/tailwind.png";
import typescript from "@/public/skills/typescript.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "About",
        hash: "#about",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Infinity - Next Generation Blogging",
        description:
            "A real-time interactive web platform dedicated to tech enthusiasts and programmers. This application allows users to explore, write, and share blogs on topics related to the tech space and programming. It has a built-in Ai for auto-completion feature.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "EdgeStore"],
        imageUrl: infinity,
        link: "https://infinity-sanjeev2514.vercel.app/",
    },
    {
        title: "SumZ - AI Summary Webapp",
        description:
            "AI summary tool build using Vite and Rapid API. It helps to summarize the content of a web page. Just give the link of the website and it will be summarized. Use can generate the summary of a whole page just with-in a While and help to reduce time wastage.",
        tags: ["Vite", "TypeScript", "RapidAPI", "Tailwind", "Redux"],
        imageUrl: sumz,
        link: "https://ai-summarizer-sanju.netlify.app/",
    },
    {
        title: "NextAuth",
        description:
            "It is an authentication system. Users can easily authenticate themselves through email, sign up, log in, and even reset their passwords through mailtrap service.",
        tags: ["Next.js", "Typescript", "Tailwind", "MongoDB", "Nodemailer"],
        imageUrl: nextauth,
        link: "https://next-auth-three-pearl.vercel.app/",
    },
] as const;

export const skillsData = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // "HTML",
    // "CSS",
    // "JavaScript",
    // "TypeScript",
    // "React",
    // "Next.js",
    // "Node.js",
    // "Git",
    // "Tailwind",
    // "MongoDB",
    // "Redux",
    // "Express",
];
