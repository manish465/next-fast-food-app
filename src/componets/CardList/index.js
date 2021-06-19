import styled from "styled-components";
import Card from "./Card";
import CardSecondary from "./CardSecondary";

const CardList = ({ children, items, altCard }) => {
    return (
        <CardListWrapper altCard={altCard}>
            <h1>{children}</h1>
            <div>
                {items.map((item, key) =>
                    altCard ? (
                        <CardSecondary
                            key={key}
                            id={item._id}
                            image={item.main_pic}
                            name={item.name}
                            price={item.price}
                        />
                    ) : (
                        <Card
                            key={key}
                            id={item._id}
                            image={item.main_pic}
                            name={item.name}
                            price={item.price}
                            restaurant={item.restaurant}
                        />
                    ),
                )}
            </div>
        </CardListWrapper>
    );
};

export default CardList;

const CardListWrapper = styled.section`
    margin: 2rem;
    h1 {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.accentColor};
    }
    div {
        display: flex;
        justify-content: space-around;
        flex-basis: ${({ altCard }) => (altCard ? "14em" : "20em")};
        flex-wrap: wrap;
    }
`;
