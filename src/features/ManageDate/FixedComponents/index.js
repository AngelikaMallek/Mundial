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
`;

export const Parahraph = styled.p`
    text-align: center;
    font-weight: 600;
`

export const FixedButton = styled.button`
    text-align: center;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
`
