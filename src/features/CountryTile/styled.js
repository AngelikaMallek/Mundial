import { styled } from "styled-components";

export const Title = styled.h1`
    width: 100%;
    text-align: center;
`

export const Button = styled.button`
    background-color: ${({ theme}) => theme.color.darkSeaGreen};
    border: 2px solid ${({ theme}) => theme.color.liteSeaGreen};
    color: ${({ theme}) => theme.color.black};
    padding: 5px;
    margin-bottom: 5px;
    font-weight: 550;
    font-size: 15px;
    cursor: pointer;
    transition: background 1s;
`

export const ToggleButton = styled(Button)`
    &:hover{
        background-color: ${({ theme}) => theme.color.liteSeaGreen};
        cursor: pointer;
    }
`;