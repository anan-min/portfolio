import React from "react";
import { Badge } from "@/components/ui/badge";

export const BlogTags = ({ tags }) => {
  return (
    <div className="flex flex-col items-start gap-6 mb-4">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge key={index} variant={"blog_tag"}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
