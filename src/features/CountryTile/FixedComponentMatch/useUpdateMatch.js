import { useState } from "react";
import { DeletedFixed, Form, FormInput, ToggleFixedButton, Parahraph, List, ListInternalItem, FormLabel } from "../../../common/FixedComponents";

export const useUpdateMatch = () => {
    const [showUpdatedConfirm, setShowUpdatedConfirm] = useState(false);
    const [ country_1, setCountry1 ] = useState(null);
    const [ country_2, setCountry2 ] = useState(null);

    const handleUpdatedClick = (selectedTeamCountry, teamCountry) => {
        setShowUpdatedConfirm(true);
        setCountry1(selectedTeamCountry);
        setCountry2(teamCountry);
    };

    return {
        handleUpdatedClick,
        showUpdatedConfirm,
        setShowUpdatedConfirm,
        country_1,
        country_2,
    }
}

export const FixedComponentUpdatedMatch = ({ name1, name2, setShowUpdatedConfirm }) => {
    return (
        <DeletedFixed>
            <Form>
                <Parahraph>Podaj wynik meczu:</Parahraph>
                <FormLabel>{name1}:<FormInput 
                    type="number"
                    required
                    min={0}
                /></FormLabel>
                <FormLabel>{name2}:<FormInput 
                    type="number"
                    required
                    min={0}
                /></FormLabel>
                <List>
                <ListInternalItem>
                    <ToggleFixedButton type="submit">Zapisz</ToggleFixedButton>
                    <ToggleFixedButton onClick={() => setShowUpdatedConfirm(false)}>Anuluj</ToggleFixedButton>
                </ListInternalItem>
            </List> 
            </Form>
        </DeletedFixed>
)}