import React from "react";
import { PaperPresentationImg } from "../../../assets";

export const ScheduleCard = ({ time, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:justify-between border gap-x-8 gap-y-4 border-gray-300 p-6 rounded-lg shadow-md bg-white">
      <div className=" flex md:flex-row flex-col items-center gap-y-4 gap-x-8">
        <p className="md:text-4xl text-2xl font-bold text-blue-600 whitespace-nowrap">
          {time}
        </p>
        <PaperPresentationImg className="size-8 md:size-9 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg md:text-xl font-bold text-gray-800">{title}</p>
          <p className="md:text-lg font-medium text-gray-600">{description}</p>
        </div>
      </div>
      {/* <img
        src={src}
        alt={title}
        loading="lazy"
        className="aspect-video w-full lg:w-80 shadow-lg h-full shrink-0 border border-gray-400 rounded-lg"
      /> */}
    </div>
  );
};
