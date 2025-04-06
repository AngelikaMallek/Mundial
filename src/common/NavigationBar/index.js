import { StyledNavigation, Links, LinkButton, LogoStyle, TitleText, LogoWrapper, LinkItem } from "./styled";

const Navigation = () => (
        <StyledNavigation>
            <LogoWrapper>
                <LogoStyle />
                <TitleText to="/">Mundial</TitleText>
            </LogoWrapper>
            <Links>
                <LinkItem><LinkButton to="/teams">Drużyny</LinkButton></LinkItem>
                <LinkItem><LinkButton to="/matches">Mecze</LinkButton></LinkItem>
                <LinkItem><LinkButton to="/manage">Zarządzanie</LinkButton></LinkItem>
            </Links>
        </StyledNavigation>
)

export default Navigation;