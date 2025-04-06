import styled from "styled-components";
import { Link } from "react-router-dom";

export const Table = styled.table`
    padding: 15px;
    background-color: ${( { theme }) => theme.color.darkSeaGreen };
    border-radius: 0 0 10px 10px;
    min-width: 200px;
    box-shadow: 2px 2px 15px hsl(0, 0%, 50%);

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 5px;
        width: 270px;
    }
`;

export const TableTr = styled.tr`
    padding: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0;
    }
`;

export const TableTd = styled.td`
    border-width: 0 1px 1px 0;
    border-style: dashed;
    border-color: ${( { theme }) => theme.color.black };
    color: ${( { theme }) => theme.color.black };
    padding: 5px;
    text-align: center;
    font-weight: 500;
    min-width: 50px;
`;

export const LinkCountry = styled(Link)`
    text-decoration: none;
    color: ${( { theme }) => theme.color.black };
    transition: color 1s;
`;

export const ToggleLink = styled(LinkCountry)`
    &:hover{
        color: ${({ theme}) => theme.color.hoverLiteSeaGreen};
    }
`;

export const TableTdRight = styled.td`
    border-width: 0 0 1px 0;
    border-style: dashed;
    border-color: ${( { theme }) => theme.color.black };
    color: ${( { theme }) => theme.color.black };
    padding: 5px;
    text-align: center;
    font-weight: 500;
    min-width: 50px;
`;

export const TableCaption = styled.caption`
    background-color: ${( { theme }) => theme.color.darkSeaGreen };
    color: ${( { theme }) => theme.color.black };
    padding: 10px;
    padding-bottom: 0;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
`;