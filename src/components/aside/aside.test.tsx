import { render, screen } from "@testing-library/react";
import Aside from "./";
import { MemoryRouter } from "react-router-dom";
import { listMenu } from "./listMenu";

describe("Aside component", () => {
    const { getByAltText } = render(
        <MemoryRouter>
            <Aside />
        </MemoryRouter>
    );
    it("renders the Aside component correctly", () => {
        const image = getByAltText("Logo");
        expect(image).toBeInTheDocument();
        listMenu.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });
});
