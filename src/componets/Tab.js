import Link from "next/link";
import styled from "styled-components";

const Tab = ({ uniqueItems }) => {
    return (
        <TabListWrapper>
            {uniqueItems.map((uniqueItem, key) => (
                <Link href={`/${uniqueItem}`}>
                    <span key={key}>{uniqueItem}</span>
                </Link>
            ))}
        </TabListWrapper>
    );
};

export default Tab;

const TabListWrapper = styled.header`
    width: 100%;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    span {
        cursor: pointer;
    }
`;
