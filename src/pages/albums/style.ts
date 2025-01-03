import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`;

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    svg {
        cursor: pointer;
    }
`;

export const Title = styled.h3`
    margin: 0;
`;
