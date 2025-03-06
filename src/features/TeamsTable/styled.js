import styled from "styled-components";

export const Table = styled.table`
    padding: 15px;
    background-color: ${( { theme }) => theme.color.darkSeaGreen };
    border-radius: 0 0 10px 10px;
    min-width: 200px;
`;

export const TableTr = styled.tr`
    padding: 5px;
`;

export const TableTd = styled.td`
    border-width: 0 1px 1px 0;
    border-style: dashed;
    border-color: ${( { theme }) => theme.color.black };
    color: ${( { theme }) => theme.color.black };
    padding: 5px;
    text-align: center;
    font-weight: 500;
`;

export const TableTdRight = styled.td`
    border-width: 0 0 1px 0;
    border-style: dashed;
    border-color: ${( { theme }) => theme.color.black };
    color: ${( { theme }) => theme.color.black };
    padding: 5px;
    text-align: center;
    font-weight: 500;
`;

export const TableCaption = styled.caption`
    background-color: ${( { theme }) => theme.color.darkSeaGreen };
    color: ${( { theme }) => theme.color.black };
    padding: 10px;
    padding-bottom: 0;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
`;