import create from "zustand";

// export const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));

export const useStore = create((set) => ({
  usuarios: [],
  setUsuarios: (data) => set({ usuarios: data }),
}));
