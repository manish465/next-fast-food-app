import { GlobalStyle } from "../../styles/gloabl-styles";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
