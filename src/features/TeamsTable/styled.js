import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid ${( { theme }) => theme.color.black };
`;

export const TableTr = styled.tr`
    border: 1px solid ${( { theme }) => theme.color.black };
`;

export const TableTd = styled.td`
    border: 1px solid ${( { theme }) => theme.color.black };
    color: ${( { theme }) => theme.color.black };
`;