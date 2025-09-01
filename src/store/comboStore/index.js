import { create } from "zustand";

const initialMemberState = {
  name: "",
  gender: "", // Use null for react-select to show placeholder
  year: "",
  contact: "",
  email: "",
  department: "",
  college: "",
  city: "",
  state: "",
  collegeId: "",
};

export const useComboStore = create((set) => ({
  teamName: "",
  comboPack: "",
  transactionId: "",
  transactionProof: "",
  members: Array.from({ length: 5 }, () => ({ ...initialMemberState })),
  setTransactionId: (transactionId) => set({ transactionId }),
  setTransactionProof: (transactionProof) => set({ transactionProof }),
  setTeamName: (teamName) => set({ teamName }),
  setComboPack: (comboPack) => set({ comboPack }),
  resetMembers: () =>
    set({
      members: Array.from({ length: 5 }, () => ({ ...initialMemberState })),
    }),
  setMembers: (members) => set({ members }),
  handleMemberChange: (index, field, value) =>
    set((state) => {
      const members = [...state.members];
      members[index - 1] = { ...members[index - 1], [field]: value };
      return { members };
    }),
}));
