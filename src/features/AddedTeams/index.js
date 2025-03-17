import Error from "../../common/Error";
import { Container } from "../../common/Container";
import { Title, Form, FormLabel, FormInput, FormButton, Wrapper, InputContainer, FeetbackInform } from './styled';
import { useTeamForm } from './useTeamForm';

const AddedTeams = () => {

    const {
        team,
        setTeam,
        points,
        setPoints,
        country,
        setCountry,
        error,
        success,
        handleSubmit,
        validationError
    } = useTeamForm();

    if(error) {
        return <Error />
    }

    return (
        <Container>
            <Wrapper>
                <Title>Dodaj swoją drużynę</Title>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <FormLabel htmlFor="team">Nazwa drużyny:</FormLabel>
                        <FormInput
                            type="text"
                            id="team"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <FormLabel htmlFor="points">Punkty:</FormLabel>
                        <FormInput
                            type="number"
                            id="points"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer>
                    <FormLabel htmlFor="country">Kraj:</FormLabel>
                        <FormInput
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </InputContainer>
                    <FormButton type="submit">Dodaj drużynę</FormButton>
                </Form>
                <FeetbackInform>{success ? "Gratulacje! Drużyna została dodana!": validationError}</FeetbackInform>
            </Wrapper>
        </Container>
    );
    };

    export default AddedTeams;
