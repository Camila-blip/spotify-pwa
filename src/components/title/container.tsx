import { JSX, ReactNode } from "react";
import { ContentContainer } from "./style";

type ContainerProps = {
    children: ReactNode | JSX.Element;
};

export default function Container({ children }: ContainerProps): JSX.Element {
    return <ContentContainer>{children}</ContentContainer>;
}
