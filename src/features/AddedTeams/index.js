import Error from "../../common/Error";
import { Section } from "../../common/Container";
import { Title, Form, FormLabel, FormInput, FormButton, InputContainer, FeetbackInform, ToggleFormButton } from './styled';
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

    if (error) {
        return <Error />
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <Title>Dodaj swoją drużynę</Title>
                <InputContainer>
                    <FormLabel htmlFor="team">Nazwa drużyny:</FormLabel>
                    <FormInput
                        type="text"
                        id="team"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormLabel htmlFor="points">Punkty:</FormLabel>
                    <FormInput
                        type="number"
                        id="points"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                        required
                        min={0}
                    />
                </InputContainer>
                <InputContainer>
                    <FormLabel htmlFor="country">Kraj:</FormLabel>
                    <FormInput
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </InputContainer>
                <ToggleFormButton type="submit">Dodaj drużynę</ToggleFormButton>
                <FeetbackInform>{success ? "Gratulacje! Drużyna została dodana!" : validationError}</FeetbackInform>
            </Form>
        </Section>
    );
};

export default AddedTeams;
