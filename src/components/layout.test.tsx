import { render } from "@testing-library/react";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";

describe("Layout component", () => {
    it("should render the Aside component", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
        expect(getByTestId("aside")).toBeInTheDocument();
    });

    it("should render the Container component", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
        expect(getByTestId("container")).toBeInTheDocument();
    });

    it("should render the Outlet component", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
        expect(getByTestId("outlet")).toBeInTheDocument();
    });
});
