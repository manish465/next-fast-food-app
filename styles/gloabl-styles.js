import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        src: '/fonts/Raleway-VariableFont_wght.ttf';
        font-family: Raleway;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family:'Raleway', sans-serif;
    }
`;
