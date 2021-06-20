import Image from "next/image";
import styled from "styled-components";
import { connectToDatabase } from "../../util/mongodb";
import mongo from "mongodb";

const Product = ({ product }) => {
    console.log(product);
    return <ProductWrapper>scbjacs</ProductWrapper>;
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

export const getStaticPaths = async () => {
    const { db } = await connectToDatabase();
    const uniqueItems = await db.collection("items").distinct("_id");
    return {
        paths: uniqueItems.map((item) => ({ params: { id: item.toString() } })),
        fallback: true,
    };
};

export default Product;

const ProductWrapper = styled.main``;
const MainPic = styled(Image)``;
