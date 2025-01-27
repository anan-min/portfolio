import React from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "React",
    "NextJS",
    "Angular",
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript (JS)",
    "Python",
    "Java",
    "C#",
    "C",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "PowerBI",
    "SQL",
    "Git",
    "Docker",
    "APIs",
    "OOP",
    ".NET MAUI",
    "Network",
    "Linux",
    "Calculus",
    "Teaching",
  ];
  return (
    <div className="flex flex-col items-start gap-6 xl:w-2/3">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Skills
      </h1>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="px-2 py-2 text-sm  font-medium 
            rounded-xl bg-gray-100 text-gray-800 
            hover:text-white
            dark:bg-gray-800 dark:text-gray-200
            dark:hover:bg-gray-700"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
