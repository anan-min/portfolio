import React from "react";
import { Button } from "@/components/ui/button";
import { BlogTags } from "@/components/Blog/BlogTags";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const BlogCard = ({ title, description, tags, link }) => {
  return (
    <Card>
      <CardHeader>
        <BlogTags tags={tags} />
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant={"blog_button"}>Read More</Button>
        </a>
      </CardContent>
    </Card>
  );
};
