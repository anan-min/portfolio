import React from "react";
import Tags from "@/components/Tags";
import YouTube from "react-youtube";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import placeholder_img from "@/public/images/place_holder.png";

export const GalleryBlock = ({
  title,
  description,
  skills,
  image = placeholder_img,
}) => {
  return (
    <Card>
      <CardHeader className="w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="object-cover"
        />
      </CardHeader>
      <CardFooter className="flex flex-col items-start gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Tags skills={skills} />
      </CardFooter>
    </Card>
  );
};

export const GalleryVideoBlock = ({
  title,
  description,
  skills,
  video_link,
}) => {
  return (
    <Card>
      <CardHeader className="relative w-full h-64">
        <YouTube
          videoId={new URL(video_link).searchParams.get("v")}
          className="absolute inset-0 w-full h-full rounded-lg"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </CardHeader>
      <CardFooter className="flex flex-col items-start gap-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Tags skills={skills} />
      </CardFooter>
    </Card>
  );
};
