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

export const BlogCard = ({ title, description, tags }) => {
  return (
    <Card>
      <CardHeader>
        <BlogTags tags={tags} />
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={"blog_button"}>Read More</Button>
      </CardContent>
    </Card>
  );
};
