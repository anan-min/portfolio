"use client";
import { Profile } from "@/components/main/Profile";
import { Meteors } from "@/components/ui/meteors";
import { Background } from "@/components/main/Background";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
      <div className="absolute top-4 right-0">
        <ThemeToggleButton />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden p-2">
        <Meteors />
        <Profile />
        <Background />
      </main>
    </div>
  );
}
