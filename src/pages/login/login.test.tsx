import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Login from "./index";

describe("Login Component", () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );
    test("renders Login component", () => {
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Entra com sua conta Spotify clicando no botão abaixo"
            )
        ).toBeInTheDocument();
        expect(screen.getByText("Entrar")).toBeInTheDocument();
    });
});
