import styled, { createGlobalStyle } from "styled-components";

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

export const Button = styled.button`
    margin: 0.5rem;
    padding: 0.8rem 1.2rem;
    border-radius: 1.5rem;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border-width: ${({ secondary }) => (secondary ? "3px" : 0)};
    border-style: ${({ secondary }) => (secondary ? "solid" : "none")};
    background-color: ${({ theme, secondary }) =>
        secondary ? "transparent" : theme.colors.primaryColor};
    color: ${({ theme, secondary }) =>
        secondary ? theme.colors.primaryColor : theme.colors.secondaryColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;
