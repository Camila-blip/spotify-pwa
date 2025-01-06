import { render, fireEvent } from "@testing-library/react";
import Button from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/themes/colors";

test("renders button with text, handles click and style", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <Button
                text="Click Me"
                onClick={handleClick}
                backgroundColor={theme.greenPrimary}
                color={theme.bonyBlack}
            />
        </ThemeProvider>
    );

    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(
        `background-color: ${theme.greenPrimary}`
    );
    expect(buttonElement).toHaveStyle(`color: ${theme.bonyBlack}`);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
