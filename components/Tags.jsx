import React from "react";
import { Badge } from "@/components/ui/badge";

const Tags = ({ skills }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="px-2 py-2 text-sm font-medium 
            rounded-xl bg-gray-100 text-gray-800 
            hover:text-white
            dark:bg-gray-800 dark:text-gray-200"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Tags;
