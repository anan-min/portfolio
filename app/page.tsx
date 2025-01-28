"use client";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import { Profile } from "@/components/main/Profile";
import { Educations } from "@/components/main/Educations";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Meteors } from "@/components/ui/meteors";
import { Experiences } from "@/components/main/Experiences";
import { Blogs } from "@/components/Blog/Blogs";
import { Certificate } from "@/components/Certificate/Certificate";
import { ContactMe } from "@/components/main/ContactMe";

export default function Home() {
  return (
    <div className=" relative overflow-hidden">
      <Meteors />
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>
      <div className="w-11/12  lg:w-10/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
        <main className="flex flex-col gap-8 row-start-2 overflow-hidden p-2">
          <Profile />
          <Skills />
          <div className="flex flex-col lg:flex-row gap-x-20 justify-items-start">
            <Educations />
            <div className="lg:ml-10 xl:ml-28">
              <Experiences />
            </div>
          </div>
          <Projects />
          <Blogs />
          <Certificate />
          <ContactMe />
        </main>
      </div>
    </div>
  );
}
