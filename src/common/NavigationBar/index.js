import { Container } from "../Container";
import { StyledNavigation, Links, LinkButton } from "./styled";

const Navigation = () => (
    <Container>
        <StyledNavigation>
            <Links>
                <LinkButton to="/teams">Teams</LinkButton>
                <LinkButton to="/">Teams</LinkButton>
                <LinkButton to="/">Teams</LinkButton>
            </Links>
        </StyledNavigation>
    </Container>
)

export default Navigation;