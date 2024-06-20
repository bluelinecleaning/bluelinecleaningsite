import { create } from "zustand";

type FeaturesStore = {
    inViewFeature: any;
    setInViewFeature: (feature: any) => void;
}

export const useFeatureStore = create<FeaturesStore>((set) => ({
    inViewFeature: null,
    setInViewFeature: (feature: any) => set({ inViewFeature: feature})
}))