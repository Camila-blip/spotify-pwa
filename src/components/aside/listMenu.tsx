import { ReactElement } from "react";
import { Home, User, Disc, Play } from "assets/icons";
type typeListMenu = {
    icon: ReactElement;
    title: string;
    url: string;
};
export const listMenu: typeListMenu[] = [
    {
        icon: <Home />,
        title: "Home",
        url: "home"
    },
    {
        icon: <Disc />,
        title: "Artistas",
        url: "artists"
    },
    {
        icon: <Play />,
        title: "Playlists",
        url: "playlists"
    },
    {
        icon: <User />,
        title: "Perfil",
        url: "profile"
    }
];
