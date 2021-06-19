import Head from "next/head";
import { UserForm } from "../../componets";

const SignUp = () => {
    return (
        <>
            <Head>
                <title>Fast Food | Sign In</title>
            </Head>
            <UserForm signup />
        </>
    );
};

export default SignUp;
