import { JSX } from "react";
import { ContentTitle } from "./style";

type TitleProps = {
    title: string;
};

export default function Title({ title }: TitleProps): JSX.Element {
    return <ContentTitle>{title}</ContentTitle>;
}
