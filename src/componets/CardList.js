import styled from "styled-components";
import Card from "./Card";

const CardList = ({ children, items }) => {
    return (
        <CardListWrapper>
            <h1>{children}</h1>
            {items.map((item, key) => (
                <Card
                    key={key}
                    id={item._id}
                    image={item.main_pic}
                    name={item.name}
                    price={item.price}
                    resturent={item.resturent}
                />
            ))}
        </CardListWrapper>
    );
};

export default CardList;

const CardListWrapper = styled.section``;
