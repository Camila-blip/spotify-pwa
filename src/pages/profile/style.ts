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
        width: 128px;
        height: 128px;
        border-radius: 64px;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 20px;
        margin-top: 0;
        margin-bottom: 1em;
        letter-spacing: 0.16px;
    }
`;
