import { styled } from "styled-components";

export const DeletedFixed = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 200px;
    background-color: ${({theme}) => theme.color.darkSeaGreen};
    border-radius: 20%;
    opacity: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 200px;
        height: 150px;
    }
`;

export const Parahraph = styled.p`
    text-align: center;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 15px;
        margin: 0;
        margin-top: 10px;
    }
`

export const FixedButton = styled.button`
    text-align: center;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
`
