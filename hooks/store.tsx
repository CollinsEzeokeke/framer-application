import {create} from 'zustand'

type TruthStore = {
    isChanged: boolean;
    setIsChanged: (change: boolean) => void;
    resetChange: () => void;
}

export const useTruth = create<TruthStore>((set) => ({
    isChanged: false,
    setIsChanged: (change) => set({isChanged: change}),
    resetChange: () => set({isChanged: false})
}))