import { render, screen } from "@testing-library/react";
import { TextEncoder, TextDecoder } from "util";

import Artists from ".";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
describe("Artists Component", () => {
    it("renders the title and description", () => {
        render(<Artists />);
        expect(screen.getByText("Top Artistas")).toBeInTheDocument();
        expect(
            screen.getByText("Aqui você encontra seus artistas preferidos")
        ).toBeInTheDocument();
    });

    it("renders the list of artists", () => {
        render(<Artists />);
        expect(screen.getByAltText("Artist 1")).toBeInTheDocument();
        expect(screen.getByAltText("Artist 2")).toBeInTheDocument();
    });
});
