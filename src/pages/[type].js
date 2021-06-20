import Head from "next/head";
import { useRouter } from "next/router";
import { Tab, CardList } from "../componets";
import { connectToDatabase } from "../util/mongodb";

const Item = ({ items, uniqueItems }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Fast Food | {router.asPath}</title>
            </Head>
            <Tab uniqueItems={uniqueItems} />
            <CardList items={items} altCard />
        </>
    );
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

export default Item;
