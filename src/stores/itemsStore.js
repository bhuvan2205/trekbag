import { create } from "zustand";
import { initialList } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useBearStore = create(
  persist(
    (set) => ({
      items: initialList,
      removeAllItems: () => set((state) => ({ ...state, items: [] })),
      resetToInitial: () => set((state) => ({ ...state, items: initialList })),
      addItem: (itemText) =>
        set((state) => ({
          ...state,
          items: {
            text: itemText,
            packed: false,
            id: new Date()?.getTime(),
          },
        })),
      deleteItem: (id) =>
        set((state) => ({
          ...state,
          items: state.items.filter((item) => item.id === id),
        })),
      toggleItem: (id) =>
        set((state) => ({
          ...state,
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        })),
      markAllComplete: () =>
        set((state) => ({
          ...state,
          items: state.items.map((item) => ({ ...item, packed: true })),
        })),
      markAllInComplete: () =>
        set((state) => ({
          ...state,
          items: state.items.map((item) => ({ ...item, packed: false })),
        })),
    }),
    {
      name: "items",
    }
  )
);
