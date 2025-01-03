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
};

export const useMusicStore = create<Music>((set) => ({
    artists: [],
    setArtists: (artists) => set({ artists })
}));
