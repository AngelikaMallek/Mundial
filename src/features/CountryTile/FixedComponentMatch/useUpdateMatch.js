import { useState } from "react";
import { FixedWrapper, Form, FormInput, ToggleFixedButton, Parahraph, List, ListInternalItem, FormLabel, FormInputDisplay } from "../../../common/FixedComponents";

export const useUpdateMatch = () => {
    const [showUpdatedConfirm, setShowUpdatedConfirm] = useState(false);
    const [ country_1, setCountry1 ] = useState(null);
    const [ country_2, setCountry2 ] = useState(null);
    const [ countryId_1, setCountryId1 ] = useState(null);
    const [ countryId_2, setCountryId2 ] = useState(null);

    const handleUpdatedClick = (selectedTeamCountry, teamCountry, selectedTeamId, teamCountryId) => {
        setShowUpdatedConfirm(true);
        setCountry1(selectedTeamCountry);
        setCountry2(teamCountry);
        setCountryId1(selectedTeamId);
        setCountryId2(teamCountryId);
    };

    return {
        handleUpdatedClick,
        showUpdatedConfirm,
        setShowUpdatedConfirm,
        country_1,
        country_2,
        countryId_1,
        countryId_2,
    }
}

export const FixedComponentUpdatedMatch = ({ name1, name2, setShowUpdatedConfirm, id1, id2 }) => {
    return (
        <FixedWrapper>
            <Form>
                <Parahraph>Podaj wynik meczu:</Parahraph>
                <FormLabel>{name1}:<FormInput 
                    type="number"
                    required
                    min={0}
                /></FormLabel>
                <FormInputDisplay
                    value={id1}
                />
                <FormLabel>{name2}:<FormInput 
                    type="number"
                    required
                    min={0}
                /></FormLabel>
                <FormInputDisplay
                    value={id2}
                />
                <List>
                <ListInternalItem>
                    <ToggleFixedButton type="submit">Zapisz</ToggleFixedButton>
                    <ToggleFixedButton onClick={() => setShowUpdatedConfirm(false)}>Anuluj</ToggleFixedButton>
                </ListInternalItem>
            </List> 
            </Form>
        </FixedWrapper>
)}