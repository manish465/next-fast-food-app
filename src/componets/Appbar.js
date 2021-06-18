import styled from "styled-components";
import Image from "next/image";
import { Bell, Cart, Foods } from "../assets";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <Logo src='/Logo.svg' width='50' height='50' />
            <ul>
                <li>
                    <Bell />
                </li>
                <li>
                    <Cart />
                </li>
                <li>
                    <Foods />
                </li>
                <li>MS</li>
            </ul>
        </AppbarWrapper>
    );
};

export default Appbar;

const AppbarWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 4rem;
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
            margin: 0 1.5rem;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primaryColor};
        }
    }
`;
const Logo = styled(Image)`
    cursor: pointer;
`;
