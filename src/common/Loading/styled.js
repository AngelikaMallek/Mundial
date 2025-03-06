import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const rotation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    transition: color 0.3s;
    border: 12px solid ${({ theme }) => theme.color.snuff};
    border-right: 12px solid ${({ theme }) => theme.color.darkSeaGreen};
    animation: ${rotation} 3s linear infinite;
    margin: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100px;
        height: 100px;
    }
`;
