import Head from "next/head";
import { Tab, CardList } from "../componets";
import { connectToDatabase } from "../util/mongodb";

const Item = ({ items, uniqueItems }) => {
    return (
        <>
            <Head>
                <title>Fast Food | All Products</title>
            </Head>
            <Tab uniqueItems={uniqueItems} />
            <CardList items={items} altCard />
        </>
    );
};

export const getStaticProps = async (context) => {
    const { type } = context.params;
    const { db } = await connectToDatabase();
    const items =
        type === "all"
            ? await db.collection("items").find({}).toArray()
            : await db.collection("items").find({ type: type }).toArray();
    const uniqueItems = await db.collection("items").distinct("type");
    uniqueItems.push("all");
    return {
        props: { items: JSON.parse(JSON.stringify(items)), uniqueItems },
    };
};
export const getStaticPaths = async () => {
    const { db } = await connectToDatabase();
    const uniqueItems = await db.collection("items").distinct("type");
    uniqueItems.push("all");
    return {
        paths: uniqueItems.map((path) => ({ params: { type: path } })),
        fallback: false,
    };
};

export default Item;
