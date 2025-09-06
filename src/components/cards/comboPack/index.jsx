import { CircleCheck } from "lucide-react";
import React from "react";
import { useComboStore } from "../../../store";

export const ComboPackCard = ({
  onOpen,
  id,
  title,
  details,
  price,
  isPopular = false,
}) => {
  const handleFormChange = useComboStore((s) => s.handleFormChange);
  return (
    <div
      className={`relative rounded-xl shadow-lg p-8 flex flex-col backdrop-blur-3xl bg-white  max-w-sm w-full ${isPopular ? " !bg-blue-600" : ""}`}
    >
      <p
        className={`text-3xl leading-relaxed font-bold text-gray-800 ${isPopular && "text-white"}`}
      >
        {title}
      </p>
      <p
        className={`text-4xl font-bold mb-4 leading-relaxed text-gray-900 ${isPopular && "text-white"}`}
      >
        ₹{price}
      </p>
      <ul className={`space-y-3 text-gray-500 mb-8 flex-grow`}>
        {details.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-1.5 text-gray-800 ${isPopular && "text-white"}`}
          >
            <CircleCheck
              className={`size-5 text-green-400 ${isPopular && "text-green-500 brightness-150"}`}
            />{" "}
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          onOpen(true);
          console.log(id);
          handleFormChange("comboPack", id);
        }}
        className={`mt-auto cursor-pointer text-center w-full bg-indigo-100 text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-200 transition duration-300 shadow-lg text-lg ${isPopular && "bg-white !text-blue-600 hover:opacity-90 hover:bg-white"}`}
      >
        Buy Now
      </button>

      {isPopular && (
        <div className="absolute -top-3 left-1/3 border bg-pink-500 border-gray-400 px-3 py-0.5 rounded-full w-fit ">
          <p className="text-white font-semibold ">Most Popular</p>
        </div>
      )}
    </div>
  );
};
