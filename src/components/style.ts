import styled from "styled-components";
import { tabletMediaQuery } from "styles/themes/mediaQueries";

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
    position: relative;
`;

export const Container = styled.div`
    padding: 40px;
    width: 100%;
    ${tabletMediaQuery} {
        margin-left: 85px;
    }
`;
