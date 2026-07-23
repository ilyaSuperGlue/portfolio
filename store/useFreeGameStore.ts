import { IFreeCard } from "@/features/game/free/FreeCard";
import { webStorage } from "@/shared/lib/webApi";
import { create } from "zustand";

interface FreeGameStore {
  data: IFreeCard[];
  setData: (data: IFreeCard[]) => void;
}
const storage = webStorage();
export const useFreeGameStore = create<FreeGameStore>((set) => ({
  data: [],
  setData: (data) => {
    set({ data });
    if (storage) {
      storage.setItem("cache", JSON.stringify(data));
    }
  },
}));
