import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { CardList } from "../componets";

const Home = ({ trendingItems, popularItems }) => {
    return (
        <>
            <Head>
                <title>Fast Food | Home</title>
            </Head>
            <CardList items={trendingItems}>Trending Today</CardList>
            <CardList items={popularItems} altCard>
                Popular Today
            </CardList>
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const { db } = await connectToDatabase();
    const trendingItems = await db
        .collection("items")
        .find({})
        .limit(10)
        .toArray();
    const popularItems = await db
        .collection("items")
        .find({})
        .skip(20)
        .limit(15)
        .toArray();
    return {
        props: {
            trendingItems: JSON.parse(JSON.stringify(trendingItems)),
            popularItems: JSON.parse(JSON.stringify(popularItems)),
        },
    };
};
