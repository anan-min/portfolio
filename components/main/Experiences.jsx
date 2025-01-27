import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import TimelineBlock from "@/components/Timeline/TimelineBlock";

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Experiences</h1>
      <Timeline>
        <TimelineBlock
          date="2019"
          title="Teaching Instructor for Calculus and Physics"
          description="Awarded for academic excellence, I was hired by Thammasat University's Engineering Faculty to tutor first-year Calculus and Physics for two terms."
        />
        <TimelineBlock
          date="2021 - 2023"
          title="Diner Busser"
          description="Worked as a diner busser at Bonanza Thai and a café for 1.5 years to support tuition and accommodation costs, developing strong customer service and multitasking skills."
        />
        <TimelineBlock
          date="2024"
          title="Teaching Instructor for Machine Learning"
          description="Served as a teaching assistant for a Machine Learning class and later taught high school students during an open house event, leading hands-on projects to demonstrate real-world applications."
        />
      </Timeline>
    </div>
  );
};
