import { useRouter } from "next/router";
import Head from "next/head";
import Appbar from "./Appbar";

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Fast Food</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            {router.asPath === "/user/signin" ||
            router.asPath === "/user/signup" ? null : (
                <Appbar />
            )}
            {children}
        </>
    );
};

export default Layout;
