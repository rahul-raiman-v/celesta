import { useComboStore } from "../../../../../store";
import Select from "react-select";

export const RenderComboPacks = () => {
  const { handleFormChange, formData } = useComboStore();
  switch (formData.comboPack) {
    case "superior":
      return (
        <div className="grid items-center grid-cols-2 gap-x-6">
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Technical <span className="text-red-500">*</span>
            </p>
            <Select
              options={[
                {
                  value: "paperLeague",
                  label: "PAPER LEAGUE (Paper Presentation)",
                },
                { value: "breakthru", label: "BREAKTHRU (Problem Solving)" },
                { value: "pixelCraft", label: "PIXEL CRAFT (UI/UX)" },
              ]}
              value={formData.superiorTechnical}
              onChange={(selectedOption) =>
                handleFormChange("superiorTechnical", selectedOption)
              }
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Non Technical <span className="text-red-500">*</span>
            </p>
            <Select
              options={[
                {
                  value: "guessInGlance",
                  label: "Guess In Glance (Connection)",
                },
                { value: "quizXtreme", label: "QuizXtreme ( Quiz)" },
              ]}
              value={formData.superiorNonTechnical}
              onChange={(selectedOption) =>
                handleFormChange("superiorNonTechnical", selectedOption)
              }
            />
          </div>
        </div>
      );
    case "prime":
      return (
        <div className="grid items-center grid-cols-2 gap-x-6">
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Hackathon <span className="text-red-500">*</span>
            </p>
            <Select
              options={[
                { value: "hackathon", label: "HackVision (Hackathon)" },
              ]}
              value={formData.primeHackathon}
              onChange={(selectedOption) =>
                handleFormChange("primeHackathon", selectedOption)
              }
            />
          </div>
        </div>
      );
    case "elite": {
      const options = [
        {
          value: "paperLeague",
          label: "PAPER LEAGUE (Paper Presentation)",
        },
        { value: "breakthru", label: "BREAKTHRU (Problem Solving)" },
        { value: "pixelCraft", label: "PIXEL CRAFT (UI/UX)" },
      ];
      return (
        <div className="grid items-center grid-cols-2 gap-x-6">
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Technical 1 <span className="text-red-500">*</span>
            </p>
            <Select
              options={options}
              value={formData.eliteTechnical1}
              onChange={(selectedOption) =>
                handleFormChange("eliteTechnical1", selectedOption)
              }
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Technical 2 <span className="text-red-500">*</span>
            </p>
            <Select
              options={options.filter(
                (option) => option?.value !== formData?.eliteTechnical1?.value,
              )}
              value={formData.eliteTechnical2}
              onChange={(selectedOption) =>
                handleFormChange("eliteTechnical2", selectedOption)
              }
            />
          </div>
        </div>
      );
    }
    case "classic":
      return (
        <div className="grid items-center grid-cols-2 gap-x-6">
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Technical <span className="text-red-500">*</span>
            </p>
            <Select
              options={[
                {
                  value: "paperLeague",
                  label: "PAPER LEAGUE (Paper Presentation)",
                },
                { value: "breakthru", label: "BREAKTHRU (Problem Solving)" },
                { value: "pixelCraft", label: "PIXEL CRAFT (UI/UX)" },
              ]}
              value={formData.classicTechnical}
              onChange={(selectedOption) =>
                handleFormChange("classicTechnical", selectedOption)
              }
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Workshop <span className="text-red-500">*</span>
            </p>
            <Select
              options={[{ value: "workshop", label: "Workshop" }]}
              value={formData.classicWorkshop}
              onChange={(selectedOption) =>
                handleFormChange("classicWorkshop", selectedOption)
              }
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};
