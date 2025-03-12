import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme}) => theme.color.darkSeaGreen};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    color: ${({ theme}) => theme.color.darkSeaGreen};
    font-weight: 600;
    display: flex;
    
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
    margin: 10px;
    font-weight: 600;
    font-size: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

