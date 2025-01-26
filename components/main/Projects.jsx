import React from "react";
import Gallery from "@/components/Gallery/Gallery";
import {
  GalleryBlock,
  GalleryVideoBlock,
} from "@/components/Gallery/GalleryBlock";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Button
        className="max-w-max px-4 py-2 inline-flex items-center gap-2 text-justify text-lg my-2"
        variant={"blog_button"}
      >
        <FaGithub /> Check on Github
      </Button>
      <Gallery>
        <GalleryVideoBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
          video_link="https://www.youtube.com/watch?v=SCJrVcIIw1E"
        />
        <GalleryVideoBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
          video_link="https://www.youtube.com/watch?v=x2_LgcLXj9g&t=1s"
        />
        <GalleryVideoBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
          video_link="https://www.youtube.com/watch?v=cECVni3evGg"
        />
        <GalleryBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ablorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab "
          skills={["React", "CSS", "HTML", "JS"]}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          image={require("@/public/images/workshop.jpg")}
        />

        <GalleryBlock
          title="Project 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ablorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab "
          skills={["React", "CSS", "HTML", "JS"]}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          image={require("@/public/images/window_app.png")}
        />
        <GalleryBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ablorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab "
          skills={["React", "CSS", "HTML", "JS"]}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          image={require("@/public/images/mobile_app.png")}
        />
      </Gallery>
    </div>
  );
};

export default Projects;
