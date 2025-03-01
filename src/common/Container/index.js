import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    max-width: 90%;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    background-color: ${( { theme }) => theme.color.liteSeaGreen };
`;