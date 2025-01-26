import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contacts = () => {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/anan-min"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/anan-min"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
      <a
        href="mailto:anan.min@outlook.com"
        aria-label="Email"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600"
      >
        <MdEmail className="h-8 w-8" />
      </a>
      <a
        href="tel:+66888605503"
        aria-label="Phone"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600"
      >
        <FaPhone className="h-8 w-8" />
      </a>
    </div>
  );
};
