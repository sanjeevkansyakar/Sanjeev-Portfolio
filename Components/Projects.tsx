"use client";

import React from "react";

import SectionHeading from "./SectionHeading";
import Project from "./Project";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.3);

    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 px-3 sm:px-6"
        >
            <SectionHeading>My Projects</SectionHeading>

            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
