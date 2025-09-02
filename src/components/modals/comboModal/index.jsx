import React from "react";
import Select from "react-select";
import { useComboStore } from "../../../store";
import { CircleArrowLeft, CircleArrowRight, Upload } from "lucide-react";

const TeamMemberForm = ({ formData, handleFormChange, id, isRequired }) => {
 
  const idRef = React.useRef(null);
  const handleUploadClick = () => {
    idRef.current?.click();
  };
  return (
    <div className="mt-4 grid md:grid-cols-2 grid-cols-1  items-center gap-x-6 gap-y-4">
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Team Member {id} Name{" "}
          {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="name"
          value={formData[`member${id}Name`]}
          onChange={(e)=> handleFormChange(`member${id}Name`,e.target.value)}
          required
          placeholder={`Team Member ${id} Name`}
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="text-gray-800 font-medium text-xl">
          Gender {isRequired && <span className="text-red-500">*</span>}
        </p>
        <Select
          name="gender"
          value={formData[`member${id}Gender`]}
          onChange={(e)=> handleFormChange(`member${id}Gender`,e)}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="text-gray-800 font-medium text-xl">
          Year {isRequired && <span className="text-red-500">*</span>}
        </p>
        <Select
          name="year"
          value={formData[`member${id}Year`]}
          onChange={(e)=> handleFormChange(`member${id}Year`,e)}
          options={[
            { value: "1", label: "1st Year" },
            { value: "2", label: "2nd Year" },
            { value: "3", label: "3rd Year" },
            { value: "4", label: "4th Year" },
          ]}
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Contact Number {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="contact"
          value={formData[`member${id}Contact`]}
          onChange={(e)=> handleFormChange(`member${id}Contact`,e.target.value)}
          required
          placeholder="Contact Number"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Mail Id {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="email"
          name="email"
          value={formData[`member${id}Email`]}
          onChange={(e)=> handleFormChange(`member${id}Email`,e.target.value)}
          required
          placeholder="Mail Id"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Department {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="department"
          value={formData[`member${id}Department`]}
          onChange={(e)=> handleFormChange(`member${id}Department`,e.target.value)}
          required
          placeholder="Department"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          College {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="college"
          value={formData[`member${id}College`]}
          onChange={(e)=> handleFormChange(`member${id}College`,e.target.value)}
          required
          placeholder="College"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Name of the City/District{" "}
          {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="city"
          value={formData[`member${id}City`]}
          onChange={(e)=> handleFormChange(`member${id}City`,e.target.value)}
          required
          placeholder="Name of the City/District"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          Name of the State{" "}
          {isRequired && <span className="text-red-500">*</span>}
        </p>
        <input
          type="text"
          name="state"
          value={formData[`member${id}State`]}
          onChange={(e)=> handleFormChange(`member${id}State`,e.target.value)}
          required
          placeholder="Name of the State"
          className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-gray-800 font-medium text-xl">
          College id card Member {id}{" "}
          {isRequired && <span className="text-red-500">*</span>}
        </p>
        <div className="relative">
          <button
            className="border px-3 py-1 rounded-md flex items-center gap-x-2 w-fit cursor-pointer"
            onClick={handleUploadClick}
          >
            <Upload className="size-6 text-blue-600" />
            <p className="text-blue-600 font-medium text-lg">Add File</p>
          </button>
        </div>
        <input
          type="file"
          ref={idRef}
          id="collegeId"
          name="collegeId"
          value={formData[`member${id}CollegeId`]}
          onChange={(e)=> handleFormChange(`member${id}CollegeId`,e.target.value)}
          required
          placeholder="College ID"
          className="border hidden border-gray-300 p-2 rounded-lg w-full outline-blue-500"
        />
      </div>
    </div>
  );
};

const RenderComboPacks = ({ pack , formData, handleFormChange }) => {
  switch (pack) {
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
              onChange={(selectedOption) => handleFormChange("superiorTechnical",selectedOption)}
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
              onChange={(selectedOption) => handleFormChange("superiorNonTechnical",selectedOption)}
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
              onChange={(selectedOption) => handleFormChange("primeHackathon",selectedOption)}
            />
          </div>
        </div>
      );
    case "elite":
      { 
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
              onChange={(selectedOption) => handleFormChange("eliteTechnical1",selectedOption)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Technical 2 <span className="text-red-500">*</span>
            </p>
            <Select
              options={options.filter((option) => option.value !== formData.eliteTechnical1.value)}
              value={formData.eliteTechnical2}
              onChange={(selectedOption) => handleFormChange("eliteTechnical2",selectedOption)}
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
              onChange={(selectedOption) => handleFormChange("classicTechnical",selectedOption)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 w-full ">
            <p className="text-gray-800 font-medium text-xl">
              Workshop <span className="text-red-500">*</span>
            </p>
            <Select
              options={[{ value: "workshop", label: "Workshop" }]}
              value={formData.classicWorkshop}
              onChange={(selectedOption) => handleFormChange("classicWorkshop",selectedOption)}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const RenderPageComponent = ({
  page,
  onClose,
  idRef,
  handleUploadClick,
  handleFormChange,
  formData
}) => {
  switch (page) {
    case 1:
      return (
        <TeamMemberForm
          isRequired={true}
          key={0}
          id={1}
          formData={formData}
          handleFormChange={handleFormChange}
        />
      );
    case 2:
      return (
        <TeamMemberForm
          isRequired={true}
          key={1}
          id={2}
          formData={formData}
          handleFormChange={handleFormChange}
        />
      );
    case 3:
      return (
        <TeamMemberForm
          isRequired={true}
          key={2}
          id={3}
          formData={formData}
          handleFormChange={handleFormChange}
        />
      );
    case 4:
      return (
        <TeamMemberForm
          isRequired={true}
          key={3}
          id={4}
          formData={formData}
          handleFormChange={handleFormChange}
        />
      );
    case 5:
      return (
        <TeamMemberForm
          isRequired={false}
          key={4}
          id={5}
          formData={formData}
          handleFormChange={handleFormChange}
        />
      );
    case 6:
      return (
        <div>
          <div className="mt-4">
            <RenderComboPacks pack={formData.comboPack} formData={formData} handleFormChange={handleFormChange}/>
          </div>
          <div className="mt-4 border p-3 w-fit mx-auto rounded-lg border-gray-400 flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">Name :</p>
              <p className="text-gray-700 font-medium text-lg">
                BIT- Centre for Advanced studies
              </p>
            </div>
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">A/C No :</p>
              <p className="text-gray-700 font-medium text-lg">
                911010036862582
              </p>
            </div>
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">Account Type :</p>
              <p className="text-gray-700 font-medium text-lg">
                Savings Account
              </p>
            </div>
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">Bank :</p>
              <p className="text-gray-700 font-medium text-lg">Axis Bank</p>
            </div>
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">Branch :</p>
              <p className="text-gray-700 font-medium text-lg">
                Sathyamangalam
              </p>
            </div>
            <div className="flex items-center gap-x-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">IFSC Code :</p>
              <p className="text-gray-700 font-medium text-lg">UTIB0000368</p>
            </div>
            <div className="flex flex-col items-center gap-y-2 md:flex-nowrap flex-wrap">
              <p className="text-gray-900 font-bold text-lg">
                4 Members : 4 * 450 = 1800
              </p>
              <p className="text-gray-900 font-bold text-lg">
                5 Members : 5 * 450 = 2,250
              </p>
            </div>
          </div>
          <div className="mt-4 grid items-center grid-cols-1 md:grid-cols-2 gap-x-6">
            <div className="flex flex-col gap-y-2 w-full mt-6 ">
              <p className="text-gray-800 font-medium text-xl">
                Transaction ID <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Transaction ID"
                value={formData.transactionID}
                onChange={(e) => handleFormChange("transactionID",e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full mt-6  ">
              <p className="text-gray-800 font-medium text-xl">
                Transaction Proof <span className="text-red-500">*</span>
              </p>
              <button
                className="border px-3 py-1 rounded-md flex items-center gap-x-2 w-fit cursor-pointer"
                onClick={handleUploadClick}
              >
                <Upload className="size-6 text-blue-600" />
                <p className="text-blue-600 font-medium text-lg">Add File</p>
              </button>
              <input
                type="file"
                ref={idRef}
                placeholder="Transaction Proof"
                value={formData.transactionProof}
                onChange={(e) => handleFormChange("transactionProof",e.target.value)}
                className="border hidden border-gray-300 p-2 rounded-lg w-full outline-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 border p-4 border-gray-400 rounded-lg bg-gray-100">
            <div className="flex flex-col gap-y-1">
              <p className="text-gray-900 font-semibold text-xl">
                Terms and Conditions
              </p>
              <p className="text-gray-800 font-medium ">
                I hereby declare that the information I have provided in this
                form is true, complete, and accurate to the best of my
                knowledge. I acknowledge that the payment made through this form
                is non-refundable. I understand that once the payment is made,
                it cannot be returned under any circumstances. I am making this
                payment with full awareness of these conditions.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAndCondition}
              onChange={(e) => handleFormChange("termsAndCondition",e.target.checked ? "Accepted" : "")}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <p className="text-gray-800 font-medium text-lg">
              I agree to the terms and conditions
            </p>
          </div>
          <div className="flex items-center gap-x-3 justify-around mt-4">
            <button
              className="w-full bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 text-lg px-4 py-2 rounded-lg mr-2 cursor-pointer"
              onClick={() => onClose(false)}
            >
              Cancel
            </button>
            <button
              disabled={!formData.termsAndCondition}
              className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 text-lg px-4 py-2 rounded-lg mr-2 cursor-pointer ${formData.termsAndCondition ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
              onClick={() => onClose(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export const ComboModal = ({ onClose }) => {
  const {
    formData,
    handleFormChange,
    resetFormData
  } = useComboStore();
  console.log(formData);

  const idRef = React.useRef(null);
  const handleUploadClick = () => {
    idRef.current?.click();
  };

  React.useEffect(() => {
    resetFormData();
  }, [resetFormData, formData.comboPack]);
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
            className=" bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 text-sm px-2 py-0.5 md:text-lg md:px-6 md:py-1 rounded-lg cursor-pointer"
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
            onChange={(e) => handleFormChange("teamName",e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
          />
        </div>
        <RenderPageComponent page={currentPage} onClose={onClose} idRef={idRef} handleUploadClick={handleUploadClick} formData={formData} handleFormChange={handleFormChange}/>
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
