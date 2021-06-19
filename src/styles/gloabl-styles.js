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
    body{
        background-color: ${({ theme }) => theme.colors.primaryColor};
    }
`;

export const theme = {
    colors: {
        primaryColor: "#e6d5b8",
        secondaryColor: "#e45826",
        textColor: "#f0a500",
        accentColor: "#4a3933",
    },
    shadow: {
        default: "5px 5px 20px rgba(0, 0, 0, 0.4)",
    },
};
