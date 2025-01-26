import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <ul className="space-y-6 text-gray-500 list-none dark:text-gray-400 text-xl">
        <li className="flex items-center gap-3">
          <a
            href="https://github.com/anan-min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-green-800 dark:text-gray-200 hover:text-green-400 flex items-center"
          >
            <FaGithub className="h-8 w-8" />
            <span className="ml-4 text-green-400 hover:underline">anan-min</span>
          </a>
        </li>
        <li className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/anan-min/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-800 dark:text-gray-200 hover:text-green-400 flex items-center"
          >
            <FaLinkedin className="h-8 w-8" />
            <span className="ml-4 text-green-400 hover:underline">anan-min</span>
          </a>
        </li>
        <li className="flex items-center gap-3">
          <a
            href="mailto:anan.min@outlook.com"
            aria-label="Email"
            className="text-gray-800 dark:text-gray-200 hover:text-green-400 flex items-center"
          >
            <MdEmail className="h-8 w-8" />
            <span className="ml-4 text-green-400 hover:underline">
              anan.min@outlook.com
            </span>
          </a>
        </li>
        <li className="flex items-center gap-3">
          <a
            href="tel:+66888605503"
            aria-label="Phone"
            className="text-gray-800 dark:text-gray-200 hover:text-green-400 flex items-center"
          >
            <FaPhone className="h-8 w-8" />
            <span className="ml-4 text-green-400 hover:underline">
              +66 88 860 5503
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
