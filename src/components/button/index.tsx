import { ButtonHTMLAttributes, JSX } from "react";
import { ContentButton } from "./style";
type typeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    backgroundColor?: string;
    color?: string;
};
export default function Button({
    text,
    backgroundColor,
    color,
    ...rest
}: typeButton): JSX.Element {
    return (
        <ContentButton {...rest} style={{ backgroundColor, color }}>
            {text}
        </ContentButton>
    );
}
