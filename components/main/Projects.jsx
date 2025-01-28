import React from "react";
import { useState, useEffect } from "react";
import Gallery from "@/components/Gallery/Gallery";
import {
  GalleryVideoBlock,
  GalleryCarouselBlock,
} from "@/components/Gallery/GalleryBlock";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { Mouse, MousePointer } from "lucide-react";
import workshopImg from "@/public/images/workshop.jpg";
import workshop1Img from "@/public/images/workshop_1.png";
import workshop2Img from "@/public/images/workshop_2.png";
import mobileApp from "@/public/images/mobile_app.png";

const projects = [
  {
    type: "video",
    title: "SCG ChatBot",
    description:
      "Built an SCG chatbot fine-tuned with customer data using Ollama and Unsloth. Integrated a React frontend with an audio visualizer to enable interactive communication. Enhanced user engagement through dynamic audio-visual interactions.",
    skills: ["React", "LLM", "Fine-tuning", "API"],
    video_link: "https://www.youtube.com/watch?v=x2_LgcLXj9g&t=1s",
    github_link: "https://github.com/anan-min/ChatBotAPI",
  },
  {
    type: "video",
    title: "CNN model with Keras",
    description:
      "Developed a Convolutional Neural Network (CNN) using Keras, a high-level API over TensorFlow, for the classification of tiny images. The CNN architecture is optimized for lightweight images and can serve as the foundation for further development into real-world image detection applications.",
    skills: ["CNN", "Deep Learning", "Python", "Keras"],
    video_link: "https://www.youtube.com/watch?v=cECVni3evGg",
    github_link: "https://anancnn.streamlit.app/",
  },
  {
    type: "carousel",
    title: "Data Science Workshop",
    description:
      "Led a workshop for high school students on machine learning and EDA, where they used a Google Colab notebook I created to build models for product recommendations from the Sephora review dataset.",
    skills: ["Machine Learning", "EDA", "Python", "Teamwork"],
    images: [workshopImg, workshop1Img, workshop2Img],
    github_link: "https://github.com/anan-min/open_house",
  },
  {
    type: "video",
    title: "ERP using Angular",
    description:
      "Built a local ERP system with Angular to manage customer data, invoices, orders, payments, and products. It uses PostgreSQL for the database and a simple backend, with reporting features. This system can be deployed within a company for efficient internal use.",
    skills: ["Angular", "PostgresQL", "API"],
    video_link: "https://www.youtube.com/watch?v=SCJrVcIIw1E",
    github_link: "https://github.com/anan-min/ERP",
  },

  {
    type: "carousel",
    title: "Mobile Application .NET MAUI",
    description:
      "This mobile application is a robust, locally-operated ERP system developed using .NET MAUI. It is designed to streamline warehouse management by offering tools for tracking and managing inventory, editing invoices, handling customer information, and generating detailed reports. The application leverages .NET MAUI’s cross-platform capabilities to ensure seamless operation on both Android and iOS devices.",
    skills: ["C#", ".NET MAUI", "SQL", "Mobile Development"],
    images: [mobileApp],
    github_link: "https://github.com/anan-min/StockMinderApp",
  },
  {
    type: "video",
    title: "BU Openhouse Website Demo",
    description:
      "The BU Open House Demo Website is a web-based application designed using React to replicate the official Bangkok University Open House website from August 2024. This demo platform captures the core functionalities and design of the original site, focusing on providing a user-friendly interface to promote and share information about the Open House event.",
    skills: ["React", "CSS", "HTML", "JS"],
    video_link: "https://www.youtube.com/watch?v=HumuUq65iBQ",
    github_link: "https://github.com/anan-min/bu_open_house_demo_project",
  },
  {
    type: "video",
    title: "Window Application",
    description:
      "This window-based eCommerce application is designed to provide a seamless shopping experience for users, allowing them to browse products, add them to their cart, and complete the purchase. The application uses Python libraries such as Tkinter for the user interface and SQLite for managing product listings and user data.",
    skills: ["Python", "OOP"],
    video_link: "https://youtu.be/CsZ-wvK5hf4",
    github_link: "https://github.com/anan-min/ecommerce-window-app",
  },
  {
    type: "carousel",
    title: "Recommendation System from Sephora Reviwew",
    description:
      "This project involves building a machine learning-based recommendation system for Sephora's product dataset. It integrates various machine learning models and employs a voting mechanism to enhance the prediction accuracy. The system was showcased at the NCST Conference, where it received recognition and a certificate for its innovation and practical application.",
    skills: ["ML", "Recommendation System", "Python", "Research"],
    images: [mobileApp],
    github_link: "https://github.com/anan-min/StockMinderApp",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleProjects = showMore ? projects : projects.slice(0, visibleCount);

  const updateVisibleCount = () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      setVisibleCount(2); // Mobile screen
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      setVisibleCount(2); // Tablet screen
    } else {
      setVisibleCount(6); // Desktop screen
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="flex flex-col gap-4 z-10">
      <div className="flex flex-row gap-4 items-center">
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
      </div>

      <Gallery>
        {visibleProjects.map((project, index) =>
          project.type === "video" ? (
            <GalleryVideoBlock
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              video_link={project.video_link}
              github_link={project.github_link}
            />
          ) : (
            <GalleryCarouselBlock
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              images={project.images}
              github_link={project.github_link}
            />
          )
        )}
      </Gallery>
      <Button
        className="max-w-max px-4 py-4 mt-4 text-xl z-10"
        variant="blog_button"
        onClick={() => setShowMore(!showMore)}
        onTouchEnd={() => setShowMore(!showMore)}
      >
        <MousePointer />
        {showMore ? "Less Projects" : "More Projects"}
      </Button>
    </div>
  );
};

export default Projects;
