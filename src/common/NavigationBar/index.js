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
                <LinkButton to="/">Teams</LinkButton>
                <LinkButton to="/">Teams</LinkButton>
            </Links>
        </StyledNavigation>
    </Container>
)

export default Navigation;