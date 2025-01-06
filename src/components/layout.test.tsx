import { render, screen } from "@testing-library/react";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";

describe("Layout component", () => {
    render(
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
    it("should render the Aside component", () => {
        const asideElement = screen.getByRole("complementary");
        expect(asideElement).toBeInTheDocument();
    });
});
