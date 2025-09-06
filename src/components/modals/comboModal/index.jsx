import React from "react";
import { useComboStore } from "../../../store";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { RenderPageComponent } from "./components";

export const ComboModal = ({ onClose }) => {
  const formData = useComboStore((state) => state.formData);
  const handleFormChange = useComboStore((state) => state.handleFormChange);
  const createForm = useComboStore((state) => state.createForm);

  console.log(formData);

  const idRef = React.useRef(null);
  const handleUploadClick = () => {
    idRef.current?.click();
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  function handlePageSize(pos, newPage) {
    if (newPage < 7 && newPage > 0) {
      setCurrentPage(newPage);
    }
  }
  return (
    <div className="inset-0 z-50  fixed bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-5xl w-full h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between">
          <p className="md:text-center text-lg  mg:text-3xl font-semibold text-gray-800">
            Register for Celesta'25
          </p>
          <button
            className=" bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 text-sm px-2 py-1 md:text-lg md:px-6 md:py-1 rounded-lg cursor-pointer"
            onClick={() => onClose(false)}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-y-2 w-full mt-6 ">
          <p className="text-gray-800 font-medium text-xl">
            Team Name <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={(e) => handleFormChange("teamName", e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
          />
        </div>
        <RenderPageComponent
          page={currentPage}
          onClose={onClose}
          idRef={idRef}
          handleUploadClick={handleUploadClick}
          formData={formData}
          handleFormChange={handleFormChange}
          createForm={createForm}
        />
        {currentPage > 0 && currentPage < 6 && (
          <div className="mt-4 flex items-center justify-between">
            <CircleArrowLeft
              className="cursor-pointer size-7 text-blue-600"
              onClick={() => handlePageSize("prev", currentPage - 1)}
            />
            <CircleArrowRight
              className="cursor-pointer size-7 text-blue-600"
              onClick={() => handlePageSize("next", currentPage + 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
