import { useState, useEffect } from "react";
import { FixedWrapper, Form, FormInput, ToggleFixedButton, Parahraph, List, ListInternalItem, FormLabel, FormInputDisplay } from "../../../common/FixedComponents";
import { useUpdatedMatchSubmit } from "./useUpdatedMatchSubmit";

export const useUpdatedMatch = () => {
    const [showUpdatedConfirm, setShowUpdatedConfirm] = useState(false);
    const [ updatedCountry_1, setUpdatedCountry1 ] = useState(null);
    const [ updatedCountry_2, setUpdatedCountry2 ] = useState(null);
    const [ updatedCountryId_1, setUpdatedCountryId1 ] = useState(null);
    const [ updatedCountryId_2, setUpdatedCountryId2 ] = useState(null);

    const handleUpdatedClick = (selectedTeamCountry, teamCountry, selectedTeamId, teamCountryId) => {
        setShowUpdatedConfirm(true);
        setUpdatedCountry1(selectedTeamCountry);
        setUpdatedCountry2(teamCountry);
        setUpdatedCountryId1(selectedTeamId);
        setUpdatedCountryId2(teamCountryId);
    };

    return {
        handleUpdatedClick,
        showUpdatedConfirm,
        setShowUpdatedConfirm,
        updatedCountry_1,
        updatedCountry_2,
        updatedCountryId_1,
        updatedCountryId_2,
    }
}

export const FixedComponentUpdatedMatch = ({ name1, name2, setShowUpdatedConfirm, id1, id2 }) => {

    const { 
        updatedCountryId1, 
        updatedCountryId2,
        setUpdatedCountryId1, 
        setUpdatedCountryId2, 
        matchUpdatedResultsCountry1, 
        matchUpdatedResultsCountry2, 
        setUpdatedMatchResultsCountry1, 
        setUpdatedMatchResultsCountry2, 
        handleMatchResultUpdatedSubmit,
    } = useUpdatedMatchSubmit();

    useEffect(() => {
        setUpdatedCountryId1(id1);
    }, [id1, setUpdatedCountryId1]);

    useEffect(() => {
        setUpdatedCountryId2(id2);
    }, [id2, setUpdatedCountryId2]);

    return (
        <FixedWrapper>
            <Form onSubmit={handleMatchResultUpdatedSubmit}>
                <Parahraph>Podaj wynik meczu:</Parahraph>
                <FormLabel>{name1}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={matchUpdatedResultsCountry1}
                    onChange={(e) => setUpdatedMatchResultsCountry1(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={updatedCountryId1}
                    onChange={(e) => {setUpdatedCountryId1(e.target.value)}}
                />
                <FormLabel>{name2}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={matchUpdatedResultsCountry2}
                    onChange={(e) => setUpdatedMatchResultsCountry2(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={updatedCountryId2}
                    onChange={(e) => {setUpdatedCountryId2(e.target.value)}}
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