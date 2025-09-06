import React from "react";
import { useComboStore } from "../../../../../store";
import toast from "react-hot-toast";
import Select from "react-select";
import { Upload } from "lucide-react";

export const TeamMemberForm = ({ id, isRequired }) => {
  const { formData, handleFormChange } = useComboStore();
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby_aWO9EjcB2JM52yMUjXRFWy1IySpBlV7XYGNpBjKAv_mKqJsdQ7Ywxgl85PY79bMR/exec";
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [preview, setPreview] = React.useState("");
  const [uploadStatus, setUploadStatus] = React.useState("idle"); // 'idle', 'uploading', 'success', 'error'
  const idRef = React.useRef(null);

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
            handleFormChange(`member${id}CollegeId`, result.url);
            toast.success("College ID uploaded successfully");
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
  }, [selectedFile, handleFormChange, id]);

  const handleAddFileClick = () => idRef.current?.click();

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
          onChange={(e) => handleFormChange(`member${id}Name`, e.target.value)}
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
          onChange={(e) => handleFormChange(`member${id}Gender`, e)}
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
          onChange={(e) => handleFormChange(`member${id}Year`, e)}
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
          onChange={(e) =>
            handleFormChange(`member${id}Contact`, e.target.value)
          }
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
          onChange={(e) => handleFormChange(`member${id}Email`, e.target.value)}
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
          onChange={(e) =>
            handleFormChange(`member${id}Department`, e.target.value)
          }
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
          onChange={(e) =>
            handleFormChange(`member${id}College`, e.target.value)
          }
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
          onChange={(e) => handleFormChange(`member${id}City`, e.target.value)}
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
          onChange={(e) => handleFormChange(`member${id}State`, e.target.value)}
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
        <div className="relative h-20 flex items-center">
          {uploadStatus === "idle" && (
            <button
              className="border px-3 py-1 rounded-md flex items-center gap-x-2 w-fit cursor-pointer"
              onClick={handleAddFileClick}
            >
              <Upload className="size-6 text-blue-600" />
              <p className="text-blue-600 font-medium text-lg">Add File</p>
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
          required={isRequired}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};
