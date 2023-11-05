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

type ShowDemoModalStore = {
    isShowDemoModalOpen: boolean,
    setClose: (desiredState: boolean) => void,
}

export const useShowDemoModalStore = create<ShowDemoModalStore>((set) => ({
    isShowDemoModalOpen: false,
    setClose: (desiredState) => set((state) => ({ isShowDemoModalOpen: desiredState })),
}));

type ShowDetailsModalStore = {
    isShowDetailsModalOpen: boolean,
    setClose: (desiredState: boolean) => void,
}

export const useShowDetailsModalStore = create<ShowDetailsModalStore>((set) => ({
    isShowDetailsModalOpen: false,
    setClose: (desiredState) => set((state) => ({ isShowDetailsModalOpen: desiredState })),
}));
