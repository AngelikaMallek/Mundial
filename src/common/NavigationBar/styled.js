import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";


export const StyledNavigation = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        padding: 5px;
        flex-direction: column; 
    }
`;

export const Links = styled.div`
    display: flex;
    gap: 30px;    
    justify-content: flex-start;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 5px;
        justify-content: center;
    }
`;

export const LinkButton = styled(NavLink)`
    color: ${( { theme }) => theme.color.black};
    text-decoration: none;
    font-weight: 500;
    border: 2px solid ${( { theme }) => theme.color.darkSeaGreen};
    border-radius: 30px;
    padding: 10px 15px;

    &.active {
        border: 2px solid ${({ theme }) => theme.color.snuff};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 5px 10px;
    }
`;

export const LogoWrapper = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center;
`;

export const TitleText = styled(NavLink)`
    font-size: 50px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 8px 24px;
    text-decoration: none;
    font-style: italic;
    color: ${({ theme}) => theme.color.darkSeaGreen};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 40px;
        padding: 0;
    }
`;

export const LogoStyle = styled(Logo)`
    width: 150px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100px;
    }
`