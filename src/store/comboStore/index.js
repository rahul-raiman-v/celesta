import { create } from 'zustand';
export const useComboStore = create((set) => ({
  comboPack: null,
  setComboPack: (pack) => set({ comboPack: pack }),
}));