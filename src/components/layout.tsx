import Aside from "./aside";
import { Container, Main } from "./style";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <Main>
            <Aside />
            <Container>
                <Outlet />
            </Container>
        </Main>
    );
}
