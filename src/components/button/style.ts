import styled from "styled-components";

export const ContentButton = styled.button<{
    backgroundColor?: string;
    color?: string;
}>`
    background-color: ${(props) =>
        props.backgroundColor || props.theme.greenPrimary};
    color: ${(props) => props.color || props.theme.bonyBlack};
    padding: 12px 40px;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
`;
