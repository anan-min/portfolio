import React from "react";

const TimelineBlock = ({ date, title, description, shortDescription }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 hidden lg:block">
          {description}
        </p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 lg:hidden">
          {shortDescription}
        </p>
      </div>
    </li>
  );
};

export default TimelineBlock;
