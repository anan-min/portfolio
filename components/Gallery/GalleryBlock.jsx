import React from "react";
import Tags from "@/components/Tags";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import placeholder_img from "@/public/images/place_holder.png";

const GalleryBlock = ({ title, description, skills }) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={placeholder_img}
          alt="placeholder"
          width={600}
          height={600}
          className="w-full h-full"
        />
      </CardHeader>
      <CardFooter>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Tags skills={skills} />
      </CardFooter>
    </Card>
  );
};

export default GalleryBlock;
