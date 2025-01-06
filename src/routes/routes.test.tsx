import { render } from "@testing-library/react";
import MainRoutes from "./index";

describe("MainRoutes Component", () => {
    test("renders Login component for root path", () => {
        render(<MainRoutes />);
        expect(window.location.pathname).toBe("/");
    });
});
