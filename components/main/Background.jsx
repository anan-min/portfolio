import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import TimelineBlock from "@/components/Timeline/TimelineBlock";

export const Background = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Background</h1>
      <Timeline>
        <TimelineBlock
          date="2021 - 2023"
          title="Software Engineer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
        />
        <TimelineBlock
          date="2021 - 2023"
          title="Software Engineer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
        />
        <TimelineBlock
          date="2021 - 2023"
          title="Software Engineer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab"
        />
      </Timeline>
    </div>
  );
};
