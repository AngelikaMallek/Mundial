import Error from "../../common/Error";
import { Section } from "../../common/Container";
import { Title, Form, FormLabel, FormInput, InputContainer, FeetbackInform, ToggleFormButton, FormSelect, FormOption } from './styled';
import { useTeamForm } from './useTeamForm';
import { useCountryApi } from "../../API/useCountryApi";

const AddedTeams = () => {

    const {
        team,
        setTeam,
        country,
        setCountry,
        error,
        success,
        handleSubmit,
        validationError
    } = useTeamForm();

    const { flags } = useCountryApi();

    if (error) {
        return <Error />
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <Title>Dodaj swoją drużynę</Title>
                <InputContainer>
                    <FormLabel htmlFor="team">Grupa:</FormLabel>
                    <FormInput
                        type="text"
                        id="team"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <FormLabel htmlFor="country">Kraj:</FormLabel>
                    <FormSelect
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                    <FormOption></FormOption>
                        {flags?.sort((a, b) => {
                            return a.translations.pol.common.localeCompare(b.translations.pol.common);
                        }).map((flag) => {
                            return (
                                <FormOption key={flag.id}>{flag.translations.pol.common}</FormOption>
                        );
                        })}
                    </FormSelect>
                </InputContainer>
                <ToggleFormButton type="submit">Dodaj drużynę</ToggleFormButton>
                <FeetbackInform>{success ? "Gratulacje! Drużyna została dodana!" : validationError}</FeetbackInform>
            </Form>
        </Section>
    );
};

export default AddedTeams;
