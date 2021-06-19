import styled from "styled-components";

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

const Button = styled.button`
    margin: 0.5rem;
    padding: 0.8rem 1.2rem;
    border-radius: 1.5rem;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border-width: ${({ secondary }) => (secondary ? "3px" : 0)};
    border-style: ${({ secondary }) => (secondary ? "solid" : "none")};
    background-color: ${({ theme, secondary }) =>
        secondary ? "transparent" : theme.colors.primaryColor};
    color: ${({ theme, secondary }) =>
        secondary ? theme.colors.primaryColor : theme.colors.secondaryColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;
