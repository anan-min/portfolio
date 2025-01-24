import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contacts = () => {
  return (
    <div className="flex space-x-4">
      <FaGithub className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      <FaLinkedin className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      <MdEmail className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      <FaPhone className="h-6 w-6 text-gray-800 dark:text-gray-200" />
    </div>
  );
};
