import { create } from 'zustand'

type FeedbackModalStore = {
    isFeedbackModalOpen: boolean,
    setClose: (desiredState: boolean) => void,
}

export const useFeedbackModalStore = create<FeedbackModalStore>((set) => ({
    isFeedbackModalOpen: false,
    setClose: (desiredState) => set((state) => ({ isFeedbackModalOpen: desiredState })),
}));

type SignUpModalStore = {
    isSignUpModalOpen: boolean,
    setClose: (desiredState: boolean) => void,
}

export const useSignUpModalStore = create<SignUpModalStore>((set) => ({
    isSignUpModalOpen: false,
    setClose: (desiredState) => set((state) => ({ isSignUpModalOpen: desiredState })),
}));
