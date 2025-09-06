import { create } from "zustand";
import { toast } from "react-hot-toast";

// --- Configuration ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMwf1Ok7UBrCalOKALvSm_XGS22UtRDzGk9TJu6Ivv8goNs5gKcO0zoRkcb4KDk-N7ug/exec";

const initialFormState = {
  email: "",
  teamName: "",
  member1Name: "",
  member1Gender: "",
  member1Year: "",
  member1Contact: "",
  member1MailId: "",
  member1Department: "",
  member1College: "",
  member1CollegeId: "",
  member1City: "",
  member1State: "",
  member2Name: "",
  member2Gender: "",
  member2Year: "",
  member2Contact: "",
  member2MailId: "",
  member2Department: "",
  member2College: "",
  member2CollegeId: "",
  member2City: "",
  member2State: "",
  member3Name: "",
  member3Gender: "",
  member3Year: "",
  member3Contact: "",
  member3MailId: "",
  member3Department: "",
  member3College: "",
  member3CollegeId: "",
  member3City: "",
  member3State: "",
  member4Name: "",
  member4Gender: "",
  member4Year: "",
  member4Contact: "",
  member4MailId: "",
  member4Department: "",
  member4College: "",
  member4CollegeId: "",
  member4City: "",
  member4State: "",
  member5Name: "",
  member5Gender: "",
  member5Year: "",
  member5Contact: "",
  member5MailId: "",
  member5Department: "",
  member5College: "",
  member5CollegeId: "",
  member5City: "",
  member5State: "",
  comboPack: "",
  primeHackathon: "",
  classicTechnical: "",
  classicWorkshop: "",
  eliteTechnical1: "",
  eliteTechnical2: "",
  superiorTechnical: "",
  superiorNonTechnical: "",
  transactionId: "",
  transactionProof: "",
  termsAndCondition: false, // Changed to boolean for checkbox handling
};

export const useComboStore = create((set, get) => ({
  formData: initialFormState, // Initialize with the full state object
  isLoading: false,

  handleFormChange: (key, value) => {
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    }));
  },

  createForm: async () => {
    set({ isLoading: true });
    try {
      const { formData } = get();

      // This part is correct for handling data from select libraries (e.g., react-select)
      // that return an object like { value: 'some-value', label: 'Some Value' }
      const formattedForm = {
        ...formData,
        member1Gender: formData.member1Gender?.value ?? formData.member1Gender,
        member2Gender: formData.member2Gender?.value ?? formData.member2Gender,
        member3Gender: formData.member3Gender?.value ?? formData.member3Gender,
        member4Gender: formData.member4Gender?.value ?? formData.member4Gender,
        member5Gender: formData.member5Gender?.value ?? formData.member5Gender,
        primeHackathon: formData.primeHackathon?.value ?? formData.primeHackathon,
        classicTechnical: formData.classicTechnical?.value ?? formData.classicTechnical,
        classicWorkshop: formData.classicWorkshop?.value ?? formData.classicWorkshop,
        eliteTechnical1: formData.eliteTechnical1?.value ?? formData.eliteTechnical1,
        eliteTechnical2: formData.eliteTechnical2?.value ?? formData.eliteTechnical2,
        superiorTechnical: formData.superiorTechnical?.value ?? formData.superiorTechnical,
        superiorNonTechnical: formData.superiorNonTechnical?.value ?? formData.superiorNonTechnical,
      };

      // --- KEY CORRECTION ---
      // Create a FormData object to send to Google Apps Script
      const scriptFormData = new FormData();
      for (const key in formattedForm) {
        scriptFormData.append(key, formattedForm[key]);
      }
      
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: scriptFormData,
        // Remove mode: "no-cors" to be able to read the response
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Form Submitted Successfully!");
        get().resetFormData(); // Reset the form on success
      } else {
        // Throw an error with the message from the backend
        throw new Error(result.message || "An unknown error occurred.");
      }

    } catch (err) {
      console.error("Submission Error:", err);
      toast.error(err.message || "Failed to submit form.");
    } finally {
      set({ isLoading: false });
    }
  },

  resetFormData: () => {
    set({ formData: initialFormState }); // Reset to the initial state, not an empty object
  },
}));
