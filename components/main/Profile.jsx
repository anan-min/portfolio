import React from "react";
import Image from "next/image"; // Correct import for Next.js optimized images
import profilePic from "@/public/images/profile.png"; // Import the image
import { Contacts } from "@/components/main/Contacts";

export const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="lg:order-2 lg:w-4/12 flex justify-center lg:justify-center ">
        <div className="w-56 h-56 relative aspect-w-1 aspect-h-1 rounded-full overflow-hidden transform transition-all hover:scale-110">
          <div className="absolute inset-0 dark:bg-slate-500 bg-slate-500 opacity-10 blur-sm z-0"></div>
          <Image
            src={profilePic}
            alt="Profile"
            fill
            className="rounded-full object-cover z-10"
          />
        </div>
      </div>

      <div className="lg:order-1 flex flex-col gap-3 lg:w-6/12 relative">
        <h1 className="text-5xl font-bold">
          I&apos;m{" "}
          <span className="font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600">
            Anan M.
          </span>
        </h1>
        <h3 className="text-2xl font-bold">Computer Science Student</h3>
        <Contacts />
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab
          sapiente dignissimos pariatur sint, itaque non explicabo impedit
          commodi optio iure, nemo beatae, harum reprehenderit omnis laboriosam
          magni. Tempore, eligendi.
        </p>
      </div>
    </div>
  );
};
