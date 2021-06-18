import styled from "styled-components";
import Image from "next/image";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <Image src='/Logo.svg' width='50' height='50' />
        </AppbarWrapper>
    );
};

export default Appbar;

const AppbarWrapper = styled.header``;
