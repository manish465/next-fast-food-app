import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../../styles/gloabl-styles";

const CardSecondary = ({ id, image, name, price }) => {
    return (
        <CardWrapper>
            <Link href={`/${id}`}>
                <a>
                    <Image src={image} alt={name} width={200} height={200} />
                </a>
            </Link>
            <article>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <Button secondary>Add</Button>
            </article>
        </CardWrapper>
    );
};

export default CardSecondary;

const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    img {
        border-radius: 1rem;
        cursor: pointer;
    }
    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.primaryColor};
        h3 {
            margin: 0.5rem 0;
            font-size: 1rem;
            font-weight: bold;
        }
        h4 {
            margin: 0.5rem 0;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
`;