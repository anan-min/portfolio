import React from "react";
import Gallery from "@/components/Gallery/Gallery";
import {
  GalleryVideoBlock,
  GalleryCarouselBlock,
} from "@/components/Gallery/GalleryBlock";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

import workshopImg from "@/public/images/workshop.jpg";
import workshop1Img from "@/public/images/workshop_1.png";
import workshop2Img from "@/public/images/workshop_2.png";

import mobileApp from "@/public/images/mobile_app.png";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <a
        href="https://github.com/anan-min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="max-w-max px-4 py-2 inline-flex items-center gap-2 text-justify text-lg my-2"
          variant={"blog_button"}
        >
          <FaGithub /> Check on Github
        </Button>
      </a>

      <Gallery>
        <GalleryVideoBlock
          title="SCG ChatBot"
          description="Built an SCG chatbot fine-tuned with customer data using Ollama and Unsloth. Integrated a React frontend with an audio visualizer to enable interactive communication. Enhanced user engagement through dynamic audio-visual interactions."
          skills={["React", "LLM", "Fine-tuning", "API"]}
          video_link="https://www.youtube.com/watch?v=x2_LgcLXj9g&t=1s"
          github_link="https://github.com/anan-min/ChatBotAPI"
        />
        <GalleryVideoBlock
          title="ERP using Angular"
          description="Built a local ERP system with Angular to manage customer data, invoices, orders, payments, and products. It uses PostgreSQL for the database and a simple backend, with reporting features. This system can be deployed within a company for efficient internal use."
          skills={["Angular", "PostgresQL", "API"]}
          video_link="https://www.youtube.com/watch?v=SCJrVcIIw1E"
          github_link="https://github.com/anan-min/ERP"
        />

        <GalleryVideoBlock
          title="CNN model with Keras"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["CNN", "Deep Learning", "Python", "Keras"]}
          video_link="https://www.youtube.com/watch?v=cECVni3evGg"
          github_link="https://anancnn.streamlit.app/"
        />

        <GalleryVideoBlock
          title="Window Application"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["Python", "OOP"]}
          video_link="https://youtu.be/CsZ-wvK5hf4"
          github_link="https://github.com/anan-min/ecommerce-window-app"
        />
        <GalleryCarouselBlock
          title="Mobile Application .NET MAUI"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ablorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab "
          skills={["C#", ".NET MAUI", "SQL", "Mobile Development"]}
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          images={[mobileApp]}
          github_link="https://github.com/anan-min/StockMinderApp"
        />

        <GalleryVideoBlock
          title="BU Openhouse website demo"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
          skills={["React", "CSS", "HTML", "JS"]}
          video_link="https://www.youtube.com/watch?v=HumuUq65iBQ"
          github_link="https://github.com/anan-min/bu_open_house_demo_project"
        />

        <GalleryCarouselBlock
          title="Data Science Workshop"
          description="Led a workshop for high school students on machine learning and EDA, where they used a Google Colab notebook I created to build models for product recommendations from the Sephora review dataset."
          skills={["Machine Learning", "EDA", "Python", "Teamwork"]}
          images={[workshopImg, workshop1Img, workshop2Img]}
          github_link="https://github.com/anan-min/open_house"
        />
      </Gallery>
    </div>
  );
};

export default Projects;
