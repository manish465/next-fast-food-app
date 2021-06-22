import { ThemeProvider } from "styled-components";
import { Layout } from "../componets";
import { theme, GlobalStyle } from "../styles";
import { ProductContext } from "../context/productContext";

function MyApp({ Component, pageProps }) {
    return (
        <ProductContext>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ProductContext>
    );
}

export default MyApp;
