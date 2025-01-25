import React from "react";
import Image from "next/image"; // Correct import for Next.js optimized images
import profilePic from "@/public/images/profile.png"; // Import the image
import { Contacts } from "@/components/main/Contacts";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export const Profile = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-8/12">
        <h1 className="text-5xl font-bold">I'm Anan M.</h1>
        <Contacts />
        <p className="text-base text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab
          sapiente dignissimos pariatur sint, itaque non explicabo impedit
          commodi optio iure, nemo beatae, harum reprehenderit omnis laboriosam
          magni. Tempore, eligendi.
        </p>
        
      </div>
      <div className="w-4/12">
        <Image
          src={profilePic}
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full border border-gray-50000"
        />
      </div>
    </div>
  );
};
