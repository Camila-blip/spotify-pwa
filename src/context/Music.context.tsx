import { create } from "zustand";

type Music = {
    artists: {
        images: {
            url: string;
        }[];
        name: string;
        id: string;
    }[];
    setArtists: (
        artists: { images: { url: string }[]; name: string; id: string }[]
    ) => void;
    user: {
        id: string;
        display_name: string;
        images: { url: string }[];
    } | null;
    setUser: (
        user: {
            images: { url: string }[];
            display_name: string;
            id: string;
        } | null
    ) => void;
};

export const useMusicStore = create<Music>((set) => ({
    artists: [],
    setArtists: (artists) => set({ artists }),
    user: { id: "", display_name: "", images: [] },
    setUser: (user) => set({ user })
}));
