import { StyledNavigation, Links, LinkButton, LogoStyle, TitleText, LogoWrapper, LinkItem } from "./styled";

const Navigation = () => (
        <StyledNavigation>
            <LogoWrapper>
                <LogoStyle />
                <TitleText to="/">Mundial</TitleText>
            </LogoWrapper>
            <Links>
                <LinkItem><LinkButton to="/teams">Teams</LinkButton></LinkItem>
                <LinkItem><LinkButton to="/matches">Matches</LinkButton></LinkItem>
                <LinkItem><LinkButton to="/manage">Manage</LinkButton></LinkItem>
            </Links>
        </StyledNavigation>
)

export default Navigation;