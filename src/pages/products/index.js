import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { productContext } from "../../context/productContext";
import { Button } from "../../styles";

const Orders = () => {
    const { cart, dispatch } = useContext(productContext);
    const [totalPrice, setTotalPrice] = useState(0.0);
    useEffect(() => {
        setTotalPrice(
            cart
                .reduce(
                    (total, product) =>
                        total + product.price * product.quantity,
                    0,
                )
                .toFixed(2),
        );
    }, [cart]);
    return (
        <>
            <Head>
                <title>Fast Food | Your Order</title>
            </Head>
            <OrdersWrapper>
                <h1>Your Order</h1>
                {cart.length === 0 ? (
                    <OrderList>ADD AN ITEM TO CART</OrderList>
                ) : (
                    cart.map((listElement, key) => (
                        <OrderList key={key}>
                            <h3>{key + 1}.</h3>
                            <Image
                                src={listElement.image}
                                alt={listElement.name}
                                width={50}
                                height={50}
                            />
                            <h3>{listElement.name}</h3>
                            <h3>{listElement.quantity}</h3>
                            <h3>${listElement.price}</h3>
                            <Button
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_LIST",
                                        payload: { id: listElement.id },
                                    })
                                }>
                                Remove One
                            </Button>
                        </OrderList>
                    ))
                )}
                <footer>
                    <span>Total : ${totalPrice}</span>
                    <Button>Checkout</Button>
                </footer>
            </OrdersWrapper>
        </>
    );
};

export default Orders;

const OrdersWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 0 6rem;
    margin-top: 5rem;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    & > h1 {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: 3rem;
    }
    & > footer {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        span {
            font-size: 2rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primaryColor};
        }
    }
`;
const OrderList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.textColor};
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.accentColor};
    }
`;
