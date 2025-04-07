import { useState, useEffect } from "react";
import { FixedWrapper, Form, FormInput, ToggleFixedButton, Parahraph, List, ListInternalItem, FormLabel, FormInputDisplay } from "../../../common/FixedComponents";
import { useAddedMatchSubmit } from "./useAddedMatchSubmit";

export const useAddedMatch = () => {
    const [showAddedConfirm, setShowAddedConfirm] = useState(false);
    const [ addedCountry_1, setAddedCountry1 ] = useState(null);
    const [ addedCountry_2, setAddedCountry2 ] = useState(null);
    const [ addedCountryId_1, setAddedCountryId1 ] = useState(null);
    const [ addedCountryId_2, setAddedCountryId2 ] = useState(null);

    const handleAddedClick = (selectedTeamCountry, teamCountry, selectedTeamId, teamCountryId) => {
        setShowAddedConfirm(true);
        setAddedCountry1(selectedTeamCountry);
        setAddedCountry2(teamCountry);
        setAddedCountryId1(selectedTeamId);
        setAddedCountryId2(teamCountryId);
    };

    return {
        handleAddedClick,
        showAddedConfirm,
        setShowAddedConfirm,
        addedCountry_1,
        addedCountry_2,
        addedCountryId_1,
        addedCountryId_2,
    }
}

export const FixedComponentAddedMatch = ({ name1, name2, setShowAddedConfirm, id1, id2 }) => {

    const { 
        addedCountryId1, 
        addedCountryId2,
        setAddedCountryId1, 
        setAddedCountryId2, 
        addedMatchResultsCountry1, 
        addedMatchResultsCountry2, 
        setAddedMatchResultsCountry1, 
        setAddedMatchResultsCountry2, 
        handleMatchResultAddedSubmit,
    } = useAddedMatchSubmit();

    useEffect(() => {
        setAddedCountryId1(id1);
    }, [id1, setAddedCountryId1]);

    useEffect(() => {
        setAddedCountryId2(id2);
    }, [id2, setAddedCountryId2]);

    return (
        <FixedWrapper>
            <Form onSubmit={handleMatchResultAddedSubmit}>
                <Parahraph>Podaj wynik meczu:</Parahraph>
                <FormLabel>{name1}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={addedMatchResultsCountry1}
                    onChange={(e) => setAddedMatchResultsCountry1(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={addedCountryId1}
                    onChange={(e) => {setAddedCountryId1(e.target.value)}}
                />
                <FormLabel>{name2}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={addedMatchResultsCountry2}
                    onChange={(e) => setAddedMatchResultsCountry2(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={addedCountryId2}
                    onChange={(e) => {setAddedCountryId2(e.target.value)}}
                />
                <List>
                <ListInternalItem>
                    <ToggleFixedButton type="submit">Zapisz</ToggleFixedButton>
                    <ToggleFixedButton onClick={() => setShowAddedConfirm(false)}>Anuluj</ToggleFixedButton>
                </ListInternalItem>
            </List> 
            </Form>
        </FixedWrapper>
)}