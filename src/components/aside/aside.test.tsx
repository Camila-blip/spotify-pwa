import { render, screen, fireEvent } from "@testing-library/react";
import Aside from "./";
import { useNavigate, useLocation, BrowserRouter } from "react-router-dom";
import { listMenu } from "./listMenu";
import { GrommetIconsInstallOption } from "assets/icons";

describe("Aside component", () => {
    it("renders the Aside component correctly", () => {
        const { getByAltText } = render(<Aside />);
        const image = getByAltText("Logo");
        expect(image).toBeInTheDocument();
        // listMenu.forEach((item) => {
        //   expect(screen.getByText(item.title)).toBeInTheDocument();
        // });
    });

    // expect(screen.getByText("Title1")).toBeInTheDocument();
    // expect(screen.getByText("Title2")).toBeInTheDocument();
    // expect(screen.getByText("Instalar PWA")).toBeInTheDocument();
});

// it("handles install button click", async () => {
//     render(<Aside />);
//     const installButton = screen.getByText("Instalar PWA");
//     fireEvent.click(installButton);
//     // Add assertions for install button functionality if needed
// });

// it("routes correctly when menu items are clicked", () => {
//     render(<Aside />);
//     const menuItem = screen.getByText("Title1");
//     fireEvent.click(menuItem);
//     expect(mockNavigate).toHaveBeenCalledWith("/url1");
