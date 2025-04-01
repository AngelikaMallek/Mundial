import styled from "styled-components";

export const Container = styled.main`
    max-width: 80vw;
    margin: 0 auto;
    padding: 24px 24px 5px 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 5px;;
    }
`;

export const Section = styled.section`
    max-width: 80vw;
    margin: 0 auto;
    padding: 24px 24px 5px 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
 
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 5px;
        grid-template-columns: 1fr;
    }
`;

export const SectionCountryTile = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-bottom: 30px;
`;

export const SectionColumn = styled.section`
    max-width: 80vw;
    margin: 0 auto;
    padding: 24px 24px 5px 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    flex-direction: column;
`;