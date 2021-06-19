import styled from "styled-components";
import { Button } from "../styles/gloabl-styles";

const UserForm = ({ signup }) => {
    const formdata = signup
        ? [
              { type: "text", placeholder: "Enter Name" },
              { type: "email", placeholder: "Enter E-mail" },
              { type: "password", placeholder: "Enter Password" },
              { type: "password", placeholder: "Re-Enter Password" },
              { type: "text", placeholder: "Enter Address" },
              { type: "text", placeholder: "Enter Phone no" },
          ]
        : [
              { type: "email", placeholder: "Enter E-mail" },
              { type: "password", placeholder: "Enter Password" },
          ];
    return (
        <UserFormWrapper>
            <h1>{signup ? "Sign up" : "Sign in"}</h1>
            <form>
                {formdata.map((data, key) => (
                    <TextFeild
                        key={key}
                        type={data.type}
                        placeholder={data.placeholder}
                    />
                ))}
                <Button>{signup ? "Sign-up" : "Sign-in"}</Button>
                <Button secondary>{signup ? "Sign-in" : "Sign-up"}</Button>
            </form>
        </UserFormWrapper>
    );
};

export default UserForm;

const UserFormWrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 3rem 5rem;
    padding: 5rem 4rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    h1 {
        font-size: 3rem;
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.primaryColor};
    }
    form {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;

const TextFeild = styled.input`
    padding: 1rem;
    align-self: center;
    width: 100%;
    margin: 0.5rem 0;
    border: none;
    outline: none;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 1.8rem;
    box-shadow: ${({ theme }) => theme.shadow.default};
    &::placeholder {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.textColor};
    }
`;
