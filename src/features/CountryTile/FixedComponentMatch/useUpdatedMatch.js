import { useState, useEffect } from "react";
import { FixedWrapper, Form, FormInput, ToggleFixedButton, Parahraph, List, ListInternalItem, FormLabel, FormInputDisplay } from "../../../common/FixedComponents";
import { useUpdatedMatchSubmit } from "./useUpdatedMatchSubmit";

export const useUpdatedMatch = () => {
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

    const { 
        countryId1, 
        countryId2,
        setCountryId1, 
        setCountryId2, 
        matchResultsCountry1, 
        matchResultsCountry2, 
        setMatchResultsCountry1, 
        setMatchResultsCountry2, 
        handleMatchResultUpdatedSubmit,
    } = useUpdatedMatchSubmit();

    useEffect(() => {
        setCountryId1(id1);
    }, [id1, setCountryId1]);

    useEffect(() => {
        setCountryId2(id2);
    }, [id2, setCountryId2]);

    return (
        <FixedWrapper>
            <Form onSubmit={handleMatchResultUpdatedSubmit}>
                <Parahraph>Podaj wynik meczu:</Parahraph>
                <FormLabel>{name1}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={matchResultsCountry1}
                    onChange={(e) => setMatchResultsCountry1(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={countryId1}
                    onChange={(e) => {setCountryId1(e.target.value)}}
                />
                <FormLabel>{name2}:<FormInput 
                    type="number"
                    required
                    min={0}
                    value={matchResultsCountry2}
                    onChange={(e) => setMatchResultsCountry2(e.target.value)}
                /></FormLabel>
                <FormInputDisplay
                    value={countryId2}
                    onChange={(e) => {setCountryId2(e.target.value)}}
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