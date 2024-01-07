"use client";

import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center p-3 sm:p-6"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a
                    className="underline"
                    href="mailto:sanjeevkansyakar789@gmail.com"
                >
                    sanjeevkansyakar789@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <div className="bg-primary rounded-3xl py-10 px-5 mt-4 dark:bg-darkBG">
                <form
                    className=" flex flex-col dark:text-black"
                    action={async (formData) => {
                        const { error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success("Email sent successfully!");
                    }}
                >
                    <input
                        className="h-14 px-4 rounded-full borderBlack outline-[#5cb98d] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-tertiary"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={50}
                        placeholder="Your email"
                    />
                    <textarea
                        className="h-32 my-3 rounded-3xl borderBlack p-4 outline-[#5cb98d] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="message"
                        placeholder="Your message"
                        required
                        maxLength={5000}
                    />
                    <SubmitBtn />
                </form>
            </div>

            <div className="flex justify-center items-center gap-8 pt-10">
                <Link
                    href="https://github.com/sanjeevkansyakar"
                    target="blank"
                    prefetch={false}
                    className="hover:scale-110 transition-all duration-200 ease-in-out"
                >
                    <FaGithub className="h-14 w-14 rounded-full bg-secondary p-4 hover:text-white flex items-center dark:bg-tertiary dark:text-black" />
                </Link>
                <Link
                    href="https://drive.google.com/file/d/1PNuLPWKa3KgV1Q4eiB8iCpXhLU1vIjtA/view?usp=sharing"
                    target="_blank"
                    className="text-xl bg-white py-4 px-8 rounded-full hover:tracking-wide hover:bg-secondary hover:text-white transition-all duration-100 ease-in-out group dark:bg-darkBlack dark:border-2 dark:border-tertiary dark:text-white"
                >
                    Resume
                    <FaDownload className="h-4 w-4 inline-block ml-2" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/sanjeev-kansyakar/"
                    target="blank"
                    prefetch={false}
                    className=" rounded-full hover:scale-110 transition-all duration-200 ease-in-out"
                >
                    <FaLinkedinIn className="h-14 w-14 rounded-full bg-secondary p-4 hover:text-white flex items-center dark:bg-tertiary dark:text-black" />
                </Link>
            </div>
        </motion.section>
    );
}
