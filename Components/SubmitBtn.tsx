import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex items-center justify-center text-2xl font-semibold gap-2 h-[4rem] w-full bg-[#5cb98d] hover:text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-[1.03] active:scale-[1.03] dark:bg-darkBlack dark:border-2 dark:border-tertiary dark:text-tertiary disabled:scale-100 disabled:bg-opacity-65"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Say Hello{" "}
                    <FaPaperPlane className="text-2xl opacity-70 dark:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    );
}
