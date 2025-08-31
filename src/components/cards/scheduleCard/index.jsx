import React from "react";
import { PaperPresentationImg } from "../../../assets";

export const ScheduleCard = ({ time, title, description }) => {
  return (
    <div className="flex items-center justify-between border gap-x-8 border-gray-300 p-6 rounded-lg shadow-md bg-white">
      <div className=" flex items-center gap-x-8">
        <p className="text-4xl font-bold text-blue-600 whitespace-nowrap">
          {time}
        </p>
        <PaperPresentationImg className="size-9 text-blue-600 shrink-0" />
        <div className="flex flex-col gap-y-1">
          <p className="text-xl font-bold text-gray-800">{title}</p>
          <p className="text-lg font-medium text-gray-600">{description}</p>
        </div>
      </div>
      <div className="aspect-video w-80 shadow-lg h-full shrink-0 border border-gray-400 rounded-lg"></div>
    </div>
  );
};
