import { JSX, ReactNode } from "react";
import { ContentContainer } from "./style";

type ContainerProps = {
    children: ReactNode | JSX.Element;
    bottom?: string;
};

export default function Container({
    children,
    bottom
}: ContainerProps): JSX.Element {
    return <ContentContainer style={{ bottom }}>{children}</ContentContainer>;
}
