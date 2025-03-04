import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNavigation = styled.nav`
    width: 100%;
`;

export const Links = styled.div`
    display: flex;
    gap: 30px;    
    justify-content: space-evenly;
`;

export const LinkButton = styled(NavLink)`
    color: ${( { theme }) => theme.color.black};
    text-decoration: none;
    font-weight: 500;
    border: 2px solid ${( { theme }) => theme.color.black};
    border-radius: 30px;
    padding: 10px 15px;

    &.active {
        border: 2px solid ${({ theme }) => theme.color.darkSeaGreen};
    }
`;