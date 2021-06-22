import styled from "styled-components";

const InputFeild = ({ data, register, watch, errors }) => {
    const password = watch("password", "");

    return (
        <>
            <TextFeild
                type={data.type}
                placeholder={data.placeholder}
                {...register(data.name, {
                    required: `You must spacify ${data.name}`,
                    validate:
                        data.name === "password_again"
                            ? (value) =>
                                  value === password.current ||
                                  "The passwords do not match"
                            : false,
                })}
            />
            {errors[`data.name`] && (
                <ErrorMessage>{errors[data.name].message}</ErrorMessage>
            )}
        </>
    );
};

export default InputFeild;

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
const ErrorMessage = styled.span`
    font-size: 0.4rem;
    color: red;
    font-weight: 700;
`;
