import React from "react";
import Tags from "@/components/Tags";
import YouTube from "react-youtube";
import {
  ProjectCard,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardHeader,
  ProjectCardTitle,
} from "@/components/ui/ProjectCard";

import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";
import placeholder_img from "@/public/images/place_holder.png";

export const GalleryBlock = ({
  title,
  description,
  skills,
  image = placeholder_img,
}) => {
  return (
    <ProjectCard>
      <ProjectCardHeader className="w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="object-cover"
        />
      </ProjectCardHeader>
      <ProjectCardFooter className="flex flex-col items-start gap-3">
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <ProjectCardDescription>{description}</ProjectCardDescription>
        <Tags skills={skills} />
        <Button
          className="max-w-max px-4 py-2 inline-flex items-center gap-2 text-justify text-lg my-2 font-semibold"
          variant={"blog_button"}
        >
          <FaGithub /> Code
        </Button>
      </ProjectCardFooter>
    </ProjectCard>
  );
};

export const GalleryVideoBlock = ({
  title,
  description,
  skills,
  video_link,
}) => {
  return (
    <ProjectCard>
      <ProjectCardHeader
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          aspectRatio: "16 / 9",
        }}
      >
        <YouTube
          videoId={new URL(video_link).searchParams.get("v")}
          className="absolute inset-0 w-full h-full"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              mute: 1,
            },
          }}
        />
      </ProjectCardHeader>
      <ProjectCardFooter className="flex flex-col items-start gap-2">
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <ProjectCardDescription>{description}</ProjectCardDescription>
        <Tags skills={skills} />
        <Button
          className="max-w-max px-4 mt-4  gap-2 text-justify text-lg my-2 font-semibold"
          variant={"blog_button"}
        >
          <FaGithub /> Code
        </Button>
      </ProjectCardFooter>
    </ProjectCard>
  );
};
