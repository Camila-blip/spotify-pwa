import { ReactElement, useId } from "react";
import { Home, User, Disc, Play } from "assets/icons";
type typeListMenu = {
    id: string;
    icon: ReactElement;
    title: string;
};
export const listMenu: typeListMenu[] = [
    {
        id: useId(),
        icon: <Home />,
        title: "Home"
    },
    {
        id: useId(),
        icon: <Disc />,
        title: "Artistas"
    },
    {
        id: useId(),
        icon: <Play />,
        title: "Artistas"
    },
    {
        id: useId(),
        icon: <User />,
        title: "Perfil"
    }
];
