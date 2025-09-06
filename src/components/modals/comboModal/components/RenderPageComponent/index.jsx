import React from "react";
import toast from "react-hot-toast";
import { useComboStore } from "../../../../../store";
import { TeamMemberForm } from "../teamMemberForm";
import { RenderComboPacks } from "../renderComboPacks";
import { Upload } from "lucide-react";

export const RenderPageComponent = ({ page, onClose }) => {
  const { formData, handleFormChange, createForm } = useComboStore();
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby_aWO9EjcB2JM52yMUjXRFWy1IySpBlV7XYGNpBjKAv_mKqJsdQ7Ywxgl85PY79bMR/exec";
  const idRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [preview, setPreview] = React.useState("");
  const [uploadStatus, setUploadStatus] = React.useState("idle"); // 'idle', 'uploading', 'success', 'error'
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreview("");
      if (file) toast.error("Please select a valid image file.");
    }
  };

  React.useEffect(() => {
    if (!selectedFile) return;

    const uploadFile = async () => {
      setUploadStatus("uploading");
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onload = async (e) => {
        const payload = {
          fileName: selectedFile.name,
          mimeType: selectedFile.type,
          fileData: e.target.result,
        };

        try {
          const response = await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload),
          });
          const result = await response.json();
          if (result.status === "success") {
            handleFormChange("transactionProof", result.url);
            toast.success("Transaction Proof uploaded successfully");
            setUploadStatus("success");
          } else {
            throw new Error(result.message || "The script returned an error.");
          }
        } catch (err) {
          toast.error(err.message || "An unexpected error occurred.");
          setUploadStatus("error");
          setPreview("");
          setSelectedFile(null);
        }
      };
      reader.onerror = () => {
        toast.error("Failed to read the file.");
        setUploadStatus("error");
      };
    };
    uploadFile();
  }, [selectedFile, handleFormChange]);

  const handleAddFileClick = () => idRef.current?.click();
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
            <RenderComboPacks
              pack={formData.comboPack}
              formData={formData}
              handleFormChange={handleFormChange}
            />
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
                onChange={(e) =>
                  handleFormChange("transactionID", e.target.value)
                }
                className="border border-gray-300 p-2 rounded-lg w-full outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full ">
              <p className="text-gray-800 font-medium text-xl">
                Transcation Proof
                <span className="text-red-500">*</span>
              </p>
              <div className="relative h-20 flex items-center">
                {uploadStatus === "idle" && (
                  <button
                    className="border px-3 py-1 rounded-md flex items-center gap-x-2 w-fit cursor-pointer"
                    onClick={handleAddFileClick}
                  >
                    <Upload className="size-6 text-blue-600" />
                    <p className="text-blue-600 font-medium text-lg">
                      Add File
                    </p>
                  </button>
                )}
                {uploadStatus === "uploading" && (
                  <p className="text-gray-700">Uploading...</p>
                )}
                {(uploadStatus === "success" || uploadStatus === "error") &&
                  preview && (
                    <img
                      src={preview}
                      alt="ID Preview"
                      className="h-20 aspect-video rounded-md object-cover"
                    />
                  )}
              </div>
              <input
                type="file"
                ref={idRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
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
              onChange={(e) =>
                handleFormChange(
                  "termsAndCondition",
                  e.target.checked ? "Accepted" : "",
                )
              }
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
              onClick={() => {
                createForm();
                onClose(false);
              }}
            >
              Submit Form
            </button>
          </div>
        </div>
      );
    default:
      return null;
  }
};
