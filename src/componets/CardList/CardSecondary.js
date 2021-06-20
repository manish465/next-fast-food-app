import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { productContext } from "../../context/productContext";
import { Button } from "../../styles/gloabl-styles";

const CardSecondary = ({ id, image, name, price }) => {
    const { dispacth } = useContext(productContext);
    return (
        <CardWrapper>
            <Link href={`/products/${id}`}>
                <a>
                    <Image src={image} alt={name} width={200} height={200} />
                </a>
            </Link>
            <article>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <AddButton
                    onClick={() =>
                        dispacth({
                            type: "ADD_PRODUCT",
                            payload: { id, name, image, price },
                        })
                    }>
                    Add
                </AddButton>
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
        transition: transform 100ms ease-out;
        &:hover {
            transform: scale(1.2);
        }
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
const AddButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.accentColor};
`;
