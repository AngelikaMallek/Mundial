import { styled } from "styled-components";

export const FixedWrapper = styled.div`
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
    box-shadow: 2px 2px 15px hsl(0, 0%, 50%);
    padding: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 250px;
        height: 200px;
    }
`;

export const Parahraph = styled.p`
    text-align: center;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 12px;
        margin: 0;
        margin-top: 10px;
    }
`

export const FixedButton = styled.button`
    text-align: center;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;
    transition: background 1s;
    border: 0;
    background-color: ${({theme}) => theme.color.darkSeaGreen};
    border-radius: 30%;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 10px;
        margin: 0;
        font-size: 10px;
    }
`

export const ToggleFixedButton = styled(FixedButton)`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};

    &:hover{
        background-color: ${({ theme}) => theme.color.hoverLiteSeaGreen};
        cursor: pointer;
    }
`;

export const Form = styled.form`
`

export const FormInput = styled.input`
    background-color: ${({ theme}) => theme.color.darkSeaGreen};
    border: none;
    border-bottom: 2px solid ${({ theme}) => theme.color.black};
    padding: 5px;
    text-align: center;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 10px;
    }
`

export const FormInputDisplay = styled.input`
    display: none;
`

export const List = styled.ol`
    text-align: center;
    padding: 0;
    font-weight: 500;
    color: ${({ theme}) => theme.color.black};
`

export const ListInternalItem = styled.li`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 0;
`

export const FormLabel = styled.label`
    font-size: 15px;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    display: flex;
    gap: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 10px;
        margin: 0;
        margin-top: 10px;
    }
`
