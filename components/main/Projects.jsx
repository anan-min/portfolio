import React from "react";
import Gallery from "@/components/Gallery/Gallery";
import GalleryBlock from "@/components/Gallery/GalleryBlock";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Gallery>
        <GalleryBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
        />
        <GalleryBlock
          title="Project 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
        />
        <GalleryBlock
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
        />
        <GalleryBlock
          title="Project 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
        />
      </Gallery>
    </div>
  );
};

export default Projects;
