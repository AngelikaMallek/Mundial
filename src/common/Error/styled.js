import { ReactComponent as ErrorIcon } from "../../images/icon.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Icon = styled(ErrorIcon)`
    width: 160px;
    height: 160px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100px;
        height: 100px;
    }
`;

export const Text = styled.p`
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme}) => theme.color.darkSeaGreen};
`;