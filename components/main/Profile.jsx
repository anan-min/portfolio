import React from "react";
import Image from "next/image"; // Correct import for Next.js optimized images
import profilePic from "@/public/images/profile.png"; // Import the image

export const Profile = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Anan Mingmitpattanakul</h1>
        <p className="text-sm text-gray-800">Full Stack Developer</p>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab
          sapiente dignissimos pariatur sint, itaque non explicabo impedit
          commodi optio iure, nemo beatae, harum reprehenderit omnis laboriosam
          magni. Tempore, eligendi.
        </p>
        <div>
          <Image src={profilePic} alt="Profile" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
