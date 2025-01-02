import { createGlobalStyle } from "styled-components";
import "@fontsource/rubik";
import "@fontsource/dm-sans";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        height: 100%;
    }

    body {
        background-color:  ${(props) => props.theme.backgroundColor};
        margin: 0;
        font-family: "DM Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        line-height: 1.5;
        color: ${(props) => props.theme.white};
        height: 100%;
        font-size: 16px;
    }
    button{
        cursor: pointer;
        border: none;
    }
    #root {
        height: 100%;
    }

`;

export default GlobalStyle;
