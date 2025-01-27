import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import TimelineBlock from "@/components/Timeline/TimelineBlock";

export const Educations = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Educations</h1>
      <Timeline>
        <TimelineBlock
          date="2021 - 2023"
          title="Bodindecha (Sing Singhaseni) School"
          description="Served as class leader, played basketball, and organized extracurricular activities such as sports events and school projects."
        />
        <TimelineBlock
          date="2021 - 2023"
          title="Thammasat University"
          description="Pursued Computer Engineering as part of the TEP twin degree program, achieving academic excellence."
        />
        <TimelineBlock
          date="2021 - 2023"
          title="The University of New South Wales (UNSW Sydney)"
          description="Studied Computer Engineering as part of the TEP dual degree program while working part-time to support tuition and living expenses."
        />
        <TimelineBlock
          date="2023 - Present"
          title="Bangkok University"
          description="Completed my Computer Science degree after transitioning from Thammasat University due to accommodation costs and work-life balance considerations."
        />
      </Timeline>
    </div>
  );
};
