import { render } from "@testing-library/react";
import Modal from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/themes/colors";

test("renders modal, handles submit and close", () => {
    const handleClose = jest.fn();
    const handleSubmit = jest.fn();
    const newPlaylist = "";
    const setNewPlaylist = jest.fn();
    const disabled = false;
    const { getByRole } = render(
        <ThemeProvider theme={theme}>
            <Modal
                onClose={handleClose}
                handleSubmit={handleSubmit}
                newPlaylist={newPlaylist}
                setNewPlaylist={setNewPlaylist}
                disabled={disabled}
            />
        </ThemeProvider>
    );

    expect(getByRole("dialog")).toBeInTheDocument();

    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
});
