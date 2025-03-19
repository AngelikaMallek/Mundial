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
`;

export const FormButton = styled.button`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};
    border: 2px solid ${({ theme}) => theme.color.darkSeaGreen};
    color: ${({ theme}) => theme.color.darkSeaGreen};
    padding: 5px;
    margin: 10px 0;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
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

