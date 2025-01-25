"use client";
import Skills from "@/components/main/Skills";
import { Profile } from "@/components/main/Profile";
import { Background } from "@/components/main/Background";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <>
      <Meteors />
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>
      <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden p-2">
          <Profile />
          <Background />
          <Skills />
        </main>
      </div>
    </>
  );
}
