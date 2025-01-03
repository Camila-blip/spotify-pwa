import styled from "styled-components";

export const ContentContainer = styled.div<{
    direction?: "column" | "row";
    gap?: number;
    align?: "start" | "center";
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? "row" : "column")};
    gap: ${({ gap }) => (gap ? gap : 16)}px;
    align-items: ${({ align }) => (align ? align : "start")};
`;

export const Image = styled.img<{ border?: boolean }>`
    cursor: pointer;
    width: ${({ border }) => (border ? 64 : 72)}px;
    height: ${({ border }) => (border ? 64 : 72)}px;
    border-radius: ${({ border }) => (border ? 64 : 0)}px;
`;

export const TitleItens = styled.h3`
    margin: 0;
    font-size: 0.875rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;
    cursor: pointer;
`;

export const Subtitle = styled.span`
    font-size: 0.75rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    margin-top: 2em;
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
