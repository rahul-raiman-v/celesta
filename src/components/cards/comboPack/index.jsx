import { CircleCheck } from "lucide-react";
import React from "react";

export const ComboPackCard = ({ title, details, isPopular = false }) => {
  return (
    <button
      className={`relative rounded-xl shadow-lg p-8 flex flex-col cursor-pointer backdrop-blur-3xl border border-gray-300 bg-white  max-w-sm w-full `}
      onClick={() => window.open("https://forms.gle/2AF6GNofg4bmajTS8")}
    >
      <p
        className={`text-3xl leading-relaxed font-bold text-gray-800 text-left `}
      >
        {title}
      </p>
      {/* <p
        className={`text-4xl font-bold mb-4 leading-relaxed text-gray-900`}
      >
        ₹{price}
      </p> */}
      <ul className={`space-y-3 text-gray-500 mt-1 flex-grow`}>
        {details.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-1.5 text-gray-800 `}
          >
            <CircleCheck className={`size-5 text-green-400`} /> {item}
          </li>
        ))}
      </ul>
      {/* <button
        onClick={() => {
          onOpen(true);
          console.log(id);
          handleFormChange("comboPack", id);
        }}
        className={`mt-auto cursor-pointer text-center w-full bg-indigo-100 text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-200 transition duration-300 shadow-lg text-lg `}
      >
        Buy Now
      </button> */}

      {isPopular && (
        <div className="absolute -top-3 lg:left-1/3 left-1/4 border bg-pink-500 border-gray-400 px-3 py-0.5 rounded-full w-fit ">
          <p className="text-white font-semibold ">Most Popular</p>
        </div>
      )}
    </button>
  );
};
