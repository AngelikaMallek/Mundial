import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme}) => theme.color.darkSeaGreen};
    margin: 0;
    padding: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center; 
        font-size: 20px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    color: ${({ theme}) => theme.color.darkSeaGreen};
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1px 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
        padding: 5px;
    }
`;

export const FormInput = styled.input`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};
    border: none;
    border-bottom: 2px solid ${({ theme}) => theme.color.darkSeaGreen};
    box-shadow: 2px 2px 5px hsl(0, 0%, 50%);
    padding: 5px;
`;

export const FormButton = styled.button`
    border: 2px solid ${({ theme}) => theme.color.darkSeaGreen};
    color: ${({ theme}) => theme.color.darkSeaGreen};
    padding: 5px;
    margin: 10px 0;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    transition: background 1s;
    box-shadow: 2px 2px 5px hsl(0, 0%, 50%);
`;

export const ToggleFormButton = styled(FormButton)`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};

    &:hover{
        background-color: ${({ theme}) => theme.color.hoverLiteSeaGreen};
        cursor: pointer;
    }
`;

export const InputContainer = styled.section`
    display: flex;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
    }
`;

export const FeetbackInform = styled.p`
    color: ${({ theme}) => theme.color.darkSeaGreen};
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1px 10px;
`

