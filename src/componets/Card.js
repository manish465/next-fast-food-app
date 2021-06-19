import Image from "next/image";
import styled from "styled-components";
import { Button } from "../styles/gloabl-styles";

const Card = ({ id, image, name, price, resturent }) => {
    return (
        <CardWrapper>
            <Image src={image} alt={name} width={300} height={150} />
            <div>
                <div>
                    <h3>{name}</h3>
                    <h4>from {resturent}</h4>
                    <h4>${price}</h4>
                </div>
                <Button>Add</Button>
            </div>
        </CardWrapper>
    );
};

export default Card;

const CardWrapper = styled.div``;
