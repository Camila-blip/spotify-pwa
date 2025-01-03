import { JSX } from "react";
import { ContentDescription } from "./style";

type DescriptionProps = {
    description: string;
};

export default function Description({
    description
}: DescriptionProps): JSX.Element {
    return <ContentDescription>{description}</ContentDescription>;
}
