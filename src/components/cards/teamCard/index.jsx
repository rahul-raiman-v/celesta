import React from "react";
import { Mail, Phone } from "lucide-react";

export const TeamCard = ({
  name,
  image,
  designation,
  phone,
  email,
  variant,
}) => {
  if (variant?.trim() === "faculty") {
    return (
      <div className="shadow-xl max-w-[317.45px] w-full rounded-lg px-8 py-12 border border-gray-300 flex flex-col gap-y-2.5 bg-transparent backdrop-blur-2xl ">
        <div className="flex items-center flex-col">
          <img
            src={image}
            alt={name}
            className="size-30 rounded-full shadow-2xl "
            loading="lazy"
          />
          <div className=" mt-3 ">
            <p className="leading-tight text-2xl text-center text-gray-800 truncate max-md:text-xl max-sm:text-lg">
              {name}
            </p>
            <p className="leading-tight text-lg text-center text-gray-700 max-md:text-md max-sm:text-sm">
              {designation}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="shadow-xl rounded-lg px-6 py-5 border border-gray-300 w-full flex flex-col gap-y-2.5 bg-transparent backdrop-blur-2xl max-w-[317.45px] h-full">
      <div className="flex items-center flex-col">
        <img
          src={image}
          alt={name}
          className="size-30 rounded-full shadow-2xl object-cover"
          loading="lazy"
        />
        <div className="flex flex-col gap-y-1 mt-1.5">
          <p className="leading-tight text-2xl text-center text-gray-800 truncate max-md:text-xl max-sm:text-lg">
            {name}
          </p>
          <p className="leading-tight text-lg text-center text-gray-700 max-md:text-md max-sm:text-sm">
            {designation}
          </p>
        </div>
      </div>
      {phone.trim() && email.trim() && <hr className="border-gray-400" />}
      <div className="flex flex-col gap-y-1 items-center">
        {phone.trim() && (
          <div className="flex items-center gap-x-4">
            <Phone className="size-6 text-gray-600" />
            <a
              href={`tel:${phone}`}
              className="text-gray-600 text-lg hover:text-blue-600"
            >
              {phone}
            </a>
          </div>
        )}
        {email.trim() && (
          <div className="">
            <p className="text-gray-600 text-lg text-ellipsis overflow-hidden font-semibold text-center">
              {email}
            </p>
            <p className="text-gray-800 text-lg text-ellipsis overflow-hidden font-bold text-center">
              Code Circle
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
