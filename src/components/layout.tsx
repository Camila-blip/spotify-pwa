import Aside from "./aside";
import { Main } from "./style";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <Main>
            <Aside />
            <Outlet />
        </Main>
    );
}
