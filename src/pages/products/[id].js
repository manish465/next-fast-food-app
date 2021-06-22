import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import mongo from "mongodb";
import { connectToDatabase } from "../../util/mongodb";
import { Button } from "../../styles/gloabl-styles";
import { useContext } from "react";
import { productContext } from "../../context/productContext";

const Product = ({ product }) => {
    const { dispatch } = useContext(productContext);
    return (
        <>
            <Head>
                <title>Fast Food | {product.name}</title>
            </Head>
            <ProductWrapper>
                <MainPic
                    src={product.main_pic}
                    alt={product.name}
                    width={400}
                    height={300}
                />
                <div>
                    <span>
                        <h2>{product.name}</h2>
                        <h3>From {product.restaurant}</h3>
                        <h3>${product.price}</h3>
                    </span>
                    <AddButton
                        onClick={() =>
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                    id: product.id,
                                    image: product.image,
                                    name: product.name,
                                    price: product.price,
                                    quantity: 1,
                                },
                            })
                        }>
                        Add
                    </AddButton>
                </div>
                <p>{product.description}</p>
            </ProductWrapper>
        </>
    );
};

export const getStaticPaths = async () => {
    const { db } = await connectToDatabase();
    const uniqueItems = await db.collection("items").distinct("_id");
    return {
        paths: uniqueItems.map((item) => ({ params: { id: item.toString() } })),
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const { db } = await connectToDatabase();
    const product = await db
        .collection("items")
        .findOne({ _id: mongo.ObjectID(id) });
    return {
        props: { product: JSON.parse(JSON.stringify(product)) },
    };
};

export default Product;

const ProductWrapper = styled.main`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
    }
    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondaryColor};
    }
    h3 {
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.accentColor};
    }
    p {
        margin: 2rem 6rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.accentColor};
    }
`;
const MainPic = styled(Image)`
    width: 100%;
    object-fit: contain;
`;
const AddButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.accentColor};
`;
