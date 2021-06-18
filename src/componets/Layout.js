import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/gloabl-styles";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
