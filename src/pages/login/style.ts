import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img {
        width: 164px;
        height: 49.06px;
    }
    strong {
        font-weight: 500;
        line-height: 20px;
        font-size: 0.875rem;
        font-family: "Rubik", sans-serif;
    }
`;
