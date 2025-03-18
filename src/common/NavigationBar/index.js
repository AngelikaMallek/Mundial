import { Container } from "../Container";
import { StyledNavigation, Links, LinkButton, LogoStyle, TitleText, LogoWrapper } from "./styled";

const Navigation = () => (
    <Container>
        <StyledNavigation>
            <LogoWrapper>
                <LogoStyle />
                <TitleText to="/">Mundial</TitleText>
            </LogoWrapper>
            <Links>
                <LinkButton to="/teams">Teams</LinkButton>
                <LinkButton to="/matches">Matches</LinkButton>
                <LinkButton to="/manage">Manage</LinkButton>
            </Links>
        </StyledNavigation>
    </Container>
)

export default Navigation;