import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { productContext } from "../../context/productContext";
import { Button } from "../../styles/gloabl-styles";

const Card = ({ id, image, name, price, restaurant }) => {
    const { dispacth } = useContext(productContext);
    return (
        <CardWrapper>
            <Link href={`/products/${id}`}>
                <Image src={image} alt={name} width={300} height={250} />
            </Link>
            <article>
                <section>
                    <h3>{name}</h3>
                    <h4>from {restaurant}</h4>
                    <h4>${price}</h4>
                </section>
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

export default Card;

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
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        section {
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
    }
`;
const AddButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.accentColor};
`;
