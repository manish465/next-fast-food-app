import { connectToDatabase } from "../util/mongodb";
import { CardList } from "../componets";

const Home = ({ trendingItems }) => {
    return (
        <>
            <CardList items={trendingItems}>Trending Today</CardList>
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
    return {
        props: {
            trendingItems: JSON.parse(JSON.stringify(trendingItems)),
        },
    };
};
