import { styled } from "styled-components";

export const DeletedFixed = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: ${({theme}) => theme.color.darkSeaGreen};
    border-radius: 20%;
    opacity: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 250px;
        height: 200px;
        padding: 10px;
    }
`;

export const Parahraph = styled.p`
    text-align: center;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 10px;
        margin: 0;
        margin-top: 10px;
    }
`

export const FixedButton = styled.button`
    text-align: center;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 5px;
        margin: 0;
        font-size: 10px;
    }
`

export const Form = styled.form`
`

export const FormInput = styled.input`
    background-color: ${({ theme}) => theme.color.darkSeaGreen};
    border: none;
    border-bottom: 2px solid ${({ theme}) => theme.color.black};
    padding: 5px;
    width: 100%;
    text-align: center;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 10px;
    }
`

export const FormInputDisplay = styled.input`
    display: none;
`
