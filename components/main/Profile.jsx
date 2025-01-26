import React from "react";
import Image from "next/image"; // Correct import for Next.js optimized images
import profilePic from "@/public/images/profile.png"; // Import the image
import { Contacts } from "@/components/main/Contacts";

export const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 overflow-hidden">
      <div className="lg:order-2 lg:w-4/12 flex justify-center lg:justify-start ">
        <div className="w-56 h-56 relative aspect-w-1 aspect-h-1 border rounded-full border-gray-300 dark:border-gray-800">
          <Image
            src={profilePic}
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="lg:order-1 flex flex-col gap-4 lg:w-8/12 relative">
        <h1 className="text-5xl font-bold">
          I&apos;m <span className="font-bold text-green-400">Anan M.</span>
        </h1>
        <Contacts />
        <p className="text-base text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab
          sapiente dignissimos pariatur sint, itaque non explicabo impedit
          commodi optio iure, nemo beatae, harum reprehenderit omnis laboriosam
          magni. Tempore, eligendi.
        </p>
      </div>
    </div>
  );
};
