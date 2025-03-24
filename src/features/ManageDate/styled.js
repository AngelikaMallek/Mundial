import { styled } from "styled-components";

export const Title = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme}) => theme.color.darkSeaGreen};
    margin: 0;
    padding: 5px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center; 
        font-size: 20px;
    }
`;

export const Caption = styled.p`
    font-weight: 500;
    font-size: 17px;
    text-transform: uppercase;
    color: ${({ theme}) => theme.color.black};
    margin: 0;
    padding: 5px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center; 
        font-size: 20px;
    }
`;

export const List = styled.ol`
    text-align: center;
    padding: 0;
    font-weight: 500;
    color: ${({ theme}) => theme.color.black};
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    text-align: center;

`

export const ListInternalItem = styled.li`
    display: flex;
    justify-content: space-around;
    gap: 5px;
    margin: 0;
`

export const Button = styled.button`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};
    border: 2px solid ${({ theme}) => theme.color.darkSeaGreen};
    color: ${({ theme}) => theme.color.black};
    padding: 5px;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: background 1s;
`

export const ToggleButton = styled(Button)`
    background-color: ${({ theme}) => theme.color.liteSeaGreen};

    &:hover{
        background-color: ${({ theme}) => theme.color.hoverLiteSeaGreen};
        cursor: pointer;
    }
`;
