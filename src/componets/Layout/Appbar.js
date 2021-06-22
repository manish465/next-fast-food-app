import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Cart, Foods } from "../../assets";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <Link href='/'>
                <Logo src='/Logo.svg' width='50' height='50' />
            </Link>
            <ul>
                <li>
                    <Link href='/all'>
                        <a>
                            <Foods />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>
                            <Cart />
                        </a>
                    </Link>
                </li>
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
